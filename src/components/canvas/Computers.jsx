import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// If the WebGL context crashes or the model fails to load (common on
// memory-constrained mobile devices), this boundary renders nothing instead of
// leaving a blank white canvas painted over the hero text.
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("ComputersCanvas failed to render:", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// Some mobile browsers/devices can't create a WebGL context at all. Detect that
// up-front so we can skip the canvas rather than show a broken/blank element.
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.7] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Controls whether we attempt to render the 3D canvas at all. Set to false
  // when WebGL is unavailable or the context is lost, so the hero falls back to
  // its text + background image instead of a white screen.
  const [render3D, setRender3D] = useState(true);

  useEffect(() => {
    // Bail out early on devices that can't do WebGL.
    if (!isWebGLAvailable()) {
      setRender3D(false);
      return;
    }

    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Nothing to render — hero keeps its text and background, no blank canvas.
  if (!render3D) return null;

  return (
    // On mobile the canvas is capped below full height, leaving a touch-free
    // strip at the bottom of the hero to scroll from. (The canvas captures
    // touch gestures for the rotate control, so a full-height canvas makes the
    // page hard to scroll.)
    <div className='w-full' style={{ height: isMobile ? "78vh" : "100%" }}>
      <CanvasErrorBoundary>
        <Canvas
          frameloop='demand'
          // Shadows are expensive on mobile GPUs; skip them there.
          shadows={!isMobile}
          // Cap the pixel ratio at 1 on mobile. High-DPI phones would otherwise
          // render a 2x (4x the pixels) framebuffer and run out of GPU memory,
          // crashing the WebGL context (the white screen).
          dpr={isMobile ? 1 : [1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{
            // `preserveDrawingBuffer` roughly doubles framebuffer memory and is
            // not needed here, so leave it off to keep mobile memory low.
            powerPreference: "high-performance",
            antialias: !isMobile,
            alpha: true,
          }}
          onCreated={({ gl }) => {
            // If the GPU drops the context (usually out-of-memory on mobile),
            // unmount the canvas gracefully instead of leaving a white block.
            gl.domElement.addEventListener(
              "webglcontextlost",
              (event) => {
                event.preventDefault();
                console.warn("WebGL context lost — hiding 3D model.");
                setRender3D(false);
              },
              false
            );
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>

          <Preload all />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default ComputersCanvas;
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// WebGL support is checked once and cached, so we don't spin up a throwaway
// context for every ball on the page.
let webglSupport = null;
const isWebGLAvailable = () => {
  if (webglSupport !== null) return webglSupport;
  try {
    const canvas = document.createElement("canvas");
    webglSupport = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    webglSupport = false;
  }
  return webglSupport;
};

// Plain 2D badge shown instead of the 3D ball on mobile or when WebGL fails.
// Mirrors the ball's cream color so it fits the design.
const IconBadge = ({ icon }) => (
  <div className='w-full h-full flex justify-center items-center'>
    <div
      className='w-4/5 h-4/5 rounded-full flex justify-center items-center'
      style={{ backgroundColor: "#fff8eb" }}
    >
      <img
        src={icon}
        alt='technology'
        className='w-3/5 h-3/5 object-contain'
      />
    </div>
  </div>
);

// Keeps a single broken ball (lost context / failed texture) from taking down
// the whole Tech section — it falls back to the 2D badge instead.
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("BallCanvas failed to render:", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // Decide once, at mount, whether this ball renders in 3D. Each Canvas is its
  // own WebGL context and phones cap how many can exist at once (~8-16), so the
  // 13 tech balls would exhaust the limit and render as broken white squares.
  // On small screens (and where WebGL is unavailable) we use a 2D badge, which
  // has no such limit. Desktop keeps the 3D balls.
  const [use3D, setUse3D] = useState(() => {
    if (typeof window === "undefined") return false;
    const isMobile = window.matchMedia("(max-width: 500px)").matches;
    return !isMobile && isWebGLAvailable();
  });

  if (!use3D) return <IconBadge icon={icon} />;

  return (
    <CanvasErrorBoundary fallback={<IconBadge icon={icon} />}>
      <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ powerPreference: "high-performance", alpha: true }}
        onCreated={({ gl }) => {
          // If the browser drops this context, swap to the 2D badge instead of
          // leaving a broken white square.
          gl.domElement.addEventListener(
            "webglcontextlost",
            (event) => {
              event.preventDefault();
              setUse3D(false);
            },
            false
          );
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default BallCanvas;
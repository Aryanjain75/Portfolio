/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from "three";

function createThreeJsScene(width: number, height: number) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.5, 10);
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(width, height);
  renderer.setClearColor("white", 1); 
  renderer.domElement.style.borderRadius = '10px';

  const geometry = new THREE.PlaneGeometry(10, 3);
  const material = new THREE.LineBasicMaterial({ color: "#Bc13fe" });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  let isRotating = false;
  let scale = 1;

  function animate() {
    requestAnimationFrame(animate);
    if (isRotating) {
      plane.rotation.z -= 0.05;
      if (scale < 2) {
        scale += 0.05;
        plane.scale.set(scale, scale, scale);
      }
    }
    renderer.render(scene, camera);
  }

  animate();

  return { 
    domElement: renderer.domElement, 
    startRotation: () => { isRotating = true; },
    resetScene: () => { 
      isRotating = false; 
      scale = 1;
      plane.rotation.set(0, 0, 0);
      plane.scale.set(1, 1, 1);
    }
  };
}

function NavbarButton({buttons,className,layeroneclass,layertwoclass,layerthreeclass}: {buttons: {[key: string]: string},className:string,layeroneclass:string,layertwoclass:string,layerthreeclass:string}) {
  const [dimensions] = useState({ width: 95, height: 50 });
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sceneRefs = useRef<{ domElement: HTMLCanvasElement, startRotation: () => void, resetScene: () => void }[]>([]);

  useEffect(() => {
    containerRefs.current.forEach((ref, index) => {
      if (ref) {
        const scene = createThreeJsScene(dimensions.width, dimensions.height);
        ref.appendChild(scene.domElement);
        sceneRefs.current[index] = scene;
      }
    });
    initialRender();
    return () => {
      containerRefs.current.forEach((ref) => {
        if (ref && ref.firstChild) {
          ref.removeChild(ref.firstChild);
        }
      });
    };
  }, [dimensions]);

  function initialRender() {
    sceneRefs.current.forEach((scene, i) => {
      if (i === 0) {
        scene.startRotation();
      } else {
        scene.resetScene();
      }
    });
  }

  const handleClick = (index: number) => {
    sceneRefs.current.forEach((scene, i) => {
      if (i === index) {
        scene.startRotation();
      } else {
        scene.resetScene();
      }
    });
  };

  return (
    <>
      <div className={className}>
      {Object.entries(buttons).map(([text, path], index) => (
        <Link
          key={index}
          to={path}
          className='relative w-full h-full flex'
          onClick={() => handleClick(index)}
        >
          <div
            ref={(el) => (containerRefs.current[index] = el)}
            className='rounded-lg overflow-hidden shadow-md'
          ></div>
          <div className={layeroneclass}></div>
          <div className={layertwoclass}></div>
          <div className={layerthreeclass}>
            {text}
          </div>
        </Link>
      ))}
      </div>
    </>
  );
}

export default NavbarButton;

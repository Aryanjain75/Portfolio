import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Function to create and animate a 3D model
function createThreeDModel(containerRef: React.RefObject<HTMLDivElement>) {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a camera with perspective projection
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a box geometry
    const box = new THREE.BoxGeometry(3, 3, 3,9,9,9);
    const diamond = new THREE.BoxGeometry(0.5, 0.5, 0.5,9,9,9);
    const diamondMaterial = new THREE.MeshStandardMaterial({color:"#00ff00",roughness:0.1,metalness:0.9,wireframe:true,side:THREE.DoubleSide});

    const diamondMesh = new THREE.Mesh(diamond, diamondMaterial);
    
    scene.add(diamondMesh);
    const sphere = new THREE.BoxGeometry(1, 1, 1,1,9,9);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 ,roughness:0.1,metalness:0.9,wireframe:true,side:THREE.DoubleSide});
    const sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
    scene.add(sphereMesh);
    // Create a green material for the box
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 ,wireframe:true,roughness:0.1,metalness:0.9,side:THREE.DoubleSide});

    // Create a mesh using the box geometry and material
    const mesh = new THREE.Mesh(box, boxMaterial);
    scene.add(mesh);

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the renderer to the container
    containerRef.current?.appendChild(renderer.domElement);
    const controls = new OrbitControls( camera, renderer.domElement );
    // Animation function
    controls.enableDamping=true;

    // Add dim studio light
    const ambientLight = new THREE.AmbientLight(0x404040, 5); // soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add point light for torch effect (dimmed)
    const torchLight = new THREE.PointLight(0xffffff, 1, 10);
    scene.add(torchLight);

    // Function to update torch light position
    function updateTorchPosition(event: MouseEvent) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
        torchLight.position.copy(pos);
    }

    // Add mouse move event listener
    window.addEventListener('mousemove', updateTorchPosition);

    function animate() {
        requestAnimationFrame(animate);

        // Rotate the mesh
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;

        sphereMesh.rotation.x += 0.02;
        sphereMesh.rotation.y += 0.02;
        sphereMesh.rotation.z += 0.02;

        diamondMesh.rotation.z += 0.06;
        controls.update();
        // Render the scene
        renderer.render(scene, camera);
    }

    // Start the animation
    animate();

    // Clean up function
    return () => {
        containerRef.current?.removeChild(renderer.domElement);
        renderer.dispose();
        window.removeEventListener('mousemove', updateTorchPosition);
    };
}

// Component that renders the 3D model
function Component2() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = createThreeDModel(containerRef);
        return cleanup;
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}

export default Component2;
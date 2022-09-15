import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.experience");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.SphereGeometry(0.5, 64, 64);

// Materials
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.3;
material.color = new THREE.Color(0x3b3b3b);

// Mesh
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lights
const pointLight1 = new THREE.PointLight(0xffffff, 0.2);
pointLight1.position.x = 5;
pointLight1.position.y = 3;
pointLight1.position.z = 1;

const pointLight2 = new THREE.PointLight(0xcc1616, 0.7);
pointLight2.position.x = -6;
pointLight2.position.y = 4;
pointLight2.position.z = 1;

const pointLight3 = new THREE.PointLight(0x0edfe3, 0.6);
pointLight3.position.x = 6;
pointLight3.position.y = -6;
pointLight3.position.z = 4;

scene.add(pointLight1);
scene.add(pointLight2);
scene.add(pointLight3);

// datgui folders
function openDatGUI() {
  const lightFolder1 = gui.addFolder("POINT LIGHT 1 | WHITE");
  const lightFolder2 = gui.addFolder("POINT LIGHT 2 | RED");
  const lightFolder3 = gui.addFolder("POINT LIGHT 3 | CYAN");

  lightFolder1.add(pointLight1.position, "x").min(-6).max(6).step(0.01);
  lightFolder1.add(pointLight1.position, "y").min(-6).max(6).step(0.01);
  lightFolder1.add(pointLight1.position, "z").min(-6).max(6).step(0.01);
  lightFolder1.add(pointLight1, "intensity").min(-6).max(6).step(0.01);
  lightFolder2.add(pointLight2.position, "x").min(-6).max(6).step(0.01);
  lightFolder2.add(pointLight2.position, "y").min(-6).max(6).step(0.01);
  lightFolder2.add(pointLight2.position, "z").min(-6).max(6).step(0.01);
  lightFolder2.add(pointLight2, "intensity").min(-6).max(6).step(0.01);
  lightFolder3.add(pointLight3.position, "x").min(-6).max(6).step(0.01);
  lightFolder3.add(pointLight3.position, "y").min(-6).max(6).step(0.01);
  lightFolder3.add(pointLight3.position, "z").min(-6).max(6).step(0.01);
  lightFolder3.add(pointLight3, "intensity").min(-6).max(6).step(0.01);
}

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("scroll", onScroll);

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function onMouseMove(event) {
  mouseX = event.clientX - windowX;
  mouseY = event.clientY - windowY;
}

function onScroll(event) {
  sphere.position.y = window.scrollY * 0.001;
}

const clock = new THREE.Clock();

const tick = () => {
  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;

  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.5 * elapsedTime;
  sphere.rotation.z = -0.05 * elapsedTime;

  sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
  sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);
  sphere.position.z += -0.05 * (targetY - sphere.rotation.x);

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

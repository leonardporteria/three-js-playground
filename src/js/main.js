import * as THREE from "three";
import gsap from "gsap";
import * as dat from "dat.gui";

import Three from "../../Three/Three.js";

// GLOBAL VARIABLES
const three = new Three(document.querySelector("canvas.model"));
const tl = gsap.timeline();
const clock = new THREE.Clock();
let activeMesh = 0;

// ==========================================================
// BUTTON EVENT LISTENERS
// ==========================================================
const cubeBtn = document.querySelector(".cube");
const sphereBtn = document.querySelector(".sphere");
const icosphereBtn = document.querySelector(".icosphere");
const coneBtn = document.querySelector(".cone");
const torusBtn = document.querySelector(".torus");
const monkeyBtn = document.querySelector(".monkey");

// CUBE EVENT LISTENER
cubeBtn.addEventListener("click", () => {
  removeActiveObject();
  const cube = three.world.model.actualModel.children[0];
  popIn(cube);

  activeMesh = 0;
});

// ICOSPHERE EVENT LISTENER
icosphereBtn.addEventListener("click", () => {
  removeActiveObject();
  const cube = three.world.model.actualModel.children[1];
  popIn(cube);

  activeMesh = 1;
});

// SPHERE EVENT LISTENER
sphereBtn.addEventListener("click", () => {
  removeActiveObject();
  const cube = three.world.model.actualModel.children[2];
  popIn(cube);

  activeMesh = 2;
});

// CONE EVENT LISTENER
coneBtn.addEventListener("click", () => {
  removeActiveObject();
  const cube = three.world.model.actualModel.children[3];
  popIn(cube);

  activeMesh = 3;
});

// TORUS EVENT LISTENER
torusBtn.addEventListener("click", () => {
  removeActiveObject();
  const cube = three.world.model.actualModel.children[4];
  popIn(cube);

  activeMesh = 4;
});

// MONKEY EVENT LISTENER
monkeyBtn.addEventListener("click", () => {
  removeActiveObject();
  const cube = three.world.model.actualModel.children[5];
  popIn(cube);

  activeMesh = 5;
});

// ==========================================================
// HELPER FUNCITONS
// ==========================================================
const removeActiveObject = () => {
  const activeObject = three.world.model.actualModel.children[activeMesh];
  popOut(activeObject);
};

const popIn = (mesh) => {
  tl.to(mesh.scale, { x: 0.35, y: 0.35, z: 0.35, duration: 0.3 });
  tl.to(mesh.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 0.15 });
};
const popOut = (mesh) => {
  tl.to(mesh.scale, { x: 0.35, y: 0.35, z: 0.35, duration: 0.15 });
  tl.to(mesh.scale, { x: 0, y: 0, z: 0, duration: 0.3 });
};

// ==========================================================
// ANIMATION
// ==========================================================

// MOUSE EVENTS
document.addEventListener("mousemove", onMouseMove);

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

export const tick = () => {
  const model = three.world.model.actualModel;

  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;

  const elapsedTime = clock.getElapsedTime();

  // update objects [ontime]
  // torus
  model.children[7].rotation.y = 0.5 * elapsedTime;

  // sphere-1
  model.children[10].rotation.y = 0.5 * elapsedTime;
  model.children[10].rotation.z = 0.5 * elapsedTime;
  // sphere-2
  model.children[11].rotation.y = -0.5 * elapsedTime;
  model.children[11].rotation.z = 0.5 * elapsedTime;
  // sphere-3
  model.children[12].rotation.y = 0.5 * elapsedTime;
  model.children[12].rotation.z = -0.5 * elapsedTime;
  // sphere-4
  model.children[13].rotation.y = -0.5 * elapsedTime;
  model.children[13].rotation.z = 0.5 * elapsedTime;

  // update objects [onmousemove]
  // platform-1
  model.children[6].position.x = 0.5 * targetX;
  model.children[6].position.y = -0.5 * targetY;
  model.children[6].position.z = -0.05 * targetX;
  // platform-2
  model.children[8].position.x = 0.35 * targetX;
  model.children[8].position.y = -0.35 * targetY;
  model.children[8].position.z = -0.035 * targetX;
  // platform-3
  model.children[9].position.x = 0.15 * targetX;
  model.children[9].position.y = -0.15 * targetY;
  model.children[9].position.z = -0.015 * targetX;

  // active mesh
  model.children[activeMesh].rotation.x = 0.08 * elapsedTime;
  model.children[activeMesh].rotation.y = -0.08 * elapsedTime;
  model.children[activeMesh].rotation.z = -0.008 * elapsedTime;

  // mouse rotation
  model.rotation.x += 0.025 * (targetY - model.rotation.x);
  model.rotation.y += 0.025 * (targetX - model.rotation.y);
  model.position.z += -0.005 * (targetY - model.rotation.x);

  // update renderer every tick
  three.renderer.renderer.render(three.scene, three.camera.perspectiveCamera);

  // call tick again on the next frame
  window.requestAnimationFrame(tick);
};

// INDEX NOTES
// 00 - CUBE
// 01 - ICOSPHERE
// 02 - CIRCLE(SPHERE)
// 03 - CONE
// 04 - TORUS
// 05 - SUZANNE(MONKEY)
// 06 - PLATFORM-1
// 07 - TORUS001
// 08 - PLATFORM-2
// 09 - PLATFORM-3
// 10 - SPHERE-1
// 11 - SPHERE-2
// 12 - SPHERE-3
// 13 - SPHERE-4

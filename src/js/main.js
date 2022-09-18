import * as THREE from "three";
import gsap from "gsap";
import * as dat from "dat.gui";

import Three from "../../Three/Three.js";

// GLOBAL VARIABLES
const three = new Three(document.querySelector("canvas.model"));
const tl = gsap.timeline();
const clock = new THREE.Clock();

// BUTTON ELEMENTS
// 0-cube 1-icosphere 2-sphere 3-cone 4-torus 5-monkey
let activeMesh = 0;
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
  tl.to(mesh.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3 });
  tl.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.7 });
};
const popOut = (mesh) => {
  tl.to(mesh.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3 });
  tl.to(mesh.scale, { x: 0, y: 0, z: 0, duration: 0.7 });
};

// ANIMATION
export const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // animate each child of the model
  // three.world.model.actualModel.children.forEach((child) => {
  //   console.log(child);
  // });

  // update renderer every tick
  three.renderer.renderer.render(three.scene, three.camera.perspectiveCamera);

  // gsap dedicated animation
  // tl.to(three.camera.perspectiveCamera.position, { z: 10, duration: 10 });

  window.requestAnimationFrame(tick);
};

// DEBUG BUTTON EVENT LISTENER
const button = document.querySelector("#clickme");
button.addEventListener("click", () => {
  three.world.model.actualModel.children.forEach((child) => {
    //console.log(child);
    if (child.name === "Cube") {
      console.log("found cube");
      child.scale.x = 0;
      child.scale.y = 0;
      child.scale.z = 0;
    }

    if (child.name === "Circle") {
      console.log("found sphere");
      child.scale.x = 0;
      child.scale.y = 0;
      child.scale.z = 0;
    }

    if (child.name === "Icosphere") {
      console.log("found icosphere");
      child.scale.x = 0;
      child.scale.y = 0;
      child.scale.z = 0;
    }

    if (child.name === "Cone") {
      console.log("found cone");
      child.scale.x = 0;
      child.scale.y = 0;
      child.scale.z = 0;
    }

    if (child.name === "Torus") {
      console.log("found torus");
      child.scale.x = 0;
      child.scale.y = 0;
      child.scale.z = 0;
    }

    if (child.name === "Suzanne") {
      console.log("found monkeh");
      child.scale.x = 0;
      child.scale.y = 0;
      child.scale.z = 0;
    }
  });
});

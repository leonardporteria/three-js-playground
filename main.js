import * as THREE from "three";
import gsap from "gsap";

import Experience from "./Three/Experience.js";

const exp = new Experience(document.querySelector("canvas.experience"));

console.log(gsap);
console.log(exp);

const tl = gsap.timeline();
const clock = new THREE.Clock();

export const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  exp.world.room.actualRoom.children.forEach((child) => {
    if (child.name === "Gear") {
      //console.log(elapsedTime);
      child.children[0].position.x = elapsedTime * 0.5;
    }
  });

  exp.renderer.renderer.render(exp.scene, exp.camera.perspectiveCamera);

  tl.to(exp.camera.perspectiveCamera.position, { z: 10, duration: 10 });

  window.requestAnimationFrame(tick);
};

import * as THREE from "three";
import gsap from "gsap";

import Experience from "./Three/Experience.js";

const exp = new Experience(document.querySelector("canvas.experience"));

console.log(gsap);
console.log(exp);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  exp.renderer.renderer.render(exp.scene, exp.camera.perspectiveCamera);

  window.requestAnimationFrame(tick);
};

tick();

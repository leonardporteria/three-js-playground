import * as THREE from "three";
import gsap from "gsap";

import Experience from "../Experience.js";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.setModel();
    this.setAnimation();
  }

  setModel() {
    console.log("model added");
    this.scene.add(this.actualRoom);

    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
    });
  }

  setAnimation() {
    this.mixer = new THREE.AnimationMixer(this.actualRoom);
    this.animate = this.mixer.clipAction(this.room.animations[3]);
    this.animate.play();
    console.log(this.room.animations);
    console.log(this.room);
  }

  resize() {}

  update() {
    this.mixer.update(this.time.delta * 0.001);
  }
}

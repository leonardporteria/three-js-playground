import * as THREE from "three";
import gsap from "gsap";

import Three from "../Three.js";

export default class Model {
  constructor() {
    this.three = new Three();
    this.scene = this.three.scene;
    this.resources = this.three.resources;
    this.time = this.three.time;
    this.tl = gsap.timeline();
    this.model = this.resources.items.model;
    this.actualModel = this.model.scene;

    this.setModel();
    this.setFloor();
    this.setBackground("left");
    this.setBackground("right");

    // disable all object except cube
    for (let i = 0; i < 6; i++) {
      if (!(i === 0)) {
        this.actualModel.children[i].scale.x = 0;
        this.actualModel.children[i].scale.y = 0;
        this.actualModel.children[i].scale.z = 0;
      } else {
        this.tl;
        this.actualModel.children[i].scale.x = 0.3;
        this.actualModel.children[i].scale.y = 0.3;
        this.actualModel.children[i].scale.z = 0.3;
      }
    }
    // pop intro
    for (let i = 6; i < 14; i++) {
      this.tl
        .from(this.actualModel.children[i].scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.15,
        })
        .to(this.actualModel.children[i].scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.15,
          delay: 0.1,
        });
    }
  }

  setModel() {
    console.log("MODEL ADDED");
    this.scene.add(this.actualModel);

    this.actualModel.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
    });
  }

  setBackground(orientation) {
    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshBasicMaterial({
      color: "#0a1024",
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);

    if (orientation === "left") {
      this.plane.rotation.y = Math.PI;
      this.plane.position.z = -10;
      this.plane.castShadow = true;
      this.plane.receiveShadow = true;
    }

    if (orientation === "right") {
      this.plane.rotation.y = Math.PI / 2;
      this.plane.position.x = 10;
      this.plane.castShadow = true;
      this.plane.receiveShadow = true;
    }

    this.scene.add(this.plane);

    console.log("BACKGROUND ADDED");
  }

  setFloor() {
    console.log("FLOOR ADDED");

    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshBasicMaterial({
      color: "#0a1024",
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.position.y = -1;
    this.plane.castShadow = true;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);
  }

  setAnimation() {
    this.mixer = new THREE.AnimationMixer(this.actualModel);
    this.animate = this.mixer.clipAction(this.model.animations[3]);
    this.animate.play();
  }

  resize() {}

  update() {}
}

import * as THREE from "three";

import Three from "../Three.js";

export default class Model {
  constructor() {
    this.three = new Three();
    this.scene = this.three.scene;
    this.resources = this.three.resources;
    this.time = this.three.time;
    this.model = this.resources.items.model;
    this.actualModel = this.model.scene;

    this.setModel();
    this.setFloor();
    this.setBackground("left");
    this.setBackground("right");
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
      color: "#0a2142",
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
      color: "#0a2142",
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.position.y = -0.5;
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

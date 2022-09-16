import * as THREE from "three";

import Experience from "../Experience.js";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setSunlight();
    this.setAmbientLight();
    // this.setPointLight(-10, 0, 5, "#ff0000", 3);
    // this.setPointLight(0, 7, 0, "#00ff00", 3);
    // this.setPointLight(10, 15, -10, "#0000ff", 3);
  }

  setSunlight() {
    this.sunlight = new THREE.DirectionalLight("#fccc90", 1);
    this.sunlight.castShadow = true;
    this.sunlight.shadow.camera.far = 100;
    this.sunlight.shadow.mapSize.set(2048, 2048);
    this.sunlight.shadow.blurSamples = 0;
    this.sunlight.shadow.normalBias = 0.05;
    this.sunlight.position.set(3, 7, 5);

    this.scene.add(this.sunlight);
  }

  setAmbientLight() {
    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
  }

  setPointLight(x, y, z, color, intensity) {
    this.pointLight = new THREE.PointLight(color, intensity, 100);
    this.pointLight.castShadow = true;
    this.sunlight.shadow.mapSize.set(1024, 1024);
    this.pointLight.shadow.blurSamples = 0;
    this.pointLight.shadow.normalBias = 0.05;
    this.pointLight.position.set(x, y, z);

    this.scene.add(this.pointLight);

    this.pointLightHelper = new THREE.PointLightHelper(this.pointLight, 1);
    this.scene.add(this.pointLightHelper);
  }

  resize() {}

  update() {}
}

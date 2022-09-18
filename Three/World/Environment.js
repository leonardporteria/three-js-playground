import * as THREE from "three";

import Three from "../Three.js";

export default class Environment {
  constructor() {
    this.three = new Three();
    this.scene = this.three.scene;
    this.resources = this.three.resources;

    this.setSunlight();
    this.setAmbientLight();
  }

  setSunlight() {
    this.sunlight = new THREE.DirectionalLight("#fccc90", 1.25);
    this.sunlight.castShadow = true;
    this.sunlight.shadow.camera.far = 100;
    this.sunlight.shadow.mapSize.set(2048, 2048);
    this.sunlight.shadow.blurSamples = 10;
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

    // Point Light Helper
    this.pointLightHelper = new THREE.PointLightHelper(this.pointLight, 1);

    this.scene.add(this.pointLightHelper);
  }

  resize() {}

  update() {}
}

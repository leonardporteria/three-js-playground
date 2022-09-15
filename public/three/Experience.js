import * as THREE from "three";

import Sizes from "./utils/Sizes.js";
import Time from "./utils/Time.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

import World from "./world/World.js";

export default class Experience {
  static instance;

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.time.on("Update", () => {
      this.update();
    });

    this.time.on("Resize", () => {
      this.resize();
    });
  }

  update() {
    this.camera.update();
    this.renderer.update();
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
}

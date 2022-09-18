import Three from "../Three.js";

import Model from "./Model.js";
import Environment from "./Environment.js";

import { tick } from "../../src/js/main.js";

export default class World {
  constructor() {
    this.three = new Three();
    this.sizes = this.three.sizes;
    this.scene = this.three.scene;
    this.canvas = this.three.canvas;
    this.camera = this.three.camera;
    this.resources = this.three.resources;

    this.resources.on("ready", () => {
      console.log("ALL ASSETS LOADED");

      this.environment = new Environment();
      this.model = new Model();

      tick();
    });
  }

  resize() {}

  update() {
    if (this.model) {
      this.model.update();
    }
  }
}

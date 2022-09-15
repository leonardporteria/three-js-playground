import * as THREE from "three";

import Experience from "../Experience.js";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.setModel();
  }

  setModel() {
    console.log("model added");
    this.scene.add(this.actualRoom);
  }

  resize() {}

  update() {}
}

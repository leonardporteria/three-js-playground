import * as THREE from "three";

import Three from "./Three";

export default class Camera {
  constructor() {
    this.three = new Three();
    this.sizes = this.three.sizes;
    this.scene = this.three.scene;
    this.canvas = this.three.canvas;

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      45,
      this.sizes.aspect,
      0.1,
      50
    );

    this.perspectiveCamera.position.x = 0;
    this.perspectiveCamera.position.y = 0.5;
    this.perspectiveCamera.position.z = 5;

    this.scene.add(this.perspectiveCamera);
  }

  createOrthographicCamera() {
    this.fustrum = 5;
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.fustrum) / 2,
      (this.sizes.aspect * this.sizes.fustrum) / 2,
      this.sizes.fustrum / 2,
      -this.sizes.fustrum / 2,
      -100,
      100
    );

    this.scene.add(this.orthographicCamera);
  }

  resize() {
    // Updating Perspective Camera on Resize.
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    // Updating Orthographic Camera on Resize.
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.fustrum) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.fustrum) / 2;
    this.orthographicCamera.top = this.sizes.fustrum / 2;
    this.orthographicCamera.bottom = -this.sizes.fustrum / 2;
  }

  update() {}
}

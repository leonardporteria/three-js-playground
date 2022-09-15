import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

import Experience from "./Three/Experience.js";

const exp = new Experience(document.querySelector("canvas.experience"));

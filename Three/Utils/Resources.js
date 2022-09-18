import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Three from "../Three";

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();
    this.three = new Three();
    this.renderer = this.three.renderer;

    this.assets = assets;
    this.items = {};
    this.queue = Object.keys(this.assets).length;
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfloader = new GLTFLoader();
    this.loaders.dracoloader = new DRACOLoader();
    this.loaders.dracoloader.setDecoderPath("/draco/");
    this.loaders.gltfloader.setDRACOLoader(this.loaders.dracoloader);
  }

  startLoading() {
    for (const asset of this.assets) {
      if (asset.type === "glbModel") {
        this.loaders.gltfloader.load(asset.path, (file) => {
          this.singleAssetLoaded(asset, file);
        });
      }
    }
  }

  singleAssetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded++;

    console.log("ASSETS LOADING");

    if (this.loaded === this.queue) {
      this.emit("ready");
    }
  }
}

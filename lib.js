class FogGUIHelper {
    constructor(fog, backgroundColor) {
      this.fog = fog;
      this.backgroundColor = backgroundColor;
    }
    get near() {
      return this.fog.near;
    }
    set near(v) {
      this.fog.near = v;
      this.fog.far = Math.max(this.fog.far, v);
    }
    get far() {
      return this.fog.far;
    }
    set far(v) {
      this.fog.far = v;
      this.fog.near = Math.min(this.fog.near, v);
    }
    get color() {
      return `#${this.fog.color.getHexString()}`;
    }
    set color(hexString) {
      this.fog.color.set(hexString);
      this.backgroundColor.set(hexString);
    }
  }

function createSpotlight(color) {
  var newObj = new THREE.SpotLight(color, 2);

  newObj.position.set(15, 40, 35);
  newObj.angle = Math.PI / 4;
  newObj.penumbra = 0.05;
  newObj.decay = 2;
  newObj.distance = 100;
  
  return newObj;
}
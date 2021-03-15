import { CGFappearance } from "../lib/CGF.js";
import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
  constructor(scene)
  {
      super(scene);
      this.initTexture(this.scene);

      this.diamond = new MyDiamond(this.scene);
      this.smallRedTriangle = new MyTriangleSmall(this.scene, 'red');
      this.smallPurpleTriangle = new MyTriangleSmall(this.scene, 'purple');
      this.bigBlueTriangle = new MyTriangleBig(this.scene, 'blue');
      this.bigOrangeTriangle = new MyTriangleBig(this.scene, 'orange');
      this.triangle = new MyTriangle(this.scene);
      this.parallelogram = new MyParallelogram(this.scene);
  }
  initTexture() {
    //------ Texture
    this.tangramTexture = new CGFappearance(this.scene);
    this.tangramTexture.setAmbient(0.1, 0.1, 0.1, 1);
    this.tangramTexture.setDiffuse(0.9, 0.9, 0.9, 1);
    this.tangramTexture.setSpecular(0.1, 0.1, 0.1, 1);
    this.tangramTexture.setShininess(10.0);
    this.tangramTexture.loadTexture('images/tangram.png');
    this.tangramTexture.setTextureWrap('REPEAT', 'REPEAT');
  }
  display()
  {

    /*
      The chosen vertex for the coordinates (0,0,0) is the point of the big blue triangle
    */

    this.tangramTexture.apply();

    //Diamond
    var translation = 
    [ 1, 0, 0, 0,
      0, 1, 0, 0,  
      0, 0, 1, 0,
      -Math.sqrt(8)+1/3, Math.sqrt(8)+2/3, 0, 1  ];

    this.scene.pushMatrix();
    this.scene.multMatrix(translation);
    this.diamond.display();
    this.scene.popMatrix();
    
    //Parallelogram
    this.scene.pushMatrix();
    this.scene.translate(1/2, Math.sqrt(8)-(8/6), 0);
    this.scene.rotate(-Math.PI, 0, 1, 0);
    this.parallelogram.display();
    this.scene.popMatrix();

    //Small Red Triangle
    this.scene.pushMatrix();
    this.scene.translate((1/Math.sqrt(2))-1/2, -(1/3)+Math.sqrt(8)-(1/Math.sqrt(2)), 0);
    this.scene.rotate(-Math.PI/4, 0, 0, 1);
    this.smallRedTriangle.display();
    this.scene.popMatrix();

    //Big Orange Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(8)+2, 0, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.bigOrangeTriangle.display();
    this.scene.popMatrix();

    //Big Blue Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
    this.scene.rotate(3*Math.PI/4, 0, 0, 1);
    this.bigBlueTriangle.display();
    this.scene.popMatrix();

    //Pink Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(8)+4, -Math.sqrt(2), 0);
    this.scene.rotate(-Math.PI/4 - Math.PI/2, 0, 0, 1);
    this.triangle.display();
    this.scene.popMatrix();

    //Small Purple Triangle
    this.scene.pushMatrix();
    this.scene.translate(3, -Math.sqrt(2), 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.smallPurpleTriangle.display();
    this.scene.popMatrix();


    this.scene.setDiffuse();
  }

  enableNormalViz(){
    this.triangle.enableNormalViz();
    this.bigTriangle.enableNormalViz();
    this.smallTriangle.enableNormalViz();
    this.diamond.enableNormalViz();
    this.parallelogram.enableNormalViz();
  }

  disableNormalViz(){
    this.triangle.disableNormalViz();
    this.bigTriangle.disableNormalViz();
    this.smallTriangle.disableNormalViz();
    this.diamond.disableNormalViz();
    this.parallelogram.disableNormalViz();
  }
  updateBuffers(complexity){
    // reinitialize buffers
    this.initBuffers();
    this.initNormalVizBuffers();
  }
}

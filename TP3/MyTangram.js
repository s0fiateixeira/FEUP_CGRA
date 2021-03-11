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
      this.initMaterials(this.scene);

      this.diamond = new MyDiamond(this.scene);
      this.smallTriangle = new MyTriangleSmall(this.scene);
      this.bigTriangle = new MyTriangleBig(this.scene);
      this.triangle = new MyTriangle(this.scene);
      this.parallelogram = new MyParallelogram(this.scene);
  }
  initMaterials() {
    // green
    this.green = new CGFappearance(this.scene);
    this.green.setAmbient(0, 1, 0, 0.3);
    this.green.setDiffuse(0, 1, 0, 0.3);
    this.green.setSpecular(0, 1, 0, 1.0);
    this.green.setShininess(10.0);

    // blue
    this.blue = new CGFappearance(this.scene);
    this.blue.setAmbient(0, 0, 1, 0.3);
    this.blue.setDiffuse(0, 0, 1, 0.3);
    this.blue.setSpecular(0, 0, 1, 1.0);
    this.blue.setShininess(10.0);

    // yellow
    this.yellow = new CGFappearance(this.scene);
    this.yellow.setAmbient(1, 1, 0, 0.3);
    this.yellow.setDiffuse(1, 1, 0, 0.3);
    this.yellow.setSpecular(1, 1, 0, 1.0);
    this.yellow.setShininess(10.0);

    // red
    this.red = new CGFappearance(this.scene);
    this.red.setAmbient(1, 0, 0, 0.3);
    this.red.setDiffuse(1, 0, 0, 0.3);
    this.red.setSpecular(1, 0, 0, 1.0);
    this.red.setShininess(10.0);

    // orange
    this.orange = new CGFappearance(this.scene);
    this.orange.setAmbient(1, 165/255, 0, 0.3);
    this.orange.setDiffuse(1, 165/255, 0, 0.3);
    this.orange.setSpecular(1, 165/255, 0, 1.0);
    this.orange.setShininess(10.0);

    // pink
    this.pink = new CGFappearance(this.scene);
    this.pink.setAmbient(1, 192/255, 203/255, 0.3);
    this.pink.setDiffuse(1, 192/255, 203/255, 0.3);
    this.pink.setSpecular(1, 192/255, 203/255, 1.0);
    this.pink.setShininess(10.0);

    // purple
    this.purple = new CGFappearance(this.scene);
    this.purple.setAmbient(148/255, 0, 211/255, 0.3);
    this.purple.setDiffuse(148/255, 0, 211/255, 0.3);
    this.purple.setSpecular(148/255, 0, 211/255, 1.0);
    this.purple.setShininess(10.0);

  }
  display()
  {

    /*
      The chosen vertex for the coordinates (0,0,0) is the point of the big blue triangle
    */

    //Diamond
    var translation = 
    [ 1, 0, 0, 0,
      0, 1, 0, 0,  
      0, 0, 1, 0,
      -Math.sqrt(8)+1/3, Math.sqrt(8)+2/3, 0, 1  ];

    this.scene.pushMatrix();
    this.scene.multMatrix(translation);
    this.green.apply();
    this.diamond.display();
    this.scene.popMatrix();
    
    //Parallelogram
    this.scene.pushMatrix();
    this.scene.translate(1/2, Math.sqrt(8)-(8/6), 0);
    this.scene.rotate(-Math.PI, 0, 1, 0);
    this.yellow.apply();
    this.parallelogram.display();
    this.scene.popMatrix();

    //Small Red Triangle
    this.scene.pushMatrix();
    this.scene.translate((1/Math.sqrt(2))-1/2, -(1/3)+Math.sqrt(8)-(1/Math.sqrt(2)), 0);
    this.scene.rotate(-Math.PI/4, 0, 0, 1);
    this.red.apply();
    this.smallTriangle.display();
    this.scene.popMatrix();

    //Big Orange Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(8)+2, 0, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.orange.apply();
    this.bigTriangle.display();
    this.scene.popMatrix();

    //Big Blue Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
    this.scene.rotate(3*Math.PI/4, 0, 0, 1);
    this.blue.apply();
    this.bigTriangle.display();
    this.scene.popMatrix();

    //Pink Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(8)+4, -Math.sqrt(2), 0);
    this.scene.rotate(-Math.PI/4 - Math.PI/2, 0, 0, 1);
    this.pink.apply();
    this.triangle.display();
    this.scene.popMatrix();

    //Small Purple Triangle
    this.scene.pushMatrix();
    this.scene.translate(3, -Math.sqrt(2), 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.purple.apply();
    this.smallTriangle.display();
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

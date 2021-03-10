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
      this.diamond = new MyDiamond(this.scene);
      this.smallTriangle = new MyTriangleSmall(this.scene);
      this.bigTriangle = new MyTriangleBig(this.scene);
      this.triangle = new MyTriangle(this.scene);
      this.parallelogram = new MyParallelogram(this.scene);
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
    //this.scene.setDiffuse(0, 255/255, 0, 0);
    this.diamond.display();
    this.scene.popMatrix();
    
    //Parallelogram
    this.scene.pushMatrix();
    this.scene.translate(1/2, Math.sqrt(8)-(8/6), 0);
    this.scene.rotate(-Math.PI, 0, 1, 0);
    //this.scene.setDiffuse(255/255, 255/255, 0, 0);
    this.parallelogram.display();
    this.scene.popMatrix();

    //Small Red Triangle
    this.scene.pushMatrix();
    this.scene.translate((1/Math.sqrt(2))-1/2, -(1/3)+Math.sqrt(8)-(1/Math.sqrt(2)), 0);
    this.scene.rotate(-Math.PI/4, 0, 0, 1);
    //this.scene.setDiffuse(255/255, 27/255, 27/255, 0);
    this.smallTriangle.display();
    this.scene.popMatrix();

    //Big Orange Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(8)+2, 0, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    //this.scene.setDiffuse(255/255, 155/255, 0, 0);
    this.bigTriangle.display();
    this.scene.popMatrix();

    //Big Blue Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
    this.scene.rotate(3*Math.PI/4, 0, 0, 1);
    //this.scene.setDiffuse(0, 155/255, 255/255, 0);
    this.bigTriangle.display();
    this.scene.popMatrix();

    //Pink Triangle
    this.scene.pushMatrix();
    this.scene.translate(-Math.sqrt(8)+4, -Math.sqrt(2), 0);
    this.scene.rotate(-Math.PI/4 - Math.PI/2, 0, 0, 1);
    //this.scene.setDiffuse(255/255, 155/255, 207/255, 0);
    this.triangle.display();
    this.scene.popMatrix();

    //Small Purple Triangle
    this.scene.pushMatrix();
    this.scene.translate(3, -Math.sqrt(2), 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    //this.scene.setDiffuse(150/255, 80/255, 190/255, 0);
    this.smallTriangle.display();
    this.scene.popMatrix();


    this.scene.setDiffuse();
  }
}

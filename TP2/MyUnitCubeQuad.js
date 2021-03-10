import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
        this.quad = new MyQuad(this.scene);
	}
	
	display()
    {
         // Face da direita	
         this.scene.pushMatrix();
         this.scene.translate(0.5, 0, 0);
         this.scene.rotate(Math.PI / 2, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();
         
         // Face de trás
         this.scene.pushMatrix();
         this.scene.translate(0, 0, -0.5);
         this.scene.rotate(Math.PI, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();
 
         // Face da esquerda
         this.scene.pushMatrix();
         this.scene.translate(-0.5, 0, 0);
         this.scene.rotate(-Math.PI / 2, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();
 
         // Face da frente
         this.scene.pushMatrix();
         this.scene.translate(0, 0, 0.5);
         this.quad.display();
         this.scene.popMatrix();
         
         // Face de cima
         this.scene.pushMatrix();
         this.scene.translate(0, 0.5, 0);
         this.scene.rotate(-Math.PI / 2, 1, 0, 0);
         this.quad.display();
         this.scene.popMatrix();
 
         // Face de baixo
         this.scene.pushMatrix();
         this.scene.translate(0, -0.5, 0);
         this.scene.rotate(Math.PI / 2, 1, 0, 0);
         this.quad.display();
         this.scene.popMatrix();
    }
}
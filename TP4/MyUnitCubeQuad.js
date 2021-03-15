import { MyQuad } from "./MyQuad.js";

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad {

    constructor(scene) {
		this.scene=scene;
        this.MyQuad = new MyQuad(scene);
	}

    display(){

        // face da frente
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.MyQuad.display();
        this.scene.popMatrix();

        // face de trás
        this.scene.pushMatrix();
        this.scene.rotate(-180*Math.PI/180,1,0,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad.display();
        this.scene.popMatrix();

        // face de cima
        this.scene.pushMatrix();
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad.display();
        this.scene.popMatrix();

        // face de baixo
        this.scene.pushMatrix();
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad.display();
        this.scene.popMatrix();

        // face da direita
        this.scene.pushMatrix();
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad.display();
        this.scene.popMatrix();

        // face da esquerda
        this.scene.pushMatrix();
        this.scene.rotate(-90*Math.PI/180,0,1,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad.display();
        this.scene.popMatrix();
    }
}


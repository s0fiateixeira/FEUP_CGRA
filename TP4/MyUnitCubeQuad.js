import { CGFappearance } from "../lib/CGF.js";
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
        this.initTexture(this.scene);
	}
    initTexture(){
        this.topTexture = new CGFappearance(this.scene);
        this.topTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.topTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.topTexture.setShininess(10.0);
        this.topTexture.loadTexture('images/mineTop.png');
        this.topTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.sideTexture = new CGFappearance(this.scene);
        this.sideTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideTexture.setShininess(10.0);
        this.sideTexture.loadTexture('images/mineSide.png');
        this.sideTexture.setTextureWrap('REPEAT', 'REPEAT');
        
        this.bottomTexture = new CGFappearance(this.scene);
        this.bottomTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomTexture.setShininess(10.0);
        this.bottomTexture.loadTexture('images/mineBottom.png');
        this.bottomTexture.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(){

        // face da frente
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.sideTexture.apply();
        this.MyQuad.display();
        this.scene.popMatrix();

        // face de trás
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,0.5);
        this.sideTexture.apply();
        this.MyQuad.display();
        this.scene.popMatrix();

        // face de cima
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.translate(0,0,0.5);
        this.topTexture.apply();
        this.MyQuad.display();
        this.scene.popMatrix();

        // face de baixo
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.translate(0,0,0.5);
        this.bottomTexture.apply();
        this.MyQuad.display();
        this.scene.popMatrix();

        // face da direita
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0,0,0.5);
        this.sideTexture.apply();
        this.MyQuad.display();
        this.scene.popMatrix();

        // face da esquerda
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.translate(0,0,0.5);
        this.sideTexture.apply();
        this.MyQuad.display();
        this.scene.popMatrix();
    }
}


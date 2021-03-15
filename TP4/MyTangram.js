import { CGFappearance } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram {

    constructor(scene) {
		this.scene=scene;
        this.initMaterials();

        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.parallelogram = new MyParallelogram(scene);

	}

    initMaterials() {

        this.scene.materialA = new CGFappearance(this.scene);
        this.scene.materialA.setAmbient(240/255, 94/255, 35/255, 1.0);
        this.scene.materialA.setDiffuse(0, 0, 0, 1.0);
        this.scene.materialA.setSpecular(240/255, 94/255, 35/255, 1.0);
        this.scene.materialA.setShininess(10.0);

        this.scene.materialB = new CGFappearance(this.scene);
        this.scene.materialB.setAmbient(255/255, 105/255, 180/255, 1.0);
        this.scene.materialB.setDiffuse(0, 0, 0, 1.0);
        this.scene.materialB.setSpecular(255/255, 105/255, 180/255, 1.0);
        this.scene.materialB.setShininess(10.0);

        this.scene.materialC = new CGFappearance(this.scene);
        this.scene.materialC.setAmbient(84/255, 22/255, 180/255, 1.0);
        this.scene.materialC.setDiffuse(0, 0, 0, 1.0);
        this.scene.materialC.setSpecular(84/255, 22/255, 180/255, 1.0);
        this.scene.materialC.setShininess(10.0);

        this.scene.materialD = new CGFappearance(this.scene);
        this.scene.materialD.setAmbient(0, 64/255, 255/255, 1.0);
        this.scene.materialD.setDiffuse(0, 0, 0, 1.0);
        this.scene.materialD.setSpecular(0, 64/255, 255/255, 1.0);
        this.scene.materialD.setShininess(10.0);

        this.scene.materialE = new CGFappearance(this.scene);
        this.scene.materialE.setAmbient(255/255, 255/255, 0, 1.0);
        this.scene.materialE.setDiffuse(0, 0, 0, 1.0);
        this.scene.materialE.setSpecular(255/255, 255/255, 0, 1.0);
        this.scene.materialE.setShininess(10.0);

        this.scene.materialF = new CGFappearance(this.scene);
        this.scene.materialF.setAmbient(1, 0, 0, 1.0);
        this.scene.materialF.setDiffuse(0, 0, 0, 1.0);
        this.scene.materialF.setSpecular(1, 0, 0, 1.0);
        this.scene.materialF.setShininess(10.0);

    }

    display(){

        

        var translateMatrix =[

            1.0, 0.0, 0.0, 0.0,
            
            0.0, 1.0, 0.0, 0.0,
            
            0.0, 0.0, 1.0, 0.0,
            
            -45/16, 61/16, 0.0, 1.0
            
          ];
        
          
          
        this.scene.pushMatrix();
    
        this.scene.materialA.apply();
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.scene.translate(1,0,0);
        this.triangleBig.display();
    
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
    
        this.scene.materialB.apply();
        this.scene.scale(1.5,1.5,1);
        this.scene.translate(2/3,-1,0);
        this.triangleSmall.display();
    
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
    
        this.scene.materialC.apply();
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.scene.translate(-3,1.5,0);
        this.triangleSmall.display();
    
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
    
        this.scene.materialD.apply();
        this.scene.scale(1.5,1.5,1);
        this.scene.translate(-1.0,1.0,0);
        this.triangle.display();
    
        this.scene.popMatrix();
    
        
        this.scene.pushMatrix();
    
        this.scene.materialE.apply();
        this.scene.scale(3/4,3/4,1);
        this.scene.rotate(-180*Math.PI/180,0,1,0);
        this.scene.translate(3/4,11/4,0);
        this.parallelogram.display();
    
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
    
        this.scene.materialF.apply();
        this.scene.rotate(-180*Math.PI/180,0,0,1);
        this.scene.scale(2/3,2/3,1);
        this.scene.translate(1,-103/32,0);
        this.triangle.display();
    
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
    
        this.scene.customMaterial.apply();
        this.scene.multMatrix(translateMatrix);
        this.diamond.display();
    
        this.scene.popMatrix();
    }

    updateBuffers(complexity){

        // reinitialize buffers
        //this.initBuffers();
        //this.initNormalVizBuffers();
    }

    disableNormalViz(){
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.parallelogram.disableNormalViz();
    }

	enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }
}


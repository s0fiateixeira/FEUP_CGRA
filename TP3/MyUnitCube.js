import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			// face de cima
			-0.5, 0.5, -0.5,
			0.5, 0.5, -0.5,
			0.5, 0.5, 0.5,
			-0.5, 0.5, 0.5,

			// face da esquerda
			-0.5, 0.5, -0.5,
			-0.5, 0.5, 0.5,
			-0.5, -0.5, 0.5,
			-0.5, -0.5, -0.5,

			// face de baixo
			-0.5, -0.5, 0.5,
			0.5, -0.5, 0.5,
			0.5, -0.5, -0.5,
			-0.5, -0.5, -0.5,

			// face da direita
			0.5, 0.5, 0.5,
			0.5, 0.5, -0.5,
			0.5, -0.5, -0.5,
			0.5, -0.5, 0.5,

			// face da frente
			-0.5, 0.5, 0.5,
			0.5, 0.5, 0.5,
			0.5, -0.5, 0.5,
			-0.5, -0.5, 0.5,

			// face de trás
			0.5, 0.5, -0.5,
			-0.5, 0.5, -0.5,
			-0.5, -0.5, -0.5,
			0.5, -0.5, -0.5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
           	0, 2, 1,	// face de cima
            0, 3, 2,

            4, 6, 5,	// face da esquerda
            4, 7, 6,
        
			8, 10, 9,	// face de baixo
            8, 11, 10,
            
			12, 14, 13,	// face da direita
            12, 15, 14,
            
			16, 18, 17,	// face da frente
            16, 19, 18,
            
			20, 22, 21,	// face de trás
            20, 23, 22
        ];

		this.normals = [
			// para a face de cima as normais são do tipo (0, 1, 0)
			0, 1, 0,		
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			// para a face da esquerda as normais são do tipo (-1, 0, 0)
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			// para a face de baixo as normais são do tipo (0, -1, 0)	
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,	
			// para a face da direita as normais são do tipo (1, 0, 0)	
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			// para a face da frente as normais são do tipo (0, 0, 1)
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			// para a face de trás as normais são do tipo (0, 0, -1)
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];
		
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

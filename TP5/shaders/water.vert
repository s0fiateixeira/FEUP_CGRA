attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler3;

uniform float timeFactor;

void main() {

	vTextureCoord = aTextureCoord;
	
	vec3 offset = aVertexNormal * texture2D(uSampler3, (vec2(0.0, 0.1) + vTextureCoord) + sin(timeFactor*0.005) * sin(timeFactor*0.005)).b * 0.1;
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}

#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform sampler2D uSampler3;

uniform float timeFactor;

void main() {

	vec2 movCoords = mod(vTextureCoord + timeFactor*0.005, 1.0);

	vec4 color = texture2D(uSampler1, movCoords);
	vec4 filter = texture2D(uSampler3, movCoords);

	/*if (filter.b > 0.5)
		color=vec4(0.52, 0.18, 0.11, 1.0);
	*/
	
	gl_FragColor = color;
}

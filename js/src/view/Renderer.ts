/// <reference path="../references.ts" />
class Renderer{
	constructor(){
		let Canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById( "gamecanvas" );
		if( Canvas != null ){
			let Graphics : CanvasRenderingContext2D | null = Canvas.getContext( "2d" );
		}
		else{
			console.log( "ERROR: COULD NOT GET CANVAS CONTEXT" );
		}
	}

};
import CanvasLayer from "./L.CanvasLayer";
import VelocityLayer from "./L.VelocityLayer";

export { default as CanvasBound } from "./canvasBound";
export { default as MapBound } from "./mapBound";
export { default as Windy } from "./windy";
export { default as Layer } from "./layer";


const L = (<any>window).L;

L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new CanvasLayer());
L.canvasLayer = function () {
	return new L.CanvasLayer();
};
L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new VelocityLayer());

export const velocityLayer = function (options: any) {
  return new L.VelocityLayer(options);
};

L.velocityLayer = velocityLayer
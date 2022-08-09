import { width, height, ctx } from "../constant";

export class Board {
	draw(): void {
		ctx.beginPath();
		ctx.rect(0, 0, width, height);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
}

export const board = new Board();

export default board;

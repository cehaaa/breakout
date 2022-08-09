import { ctx, height, width } from "../constant";

export class Paddle {
	height: number;
	width: number;

	x: number;
	y: number;

	constructor() {
		this.height = 8;
		this.width = 60;

		this.x = width / 2 - this.width / 2;
		this.y = height - this.height - 30;
	}

	draw(): void {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#f59e0b";
		ctx.fill();
		ctx.closePath();
	}

	move(dir: string): void {
		if (dir === "Right") {
			this.x += 15;
		} else if (dir === "Left") {
			this.x -= 15;
		}
	}
}

export const paddle = new Paddle();

export default paddle;

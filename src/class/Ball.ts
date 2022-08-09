// component
import paddle from "./Paddle";
import brick from "./Brick";

import { ctx, height, width } from "../constant";
import { randomColor } from "../utils";

export class Ball {
	x: number;
	y: number;

	dx: number;
	dy: number;

	radius: number;
	color: string;

	constructor() {
		this.x = width / 2;
		this.y = height - 50;

		this.dx = 2;
		this.dy = -2;

		this.radius = 6;
		this.color = randomColor();
	}

	draw(): void {
		// draw ball
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle =
			this.color === brick.color ? (this.color = randomColor()) : this.color;
		ctx.fill();
		ctx.closePath();

		this.bounce();

		this.x += this.dx;
		this.y += this.dy;
	}

	bounce(): void {
		// top
		if (this.y + this.dy < 0) {
			this.dy = -this.dy;
		}

		// right
		if (this.x + this.dx < 0) {
			this.dx = -this.dx;
		}

		// left
		if (this.x + this.dx > width) {
			this.dx = -this.dx;
		}

		// collision with paddle
		if (
			this.x + this.dx > paddle.x &&
			this.x + this.dx < paddle.x + paddle.width &&
			this.y + this.dy > paddle.y &&
			this.y + this.dy < paddle.y + paddle.height
		) {
			this.dy = -this.dy;
		}
	}
}

export const ball = new Ball();

export default ball;

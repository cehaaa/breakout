// component
import ball from "./Ball";

import { ctx } from "../constant";
import { randomColor } from "../utils";

export class Brick {
	width: number;
	height: number;
	padding: number;
	topOffset: number;
	color: string;

	col: number;
	row: number;

	bricks: any[];
	bricksCount: number;

	constructor() {
		this.width = 40;
		this.height = 8;
		this.padding = 50;
		this.topOffset = 20;
		this.color = randomColor();

		this.col = 4;
		this.row = 4;

		this.bricks = [];
		this.bricksCount = this.col * this.row;

		this.init();
	}

	init(): void {
		for (let col = 0; col < this.col; col++) {
			this.bricks[col] = [];
			for (let row = 0; row < this.row; row++) {
				this.bricks[col][row] = {
					x: 0,
					y: 0,
					status: true,
				};
			}
		}
	}

	draw(): void {
		for (let col = 0; col < this.col; col++) {
			for (let row = 0; row < this.row; row++) {
				if (this.bricks[col][row].status) {
					let x = col * (this.width + this.padding) + this.padding;
					let y = row * (this.height + this.topOffset) + this.topOffset;

					this.bricks[col][row].x = x;
					this.bricks[col][row].y = y;

					ctx.beginPath();
					ctx.rect(x, y, this.width, this.height);
					ctx.fillStyle = this.color;
					ctx.fill();
					ctx.closePath();
				}
			}
		}
	}

	collisionDetection(): void {
		for (let col = 0; col < this.col; col++) {
			for (let row = 0; row < this.row; row++) {
				if (this.bricks[col][row].status) {
					if (
						ball.x + ball.radius > this.bricks[col][row].x &&
						ball.x - ball.radius < this.bricks[col][row].x + this.width &&
						ball.y + ball.radius > this.bricks[col][row].y &&
						ball.y - ball.radius < this.bricks[col][row].y + this.height
					) {
						ball.dy = -ball.dy;
						this.bricks[col][row].status = false;

						setTimeout(() => {
							this.bricksCount--;
						}, 100);
					}
				}
			}
		}
	}
}

export const brick = new Brick();

export default brick;

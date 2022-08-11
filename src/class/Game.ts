// components
import ball from "./Ball";
import paddle from "./Paddle";
import brick from "./Brick";
import board from "./Board";

import { ctx, height, width } from "../constant";

export class Game {
	start(): void {
		setInterval(() => {
			ctx.clearRect(0, 0, width, height);

			board.draw();
			ball.draw();
			paddle.draw();

			brick.draw();
			brick.collisionDetection();

			this.checkGameOver();
		}, 20);
	}

	keyListener(): void {
		window.addEventListener("keydown", (evt: KeyboardEvent) => {
			const dir: string = evt.key.replace("Arrow", "");
			paddle.move(dir);
		});
	}

	checkGameOver(): void {
		if (ball.y + ball.dy === height) {
			alert("Game Over!");
			window.location.reload();
		}

		if (brick.bricksCount === 0) {
			window.location.reload();
			alert("You win!");
		}
	}
}

export const game = new Game();

export default game;

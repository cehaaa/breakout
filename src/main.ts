import "./style/style.css";
import { app, canvas, height, width } from "./constant";

import game from "./class/Game";

canvas.classList.add("canvas");
canvas.height = height;
canvas.width = width;

app.append(canvas);

game.start();
game.keyListener();

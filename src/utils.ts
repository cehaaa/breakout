const colors: string[] = [
	"#ef4444",
	"#f97316",
	"#84cc16",
	"#22c55e",
	"#0ea5e9",
	"#3b82f6",
	"#a855f7",
	"#ec4899",
	"#f43f5e",
];

export const randomColor = (): string => {
	const color: string = colors[Math.floor(Math.random() * colors.length)];

	return color;
};

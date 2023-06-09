export function clamp(min: number, number: number, max: number) {
	return Math.max(min, Math.min(number, max));
}

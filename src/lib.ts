export { ratioed } from './ratio.ts';

export const readableDirection = (difference) => {
  if (difference === 0) return 'exactly';
	if (difference < -0.01) return 'less than';
	if (difference > 0.01) return 'more than';
	return 'about';
}
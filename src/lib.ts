export { ratioed, type RatioedOptions, type Ratio } from './ratio.ts';

const EXACT = 'exacly';
const LESS_THAN = 'less than';
const MORE_THAN = 'more than';
const ABOUT = 'about';

export const readableDirection = (difference: number) => {
  if (difference === 0) return EXACT;
	if (difference < -0.01) return LESS_THAN;
	if (difference > 0.01) return MORE_THAN;
	return ABOUT;
}
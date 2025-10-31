/**
 * Advanced scientific and mathematical operations
 * Following IEEE 754 standards for floating-point arithmetic
 */

import {
  DomainError,
  OverflowError,
} from './errors';
import { validateNumber } from './basicOperations';
import { PI, MAX_FACTORIAL } from './constants';
import { AngleUnit } from './types';

/**
 * Convert degrees to radians
 */
export function degreesToRadians(degrees: number): number {
  validateNumber(degrees, 'degreesToRadians');
  return (degrees * PI) / 180;
}

/**
 * Convert radians to degrees
 */
export function radiansToDegrees(radians: number): number {
  validateNumber(radians, 'radiansToDegrees');
  return (radians * 180) / PI;
}

/**
 * Power: a^b
 */
export function power(base: number, exponent: number): number {
  validateNumber(base, 'power');
  validateNumber(exponent, 'power');

  const result = Math.pow(base, exponent);

  if (!isFinite(result)) {
    if (result === Infinity || result === -Infinity) {
      throw new OverflowError('power');
    }
    throw new DomainError('power', 'result is not a real number');
  }

  return result;
}

/**
 * Square root: √a
 */
export function sqrt(a: number): number {
  validateNumber(a, 'sqrt');

  if (a < 0) {
    throw new DomainError('sqrt', 'cannot take square root of negative number');
  }

  return Math.sqrt(a);
}

/**
 * Nth root: a^(1/n)
 */
export function nthRoot(value: number, n: number): number {
  validateNumber(value, 'nthRoot');
  validateNumber(n, 'nthRoot');

  if (n === 0) {
    throw new DomainError('nthRoot', 'root degree cannot be zero');
  }

  if (n % 2 === 0 && value < 0) {
    throw new DomainError('nthRoot', 'even root of negative number is not real');
  }

  // Handle negative values with odd roots
  if (value < 0 && n % 2 !== 0) {
    return -Math.pow(-value, 1 / n);
  }

  return Math.pow(value, 1 / n);
}

/**
 * Factorial: n!
 * Only defined for non-negative integers
 */
export function factorial(n: number): number {
  validateNumber(n, 'factorial');

  if (n < 0) {
    throw new DomainError('factorial', 'factorial is not defined for negative numbers');
  }

  if (!Number.isInteger(n)) {
    throw new DomainError('factorial', 'factorial is only defined for integers');
  }

  if (n > MAX_FACTORIAL) {
    throw new OverflowError('factorial');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

/**
 * Natural logarithm: ln(a)
 */
export function ln(a: number): number {
  validateNumber(a, 'ln');

  if (a <= 0) {
    throw new DomainError('ln', 'logarithm is only defined for positive numbers');
  }

  return Math.log(a);
}

/**
 * Base-10 logarithm: log10(a)
 */
export function log10(a: number): number {
  validateNumber(a, 'log10');

  if (a <= 0) {
    throw new DomainError('log10', 'logarithm is only defined for positive numbers');
  }

  return Math.log10(a);
}

/**
 * Base-2 logarithm: log2(a)
 */
export function log2(a: number): number {
  validateNumber(a, 'log2');

  if (a <= 0) {
    throw new DomainError('log2', 'logarithm is only defined for positive numbers');
  }

  return Math.log2(a);
}

/**
 * Exponential: e^a
 */
export function exp(a: number): number {
  validateNumber(a, 'exp');

  const result = Math.exp(a);

  if (!isFinite(result)) {
    throw new OverflowError('exp');
  }

  return result;
}

/**
 * Sine function
 */
export function sin(angle: number, unit: AngleUnit = 'radians'): number {
  validateNumber(angle, 'sin');
  const radians = unit === 'degrees' ? degreesToRadians(angle) : angle;
  return Math.sin(radians);
}

/**
 * Cosine function
 */
export function cos(angle: number, unit: AngleUnit = 'radians'): number {
  validateNumber(angle, 'cos');
  const radians = unit === 'degrees' ? degreesToRadians(angle) : angle;
  return Math.cos(radians);
}

/**
 * Tangent function
 */
export function tan(angle: number, unit: AngleUnit = 'radians'): number {
  validateNumber(angle, 'tan');
  const radians = unit === 'degrees' ? degreesToRadians(angle) : angle;

  // Check if angle is close to (2n+1)π/2 where tan is undefined
  const normalizedAngle = radians % PI;
  const quarterPi = PI / 2;
  if (Math.abs(Math.abs(normalizedAngle) - quarterPi) < 1e-10) {
    throw new DomainError('tan', 'tangent is undefined at odd multiples of π/2');
  }

  return Math.tan(radians);
}

/**
 * Arcsine (inverse sine)
 */
export function asin(value: number, unit: AngleUnit = 'radians'): number {
  validateNumber(value, 'asin');

  if (value < -1 || value > 1) {
    throw new DomainError('asin', 'arcsine is only defined for values in [-1, 1]');
  }

  const result = Math.asin(value);
  return unit === 'degrees' ? radiansToDegrees(result) : result;
}

/**
 * Arccosine (inverse cosine)
 */
export function acos(value: number, unit: AngleUnit = 'radians'): number {
  validateNumber(value, 'acos');

  if (value < -1 || value > 1) {
    throw new DomainError('acos', 'arccosine is only defined for values in [-1, 1]');
  }

  const result = Math.acos(value);
  return unit === 'degrees' ? radiansToDegrees(result) : result;
}

/**
 * Arctangent (inverse tangent)
 */
export function atan(value: number, unit: AngleUnit = 'radians'): number {
  validateNumber(value, 'atan');
  const result = Math.atan(value);
  return unit === 'degrees' ? radiansToDegrees(result) : result;
}

/**
 * Two-argument arctangent (atan2)
 */
export function atan2(y: number, x: number, unit: AngleUnit = 'radians'): number {
  validateNumber(y, 'atan2');
  validateNumber(x, 'atan2');
  const result = Math.atan2(y, x);
  return unit === 'degrees' ? radiansToDegrees(result) : result;
}

/**
 * Hyperbolic sine
 */
export function sinh(value: number): number {
  validateNumber(value, 'sinh');
  const result = Math.sinh(value);

  if (!isFinite(result)) {
    throw new OverflowError('sinh');
  }

  return result;
}

/**
 * Hyperbolic cosine
 */
export function cosh(value: number): number {
  validateNumber(value, 'cosh');
  const result = Math.cosh(value);

  if (!isFinite(result)) {
    throw new OverflowError('cosh');
  }

  return result;
}

/**
 * Hyperbolic tangent
 */
export function tanh(value: number): number {
  validateNumber(value, 'tanh');
  return Math.tanh(value);
}

/**
 * Inverse hyperbolic sine
 */
export function asinh(value: number): number {
  validateNumber(value, 'asinh');
  return Math.asinh(value);
}

/**
 * Inverse hyperbolic cosine
 */
export function acosh(value: number): number {
  validateNumber(value, 'acosh');

  if (value < 1) {
    throw new DomainError('acosh', 'inverse hyperbolic cosine is only defined for values >= 1');
  }

  return Math.acosh(value);
}

/**
 * Inverse hyperbolic tangent
 */
export function atanh(value: number): number {
  validateNumber(value, 'atanh');

  if (value <= -1 || value >= 1) {
    throw new DomainError('atanh', 'inverse hyperbolic tangent is only defined for values in (-1, 1)');
  }

  return Math.atanh(value);
}

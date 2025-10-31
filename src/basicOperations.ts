/**
 * Basic arithmetic operations
 * All functions are pure with no side effects
 */

import { DivisionByZeroError, InvalidInputError, OverflowError } from './errors';

/**
 * Validates that a number is finite and safe
 */
export function validateNumber(n: number, operationName: string): void {
  if (typeof n !== 'number') {
    throw new InvalidInputError(`${operationName} requires a number, got ${typeof n}`);
  }
  if (!isFinite(n)) {
    throw new InvalidInputError(`${operationName} requires a finite number`);
  }
}

/**
 * Checks for overflow after an operation
 */
function checkOverflow(result: number, operation: string): number {
  if (!isFinite(result)) {
    if (result === Infinity || result === -Infinity) {
      throw new OverflowError(operation);
    }
    throw new InvalidInputError(`${operation} resulted in NaN`);
  }
  return result;
}

/**
 * Addition: a + b
 */
export function add(a: number, b: number): number {
  validateNumber(a, 'add');
  validateNumber(b, 'add');
  const result = a + b;
  return checkOverflow(result, 'addition');
}

/**
 * Subtraction: a - b
 */
export function subtract(a: number, b: number): number {
  validateNumber(a, 'subtract');
  validateNumber(b, 'subtract');
  const result = a - b;
  return checkOverflow(result, 'subtraction');
}

/**
 * Multiplication: a * b
 */
export function multiply(a: number, b: number): number {
  validateNumber(a, 'multiply');
  validateNumber(b, 'multiply');
  const result = a * b;
  return checkOverflow(result, 'multiplication');
}

/**
 * Division: a / b
 * Throws DivisionByZeroError if b is zero
 */
export function divide(a: number, b: number): number {
  validateNumber(a, 'divide');
  validateNumber(b, 'divide');

  if (b === 0) {
    throw new DivisionByZeroError();
  }

  const result = a / b;
  return checkOverflow(result, 'division');
}

/**
 * Modulo: a % b
 */
export function modulo(a: number, b: number): number {
  validateNumber(a, 'modulo');
  validateNumber(b, 'modulo');

  if (b === 0) {
    throw new DivisionByZeroError();
  }

  return a % b;
}

/**
 * Absolute value: |a|
 */
export function abs(a: number): number {
  validateNumber(a, 'abs');
  return Math.abs(a);
}

/**
 * Sign function: returns -1, 0, or 1
 */
export function sign(a: number): number {
  validateNumber(a, 'sign');
  return Math.sign(a);
}

/**
 * Ceiling: smallest integer >= a
 */
export function ceil(a: number): number {
  validateNumber(a, 'ceil');
  return Math.ceil(a);
}

/**
 * Floor: largest integer <= a
 */
export function floor(a: number): number {
  validateNumber(a, 'floor');
  return Math.floor(a);
}

/**
 * Round to nearest integer
 */
export function round(a: number): number {
  validateNumber(a, 'round');
  return Math.round(a);
}

/**
 * Round to specified decimal places
 */
export function roundToDecimal(value: number, decimals: number): number {
  validateNumber(value, 'roundToDecimal');
  validateNumber(decimals, 'roundToDecimal');

  if (decimals < 0 || !Number.isInteger(decimals)) {
    throw new InvalidInputError('decimals must be a non-negative integer');
  }

  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
}

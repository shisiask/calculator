/**
 * Main Calculator class
 * Provides a unified interface for all mathematical operations
 */

import * as basicOps from './basicOperations';
import * as scientificOps from './scientificOperations';
import { AngleUnit, CalculatorOptions } from './types';
import { validateNumber } from './basicOperations';

export class Calculator {
  private angleUnit: AngleUnit;
  private precision: number;

  constructor(options: CalculatorOptions = {}) {
    this.angleUnit = options.angleUnit || 'radians';
    this.precision = options.precision !== undefined ? options.precision : 15;
  }

  // Configuration methods
  setAngleUnit(unit: AngleUnit): void {
    this.angleUnit = unit;
  }

  getAngleUnit(): AngleUnit {
    return this.angleUnit;
  }

  setPrecision(precision: number): void {
    validateNumber(precision, 'setPrecision');
    if (precision < 0 || precision > 15) {
      throw new Error('Precision must be between 0 and 15');
    }
    this.precision = precision;
  }

  getPrecision(): number {
    return this.precision;
  }

  // Helper method to round results based on precision
  private roundResult(value: number): number {
    if (this.precision === 15) {
      return value;
    }
    return basicOps.roundToDecimal(value, this.precision);
  }

  // Basic arithmetic operations
  add(a: number, b: number): number {
    return this.roundResult(basicOps.add(a, b));
  }

  subtract(a: number, b: number): number {
    return this.roundResult(basicOps.subtract(a, b));
  }

  multiply(a: number, b: number): number {
    return this.roundResult(basicOps.multiply(a, b));
  }

  divide(a: number, b: number): number {
    return this.roundResult(basicOps.divide(a, b));
  }

  modulo(a: number, b: number): number {
    return this.roundResult(basicOps.modulo(a, b));
  }

  abs(a: number): number {
    return basicOps.abs(a);
  }

  sign(a: number): number {
    return basicOps.sign(a);
  }

  ceil(a: number): number {
    return basicOps.ceil(a);
  }

  floor(a: number): number {
    return basicOps.floor(a);
  }

  round(a: number): number {
    return basicOps.round(a);
  }

  // Scientific operations
  power(base: number, exponent: number): number {
    return this.roundResult(scientificOps.power(base, exponent));
  }

  sqrt(value: number): number {
    return this.roundResult(scientificOps.sqrt(value));
  }

  nthRoot(value: number, n: number): number {
    return this.roundResult(scientificOps.nthRoot(value, n));
  }

  factorial(n: number): number {
    return scientificOps.factorial(n);
  }

  // Logarithmic functions
  ln(value: number): number {
    return this.roundResult(scientificOps.ln(value));
  }

  log10(value: number): number {
    return this.roundResult(scientificOps.log10(value));
  }

  log2(value: number): number {
    return this.roundResult(scientificOps.log2(value));
  }

  exp(value: number): number {
    return this.roundResult(scientificOps.exp(value));
  }

  // Trigonometric functions (use calculator's angle unit)
  sin(angle: number): number {
    return this.roundResult(scientificOps.sin(angle, this.angleUnit));
  }

  cos(angle: number): number {
    return this.roundResult(scientificOps.cos(angle, this.angleUnit));
  }

  tan(angle: number): number {
    return this.roundResult(scientificOps.tan(angle, this.angleUnit));
  }

  asin(value: number): number {
    return this.roundResult(scientificOps.asin(value, this.angleUnit));
  }

  acos(value: number): number {
    return this.roundResult(scientificOps.acos(value, this.angleUnit));
  }

  atan(value: number): number {
    return this.roundResult(scientificOps.atan(value, this.angleUnit));
  }

  atan2(y: number, x: number): number {
    return this.roundResult(scientificOps.atan2(y, x, this.angleUnit));
  }

  // Hyperbolic functions
  sinh(value: number): number {
    return this.roundResult(scientificOps.sinh(value));
  }

  cosh(value: number): number {
    return this.roundResult(scientificOps.cosh(value));
  }

  tanh(value: number): number {
    return this.roundResult(scientificOps.tanh(value));
  }

  asinh(value: number): number {
    return this.roundResult(scientificOps.asinh(value));
  }

  acosh(value: number): number {
    return this.roundResult(scientificOps.acosh(value));
  }

  atanh(value: number): number {
    return this.roundResult(scientificOps.atanh(value));
  }

  // Conversion utilities
  degreesToRadians(degrees: number): number {
    return scientificOps.degreesToRadians(degrees);
  }

  radiansToDegrees(radians: number): number {
    return scientificOps.radiansToDegrees(radians);
  }
}

export default Calculator;

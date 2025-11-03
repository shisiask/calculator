/**
 * Type definitions for calculator operations
 */

export type OperationResult = {
  value: number;
  error?: string;
};

export type AngleUnit = 'radians' | 'degrees';

export interface CalculatorOptions {
  angleUnit?: AngleUnit;
  precision?: number;
}

export enum Operation {
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  DIVIDE = 'divide',
  POWER = 'power',
  ROOT = 'root',
  SQRT = 'sqrt',
  FACTORIAL = 'factorial',
  SIN = 'sin',
  COS = 'cos',
  TAN = 'tan',
  ASIN = 'asin',
  ACOS = 'acos',
  ATAN = 'atan',
  SINH = 'sinh',
  COSH = 'cosh',
  TANH = 'tanh',
  LOG = 'log',
  LN = 'ln',
  LOG2 = 'log2',
  EXP = 'exp',
  ABS = 'abs',
  CEIL = 'ceil',
  FLOOR = 'floor',
  ROUND = 'round',
  SIGN = 'sign',
}

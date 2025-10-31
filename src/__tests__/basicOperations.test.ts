/**
 * Comprehensive tests for basic arithmetic operations
 */

import {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  abs,
  sign,
  ceil,
  floor,
  round,
  roundToDecimal,
  validateNumber,
} from '../basicOperations';
import { DivisionByZeroError, InvalidInputError, OverflowError } from '../errors';

describe('validateNumber', () => {
  it('should pass for valid finite numbers', () => {
    expect(() => validateNumber(42, 'test')).not.toThrow();
    expect(() => validateNumber(-42, 'test')).not.toThrow();
    expect(() => validateNumber(0, 'test')).not.toThrow();
    expect(() => validateNumber(3.14159, 'test')).not.toThrow();
  });

  it('should throw InvalidInputError for non-numbers', () => {
    expect(() => validateNumber('42' as any, 'test')).toThrow(InvalidInputError);
    expect(() => validateNumber(null as any, 'test')).toThrow(InvalidInputError);
    expect(() => validateNumber(undefined as any, 'test')).toThrow(InvalidInputError);
    expect(() => validateNumber({} as any, 'test')).toThrow(InvalidInputError);
  });

  it('should throw InvalidInputError for infinite numbers', () => {
    expect(() => validateNumber(Infinity, 'test')).toThrow(InvalidInputError);
    expect(() => validateNumber(-Infinity, 'test')).toThrow(InvalidInputError);
  });

  it('should throw InvalidInputError for NaN', () => {
    expect(() => validateNumber(NaN, 'test')).toThrow(InvalidInputError);
  });
});

describe('add', () => {
  describe('basic addition', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(100, 50)).toBe(150);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
      expect(add(-100, -200)).toBe(-300);
    });

    it('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
      expect(add(-10, 5)).toBe(-5);
      expect(add(100, -100)).toBe(0);
    });

    it('should add zero correctly', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
      expect(add(3.14, 2.86)).toBeCloseTo(6);
    });
  });

  describe('edge cases', () => {
    it('should handle very large numbers', () => {
      expect(add(1e15, 1e15)).toBe(2e15);
    });

    it('should handle very small numbers', () => {
      expect(add(1e-10, 2e-10)).toBeCloseTo(3e-10);
    });

    it('should throw OverflowError on overflow', () => {
      expect(() => add(Number.MAX_VALUE, Number.MAX_VALUE)).toThrow(OverflowError);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => add(NaN, 5)).toThrow(InvalidInputError);
      expect(() => add(5, NaN)).toThrow(InvalidInputError);
      expect(() => add(Infinity, 5)).toThrow(InvalidInputError);
    });
  });
});

describe('subtract', () => {
  describe('basic subtraction', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(100, 50)).toBe(50);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(-3, -5)).toBe(2);
    });

    it('should handle mixed signs', () => {
      expect(subtract(10, -5)).toBe(15);
      expect(subtract(-10, 5)).toBe(-15);
    });

    it('should subtract zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
      expect(subtract(10.75, 5.25)).toBe(5.5);
    });
  });

  describe('edge cases', () => {
    it('should handle very large numbers', () => {
      expect(subtract(1e15, 5e14)).toBe(5e14);
    });

    it('should throw OverflowError on overflow', () => {
      expect(() => subtract(-Number.MAX_VALUE, Number.MAX_VALUE)).toThrow(OverflowError);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => subtract(NaN, 5)).toThrow(InvalidInputError);
      expect(() => subtract(5, Infinity)).toThrow(InvalidInputError);
    });
  });
});

describe('multiply', () => {
  describe('basic multiplication', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(7, 8)).toBe(56);
      expect(multiply(2.5, 4)).toBe(10);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(3, -4)).toBe(-12);
      expect(multiply(-3, -4)).toBe(12);
    });

    it('should handle zero multiplication', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
      expect(multiply(-5, 0)).toBe(-0);
    });

    it('should handle decimal multiplication', () => {
      expect(multiply(0.5, 0.5)).toBe(0.25);
      expect(multiply(1.5, 2)).toBe(3);
      expect(multiply(3.3, 3)).toBeCloseTo(9.9);
    });
  });

  describe('edge cases', () => {
    it('should handle very large numbers', () => {
      expect(multiply(1e10, 1e5)).toBe(1e15);
    });

    it('should handle very small numbers', () => {
      expect(multiply(1e-10, 1e-5)).toBeCloseTo(1e-15);
    });

    it('should throw OverflowError on overflow', () => {
      expect(() => multiply(Number.MAX_VALUE, 2)).toThrow(OverflowError);
      expect(() => multiply(1e308, 10)).toThrow(OverflowError);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => multiply(NaN, 5)).toThrow(InvalidInputError);
      expect(() => multiply(5, NaN)).toThrow(InvalidInputError);
    });
  });
});

describe('divide', () => {
  describe('basic division', () => {
    it('should divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(100, 4)).toBe(25);
      expect(divide(7, 2)).toBe(3.5);
    });

    it('should divide negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });

    it('should divide by decimal numbers', () => {
      expect(divide(10, 0.5)).toBe(20);
      expect(divide(5, 0.25)).toBe(20);
    });

    it('should handle zero dividend', () => {
      expect(divide(0, 5)).toBe(0);
      expect(divide(0, -5)).toBe(-0);
    });
  });

  describe('division by zero', () => {
    it('should throw DivisionByZeroError when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow(DivisionByZeroError);
      expect(() => divide(0, 0)).toThrow(DivisionByZeroError);
      expect(() => divide(-10, 0)).toThrow(DivisionByZeroError);
    });

    it('should have correct error message', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is undefined');
    });
  });

  describe('edge cases', () => {
    it('should handle very large numbers', () => {
      expect(divide(1e15, 1e5)).toBe(1e10);
    });

    it('should handle very small numbers', () => {
      expect(divide(1e-10, 1e-5)).toBeCloseTo(1e-5);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => divide(NaN, 5)).toThrow(InvalidInputError);
      expect(() => divide(5, NaN)).toThrow(InvalidInputError);
      expect(() => divide(Infinity, 5)).toThrow(InvalidInputError);
    });
  });
});

describe('modulo', () => {
  describe('basic modulo', () => {
    it('should calculate modulo correctly for positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(modulo(17, 5)).toBe(2);
      expect(modulo(20, 4)).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
      expect(modulo(10, -3)).toBe(1);
      expect(modulo(-10, -3)).toBe(-1);
    });

    it('should handle decimal numbers', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
      expect(modulo(7.8, 2.5)).toBeCloseTo(0.3, 1);
    });

    it('should handle zero dividend', () => {
      expect(modulo(0, 5)).toBe(0);
    });
  });

  describe('division by zero', () => {
    it('should throw DivisionByZeroError when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow(DivisionByZeroError);
      expect(() => modulo(0, 0)).toThrow(DivisionByZeroError);
    });
  });

  describe('edge cases', () => {
    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => modulo(NaN, 5)).toThrow(InvalidInputError);
      expect(() => modulo(5, NaN)).toThrow(InvalidInputError);
    });
  });
});

describe('abs', () => {
  it('should return absolute value of positive numbers', () => {
    expect(abs(5)).toBe(5);
    expect(abs(100)).toBe(100);
    expect(abs(3.14)).toBe(3.14);
  });

  it('should return absolute value of negative numbers', () => {
    expect(abs(-5)).toBe(5);
    expect(abs(-100)).toBe(100);
    expect(abs(-3.14)).toBe(3.14);
  });

  it('should return 0 for 0', () => {
    expect(abs(0)).toBe(0);
    expect(abs(-0)).toBe(0);
  });

  it('should handle very large numbers', () => {
    expect(abs(-1e15)).toBe(1e15);
    expect(abs(1e15)).toBe(1e15);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => abs(NaN)).toThrow(InvalidInputError);
    expect(() => abs(Infinity)).toThrow(InvalidInputError);
  });
});

describe('sign', () => {
  it('should return 1 for positive numbers', () => {
    expect(sign(5)).toBe(1);
    expect(sign(100)).toBe(1);
    expect(sign(0.001)).toBe(1);
  });

  it('should return -1 for negative numbers', () => {
    expect(sign(-5)).toBe(-1);
    expect(sign(-100)).toBe(-1);
    expect(sign(-0.001)).toBe(-1);
  });

  it('should return 0 for zero', () => {
    expect(sign(0)).toBe(0);
    expect(sign(-0)).toBe(-0);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => sign(NaN)).toThrow(InvalidInputError);
    expect(() => sign(Infinity)).toThrow(InvalidInputError);
  });
});

describe('ceil', () => {
  it('should round up positive numbers', () => {
    expect(ceil(3.1)).toBe(4);
    expect(ceil(3.9)).toBe(4);
    expect(ceil(3.0)).toBe(3);
  });

  it('should round up negative numbers', () => {
    expect(ceil(-3.1)).toBe(-3);
    expect(ceil(-3.9)).toBe(-3);
    expect(ceil(-3.0)).toBe(-3);
  });

  it('should handle zero', () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(-0)).toBe(-0);
  });

  it('should handle integers', () => {
    expect(ceil(5)).toBe(5);
    expect(ceil(-5)).toBe(-5);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => ceil(NaN)).toThrow(InvalidInputError);
    expect(() => ceil(Infinity)).toThrow(InvalidInputError);
  });
});

describe('floor', () => {
  it('should round down positive numbers', () => {
    expect(floor(3.1)).toBe(3);
    expect(floor(3.9)).toBe(3);
    expect(floor(3.0)).toBe(3);
  });

  it('should round down negative numbers', () => {
    expect(floor(-3.1)).toBe(-4);
    expect(floor(-3.9)).toBe(-4);
    expect(floor(-3.0)).toBe(-3);
  });

  it('should handle zero', () => {
    expect(floor(0)).toBe(0);
    expect(floor(-0)).toBe(-0);
  });

  it('should handle integers', () => {
    expect(floor(5)).toBe(5);
    expect(floor(-5)).toBe(-5);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => floor(NaN)).toThrow(InvalidInputError);
    expect(() => floor(Infinity)).toThrow(InvalidInputError);
  });
});

describe('round', () => {
  it('should round to nearest integer for positive numbers', () => {
    expect(round(3.4)).toBe(3);
    expect(round(3.5)).toBe(4);
    expect(round(3.6)).toBe(4);
    expect(round(3.0)).toBe(3);
  });

  it('should round to nearest integer for negative numbers', () => {
    expect(round(-3.4)).toBe(-3);
    expect(round(-3.5)).toBe(-3); // JavaScript rounds -3.5 to -3
    expect(round(-3.6)).toBe(-4);
  });

  it('should handle zero', () => {
    expect(round(0)).toBe(0);
    expect(round(0.4)).toBe(0);
    expect(round(-0.4)).toBe(-0);
  });

  it('should handle large numbers', () => {
    expect(round(1234567.89)).toBe(1234568);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => round(NaN)).toThrow(InvalidInputError);
    expect(() => round(Infinity)).toThrow(InvalidInputError);
  });
});

describe('roundToDecimal', () => {
  it('should round to specified decimal places', () => {
    expect(roundToDecimal(3.14159, 2)).toBeCloseTo(3.14);
    expect(roundToDecimal(3.14159, 3)).toBeCloseTo(3.142);
    expect(roundToDecimal(3.14159, 0)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(roundToDecimal(-3.14159, 2)).toBeCloseTo(-3.14);
    expect(roundToDecimal(-3.14159, 3)).toBeCloseTo(-3.142);
  });

  it('should handle zero decimal places', () => {
    expect(roundToDecimal(3.7, 0)).toBe(4);
    expect(roundToDecimal(3.4, 0)).toBe(3);
  });

  it('should handle large decimal places', () => {
    expect(roundToDecimal(3.14159, 10)).toBe(3.14159);
  });

  it('should handle rounding up', () => {
    expect(roundToDecimal(1.005, 2)).toBeCloseTo(1.01, 1);
    expect(roundToDecimal(1.995, 2)).toBeCloseTo(2.0, 1);
  });

  it('should throw InvalidInputError for negative decimal places', () => {
    expect(() => roundToDecimal(3.14, -1)).toThrow(InvalidInputError);
    expect(() => roundToDecimal(3.14, -5)).toThrow(InvalidInputError);
  });

  it('should throw InvalidInputError for non-integer decimal places', () => {
    expect(() => roundToDecimal(3.14, 1.5)).toThrow(InvalidInputError);
    expect(() => roundToDecimal(3.14, 2.7)).toThrow(InvalidInputError);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => roundToDecimal(NaN, 2)).toThrow(InvalidInputError);
    expect(() => roundToDecimal(3.14, NaN)).toThrow(InvalidInputError);
    expect(() => roundToDecimal(Infinity, 2)).toThrow(InvalidInputError);
  });

  it('should handle zero', () => {
    expect(roundToDecimal(0, 2)).toBe(0);
    expect(roundToDecimal(0, 0)).toBe(0);
  });
});

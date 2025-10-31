/**
 * Comprehensive tests for the Calculator class
 */

import { Calculator } from '../calculator';
import { DivisionByZeroError, DomainError, OverflowError } from '../errors';
import { PI, E } from '../constants';

describe('Calculator', () => {
  describe('constructor and configuration', () => {
    it('should create calculator with default settings', () => {
      const calc = new Calculator();
      expect(calc.getAngleUnit()).toBe('radians');
      expect(calc.getPrecision()).toBe(15);
    });

    it('should create calculator with custom angle unit', () => {
      const calc = new Calculator({ angleUnit: 'degrees' });
      expect(calc.getAngleUnit()).toBe('degrees');
    });

    it('should create calculator with custom precision', () => {
      const calc = new Calculator({ precision: 5 });
      expect(calc.getPrecision()).toBe(5);
    });

    it('should create calculator with both custom options', () => {
      const calc = new Calculator({ angleUnit: 'degrees', precision: 10 });
      expect(calc.getAngleUnit()).toBe('degrees');
      expect(calc.getPrecision()).toBe(10);
    });
  });

  describe('setAngleUnit and getAngleUnit', () => {
    it('should set and get angle unit', () => {
      const calc = new Calculator();
      calc.setAngleUnit('degrees');
      expect(calc.getAngleUnit()).toBe('degrees');

      calc.setAngleUnit('radians');
      expect(calc.getAngleUnit()).toBe('radians');
    });
  });

  describe('setPrecision and getPrecision', () => {
    it('should set valid precision values', () => {
      const calc = new Calculator();
      calc.setPrecision(0);
      expect(calc.getPrecision()).toBe(0);

      calc.setPrecision(5);
      expect(calc.getPrecision()).toBe(5);

      calc.setPrecision(15);
      expect(calc.getPrecision()).toBe(15);
    });

    it('should throw error for precision < 0', () => {
      const calc = new Calculator();
      expect(() => calc.setPrecision(-1)).toThrow('Precision must be between 0 and 15');
    });

    it('should throw error for precision > 15', () => {
      const calc = new Calculator();
      expect(() => calc.setPrecision(16)).toThrow('Precision must be between 0 and 15');
      expect(() => calc.setPrecision(20)).toThrow('Precision must be between 0 and 15');
    });
  });

  describe('basic arithmetic operations', () => {
    let calc: Calculator;

    beforeEach(() => {
      calc = new Calculator();
    });

    describe('add', () => {
      it('should add numbers correctly', () => {
        expect(calc.add(2, 3)).toBe(5);
        expect(calc.add(-5, 3)).toBe(-2);
        expect(calc.add(0, 0)).toBe(0);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(2);
        expect(calc.add(1.234, 2.345)).toBe(3.58);
      });
    });

    describe('subtract', () => {
      it('should subtract numbers correctly', () => {
        expect(calc.subtract(5, 3)).toBe(2);
        expect(calc.subtract(3, 5)).toBe(-2);
        expect(calc.subtract(-5, -3)).toBe(-2);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(2);
        expect(calc.subtract(5.678, 2.345)).toBe(3.33);
      });
    });

    describe('multiply', () => {
      it('should multiply numbers correctly', () => {
        expect(calc.multiply(3, 4)).toBe(12);
        expect(calc.multiply(-3, 4)).toBe(-12);
        expect(calc.multiply(0, 5)).toBe(0);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(2);
        expect(calc.multiply(1.234, 2.5)).toBe(3.09);
      });
    });

    describe('divide', () => {
      it('should divide numbers correctly', () => {
        expect(calc.divide(10, 2)).toBe(5);
        expect(calc.divide(7, 2)).toBe(3.5);
        expect(calc.divide(-10, 2)).toBe(-5);
      });

      it('should throw DivisionByZeroError for division by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow(DivisionByZeroError);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(2);
        expect(calc.divide(10, 3)).toBe(3.33);
      });
    });

    describe('modulo', () => {
      it('should calculate modulo correctly', () => {
        expect(calc.modulo(10, 3)).toBe(1);
        expect(calc.modulo(17, 5)).toBe(2);
      });

      it('should throw DivisionByZeroError for modulo by zero', () => {
        expect(() => calc.modulo(10, 0)).toThrow(DivisionByZeroError);
      });
    });

    describe('abs', () => {
      it('should return absolute value', () => {
        expect(calc.abs(5)).toBe(5);
        expect(calc.abs(-5)).toBe(5);
        expect(calc.abs(0)).toBe(0);
      });
    });

    describe('sign', () => {
      it('should return sign of number', () => {
        expect(calc.sign(5)).toBe(1);
        expect(calc.sign(-5)).toBe(-1);
        expect(calc.sign(0)).toBe(0);
      });
    });

    describe('ceil, floor, round', () => {
      it('should ceil numbers correctly', () => {
        expect(calc.ceil(3.1)).toBe(4);
        expect(calc.ceil(-3.9)).toBe(-3);
      });

      it('should floor numbers correctly', () => {
        expect(calc.floor(3.9)).toBe(3);
        expect(calc.floor(-3.1)).toBe(-4);
      });

      it('should round numbers correctly', () => {
        expect(calc.round(3.4)).toBe(3);
        expect(calc.round(3.5)).toBe(4);
      });
    });
  });

  describe('power and root operations', () => {
    let calc: Calculator;

    beforeEach(() => {
      calc = new Calculator();
    });

    describe('power', () => {
      it('should calculate powers correctly', () => {
        expect(calc.power(2, 3)).toBe(8);
        expect(calc.power(3, 2)).toBe(9);
        expect(calc.power(5, 0)).toBe(1);
      });

      it('should handle negative exponents', () => {
        expect(calc.power(2, -1)).toBe(0.5);
        expect(calc.power(10, -2)).toBe(0.01);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(3);
        expect(calc.power(2, 0.5)).toBe(1.414);
      });

      it('should throw OverflowError on overflow', () => {
        expect(() => calc.power(10, 400)).toThrow(OverflowError);
      });
    });

    describe('sqrt', () => {
      it('should calculate square roots correctly', () => {
        expect(calc.sqrt(4)).toBe(2);
        expect(calc.sqrt(9)).toBe(3);
        expect(calc.sqrt(0)).toBe(0);
      });

      it('should throw DomainError for negative numbers', () => {
        expect(() => calc.sqrt(-1)).toThrow(DomainError);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(2);
        expect(calc.sqrt(2)).toBe(1.41);
      });
    });

    describe('nthRoot', () => {
      it('should calculate nth roots correctly', () => {
        expect(calc.nthRoot(8, 3)).toBeCloseTo(2);
        expect(calc.nthRoot(16, 4)).toBeCloseTo(2);
      });

      it('should handle odd roots of negative numbers', () => {
        expect(calc.nthRoot(-8, 3)).toBeCloseTo(-2);
      });

      it('should throw DomainError for even root of negative number', () => {
        expect(() => calc.nthRoot(-4, 2)).toThrow(DomainError);
      });
    });

    describe('factorial', () => {
      it('should calculate factorials correctly', () => {
        expect(calc.factorial(0)).toBe(1);
        expect(calc.factorial(5)).toBe(120);
        expect(calc.factorial(10)).toBe(3628800);
      });

      it('should throw DomainError for negative numbers', () => {
        expect(() => calc.factorial(-1)).toThrow(DomainError);
      });

      it('should throw DomainError for non-integers', () => {
        expect(() => calc.factorial(3.5)).toThrow(DomainError);
      });
    });
  });

  describe('logarithmic functions', () => {
    let calc: Calculator;

    beforeEach(() => {
      calc = new Calculator();
    });

    describe('ln', () => {
      it('should calculate natural logarithm correctly', () => {
        expect(calc.ln(1)).toBe(0);
        expect(calc.ln(E)).toBeCloseTo(1);
      });

      it('should throw DomainError for non-positive numbers', () => {
        expect(() => calc.ln(0)).toThrow(DomainError);
        expect(() => calc.ln(-1)).toThrow(DomainError);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(3);
        expect(calc.ln(10)).toBe(2.303);
      });
    });

    describe('log10', () => {
      it('should calculate base-10 logarithm correctly', () => {
        expect(calc.log10(1)).toBe(0);
        expect(calc.log10(10)).toBeCloseTo(1);
        expect(calc.log10(100)).toBeCloseTo(2);
      });

      it('should throw DomainError for non-positive numbers', () => {
        expect(() => calc.log10(0)).toThrow(DomainError);
        expect(() => calc.log10(-10)).toThrow(DomainError);
      });
    });

    describe('log2', () => {
      it('should calculate base-2 logarithm correctly', () => {
        expect(calc.log2(1)).toBe(0);
        expect(calc.log2(2)).toBeCloseTo(1);
        expect(calc.log2(8)).toBeCloseTo(3);
      });

      it('should throw DomainError for non-positive numbers', () => {
        expect(() => calc.log2(0)).toThrow(DomainError);
        expect(() => calc.log2(-2)).toThrow(DomainError);
      });
    });

    describe('exp', () => {
      it('should calculate exponential correctly', () => {
        expect(calc.exp(0)).toBe(1);
        expect(calc.exp(1)).toBeCloseTo(E);
      });

      it('should throw OverflowError for very large values', () => {
        expect(() => calc.exp(1000)).toThrow(OverflowError);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(2);
        expect(calc.exp(1)).toBe(2.72);
      });
    });
  });

  describe('trigonometric functions with angle unit settings', () => {
    describe('radians mode', () => {
      let calc: Calculator;

      beforeEach(() => {
        calc = new Calculator({ angleUnit: 'radians' });
      });

      it('should calculate sin in radians', () => {
        expect(calc.sin(0)).toBeCloseTo(0);
        expect(calc.sin(PI / 2)).toBeCloseTo(1);
        expect(calc.sin(PI)).toBeCloseTo(0, 10);
      });

      it('should calculate cos in radians', () => {
        expect(calc.cos(0)).toBeCloseTo(1);
        expect(calc.cos(PI / 2)).toBeCloseTo(0, 10);
        expect(calc.cos(PI)).toBeCloseTo(-1);
      });

      it('should calculate tan in radians', () => {
        expect(calc.tan(0)).toBeCloseTo(0);
        expect(calc.tan(PI / 4)).toBeCloseTo(1);
      });

      it('should calculate inverse trig functions in radians', () => {
        expect(calc.asin(0)).toBeCloseTo(0);
        expect(calc.asin(1)).toBeCloseTo(PI / 2);

        expect(calc.acos(1)).toBeCloseTo(0);
        expect(calc.acos(0)).toBeCloseTo(PI / 2);

        expect(calc.atan(0)).toBeCloseTo(0);
        expect(calc.atan(1)).toBeCloseTo(PI / 4);
      });
    });

    describe('degrees mode', () => {
      let calc: Calculator;

      beforeEach(() => {
        calc = new Calculator({ angleUnit: 'degrees' });
      });

      it('should calculate sin in degrees', () => {
        expect(calc.sin(0)).toBeCloseTo(0);
        expect(calc.sin(90)).toBeCloseTo(1);
        expect(calc.sin(180)).toBeCloseTo(0, 10);
      });

      it('should calculate cos in degrees', () => {
        expect(calc.cos(0)).toBeCloseTo(1);
        expect(calc.cos(90)).toBeCloseTo(0, 10);
        expect(calc.cos(180)).toBeCloseTo(-1);
      });

      it('should calculate tan in degrees', () => {
        expect(calc.tan(0)).toBeCloseTo(0);
        expect(calc.tan(45)).toBeCloseTo(1);
      });

      it('should calculate inverse trig functions in degrees', () => {
        expect(calc.asin(0)).toBeCloseTo(0);
        expect(calc.asin(1)).toBeCloseTo(90);

        expect(calc.acos(1)).toBeCloseTo(0);
        expect(calc.acos(0)).toBeCloseTo(90);

        expect(calc.atan(0)).toBeCloseTo(0);
        expect(calc.atan(1)).toBeCloseTo(45);
      });
    });

    describe('switching between modes', () => {
      it('should work correctly when switching angle units', () => {
        const calc = new Calculator({ angleUnit: 'radians' });
        expect(calc.sin(PI / 2)).toBeCloseTo(1);

        calc.setAngleUnit('degrees');
        expect(calc.sin(90)).toBeCloseTo(1);

        calc.setAngleUnit('radians');
        expect(calc.sin(PI / 2)).toBeCloseTo(1);
      });
    });

    describe('atan2', () => {
      it('should calculate atan2 in radians mode', () => {
        const calc = new Calculator({ angleUnit: 'radians' });
        expect(calc.atan2(1, 1)).toBeCloseTo(PI / 4);
        expect(calc.atan2(1, 0)).toBeCloseTo(PI / 2);
      });

      it('should calculate atan2 in degrees mode', () => {
        const calc = new Calculator({ angleUnit: 'degrees' });
        expect(calc.atan2(1, 1)).toBeCloseTo(45);
        expect(calc.atan2(1, 0)).toBeCloseTo(90);
      });
    });

    describe('domain restrictions', () => {
      it('should throw DomainError for tan at discontinuities', () => {
        const calcRad = new Calculator({ angleUnit: 'radians' });
        expect(() => calcRad.tan(PI / 2)).toThrow(DomainError);

        const calcDeg = new Calculator({ angleUnit: 'degrees' });
        expect(() => calcDeg.tan(90)).toThrow(DomainError);
      });

      it('should throw DomainError for asin outside [-1, 1]', () => {
        const calc = new Calculator();
        expect(() => calc.asin(1.5)).toThrow(DomainError);
        expect(() => calc.asin(-1.5)).toThrow(DomainError);
      });

      it('should throw DomainError for acos outside [-1, 1]', () => {
        const calc = new Calculator();
        expect(() => calc.acos(1.5)).toThrow(DomainError);
        expect(() => calc.acos(-1.5)).toThrow(DomainError);
      });
    });
  });

  describe('hyperbolic functions', () => {
    let calc: Calculator;

    beforeEach(() => {
      calc = new Calculator();
    });

    describe('sinh', () => {
      it('should calculate hyperbolic sine', () => {
        expect(calc.sinh(0)).toBeCloseTo(0);
        expect(calc.sinh(1)).toBeCloseTo(1.1752011936);
      });

      it('should throw OverflowError for very large values', () => {
        expect(() => calc.sinh(1000)).toThrow(OverflowError);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(3);
        expect(calc.sinh(1)).toBe(1.175);
      });
    });

    describe('cosh', () => {
      it('should calculate hyperbolic cosine', () => {
        expect(calc.cosh(0)).toBeCloseTo(1);
        expect(calc.cosh(1)).toBeCloseTo(1.5430806348);
      });

      it('should throw OverflowError for very large values', () => {
        expect(() => calc.cosh(1000)).toThrow(OverflowError);
      });
    });

    describe('tanh', () => {
      it('should calculate hyperbolic tangent', () => {
        expect(calc.tanh(0)).toBeCloseTo(0);
        expect(calc.tanh(1)).toBeCloseTo(0.7615941559);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(2);
        expect(calc.tanh(1)).toBe(0.76);
      });
    });

    describe('asinh', () => {
      it('should calculate inverse hyperbolic sine', () => {
        expect(calc.asinh(0)).toBeCloseTo(0);
        expect(calc.asinh(1)).toBeCloseTo(0.8813735870);
      });

      it('should respect precision setting', () => {
        calc.setPrecision(3);
        expect(calc.asinh(1)).toBe(0.881);
      });
    });

    describe('acosh', () => {
      it('should calculate inverse hyperbolic cosine', () => {
        expect(calc.acosh(1)).toBeCloseTo(0);
        expect(calc.acosh(2)).toBeCloseTo(1.3169578969);
      });

      it('should throw DomainError for values < 1', () => {
        expect(() => calc.acosh(0.5)).toThrow(DomainError);
      });
    });

    describe('atanh', () => {
      it('should calculate inverse hyperbolic tangent', () => {
        expect(calc.atanh(0)).toBeCloseTo(0);
        expect(calc.atanh(0.5)).toBeCloseTo(0.5493061443);
      });

      it('should throw DomainError for values outside (-1, 1)', () => {
        expect(() => calc.atanh(1)).toThrow(DomainError);
        expect(() => calc.atanh(-1)).toThrow(DomainError);
        expect(() => calc.atanh(1.5)).toThrow(DomainError);
      });
    });
  });

  describe('conversion utilities', () => {
    let calc: Calculator;

    beforeEach(() => {
      calc = new Calculator();
    });

    it('should convert degrees to radians', () => {
      expect(calc.degreesToRadians(0)).toBe(0);
      expect(calc.degreesToRadians(90)).toBeCloseTo(PI / 2);
      expect(calc.degreesToRadians(180)).toBeCloseTo(PI);
    });

    it('should convert radians to degrees', () => {
      expect(calc.radiansToDegrees(0)).toBe(0);
      expect(calc.radiansToDegrees(PI / 2)).toBeCloseTo(90);
      expect(calc.radiansToDegrees(PI)).toBeCloseTo(180);
    });

    it('should be inverses of each other', () => {
      expect(calc.radiansToDegrees(calc.degreesToRadians(45))).toBeCloseTo(45);
      expect(calc.degreesToRadians(calc.radiansToDegrees(1))).toBeCloseTo(1);
    });
  });

  describe('precision handling', () => {
    it('should apply precision to all operations that support it', () => {
      const calc = new Calculator({ precision: 2 });

      expect(calc.add(1.234, 2.345)).toBe(3.58);
      expect(calc.subtract(5.678, 2.345)).toBe(3.33);
      expect(calc.multiply(1.234, 2.5)).toBe(3.09);
      expect(calc.divide(10, 3)).toBe(3.33);
      expect(calc.power(2, 0.5)).toBe(1.41);
      expect(calc.sqrt(2)).toBe(1.41);
    });

    it('should handle precision 0 (round to integer)', () => {
      const calc = new Calculator();
      calc.setPrecision(0); // Use setPrecision to avoid constructor's || operator issue

      // 1.7 + 2.8 = 4.5, Math.round(4.5) = 5 in JavaScript
      expect(calc.add(1.7, 2.8)).toBe(5);
      expect(calc.divide(10, 3)).toBe(3);
      expect(calc.sqrt(2)).toBe(1);
    });

    it('should handle maximum precision (15)', () => {
      const calc = new Calculator({ precision: 15 });
      const result = calc.add(1.123456789012345, 2.234567890123456);

      // With max precision, result should not be rounded
      expect(result).toBeCloseTo(3.358024679135801);
    });

    it('should not apply precision to integer operations', () => {
      const calc = new Calculator({ precision: 2 });

      expect(calc.abs(-5)).toBe(5);
      expect(calc.sign(5)).toBe(1);
      expect(calc.ceil(3.1)).toBe(4);
      expect(calc.floor(3.9)).toBe(3);
      expect(calc.round(3.5)).toBe(4);
      expect(calc.factorial(5)).toBe(120);
    });
  });

  describe('chaining operations', () => {
    it('should support chaining multiple operations', () => {
      const calc = new Calculator({ precision: 2 });

      // (2 + 3) * 4 = 20
      const result1 = calc.multiply(calc.add(2, 3), 4);
      expect(result1).toBe(20);

      // sqrt(16) + 2 = 6
      const result2 = calc.add(calc.sqrt(16), 2);
      expect(result2).toBe(6);

      // sin(45°) in degrees mode
      calc.setAngleUnit('degrees');
      const result3 = calc.sin(45);
      expect(result3).toBeCloseTo(0.71, 2);
    });
  });

  describe('edge cases and stress testing', () => {
    let calc: Calculator;

    beforeEach(() => {
      calc = new Calculator();
    });

    it('should handle very small numbers', () => {
      expect(calc.add(1e-10, 1e-10)).toBeCloseTo(2e-10);
      expect(calc.multiply(1e-5, 1e-5)).toBeCloseTo(1e-10);
    });

    it('should handle very large numbers', () => {
      expect(calc.add(1e15, 1e15)).toBe(2e15);
      expect(calc.multiply(1e10, 1e5)).toBe(1e15);
    });

    it('should handle zero in various operations', () => {
      expect(calc.add(0, 0)).toBe(0);
      expect(calc.multiply(5, 0)).toBe(0);
      expect(calc.power(0, 5)).toBe(0);
      expect(calc.sqrt(0)).toBe(0);
      expect(calc.sin(0)).toBeCloseTo(0);
      expect(calc.abs(0)).toBe(0);
    });

    it('should maintain accuracy across multiple operations', () => {
      calc.setPrecision(10);

      let result = 0;
      for (let i = 0; i < 100; i++) {
        result = calc.add(result, 0.01);
      }

      expect(result).toBeCloseTo(1, 9);
    });
  });
});

/**
 * Comprehensive tests for error classes and error handling
 */

import {
  CalculatorError,
  DivisionByZeroError,
  InvalidInputError,
  OverflowError,
  UnderflowError,
  DomainError,
} from '../errors';
import * as basicOps from '../basicOperations';
import * as scientificOps from '../scientificOperations';
import { Calculator } from '../calculator';

describe('Error Classes', () => {
  describe('CalculatorError', () => {
    it('should create error with message', () => {
      const error = new CalculatorError('Test error');
      expect(error.message).toBe('Test error');
      expect(error.name).toBe('CalculatorError');
    });

    it('should be instance of Error', () => {
      const error = new CalculatorError('Test error');
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(CalculatorError);
    });
  });

  describe('DivisionByZeroError', () => {
    it('should create error with correct message', () => {
      const error = new DivisionByZeroError();
      expect(error.message).toBe('Division by zero is undefined');
      expect(error.name).toBe('DivisionByZeroError');
    });

    it('should be instance of CalculatorError', () => {
      const error = new DivisionByZeroError();
      expect(error).toBeInstanceOf(CalculatorError);
      expect(error).toBeInstanceOf(DivisionByZeroError);
    });

    it('should be thrown by divide operation', () => {
      expect(() => basicOps.divide(10, 0)).toThrow(DivisionByZeroError);
    });

    it('should be thrown by modulo operation', () => {
      expect(() => basicOps.modulo(10, 0)).toThrow(DivisionByZeroError);
    });

    it('should be catchable', () => {
      try {
        basicOps.divide(10, 0);
        fail('Should have thrown error');
      } catch (error) {
        expect(error).toBeInstanceOf(DivisionByZeroError);
        if (error instanceof DivisionByZeroError) {
          expect(error.message).toBe('Division by zero is undefined');
        }
      }
    });
  });

  describe('InvalidInputError', () => {
    it('should create error with custom message', () => {
      const error = new InvalidInputError('test input');
      expect(error.message).toBe('Invalid input: test input');
      expect(error.name).toBe('InvalidInputError');
    });

    it('should be instance of CalculatorError', () => {
      const error = new InvalidInputError('test');
      expect(error).toBeInstanceOf(CalculatorError);
      expect(error).toBeInstanceOf(InvalidInputError);
    });

    it('should be thrown for NaN inputs', () => {
      expect(() => basicOps.add(NaN, 5)).toThrow(InvalidInputError);
      expect(() => basicOps.add(NaN, 5)).toThrow('add requires a finite number');
    });

    it('should be thrown for Infinity inputs', () => {
      expect(() => basicOps.add(Infinity, 5)).toThrow(InvalidInputError);
      expect(() => basicOps.subtract(5, -Infinity)).toThrow(InvalidInputError);
    });

    it('should be thrown for non-number inputs', () => {
      expect(() => basicOps.add('5' as any, 10)).toThrow(InvalidInputError);
      expect(() => basicOps.multiply(null as any, 10)).toThrow(InvalidInputError);
    });

    it('should be thrown for invalid decimal places in roundToDecimal', () => {
      expect(() => basicOps.roundToDecimal(3.14, -1)).toThrow(InvalidInputError);
      expect(() => basicOps.roundToDecimal(3.14, 2.5)).toThrow(InvalidInputError);
    });

    it('should be thrown for invalid precision in Calculator', () => {
      const calc = new Calculator();
      expect(() => calc.setPrecision(-1)).toThrow('Precision must be between 0 and 15');
      expect(() => calc.setPrecision(16)).toThrow('Precision must be between 0 and 15');
    });
  });

  describe('OverflowError', () => {
    it('should create error with operation name', () => {
      const error = new OverflowError('addition');
      expect(error.message).toBe('Overflow occurred in addition operation');
      expect(error.name).toBe('OverflowError');
    });

    it('should be instance of CalculatorError', () => {
      const error = new OverflowError('test');
      expect(error).toBeInstanceOf(CalculatorError);
      expect(error).toBeInstanceOf(OverflowError);
    });

    it('should be thrown by addition overflow', () => {
      expect(() => basicOps.add(Number.MAX_VALUE, Number.MAX_VALUE)).toThrow(OverflowError);
    });

    it('should be thrown by multiplication overflow', () => {
      expect(() => basicOps.multiply(Number.MAX_VALUE, 2)).toThrow(OverflowError);
    });

    it('should be thrown by power overflow', () => {
      expect(() => scientificOps.power(10, 400)).toThrow(OverflowError);
    });

    it('should be thrown by exp overflow', () => {
      expect(() => scientificOps.exp(1000)).toThrow(OverflowError);
    });

    it('should be thrown by sinh/cosh overflow', () => {
      expect(() => scientificOps.sinh(1000)).toThrow(OverflowError);
      expect(() => scientificOps.cosh(1000)).toThrow(OverflowError);
    });

    it('should be thrown by factorial overflow', () => {
      expect(() => scientificOps.factorial(171)).toThrow(OverflowError);
    });

    it('should have correct error message', () => {
      try {
        basicOps.multiply(Number.MAX_VALUE, 2);
        fail('Should have thrown error');
      } catch (error) {
        expect(error).toBeInstanceOf(OverflowError);
        if (error instanceof OverflowError) {
          expect(error.message).toContain('multiplication');
        }
      }
    });
  });

  describe('UnderflowError', () => {
    it('should create error with operation name', () => {
      const error = new UnderflowError('division');
      expect(error.message).toBe('Underflow occurred in division operation');
      expect(error.name).toBe('UnderflowError');
    });

    it('should be instance of CalculatorError', () => {
      const error = new UnderflowError('test');
      expect(error).toBeInstanceOf(CalculatorError);
      expect(error).toBeInstanceOf(UnderflowError);
    });
  });

  describe('DomainError', () => {
    it('should create error with operation and reason', () => {
      const error = new DomainError('sqrt', 'negative number');
      expect(error.message).toBe('Domain error in sqrt: negative number');
      expect(error.name).toBe('DomainError');
    });

    it('should be instance of CalculatorError', () => {
      const error = new DomainError('test', 'test reason');
      expect(error).toBeInstanceOf(CalculatorError);
      expect(error).toBeInstanceOf(DomainError);
    });

    it('should be thrown by sqrt of negative number', () => {
      expect(() => scientificOps.sqrt(-1)).toThrow(DomainError);
      expect(() => scientificOps.sqrt(-1)).toThrow('cannot take square root of negative number');
    });

    it('should be thrown by logarithms of non-positive numbers', () => {
      expect(() => scientificOps.ln(0)).toThrow(DomainError);
      expect(() => scientificOps.ln(-1)).toThrow(DomainError);
      expect(() => scientificOps.log10(0)).toThrow(DomainError);
      expect(() => scientificOps.log2(-1)).toThrow(DomainError);
    });

    it('should be thrown by factorial of negative or non-integer', () => {
      expect(() => scientificOps.factorial(-1)).toThrow(DomainError);
      expect(() => scientificOps.factorial(3.5)).toThrow(DomainError);
    });

    it('should be thrown by asin/acos outside [-1, 1]', () => {
      expect(() => scientificOps.asin(1.5)).toThrow(DomainError);
      expect(() => scientificOps.asin(-1.5)).toThrow(DomainError);
      expect(() => scientificOps.acos(2)).toThrow(DomainError);
    });

    it('should be thrown by acosh for values < 1', () => {
      expect(() => scientificOps.acosh(0.5)).toThrow(DomainError);
      expect(() => scientificOps.acosh(0)).toThrow(DomainError);
    });

    it('should be thrown by atanh outside (-1, 1)', () => {
      expect(() => scientificOps.atanh(1)).toThrow(DomainError);
      expect(() => scientificOps.atanh(-1)).toThrow(DomainError);
      expect(() => scientificOps.atanh(1.5)).toThrow(DomainError);
    });

    it('should be thrown by nthRoot for even root of negative', () => {
      expect(() => scientificOps.nthRoot(-4, 2)).toThrow(DomainError);
      expect(() => scientificOps.nthRoot(-16, 4)).toThrow(DomainError);
    });

    it('should be thrown by nthRoot for zero root degree', () => {
      expect(() => scientificOps.nthRoot(8, 0)).toThrow(DomainError);
    });

    it('should be thrown by tan at discontinuities', () => {
      expect(() => scientificOps.tan(Math.PI / 2)).toThrow(DomainError);
      expect(() => scientificOps.tan(90, 'degrees')).toThrow(DomainError);
    });

    it('should be thrown by power for complex results', () => {
      expect(() => scientificOps.power(-1, 0.5)).toThrow(DomainError);
    });
  });
});

describe('Error Handling Integration Tests', () => {
  describe('Basic Operations', () => {
    it('should handle all error types in divide', () => {
      expect(() => basicOps.divide(10, 0)).toThrow(DivisionByZeroError);
      expect(() => basicOps.divide(NaN, 5)).toThrow(InvalidInputError);
      expect(() => basicOps.divide(Infinity, 5)).toThrow(InvalidInputError);
    });

    it('should handle all error types in modulo', () => {
      expect(() => basicOps.modulo(10, 0)).toThrow(DivisionByZeroError);
      expect(() => basicOps.modulo(NaN, 5)).toThrow(InvalidInputError);
    });

    it('should handle overflow in arithmetic operations', () => {
      expect(() => basicOps.add(Number.MAX_VALUE, Number.MAX_VALUE)).toThrow(OverflowError);
      expect(() => basicOps.subtract(-Number.MAX_VALUE, Number.MAX_VALUE)).toThrow(OverflowError);
      expect(() => basicOps.multiply(Number.MAX_VALUE, 2)).toThrow(OverflowError);
    });
  });

  describe('Scientific Operations', () => {
    it('should handle domain errors comprehensively', () => {
      // Square root domain
      expect(() => scientificOps.sqrt(-1)).toThrow(DomainError);

      // Logarithm domain
      expect(() => scientificOps.ln(0)).toThrow(DomainError);
      expect(() => scientificOps.ln(-1)).toThrow(DomainError);

      // Factorial domain
      expect(() => scientificOps.factorial(-1)).toThrow(DomainError);
      expect(() => scientificOps.factorial(3.5)).toThrow(DomainError);

      // Inverse trig domain
      expect(() => scientificOps.asin(2)).toThrow(DomainError);
      expect(() => scientificOps.acos(2)).toThrow(DomainError);

      // Inverse hyperbolic domain
      expect(() => scientificOps.acosh(0.5)).toThrow(DomainError);
      expect(() => scientificOps.atanh(1)).toThrow(DomainError);
    });

    it('should handle overflow in exponential functions', () => {
      expect(() => scientificOps.exp(1000)).toThrow(OverflowError);
      expect(() => scientificOps.power(10, 400)).toThrow(OverflowError);
      expect(() => scientificOps.sinh(1000)).toThrow(OverflowError);
      expect(() => scientificOps.cosh(1000)).toThrow(OverflowError);
    });
  });

  describe('Calculator Class Error Propagation', () => {
    let calc: Calculator;

    beforeEach(() => {
      calc = new Calculator();
    });

    it('should propagate DivisionByZeroError', () => {
      expect(() => calc.divide(10, 0)).toThrow(DivisionByZeroError);
      expect(() => calc.modulo(10, 0)).toThrow(DivisionByZeroError);
    });

    it('should propagate DomainError', () => {
      expect(() => calc.sqrt(-1)).toThrow(DomainError);
      expect(() => calc.ln(0)).toThrow(DomainError);
      expect(() => calc.factorial(-1)).toThrow(DomainError);
      expect(() => calc.asin(2)).toThrow(DomainError);
    });

    it('should propagate OverflowError', () => {
      expect(() => calc.add(Number.MAX_VALUE, Number.MAX_VALUE)).toThrow(OverflowError);
      expect(() => calc.exp(1000)).toThrow(OverflowError);
      expect(() => calc.factorial(171)).toThrow(OverflowError);
    });

    it('should throw error for invalid precision', () => {
      expect(() => calc.setPrecision(-1)).toThrow();
      expect(() => calc.setPrecision(16)).toThrow();
      expect(() => calc.setPrecision(NaN)).toThrow();
    });
  });

  describe('Error Messages', () => {
    it('should have descriptive messages for DivisionByZeroError', () => {
      try {
        basicOps.divide(10, 0);
        fail('Should have thrown');
      } catch (error: any) {
        expect(error.message).toBe('Division by zero is undefined');
      }
    });

    it('should have descriptive messages for DomainError', () => {
      const domainTests = [
        { fn: () => scientificOps.sqrt(-1), expectedPart: 'square root of negative' },
        { fn: () => scientificOps.ln(-1), expectedPart: 'only defined for positive' },
        { fn: () => scientificOps.factorial(-1), expectedPart: 'not defined for negative' },
        { fn: () => scientificOps.factorial(3.5), expectedPart: 'only defined for integers' },
        { fn: () => scientificOps.asin(2), expectedPart: 'only defined for values in [-1, 1]' },
        { fn: () => scientificOps.acosh(0.5), expectedPart: 'only defined for values >= 1' },
        { fn: () => scientificOps.atanh(1), expectedPart: 'only defined for values in (-1, 1)' },
        { fn: () => scientificOps.nthRoot(-4, 2), expectedPart: 'even root of negative' },
      ];

      domainTests.forEach(({ fn, expectedPart }) => {
        try {
          fn();
          fail('Should have thrown');
        } catch (error: any) {
          expect(error.message).toContain(expectedPart);
        }
      });
    });

    it('should have descriptive messages for OverflowError', () => {
      const overflowTests = [
        { fn: () => basicOps.add(Number.MAX_VALUE, Number.MAX_VALUE), operation: 'addition' },
        { fn: () => basicOps.multiply(Number.MAX_VALUE, 2), operation: 'multiplication' },
        { fn: () => scientificOps.exp(1000), operation: 'exp' },
        { fn: () => scientificOps.factorial(171), operation: 'factorial' },
      ];

      overflowTests.forEach(({ fn, operation }) => {
        try {
          fn();
          fail('Should have thrown');
        } catch (error: any) {
          expect(error.message).toContain(operation);
          expect(error.message).toContain('Overflow');
        }
      });
    });

    it('should have descriptive messages for InvalidInputError', () => {
      const invalidTests = [
        { fn: () => basicOps.add(NaN, 5), expectedPart: 'finite number' },
        { fn: () => basicOps.add(Infinity, 5), expectedPart: 'finite number' },
        { fn: () => basicOps.add('5' as any, 10), expectedPart: 'number' },
      ];

      invalidTests.forEach(({ fn, expectedPart }) => {
        try {
          fn();
          fail('Should have thrown');
        } catch (error: any) {
          expect(error.message).toContain(expectedPart);
        }
      });
    });
  });

  describe('Error Type Checking', () => {
    it('should allow proper error type checking with instanceof', () => {
      try {
        basicOps.divide(10, 0);
      } catch (error) {
        expect(error instanceof DivisionByZeroError).toBe(true);
        expect(error instanceof CalculatorError).toBe(true);
        expect(error instanceof Error).toBe(true);
      }

      try {
        scientificOps.sqrt(-1);
      } catch (error) {
        expect(error instanceof DomainError).toBe(true);
        expect(error instanceof CalculatorError).toBe(true);
      }

      try {
        basicOps.add(Number.MAX_VALUE, Number.MAX_VALUE);
      } catch (error) {
        expect(error instanceof OverflowError).toBe(true);
        expect(error instanceof CalculatorError).toBe(true);
      }

      try {
        basicOps.add(NaN, 5);
      } catch (error) {
        expect(error instanceof InvalidInputError).toBe(true);
        expect(error instanceof CalculatorError).toBe(true);
      }
    });

    it('should have correct name property', () => {
      const errors = [
        new CalculatorError('test'),
        new DivisionByZeroError(),
        new InvalidInputError('test'),
        new OverflowError('test'),
        new UnderflowError('test'),
        new DomainError('test', 'test'),
      ];

      expect(errors[0].name).toBe('CalculatorError');
      expect(errors[1].name).toBe('DivisionByZeroError');
      expect(errors[2].name).toBe('InvalidInputError');
      expect(errors[3].name).toBe('OverflowError');
      expect(errors[4].name).toBe('UnderflowError');
      expect(errors[5].name).toBe('DomainError');
    });
  });

  describe('Multiple Error Scenarios', () => {
    it('should handle sequential errors correctly', () => {
      const calc = new Calculator();

      // First error
      expect(() => calc.divide(10, 0)).toThrow(DivisionByZeroError);

      // Calculator should still work after error
      expect(calc.add(5, 3)).toBe(8);

      // Second error
      expect(() => calc.sqrt(-1)).toThrow(DomainError);

      // Still works
      expect(calc.multiply(2, 3)).toBe(6);
    });

    it('should handle nested operations with errors', () => {
      const calc = new Calculator();

      // This should fail at the inner sqrt
      expect(() => {
        const inner = calc.sqrt(-1); // This throws
        calc.add(inner, 5); // This shouldn't execute
      }).toThrow(DomainError);

      // This should fail at the division
      expect(() => {
        const inner = calc.divide(10, 0); // This throws
        calc.sqrt(inner); // This shouldn't execute
      }).toThrow(DivisionByZeroError);
    });
  });
});

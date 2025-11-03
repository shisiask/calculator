/**
 * Comprehensive tests for scientific operations
 */

import {
  degreesToRadians,
  radiansToDegrees,
  power,
  sqrt,
  nthRoot,
  factorial,
  ln,
  log10,
  log2,
  exp,
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  atan2,
  sinh,
  cosh,
  tanh,
  asinh,
  acosh,
  atanh,
} from '../scientificOperations';
import { DomainError, InvalidInputError, OverflowError } from '../errors';
import { PI, E } from '../constants';

describe('degreesToRadians', () => {
  it('should convert common angles correctly', () => {
    expect(degreesToRadians(0)).toBe(0);
    expect(degreesToRadians(90)).toBeCloseTo(PI / 2);
    expect(degreesToRadians(180)).toBeCloseTo(PI);
    expect(degreesToRadians(270)).toBeCloseTo((3 * PI) / 2);
    expect(degreesToRadians(360)).toBeCloseTo(2 * PI);
  });

  it('should handle negative angles', () => {
    expect(degreesToRadians(-90)).toBeCloseTo(-PI / 2);
    expect(degreesToRadians(-180)).toBeCloseTo(-PI);
  });

  it('should handle decimal angles', () => {
    expect(degreesToRadians(45)).toBeCloseTo(PI / 4);
    expect(degreesToRadians(30)).toBeCloseTo(PI / 6);
    expect(degreesToRadians(60)).toBeCloseTo(PI / 3);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => degreesToRadians(NaN)).toThrow(InvalidInputError);
    expect(() => degreesToRadians(Infinity)).toThrow(InvalidInputError);
  });
});

describe('radiansToDegrees', () => {
  it('should convert common angles correctly', () => {
    expect(radiansToDegrees(0)).toBe(0);
    expect(radiansToDegrees(PI / 2)).toBeCloseTo(90);
    expect(radiansToDegrees(PI)).toBeCloseTo(180);
    expect(radiansToDegrees((3 * PI) / 2)).toBeCloseTo(270);
    expect(radiansToDegrees(2 * PI)).toBeCloseTo(360);
  });

  it('should handle negative angles', () => {
    expect(radiansToDegrees(-PI / 2)).toBeCloseTo(-90);
    expect(radiansToDegrees(-PI)).toBeCloseTo(-180);
  });

  it('should be inverse of degreesToRadians', () => {
    expect(radiansToDegrees(degreesToRadians(45))).toBeCloseTo(45);
    expect(radiansToDegrees(degreesToRadians(123.45))).toBeCloseTo(123.45);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => radiansToDegrees(NaN)).toThrow(InvalidInputError);
    expect(() => radiansToDegrees(Infinity)).toThrow(InvalidInputError);
  });
});

describe('power', () => {
  describe('basic exponentiation', () => {
    it('should calculate powers of positive integers', () => {
      expect(power(2, 3)).toBe(8);
      expect(power(3, 2)).toBe(9);
      expect(power(5, 3)).toBe(125);
      expect(power(10, 2)).toBe(100);
    });

    it('should handle zero exponent', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
      expect(power(-5, 0)).toBe(1);
    });

    it('should handle base of zero', () => {
      expect(power(0, 1)).toBe(0);
      expect(power(0, 5)).toBe(0);
      expect(power(0, 100)).toBe(0);
    });

    it('should handle negative exponents', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(2, -2)).toBe(0.25);
      expect(power(10, -2)).toBe(0.01);
    });

    it('should handle fractional exponents', () => {
      expect(power(4, 0.5)).toBeCloseTo(2);
      expect(power(8, 1 / 3)).toBeCloseTo(2);
      expect(power(27, 1 / 3)).toBeCloseTo(3);
    });

    it('should handle negative bases', () => {
      expect(power(-2, 2)).toBe(4);
      expect(power(-2, 3)).toBe(-8);
      expect(power(-3, 2)).toBe(9);
    });
  });

  describe('edge cases', () => {
    it('should handle very large results', () => {
      expect(power(10, 15)).toBe(1e15);
    });

    it('should throw OverflowError on overflow', () => {
      expect(() => power(10, 400)).toThrow(OverflowError);
      expect(() => power(2, 10000)).toThrow(OverflowError);
    });

    it('should throw DomainError for complex results', () => {
      expect(() => power(-1, 0.5)).toThrow(DomainError);
      expect(() => power(-4, 0.5)).toThrow(DomainError);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => power(NaN, 2)).toThrow(InvalidInputError);
      expect(() => power(2, NaN)).toThrow(InvalidInputError);
    });
  });
});

describe('sqrt', () => {
  it('should calculate square roots correctly', () => {
    expect(sqrt(0)).toBe(0);
    expect(sqrt(1)).toBe(1);
    expect(sqrt(4)).toBe(2);
    expect(sqrt(9)).toBe(3);
    expect(sqrt(16)).toBe(4);
    expect(sqrt(25)).toBe(5);
  });

  it('should handle decimal results', () => {
    expect(sqrt(2)).toBeCloseTo(1.41421356);
    expect(sqrt(3)).toBeCloseTo(1.73205081);
    expect(sqrt(10)).toBeCloseTo(3.16227766);
  });

  it('should handle large numbers', () => {
    expect(sqrt(1000000)).toBe(1000);
    expect(sqrt(1e10)).toBeCloseTo(1e5);
  });

  it('should throw DomainError for negative numbers', () => {
    expect(() => sqrt(-1)).toThrow(DomainError);
    expect(() => sqrt(-4)).toThrow(DomainError);
    expect(() => sqrt(-100)).toThrow(DomainError);
  });

  it('should have correct error message for negative input', () => {
    expect(() => sqrt(-1)).toThrow('cannot take square root of negative number');
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => sqrt(NaN)).toThrow(InvalidInputError);
    expect(() => sqrt(Infinity)).toThrow(InvalidInputError);
  });
});

describe('nthRoot', () => {
  describe('basic nth root calculations', () => {
    it('should calculate square roots', () => {
      expect(nthRoot(4, 2)).toBeCloseTo(2);
      expect(nthRoot(9, 2)).toBeCloseTo(3);
      expect(nthRoot(16, 2)).toBeCloseTo(4);
    });

    it('should calculate cube roots', () => {
      expect(nthRoot(8, 3)).toBeCloseTo(2);
      expect(nthRoot(27, 3)).toBeCloseTo(3);
      expect(nthRoot(64, 3)).toBeCloseTo(4);
    });

    it('should handle other roots', () => {
      expect(nthRoot(16, 4)).toBeCloseTo(2);
      expect(nthRoot(32, 5)).toBeCloseTo(2);
      expect(nthRoot(1, 10)).toBeCloseTo(1);
    });

    it('should handle odd roots of negative numbers', () => {
      expect(nthRoot(-8, 3)).toBeCloseTo(-2);
      expect(nthRoot(-27, 3)).toBeCloseTo(-3);
      expect(nthRoot(-32, 5)).toBeCloseTo(-2);
    });

    it('should handle zero', () => {
      expect(nthRoot(0, 2)).toBe(0);
      expect(nthRoot(0, 5)).toBe(0);
    });
  });

  describe('edge cases', () => {
    it('should throw DomainError for zero root degree', () => {
      expect(() => nthRoot(8, 0)).toThrow(DomainError);
      expect(() => nthRoot(8, 0)).toThrow('root degree cannot be zero');
    });

    it('should throw DomainError for even root of negative number', () => {
      expect(() => nthRoot(-4, 2)).toThrow(DomainError);
      expect(() => nthRoot(-16, 4)).toThrow(DomainError);
      expect(() => nthRoot(-16, 4)).toThrow('even root of negative number is not real');
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => nthRoot(NaN, 2)).toThrow(InvalidInputError);
      expect(() => nthRoot(8, NaN)).toThrow(InvalidInputError);
    });
  });
});

describe('factorial', () => {
  describe('basic factorial calculations', () => {
    it('should calculate factorials of small numbers', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
      expect(factorial(6)).toBe(720);
      expect(factorial(7)).toBe(5040);
    });

    it('should calculate larger factorials', () => {
      expect(factorial(10)).toBe(3628800);
      expect(factorial(12)).toBe(479001600);
    });
  });

  describe('domain restrictions', () => {
    it('should throw DomainError for negative numbers', () => {
      expect(() => factorial(-1)).toThrow(DomainError);
      expect(() => factorial(-5)).toThrow(DomainError);
      expect(() => factorial(-1)).toThrow('factorial is not defined for negative numbers');
    });

    it('should throw DomainError for non-integers', () => {
      expect(() => factorial(3.5)).toThrow(DomainError);
      expect(() => factorial(1.1)).toThrow(DomainError);
      expect(() => factorial(1.1)).toThrow('factorial is only defined for integers');
    });

    it('should throw OverflowError for very large numbers', () => {
      expect(() => factorial(171)).toThrow(OverflowError);
      expect(() => factorial(200)).toThrow(OverflowError);
      expect(() => factorial(1000)).toThrow(OverflowError);
    });
  });

  describe('edge cases', () => {
    it('should handle maximum valid factorial', () => {
      const result = factorial(170);
      expect(result).toBeGreaterThan(0);
      expect(isFinite(result)).toBe(true);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => factorial(NaN)).toThrow(InvalidInputError);
      expect(() => factorial(Infinity)).toThrow(InvalidInputError);
    });
  });
});

describe('ln', () => {
  it('should calculate natural logarithm correctly', () => {
    expect(ln(1)).toBe(0);
    expect(ln(E)).toBeCloseTo(1);
    expect(ln(E * E)).toBeCloseTo(2);
  });

  it('should handle common values', () => {
    expect(ln(10)).toBeCloseTo(2.302585093);
    expect(ln(2)).toBeCloseTo(0.693147181);
  });

  it('should handle decimal numbers', () => {
    expect(ln(0.5)).toBeCloseTo(-0.693147181);
    expect(ln(0.1)).toBeCloseTo(-2.302585093);
  });

  it('should throw DomainError for zero', () => {
    expect(() => ln(0)).toThrow(DomainError);
    expect(() => ln(0)).toThrow('logarithm is only defined for positive numbers');
  });

  it('should throw DomainError for negative numbers', () => {
    expect(() => ln(-1)).toThrow(DomainError);
    expect(() => ln(-10)).toThrow(DomainError);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => ln(NaN)).toThrow(InvalidInputError);
    expect(() => ln(Infinity)).toThrow(InvalidInputError);
  });
});

describe('log10', () => {
  it('should calculate base-10 logarithm correctly', () => {
    expect(log10(1)).toBe(0);
    expect(log10(10)).toBeCloseTo(1);
    expect(log10(100)).toBeCloseTo(2);
    expect(log10(1000)).toBeCloseTo(3);
  });

  it('should handle decimal numbers', () => {
    expect(log10(0.1)).toBeCloseTo(-1);
    expect(log10(0.01)).toBeCloseTo(-2);
  });

  it('should throw DomainError for zero and negative numbers', () => {
    expect(() => log10(0)).toThrow(DomainError);
    expect(() => log10(-10)).toThrow(DomainError);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => log10(NaN)).toThrow(InvalidInputError);
    expect(() => log10(Infinity)).toThrow(InvalidInputError);
  });
});

describe('log2', () => {
  it('should calculate base-2 logarithm correctly', () => {
    expect(log2(1)).toBe(0);
    expect(log2(2)).toBeCloseTo(1);
    expect(log2(4)).toBeCloseTo(2);
    expect(log2(8)).toBeCloseTo(3);
    expect(log2(16)).toBeCloseTo(4);
  });

  it('should handle decimal numbers', () => {
    expect(log2(0.5)).toBeCloseTo(-1);
    expect(log2(0.25)).toBeCloseTo(-2);
  });

  it('should throw DomainError for zero and negative numbers', () => {
    expect(() => log2(0)).toThrow(DomainError);
    expect(() => log2(-2)).toThrow(DomainError);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => log2(NaN)).toThrow(InvalidInputError);
    expect(() => log2(Infinity)).toThrow(InvalidInputError);
  });
});

describe('exp', () => {
  it('should calculate exponential correctly', () => {
    expect(exp(0)).toBe(1);
    expect(exp(1)).toBeCloseTo(E);
    expect(exp(2)).toBeCloseTo(E * E);
  });

  it('should handle negative exponents', () => {
    expect(exp(-1)).toBeCloseTo(1 / E);
    expect(exp(-2)).toBeCloseTo(1 / (E * E));
  });

  it('should handle small values', () => {
    expect(exp(0.5)).toBeCloseTo(1.6487212707);
    expect(exp(-0.5)).toBeCloseTo(0.6065306597);
  });

  it('should throw OverflowError for very large values', () => {
    expect(() => exp(1000)).toThrow(OverflowError);
    expect(() => exp(800)).toThrow(OverflowError);
  });

  it('should throw InvalidInputError for invalid inputs', () => {
    expect(() => exp(NaN)).toThrow(InvalidInputError);
    expect(() => exp(Infinity)).toThrow(InvalidInputError);
  });
});

describe('trigonometric functions', () => {
  describe('sin', () => {
    it('should calculate sine in radians', () => {
      expect(sin(0)).toBeCloseTo(0);
      expect(sin(PI / 6)).toBeCloseTo(0.5);
      expect(sin(PI / 4)).toBeCloseTo(Math.SQRT2 / 2);
      expect(sin(PI / 2)).toBeCloseTo(1);
      expect(sin(PI)).toBeCloseTo(0, 10);
      expect(sin((3 * PI) / 2)).toBeCloseTo(-1);
    });

    it('should calculate sine in degrees', () => {
      expect(sin(0, 'degrees')).toBeCloseTo(0);
      expect(sin(30, 'degrees')).toBeCloseTo(0.5);
      expect(sin(45, 'degrees')).toBeCloseTo(Math.SQRT2 / 2);
      expect(sin(90, 'degrees')).toBeCloseTo(1);
      expect(sin(180, 'degrees')).toBeCloseTo(0, 10);
    });

    it('should handle negative angles', () => {
      expect(sin(-PI / 2)).toBeCloseTo(-1);
      expect(sin(-90, 'degrees')).toBeCloseTo(-1);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => sin(NaN)).toThrow(InvalidInputError);
      expect(() => sin(Infinity)).toThrow(InvalidInputError);
    });
  });

  describe('cos', () => {
    it('should calculate cosine in radians', () => {
      expect(cos(0)).toBeCloseTo(1);
      expect(cos(PI / 3)).toBeCloseTo(0.5);
      expect(cos(PI / 4)).toBeCloseTo(Math.SQRT2 / 2);
      expect(cos(PI / 2)).toBeCloseTo(0, 10);
      expect(cos(PI)).toBeCloseTo(-1);
    });

    it('should calculate cosine in degrees', () => {
      expect(cos(0, 'degrees')).toBeCloseTo(1);
      expect(cos(60, 'degrees')).toBeCloseTo(0.5);
      expect(cos(45, 'degrees')).toBeCloseTo(Math.SQRT2 / 2);
      expect(cos(90, 'degrees')).toBeCloseTo(0, 10);
      expect(cos(180, 'degrees')).toBeCloseTo(-1);
    });

    it('should handle negative angles', () => {
      expect(cos(-PI / 2)).toBeCloseTo(0, 10);
      expect(cos(-90, 'degrees')).toBeCloseTo(0, 10);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => cos(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('tan', () => {
    it('should calculate tangent in radians', () => {
      expect(tan(0)).toBeCloseTo(0);
      expect(tan(PI / 4)).toBeCloseTo(1);
      expect(tan(PI / 6)).toBeCloseTo(1 / Math.sqrt(3));
      expect(tan(-PI / 4)).toBeCloseTo(-1);
    });

    it('should calculate tangent in degrees', () => {
      expect(tan(0, 'degrees')).toBeCloseTo(0);
      expect(tan(45, 'degrees')).toBeCloseTo(1);
      expect(tan(30, 'degrees')).toBeCloseTo(1 / Math.sqrt(3));
    });

    it('should throw DomainError at discontinuities', () => {
      expect(() => tan(PI / 2)).toThrow(DomainError);
      expect(() => tan(90, 'degrees')).toThrow(DomainError);
      expect(() => tan(-PI / 2)).toThrow(DomainError);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => tan(NaN)).toThrow(InvalidInputError);
    });
  });
});

describe('inverse trigonometric functions', () => {
  describe('asin', () => {
    it('should calculate arcsine in radians', () => {
      expect(asin(0)).toBeCloseTo(0);
      expect(asin(0.5)).toBeCloseTo(PI / 6);
      expect(asin(1)).toBeCloseTo(PI / 2);
      expect(asin(-1)).toBeCloseTo(-PI / 2);
    });

    it('should calculate arcsine in degrees', () => {
      expect(asin(0, 'degrees')).toBeCloseTo(0);
      expect(asin(0.5, 'degrees')).toBeCloseTo(30);
      expect(asin(1, 'degrees')).toBeCloseTo(90);
      expect(asin(-1, 'degrees')).toBeCloseTo(-90);
    });

    it('should throw DomainError for values outside [-1, 1]', () => {
      expect(() => asin(1.1)).toThrow(DomainError);
      expect(() => asin(-1.1)).toThrow(DomainError);
      expect(() => asin(2)).toThrow(DomainError);
      expect(() => asin(1.1)).toThrow('arcsine is only defined for values in [-1, 1]');
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => asin(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('acos', () => {
    it('should calculate arccosine in radians', () => {
      expect(acos(1)).toBeCloseTo(0);
      expect(acos(0.5)).toBeCloseTo(PI / 3);
      expect(acos(0)).toBeCloseTo(PI / 2);
      expect(acos(-1)).toBeCloseTo(PI);
    });

    it('should calculate arccosine in degrees', () => {
      expect(acos(1, 'degrees')).toBeCloseTo(0);
      expect(acos(0.5, 'degrees')).toBeCloseTo(60);
      expect(acos(0, 'degrees')).toBeCloseTo(90);
      expect(acos(-1, 'degrees')).toBeCloseTo(180);
    });

    it('should throw DomainError for values outside [-1, 1]', () => {
      expect(() => acos(1.1)).toThrow(DomainError);
      expect(() => acos(-1.1)).toThrow(DomainError);
      expect(() => acos(1.1)).toThrow('arccosine is only defined for values in [-1, 1]');
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => acos(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('atan', () => {
    it('should calculate arctangent in radians', () => {
      expect(atan(0)).toBeCloseTo(0);
      expect(atan(1)).toBeCloseTo(PI / 4);
      expect(atan(-1)).toBeCloseTo(-PI / 4);
    });

    it('should calculate arctangent in degrees', () => {
      expect(atan(0, 'degrees')).toBeCloseTo(0);
      expect(atan(1, 'degrees')).toBeCloseTo(45);
      expect(atan(-1, 'degrees')).toBeCloseTo(-45);
    });

    it('should handle large values', () => {
      expect(atan(1000)).toBeCloseTo(PI / 2, 1);
      expect(atan(-1000)).toBeCloseTo(-PI / 2, 1);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => atan(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('atan2', () => {
    it('should calculate two-argument arctangent in radians', () => {
      expect(atan2(0, 1)).toBeCloseTo(0);
      expect(atan2(1, 1)).toBeCloseTo(PI / 4);
      expect(atan2(1, 0)).toBeCloseTo(PI / 2);
      expect(atan2(0, -1)).toBeCloseTo(PI);
      expect(atan2(-1, 0)).toBeCloseTo(-PI / 2);
    });

    it('should calculate in degrees', () => {
      expect(atan2(0, 1, 'degrees')).toBeCloseTo(0);
      expect(atan2(1, 1, 'degrees')).toBeCloseTo(45);
      expect(atan2(1, 0, 'degrees')).toBeCloseTo(90);
      expect(atan2(0, -1, 'degrees')).toBeCloseTo(180);
    });

    it('should handle zero values', () => {
      expect(atan2(0, 0)).toBeCloseTo(0);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => atan2(NaN, 1)).toThrow(InvalidInputError);
      expect(() => atan2(1, NaN)).toThrow(InvalidInputError);
    });
  });
});

describe('hyperbolic functions', () => {
  describe('sinh', () => {
    it('should calculate hyperbolic sine', () => {
      expect(sinh(0)).toBeCloseTo(0);
      expect(sinh(1)).toBeCloseTo(1.1752011936);
      expect(sinh(-1)).toBeCloseTo(-1.1752011936);
    });

    it('should handle small values', () => {
      expect(sinh(0.5)).toBeCloseTo(0.5210953054);
      expect(sinh(-0.5)).toBeCloseTo(-0.5210953054);
    });

    it('should throw OverflowError for very large values', () => {
      expect(() => sinh(1000)).toThrow(OverflowError);
      expect(() => sinh(-1000)).toThrow(OverflowError);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => sinh(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('cosh', () => {
    it('should calculate hyperbolic cosine', () => {
      expect(cosh(0)).toBeCloseTo(1);
      expect(cosh(1)).toBeCloseTo(1.5430806348);
      expect(cosh(-1)).toBeCloseTo(1.5430806348);
    });

    it('should be always >= 1', () => {
      expect(cosh(0.5)).toBeGreaterThanOrEqual(1);
      expect(cosh(-0.5)).toBeGreaterThanOrEqual(1);
    });

    it('should throw OverflowError for very large values', () => {
      expect(() => cosh(1000)).toThrow(OverflowError);
      expect(() => cosh(-1000)).toThrow(OverflowError);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => cosh(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('tanh', () => {
    it('should calculate hyperbolic tangent', () => {
      expect(tanh(0)).toBeCloseTo(0);
      expect(tanh(1)).toBeCloseTo(0.7615941559);
      expect(tanh(-1)).toBeCloseTo(-0.7615941559);
    });

    it('should approach 1 for large positive values', () => {
      expect(tanh(10)).toBeCloseTo(1);
      expect(tanh(100)).toBeCloseTo(1);
    });

    it('should approach -1 for large negative values', () => {
      expect(tanh(-10)).toBeCloseTo(-1);
      expect(tanh(-100)).toBeCloseTo(-1);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => tanh(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('asinh', () => {
    it('should calculate inverse hyperbolic sine', () => {
      expect(asinh(0)).toBeCloseTo(0);
      expect(asinh(1)).toBeCloseTo(0.8813735870);
      expect(asinh(-1)).toBeCloseTo(-0.8813735870);
    });

    it('should handle large values', () => {
      const result = asinh(1000);
      expect(result).toBeGreaterThan(7);
      expect(result).toBeLessThan(8);
    });

    it('should be inverse of sinh', () => {
      expect(asinh(sinh(0.5))).toBeCloseTo(0.5);
      expect(asinh(sinh(2))).toBeCloseTo(2);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => asinh(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('acosh', () => {
    it('should calculate inverse hyperbolic cosine', () => {
      expect(acosh(1)).toBeCloseTo(0);
      expect(acosh(2)).toBeCloseTo(1.3169578969);
      expect(acosh(10)).toBeCloseTo(2.9932228461);
    });

    it('should throw DomainError for values < 1', () => {
      expect(() => acosh(0)).toThrow(DomainError);
      expect(() => acosh(0.5)).toThrow(DomainError);
      expect(() => acosh(-1)).toThrow(DomainError);
      expect(() => acosh(0.5)).toThrow('inverse hyperbolic cosine is only defined for values >= 1');
    });

    it('should be inverse of cosh for valid range', () => {
      expect(acosh(cosh(0.5))).toBeCloseTo(0.5);
      expect(acosh(cosh(2))).toBeCloseTo(2);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => acosh(NaN)).toThrow(InvalidInputError);
    });
  });

  describe('atanh', () => {
    it('should calculate inverse hyperbolic tangent', () => {
      expect(atanh(0)).toBeCloseTo(0);
      expect(atanh(0.5)).toBeCloseTo(0.5493061443);
      expect(atanh(-0.5)).toBeCloseTo(-0.5493061443);
    });

    it('should throw DomainError for values outside (-1, 1)', () => {
      expect(() => atanh(1)).toThrow(DomainError);
      expect(() => atanh(-1)).toThrow(DomainError);
      expect(() => atanh(1.1)).toThrow(DomainError);
      expect(() => atanh(-1.1)).toThrow(DomainError);
      expect(() => atanh(1)).toThrow('inverse hyperbolic tangent is only defined for values in (-1, 1)');
    });

    it('should be inverse of tanh for valid range', () => {
      expect(atanh(tanh(0.5))).toBeCloseTo(0.5);
      expect(atanh(tanh(0.9))).toBeCloseTo(0.9);
    });

    it('should throw InvalidInputError for invalid inputs', () => {
      expect(() => atanh(NaN)).toThrow(InvalidInputError);
    });
  });
});

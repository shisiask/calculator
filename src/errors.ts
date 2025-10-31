/**
 * Custom error classes for calculator operations
 */

export class CalculatorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalculatorError';
    Object.setPrototypeOf(this, CalculatorError.prototype);
  }
}

export class DivisionByZeroError extends CalculatorError {
  constructor() {
    super('Division by zero is undefined');
    this.name = 'DivisionByZeroError';
    Object.setPrototypeOf(this, DivisionByZeroError.prototype);
  }
}

export class InvalidInputError extends CalculatorError {
  constructor(message: string) {
    super(`Invalid input: ${message}`);
    this.name = 'InvalidInputError';
    Object.setPrototypeOf(this, InvalidInputError.prototype);
  }
}

export class OverflowError extends CalculatorError {
  constructor(operation: string) {
    super(`Overflow occurred in ${operation} operation`);
    this.name = 'OverflowError';
    Object.setPrototypeOf(this, OverflowError.prototype);
  }
}

export class UnderflowError extends CalculatorError {
  constructor(operation: string) {
    super(`Underflow occurred in ${operation} operation`);
    this.name = 'UnderflowError';
    Object.setPrototypeOf(this, UnderflowError.prototype);
  }
}

export class DomainError extends CalculatorError {
  constructor(operation: string, reason: string) {
    super(`Domain error in ${operation}: ${reason}`);
    this.name = 'DomainError';
    Object.setPrototypeOf(this, DomainError.prototype);
  }
}

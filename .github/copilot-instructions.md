# Copilot Instructions for Calculator Project

## Project Overview
This is a scientific calculator application. The project aims to provide accurate mathematical computations with support for basic arithmetic operations and advanced scientific functions.

## Code Style and Standards
- Write clean, readable, and maintainable code
- Use meaningful variable and function names
- Add comments for complex mathematical algorithms or non-obvious logic
- Follow consistent formatting and indentation
- Prefer explicit over implicit behavior for mathematical operations

## Development Guidelines
- Ensure precision and accuracy in all mathematical calculations
- Handle edge cases (division by zero, overflow, underflow, invalid inputs)
- Validate all user inputs before processing
- Return clear error messages for invalid operations
- Consider floating-point precision limitations

## Testing Requirements
- Write unit tests for all mathematical functions
- Test edge cases and boundary conditions
- Verify accuracy of calculations with known results
- Include tests for error handling
- Ensure test coverage for all supported operations

## Architecture Principles
- Separate calculation logic from user interface
- Keep functions small and focused on single responsibilities
- Make functions pure when possible (no side effects)
- Use appropriate data types for numerical computations
- Document expected input ranges and output formats

## Best Practices
- Avoid magic numbers; use named constants
- Handle internationalization for number formatting if applicable
- Consider performance for complex calculations
- Implement proper rounding strategies
- Follow IEEE 754 standards for floating-point arithmetic where applicable

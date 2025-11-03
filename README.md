# Scientific Calculator

A comprehensive scientific calculator library and CLI tool written in TypeScript, featuring basic arithmetic operations, advanced mathematical functions, trigonometry, and more. Built with strong type safety, comprehensive error handling, and extensive test coverage.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, division, modulo
- **Power & Root Operations**: Power, square root, nth root, factorial
- **Logarithmic Functions**: Natural log (ln), base-10, base-2, exponential
- **Trigonometric Functions**: Sin, cos, tan, and their inverse functions (asin, acos, atan, atan2)
- **Hyperbolic Functions**: Sinh, cosh, tanh, and their inverse functions
- **Utility Functions**: Absolute value, sign, ceiling, floor, rounding
- **Angle Unit Support**: Work in radians or degrees
- **Precision Control**: Configure decimal precision (0-15 places)
- **Mathematical Constants**: π, e, φ (golden ratio), and more
- **Comprehensive Error Handling**: Type-safe errors for domain, overflow, and division by zero
- **Interactive CLI**: Full-featured command-line interface with colored output
- **Pure Functions**: All operations are pure with no side effects
- **TypeScript Support**: Full type definitions included
- **Well-Tested**: Comprehensive test suite with Jest

## Installation

### As a Library

```bash
# Clone the repository
git clone <repository-url>
cd calculator

# Install dependencies
npm install

# Build the project
npm run build
```

### Using the CLI

After building, you can use the CLI:

```bash
# Start the interactive calculator
npm start

# Or run directly with ts-node (development)
npm run dev
```

## Usage

### Programmatic API

#### Using Individual Functions

```typescript
import { add, subtract, multiply, divide, sqrt, sin, cos } from 'scientific-calculator';

// Basic arithmetic
const sum = add(5, 3);           // 8
const difference = subtract(10, 4); // 6
const product = multiply(6, 7);   // 42
const quotient = divide(20, 4);   // 5

// Scientific operations
const root = sqrt(16);            // 4
const sine = sin(Math.PI / 2);    // 1
const cosine = cos(0);            // 1
```

#### Using the Calculator Class

The Calculator class provides a stateful interface with configurable precision and angle units:

```typescript
import { Calculator } from 'scientific-calculator';

// Create a calculator instance
const calc = new Calculator({
  angleUnit: 'degrees',  // Use degrees instead of radians
  precision: 2           // Round results to 2 decimal places
});

// Basic operations
calc.add(5, 3);          // 8
calc.subtract(10, 4);    // 6
calc.multiply(6, 7);     // 42
calc.divide(20, 4);      // 5

// Scientific operations
calc.sqrt(16);           // 4
calc.power(2, 8);        // 256

// Trigonometry (in degrees because of our configuration)
calc.sin(90);            // 1
calc.cos(0);             // 1
calc.tan(45);            // 1

// Change settings dynamically
calc.setAngleUnit('radians');
calc.setPrecision(4);

// Logarithmic functions
calc.ln(Math.E);         // 1
calc.log10(100);         // 2
calc.log2(8);            // 3
```

### Command-Line Interface (CLI)

The calculator includes an interactive CLI with colored output and a helpful interface:

```bash
$ npm start

╔════════════════════════════════════════╗
║    Scientific Calculator CLI v1.0      ║
╚════════════════════════════════════════╝

Type "help" for available commands
Type "exit" or "quit" to close

calc> add 5 3
= 8

calc> sqrt 16
= 4

calc> sin 90
= 1

calc> mode degrees
Angle unit set to degrees

calc> tan 45
= 1
```

#### CLI Commands

**Basic Operations:**
- `add <a> <b>` - Addition
- `sub <a> <b>` - Subtraction
- `mul <a> <b>` - Multiplication
- `div <a> <b>` - Division
- `mod <a> <b>` - Modulo
- `abs <a>` - Absolute value
- `sign <a>` - Sign (-1, 0, or 1)
- `ceil <a>` - Ceiling
- `floor <a>` - Floor
- `round <a>` - Round to nearest integer

**Scientific Operations:**
- `pow <base> <exp>` - Power
- `sqrt <a>` - Square root
- `root <a> <n>` - Nth root
- `factorial <n>` - Factorial
- `ln <a>` - Natural logarithm
- `log10 <a>` - Base-10 logarithm
- `log2 <a>` - Base-2 logarithm
- `exp <a>` - Exponential (e^a)

**Trigonometric Functions:**
- `sin <angle>` - Sine
- `cos <angle>` - Cosine
- `tan <angle>` - Tangent
- `asin <value>` - Arcsine
- `acos <value>` - Arccosine
- `atan <value>` - Arctangent
- `atan2 <y> <x>` - Two-argument arctangent

**Hyperbolic Functions:**
- `sinh <a>` - Hyperbolic sine
- `cosh <a>` - Hyperbolic cosine
- `tanh <a>` - Hyperbolic tangent
- `asinh <a>` - Inverse hyperbolic sine
- `acosh <a>` - Inverse hyperbolic cosine
- `atanh <a>` - Inverse hyperbolic tangent

**Settings & Utilities:**
- `mode <degrees|radians>` - Set angle unit
- `precision <n>` - Set decimal precision (0-15)
- `status` - Show current settings
- `deg2rad <degrees>` - Convert degrees to radians
- `rad2deg <radians>` - Convert radians to degrees

**Constants:**
- `pi` - π ≈ 3.14159...
- `e` - e ≈ 2.71828...
- `phi` - Golden ratio ≈ 1.61803...

## Examples

### Basic Arithmetic

```typescript
import { add, subtract, multiply, divide, modulo } from 'scientific-calculator';

// Simple calculations
add(10, 5);           // 15
subtract(10, 5);      // 5
multiply(10, 5);      // 50
divide(10, 5);        // 2
modulo(10, 3);        // 1
```

### Scientific Functions

```typescript
import { sqrt, power, factorial, nthRoot } from 'scientific-calculator';

// Power and roots
power(2, 8);          // 256
sqrt(144);            // 12
nthRoot(27, 3);       // 3 (cube root)

// Factorial
factorial(5);         // 120
factorial(0);         // 1
```

### Trigonometry

```typescript
import { sin, cos, tan, asin, acos, atan } from 'scientific-calculator';

// Working with radians (default)
sin(Math.PI / 2);     // 1
cos(0);               // 1
tan(Math.PI / 4);     // 1

// Working with degrees
sin(90, 'degrees');   // 1
cos(180, 'degrees');  // -1
tan(45, 'degrees');   // 1

// Inverse functions
asin(1);              // 1.5707963267948966 (π/2)
acos(1);              // 0
atan(1);              // 0.7853981633974483 (π/4)

// Get results in degrees
asin(1, 'degrees');   // 90
```

### Logarithmic Functions

```typescript
import { ln, log10, log2, exp } from 'scientific-calculator';

// Logarithms
ln(Math.E);           // 1
log10(100);           // 2
log2(8);              // 3

// Exponential
exp(1);               // 2.718281828459045 (e)
```

### Error Handling

```typescript
import {
  divide,
  sqrt,
  DivisionByZeroError,
  DomainError
} from 'scientific-calculator';

try {
  divide(10, 0);
} catch (error) {
  if (error instanceof DivisionByZeroError) {
    console.log('Cannot divide by zero!');
  }
}

try {
  sqrt(-1);
} catch (error) {
  if (error instanceof DomainError) {
    console.log('Cannot take square root of negative number!');
  }
}
```

### Using the Calculator Class

```typescript
import { Calculator } from 'scientific-calculator';

// Create calculator with custom settings
const calc = new Calculator({
  angleUnit: 'degrees',
  precision: 3
});

// Perform calculations
calc.add(1.23456, 2.34567);     // 3.580 (rounded to 3 decimals)
calc.sin(30);                   // 0.5 (30 degrees)
calc.power(2, 10);              // 1024

// Adjust settings
calc.setAngleUnit('radians');
calc.setPrecision(6);

// Get current settings
console.log(calc.getAngleUnit());  // 'radians'
console.log(calc.getPrecision());  // 6
```

## Configuration Options

### Angle Units

The calculator supports two angle units for trigonometric functions:

- **radians** (default): Standard mathematical unit
- **degrees**: Common unit for everyday use

```typescript
// Function-level configuration
sin(Math.PI / 2, 'radians');  // 1
sin(90, 'degrees');           // 1

// Calculator-level configuration
const calc = new Calculator({ angleUnit: 'degrees' });
calc.sin(90);  // 1
```

### Precision

Set the number of decimal places for results (0-15):

```typescript
const calc = new Calculator({ precision: 2 });
calc.divide(10, 3);  // 3.33

calc.setPrecision(5);
calc.divide(10, 3);  // 3.33333
```

## Error Handling

The calculator provides specific error types for different error conditions:

### Error Types

- **DivisionByZeroError**: Thrown when dividing by zero
- **InvalidInputError**: Thrown for invalid inputs (NaN, Infinity, wrong types)
- **OverflowError**: Thrown when a result is too large to represent
- **DomainError**: Thrown when an operation is undefined for the given input

### Error Examples

```typescript
import {
  Calculator,
  DivisionByZeroError,
  DomainError,
  OverflowError,
  InvalidInputError
} from 'scientific-calculator';

const calc = new Calculator();

// Division by zero
try {
  calc.divide(10, 0);
} catch (error) {
  if (error instanceof DivisionByZeroError) {
    console.error('Division by zero!');
  }
}

// Domain errors
try {
  calc.sqrt(-1);  // Square root of negative number
} catch (error) {
  if (error instanceof DomainError) {
    console.error('Invalid domain:', error.message);
  }
}

try {
  calc.ln(-5);  // Logarithm of negative number
} catch (error) {
  if (error instanceof DomainError) {
    console.error('Invalid domain:', error.message);
  }
}

// Overflow
try {
  calc.factorial(200);  // Too large
} catch (error) {
  if (error instanceof OverflowError) {
    console.error('Result overflow:', error.message);
  }
}

// Invalid input
try {
  calc.add(NaN, 5);
} catch (error) {
  if (error instanceof InvalidInputError) {
    console.error('Invalid input:', error.message);
  }
}
```

## Testing

The project includes comprehensive tests covering all operations and edge cases.

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage

The test suite covers:
- All basic arithmetic operations
- All scientific functions
- Error conditions and edge cases
- Angle unit conversions
- Precision handling
- Boundary values
- Special cases (zero, negative numbers, infinity)

## Development

### Project Structure

```
calculator/
├── src/
│   ├── index.ts                    # Main entry point
│   ├── calculator.ts               # Calculator class
│   ├── basicOperations.ts          # Basic arithmetic
│   ├── scientificOperations.ts     # Scientific functions
│   ├── types.ts                    # Type definitions
│   ├── constants.ts                # Mathematical constants
│   ├── errors.ts                   # Error classes
│   ├── cli.ts                      # Command-line interface
│   └── __tests__/                  # Test files
│       ├── basicOperations.test.ts
│       ├── scientificOperations.test.ts
│       ├── calculator.test.ts
│       └── errors.test.ts
├── dist/                           # Compiled output
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

### Build the Project

```bash
# Compile TypeScript to JavaScript
npm run build

# Output will be in the dist/ directory
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report
- `npm start` - Start the CLI (requires build)
- `npm run dev` - Start the CLI in development mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## API Reference

For complete API documentation with detailed function signatures, parameters, return values, and examples, see [API.md](./API.md).

For extensive code examples, see [EXAMPLES.md](./EXAMPLES.md).

## Constants

The calculator exports several mathematical constants:

```typescript
import { PI, E, PHI, SQRT2, LN2, LN10 } from 'scientific-calculator';

PI;      // 3.141592653589793
E;       // 2.718281828459045
PHI;     // 1.618033988749895 (Golden ratio)
SQRT2;   // 1.4142135623730951
LN2;     // 0.6931471805599453
LN10;    // 2.302585092994046
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository** and create your branch from `main`
2. **Write tests** for any new functionality
3. **Ensure all tests pass** with `npm test`
4. **Follow the existing code style** and run `npm run lint`
5. **Update documentation** if you're adding features
6. **Submit a pull request** with a clear description of your changes

### Development Workflow

```bash
# Clone your fork
git clone <your-fork-url>
cd calculator

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/my-new-feature

# Make your changes and write tests
# ...

# Run tests
npm test

# Run linter
npm run lint

# Build to ensure it compiles
npm run build

# Commit and push
git commit -am "Add new feature"
git push origin feature/my-new-feature
```

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Write JSDoc comments for public APIs
- Include unit tests for new functions
- Ensure all functions are pure (no side effects)
- Handle errors explicitly with custom error types

## License

MIT

## Support

For issues, questions, or contributions, please open an issue on the repository.

## Acknowledgments

Built with TypeScript, Jest, and modern JavaScript best practices. Follows IEEE 754 standards for floating-point arithmetic.

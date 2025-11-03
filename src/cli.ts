#!/usr/bin/env node

/**
 * Command-line interface for the scientific calculator
 */

import * as readline from 'readline';
import { Calculator } from './calculator';
import { CalculatorError } from './errors';
import * as constants from './constants';

const calculator = new Calculator();

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function printWelcome(): void {
  console.log(`${colors.cyan}${colors.bright}`);
  console.log('╔════════════════════════════════════════╗');
  console.log('║    Scientific Calculator CLI v1.0      ║');
  console.log('╚════════════════════════════════════════╝');
  console.log(colors.reset);
  console.log('Type "help" for available commands');
  console.log('Type "exit" or "quit" to close\n');
}

function printHelp(): void {
  console.log(`${colors.yellow}${colors.bright}Available Commands:${colors.reset}`);
  console.log('\n' + colors.bright + 'Basic Operations:' + colors.reset);
  console.log('  add <a> <b>        - Addition: a + b');
  console.log('  sub <a> <b>        - Subtraction: a - b');
  console.log('  mul <a> <b>        - Multiplication: a × b');
  console.log('  div <a> <b>        - Division: a ÷ b');
  console.log('  mod <a> <b>        - Modulo: a % b');
  console.log('  abs <a>            - Absolute value: |a|');
  console.log('  sign <a>           - Sign: -1, 0, or 1');
  console.log('  ceil <a>           - Ceiling: smallest integer ≥ a');
  console.log('  floor <a>          - Floor: largest integer ≤ a');
  console.log('  round <a>          - Round to nearest integer');

  console.log('\n' + colors.bright + 'Power & Root Operations:' + colors.reset);
  console.log('  pow <base> <exp>   - Power: base^exp');
  console.log('  sqrt <a>           - Square root: √a');
  console.log('  root <a> <n>       - Nth root: a^(1/n)');
  console.log('  factorial <n>      - Factorial: n!');

  console.log('\n' + colors.bright + 'Logarithmic & Exponential:' + colors.reset);
  console.log('  ln <a>             - Natural logarithm: ln(a)');
  console.log('  log10 <a>          - Base-10 logarithm: log₁₀(a)');
  console.log('  log2 <a>           - Base-2 logarithm: log₂(a)');
  console.log('  exp <a>            - Exponential: e^a');

  console.log('\n' + colors.bright + 'Trigonometric Functions:' + colors.reset);
  console.log('  sin <angle>        - Sine');
  console.log('  cos <angle>        - Cosine');
  console.log('  tan <angle>        - Tangent');
  console.log('  asin <value>       - Arcsine (inverse sine)');
  console.log('  acos <value>       - Arccosine (inverse cosine)');
  console.log('  atan <value>       - Arctangent (inverse tangent)');
  console.log('  atan2 <y> <x>      - Two-argument arctangent');

  console.log('\n' + colors.bright + 'Hyperbolic Functions:' + colors.reset);
  console.log('  sinh <a>           - Hyperbolic sine');
  console.log('  cosh <a>           - Hyperbolic cosine');
  console.log('  tanh <a>           - Hyperbolic tangent');
  console.log('  asinh <a>          - Inverse hyperbolic sine');
  console.log('  acosh <a>          - Inverse hyperbolic cosine');
  console.log('  atanh <a>          - Inverse hyperbolic tangent');

  console.log('\n' + colors.bright + 'Constants:' + colors.reset);
  console.log('  pi                 - π ≈ 3.14159...');
  console.log('  e                  - e ≈ 2.71828...');
  console.log('  phi                - Golden ratio ≈ 1.61803...');

  console.log('\n' + colors.bright + 'Settings:' + colors.reset);
  console.log('  mode <degrees|radians> - Set angle unit for trig functions');
  console.log('  precision <n>      - Set decimal precision (0-15)');
  console.log('  status             - Show current settings');

  console.log('\n' + colors.bright + 'Conversion:' + colors.reset);
  console.log('  deg2rad <degrees>  - Convert degrees to radians');
  console.log('  rad2deg <radians>  - Convert radians to degrees');

  console.log('\n' + colors.bright + 'Other:' + colors.reset);
  console.log('  help               - Show this help message');
  console.log('  clear              - Clear the screen');
  console.log('  exit, quit         - Exit the calculator\n');
}

function printStatus(): void {
  console.log(`${colors.cyan}Current Settings:${colors.reset}`);
  console.log(`  Angle Unit: ${colors.bright}${calculator.getAngleUnit()}${colors.reset}`);
  console.log(`  Precision:  ${colors.bright}${calculator.getPrecision()} decimal places${colors.reset}\n`);
}

function parseNumber(str: string): number {
  // Handle special constants
  const lower = str.toLowerCase();
  if (lower === 'pi') return constants.PI;
  if (lower === 'e') return constants.E;
  if (lower === 'phi') return constants.PHI;

  const num = parseFloat(str);
  if (isNaN(num)) {
    throw new Error(`Invalid number: ${str}`);
  }
  return num;
}

function processCommand(input: string): void {
  const trimmed = input.trim();
  if (!trimmed) return;

  const parts = trimmed.split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  try {
    let result: number;

    // Handle exit commands
    if (command === 'exit' || command === 'quit') {
      console.log(`${colors.green}Goodbye!${colors.reset}`);
      process.exit(0);
    }

    // Handle help
    if (command === 'help' || command === '?') {
      printHelp();
      return;
    }

    // Handle clear
    if (command === 'clear' || command === 'cls') {
      console.clear();
      printWelcome();
      return;
    }

    // Handle status
    if (command === 'status') {
      printStatus();
      return;
    }

    // Handle settings
    if (command === 'mode') {
      if (args.length === 0) {
        console.log(`${colors.yellow}Current mode: ${calculator.getAngleUnit()}${colors.reset}`);
        return;
      }
      const mode = args[0].toLowerCase();
      if (mode !== 'radians' && mode !== 'degrees') {
        throw new Error('Mode must be "radians" or "degrees"');
      }
      calculator.setAngleUnit(mode);
      console.log(`${colors.green}Angle unit set to ${mode}${colors.reset}`);
      return;
    }

    if (command === 'precision') {
      if (args.length === 0) {
        console.log(`${colors.yellow}Current precision: ${calculator.getPrecision()} decimal places${colors.reset}`);
        return;
      }
      const precision = parseInt(args[0]);
      calculator.setPrecision(precision);
      console.log(`${colors.green}Precision set to ${precision} decimal places${colors.reset}`);
      return;
    }

    // Two-argument operations
    if (command === 'add' || command === '+') {
      if (args.length < 2) throw new Error('add requires 2 arguments');
      result = calculator.add(parseNumber(args[0]), parseNumber(args[1]));
    } else if (command === 'sub' || command === '-') {
      if (args.length < 2) throw new Error('sub requires 2 arguments');
      result = calculator.subtract(parseNumber(args[0]), parseNumber(args[1]));
    } else if (command === 'mul' || command === '*') {
      if (args.length < 2) throw new Error('mul requires 2 arguments');
      result = calculator.multiply(parseNumber(args[0]), parseNumber(args[1]));
    } else if (command === 'div' || command === '/') {
      if (args.length < 2) throw new Error('div requires 2 arguments');
      result = calculator.divide(parseNumber(args[0]), parseNumber(args[1]));
    } else if (command === 'mod' || command === '%') {
      if (args.length < 2) throw new Error('mod requires 2 arguments');
      result = calculator.modulo(parseNumber(args[0]), parseNumber(args[1]));
    } else if (command === 'pow' || command === '^') {
      if (args.length < 2) throw new Error('pow requires 2 arguments');
      result = calculator.power(parseNumber(args[0]), parseNumber(args[1]));
    } else if (command === 'root') {
      if (args.length < 2) throw new Error('root requires 2 arguments');
      result = calculator.nthRoot(parseNumber(args[0]), parseNumber(args[1]));
    } else if (command === 'atan2') {
      if (args.length < 2) throw new Error('atan2 requires 2 arguments');
      result = calculator.atan2(parseNumber(args[0]), parseNumber(args[1]));
    }
    // One-argument operations
    else if (command === 'sqrt') {
      if (args.length < 1) throw new Error('sqrt requires 1 argument');
      result = calculator.sqrt(parseNumber(args[0]));
    } else if (command === 'abs') {
      if (args.length < 1) throw new Error('abs requires 1 argument');
      result = calculator.abs(parseNumber(args[0]));
    } else if (command === 'sign') {
      if (args.length < 1) throw new Error('sign requires 1 argument');
      result = calculator.sign(parseNumber(args[0]));
    } else if (command === 'ceil') {
      if (args.length < 1) throw new Error('ceil requires 1 argument');
      result = calculator.ceil(parseNumber(args[0]));
    } else if (command === 'floor') {
      if (args.length < 1) throw new Error('floor requires 1 argument');
      result = calculator.floor(parseNumber(args[0]));
    } else if (command === 'round') {
      if (args.length < 1) throw new Error('round requires 1 argument');
      result = calculator.round(parseNumber(args[0]));
    } else if (command === 'factorial' || command === '!') {
      if (args.length < 1) throw new Error('factorial requires 1 argument');
      result = calculator.factorial(parseNumber(args[0]));
    } else if (command === 'ln') {
      if (args.length < 1) throw new Error('ln requires 1 argument');
      result = calculator.ln(parseNumber(args[0]));
    } else if (command === 'log10' || command === 'log') {
      if (args.length < 1) throw new Error('log10 requires 1 argument');
      result = calculator.log10(parseNumber(args[0]));
    } else if (command === 'log2') {
      if (args.length < 1) throw new Error('log2 requires 1 argument');
      result = calculator.log2(parseNumber(args[0]));
    } else if (command === 'exp') {
      if (args.length < 1) throw new Error('exp requires 1 argument');
      result = calculator.exp(parseNumber(args[0]));
    } else if (command === 'sin') {
      if (args.length < 1) throw new Error('sin requires 1 argument');
      result = calculator.sin(parseNumber(args[0]));
    } else if (command === 'cos') {
      if (args.length < 1) throw new Error('cos requires 1 argument');
      result = calculator.cos(parseNumber(args[0]));
    } else if (command === 'tan') {
      if (args.length < 1) throw new Error('tan requires 1 argument');
      result = calculator.tan(parseNumber(args[0]));
    } else if (command === 'asin') {
      if (args.length < 1) throw new Error('asin requires 1 argument');
      result = calculator.asin(parseNumber(args[0]));
    } else if (command === 'acos') {
      if (args.length < 1) throw new Error('acos requires 1 argument');
      result = calculator.acos(parseNumber(args[0]));
    } else if (command === 'atan') {
      if (args.length < 1) throw new Error('atan requires 1 argument');
      result = calculator.atan(parseNumber(args[0]));
    } else if (command === 'sinh') {
      if (args.length < 1) throw new Error('sinh requires 1 argument');
      result = calculator.sinh(parseNumber(args[0]));
    } else if (command === 'cosh') {
      if (args.length < 1) throw new Error('cosh requires 1 argument');
      result = calculator.cosh(parseNumber(args[0]));
    } else if (command === 'tanh') {
      if (args.length < 1) throw new Error('tanh requires 1 argument');
      result = calculator.tanh(parseNumber(args[0]));
    } else if (command === 'asinh') {
      if (args.length < 1) throw new Error('asinh requires 1 argument');
      result = calculator.asinh(parseNumber(args[0]));
    } else if (command === 'acosh') {
      if (args.length < 1) throw new Error('acosh requires 1 argument');
      result = calculator.acosh(parseNumber(args[0]));
    } else if (command === 'atanh') {
      if (args.length < 1) throw new Error('atanh requires 1 argument');
      result = calculator.atanh(parseNumber(args[0]));
    } else if (command === 'deg2rad') {
      if (args.length < 1) throw new Error('deg2rad requires 1 argument');
      result = calculator.degreesToRadians(parseNumber(args[0]));
    } else if (command === 'rad2deg') {
      if (args.length < 1) throw new Error('rad2deg requires 1 argument');
      result = calculator.radiansToDegrees(parseNumber(args[0]));
    }
    // Constants
    else if (command === 'pi') {
      result = constants.PI;
    } else if (command === 'e') {
      result = constants.E;
    } else if (command === 'phi') {
      result = constants.PHI;
    } else {
      throw new Error(`Unknown command: ${command}. Type "help" for available commands.`);
    }

    // Print result with proper formatting
    console.log(`${colors.green}${colors.bright}= ${result}${colors.reset}`);
  } catch (error) {
    if (error instanceof CalculatorError) {
      console.log(`${colors.red}Error: ${error.message}${colors.reset}`);
    } else if (error instanceof Error) {
      console.log(`${colors.red}${error.message}${colors.reset}`);
    } else {
      console.log(`${colors.red}An unexpected error occurred${colors.reset}`);
    }
  }
}

function startREPL(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `${colors.blue}calc>${colors.reset} `,
  });

  printWelcome();

  rl.prompt();

  rl.on('line', (line) => {
    processCommand(line);
    rl.prompt();
  });

  rl.on('close', () => {
    console.log(`${colors.green}\nGoodbye!${colors.reset}`);
    process.exit(0);
  });
}

// Main entry point
if (require.main === module) {
  startREPL();
}

export { processCommand, parseNumber };

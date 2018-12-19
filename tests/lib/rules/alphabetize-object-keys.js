/**
 * @fileoverview Alphabetizes the keys of objects.
 * @author Jacob Smith
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/alphabetize-object-keys');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2018, sourceType: 'module' } });
ruleTester.run('alphabetize-object-keys', rule, {
  valid: [
    '{}',
    "module.exports = { alpha: 'one', bravo: 'bravo' }",
    "module.exports = { alpha: { charlie: 'charlie', delta: 'delta' }, bravo: 'bravo' }",
    {
      code: [
        "var alpha = { alpha: 'alpha' }",
        "module.exports = { bravo: 'bravo', ...alpha }"
      ].join("\n")
    },
  ],
  invalid: [
    {
      code: "module.exports = { bravo: 'hello', alpha: 'one' }",
      errors: [{
        message: 'Object keys should be alphabetized.',
      }],
    },
    {
      code: "module.exports = { alpha: 'alpha', bravo: { delta: 'delta', charlie: 'charlie' } }",
      errors: [{
        message: 'Object keys should be alphabetized.',
      }],
    },
  ],
});

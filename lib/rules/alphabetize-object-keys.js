/**
 * @fileoverview Alphabetizes the keys of objects.
 * @author Jacob Smith
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Alphabetizes the keys of objects.',
      category: 'suggestion',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
  },
  create: (context) => {
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function arraysEqual([head1, ...arr1], [head2, ...arr2]) {
      if (head1 !== head2) {
        return false;
      }

      if (arr1.length > 0) {
        return arraysEqual(arr1, arr2);
      }

      return true;
    }

    function fixAlphabetize(fixer, node, ctx) {
      const object = {};
      const sourceCode = ctx.getSourceCode();

      const objectProperties = node.properties;
      objectProperties.forEach((prop) => {
        object[prop.key.name] = sourceCode.getText(prop.value);
      });

      const alphabetizedKeysAndValues = [];
      Object.keys(object)
        .sort()
        .forEach((key) => {
          alphabetizedKeysAndValues.push(`${key}: ${object[key]}`);
        });
      const replacementString = `{ ${alphabetizedKeysAndValues.join(', ')} }`;

      return fixer.replaceText(node, replacementString);
    }


    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ObjectExpression(node) {
        if (node.properties.some(prop => prop.type === 'SpreadElement')) return;

        const objectKeys = node.properties.map(prop => prop.key.name);
        const sortedObjectKeys = objectKeys.slice().sort();

        if (!arraysEqual(objectKeys, sortedObjectKeys)) {
          context.report({
            node,
            message: 'Object keys should be alphabetized.',
            fix: fixer => fixAlphabetize(fixer, node, context),
          });
        }
      },
    };
  },
};

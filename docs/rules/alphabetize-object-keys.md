# Alphabetizes the keys of objects. (alphabetize-object-keys)

As objects get larger, it can become difficult to find a key you are looking for. Additionally, a non-standard ordering of keys can make unnecessary noise in git diffs.

## Rule Details

This rule aims to alert you when objects are not ordered in an alphabetical manner. It also provides a built-in fixer to reorder the object's keys for you. Do note that you may need another rule with fix abilities to ensure that your spacing remains correct (like [object-property-newline](https://eslint.org/docs/rules/object-property-newline)).

Examples of **incorrect** code for this rule:

```js
{ bear: 'bear', apple: 'apple' }
```

Examples of **correct** code for this rule:

```js
{ apple: 'apple', bear: 'bear' }
```

## When Not To Use It

This rule should _not_ be used if you rely on the order of keys in objects as it will change the order of those keys. In practice, an array is generally a better way of setting order-dependent relationships.

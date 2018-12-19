# eslint-plugin-jacobsmith-custom

A collection of eslint rules customized for the programming styles of Jacob Smith.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jacobsmith-custom`:

```
$ npm install eslint-plugin-jacobsmith-custom --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jacobsmith-custom` globally.

## Usage

Add `jacobsmith-custom` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jacobsmith-custom"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jacobsmith-custom/alphabetize-object-keys": 2
    }
}
```

## Supported Rules

* alphabetize-object-keys


module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'import/order': [
            'error',
            {
              groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
              pathGroups: [
                {
                  pattern: '{react,react-dom/**,react-router-dom}',
                  group: 'builtin',
                  position: 'before',
                },
                {
                  pattern: '@src/**',
                  group: 'parent',
                  position: 'before',
                },
              ],
              pathGroupsExcludedImportTypes: ['builtin'],
              alphabetize: {
                order: 'asc',
              },
              'newlines-between': 'always',
            },
          ],
    }
}

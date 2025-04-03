// @ts-check

import js from '@eslint/js'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
    { ignores: ['node_modules', 'dist'] },
    js.configs.recommended,
    tsEslint.configs.recommended,
    {
        files: ['**/*.{js,ts}'],
        plugins: { js },
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
    }
)

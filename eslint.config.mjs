import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import parserTs from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    languageOptions: {
      parser: parserTs,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // TypeScript-specific rules
      '@typescript-eslint/explicit-function-return-type': [
        'error', // Obliga a definir el tipo de retorno
        {
          allowExpressions: false, // No permite omitir tipos de retorno en expresiones
          allowTypedFunctionExpressions: false, // No permite expresiones de funciones tipadas
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error', // Obliga a definir tipos de retorno en los métodos exportados
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          overrides: {
            constructors: 'no-public', // Define reglas de accesibilidad para clases
          },
        },
      ],
      '@typescript-eslint/typedef': [
        'error', // Obliga a declarar tipos para variables, propiedades y parámetros
        {
          parameter: true, // Obliga a especificar tipos para parámetros de función
          propertyDeclaration: true, // Obliga a declarar tipos para propiedades
          variableDeclaration: true, // Obliga a declarar tipos para variables
          memberVariableDeclaration: true, // Obliga a declarar tipos en variables miembro de clases
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
]
import config from '@battis/eslint-config';

export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-namespace': 'off'
    }
  }
];

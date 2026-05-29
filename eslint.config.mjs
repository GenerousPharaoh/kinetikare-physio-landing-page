import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

// ESLint 9 flat config. Next 16 removed `next lint` and ships a flat-config-only
// eslint-config-next, so its flat config array is imported and spread directly.
// Ruleset matches the previous .eslintrc.json: next/core-web-vitals + prettier,
// with react/no-unescaped-entities disabled.
const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'node_modules/**',
      'next-sitemap.config.js',
      'scripts/**',
    ],
  },
  ...nextCoreWebVitals,
  prettier,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      // The react-hooks plugin bundled with eslint-config-next@16 adds React
      // Compiler readiness rules that flag pre-existing, working patterns
      // (setState in effects, ref access in render). This project does not use
      // the React Compiler, so these are disabled to preserve the pre-upgrade
      // lint behavior. Revisit as a dedicated cleanup if adopting the compiler.
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
    },
  },
];

export default eslintConfig;

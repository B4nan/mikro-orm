module.exports = {
  docs: {
    'Overview': [
      'installation',
      'defining-entities',
      'relationships',
      'entity-manager',
      'repositories',
    ],
    'Fundamentals': [
      'identity-map',
      'entity-references',
      'entity-constructors',
      'collections',
      'unit-of-work',
      'transactions',
      'cascading',
      'composite-keys',
      'deployment',
      'decorators',
    ],
    'Advanced Features': [
      'nested-populate',
      'query-conditions',
      'query-builder',
      'propagation',
      'serializing',
      'entity-helper',
      'property-validation',
      'lifecycle-hooks',
      'loading-strategy',
      'naming-strategy',
      'custom-types',
      'entity-schema',
      'inheritance-mapping',
      'metadata-providers',
      'metadata-cache',
      'debugging',
      'schema-generator',
      'entity-generator',
      'migrations',
      'read-connections',
      'configuration',
    ],
    'Usage with Different Drivers': [
      'usage-with-sql',
      'usage-with-mongo',
    ],
    'Recipes': [
      'usage-with-nestjs',
      'usage-with-js',
      'custom-driver',
      'multiple-schemas',
      'using-bigint-pks',
    ],
    'Example Integrations': [
      { type: 'link', label: 'Express + MongoDB + TypeScript', href: 'https://github.com/mikro-orm/express-ts-example-app' },
      { type: 'link', label: 'NestJS + MySQL + TypeScript', href: 'https://github.com/mikro-orm/nestjs-example-app' },
      { type: 'link', label: 'RealWorld example app (Nest + MySQL)', href: 'https://github.com/mikro-orm/nestjs-realworld-example-app' },
      { type: 'link', label: 'Express + MongoDB + JavaScript', href: 'https://github.com/mikro-orm/express-js-example-app' },
    ],
  },
};

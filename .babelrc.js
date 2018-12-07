module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'entry',
        targets: { esmodules: true },
      },
    ],
    '@babel/react',
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};

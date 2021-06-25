module.exports = {
  installCommand: () => 'npm ci --prefer-offline --no-audit --no-optional',
  buildCommand: () => null,
  publishCommand: ({ tag }) => `echo "Releasing ${tag} version of UNICEF docs"`,
};

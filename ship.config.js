module.exports = {
  installCommand: () => 'npm ci --prefer-offline --no-audit --no-optional',
  beforeCommitChanges: () => 'npm run lintfix',
  buildCommand: () => null,
  publishCommand: ({ tag }) => `echo "Releasing ${tag} version of UNICEF docs"`,
};

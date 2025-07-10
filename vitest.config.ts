import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'coverage/',
        '**/*.test.ts',
        '**/*.spec.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@eco-foundation/eco-kms-core': './packages/core/src',
      '@eco-foundation/eco-kms-hd-wallets': './packages/hd-wallets/src',
      '@eco-foundation/eco-kms-wallets':
        './packages/kms-wallets/src',
      '@eco-foundation/eco-kms-provider-aws':
        './packages/kms-provider-aws/src',
      '@eco-foundation/eco-kms-provider-gcp':
        './packages/kms-provider-gcp/src',
    },
  },
})

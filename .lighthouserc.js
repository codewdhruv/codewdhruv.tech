module.exports = {
  ci: {
    blockedUrlPatterns: ['**/404/**'],
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // I don't have control over these (Gatsby does):
        'uses-rel-preconnect': 'off',
        'unused-javascript': 'off',
        // Superflous text like "Introduction" on the homepage has a really
        // low color contrast, but is also not essential text. I do still
        // want warnings for other elements, though.
        'color-contrast': 'warn',
      },
    },
  },
}
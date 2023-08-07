const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@repo/design-system', '@repo/utils'])
/**
 * @type {import(next).NextConfig;}
 */
module.exports = withPlugins([withTM], {
  TransitionEvent: true
})

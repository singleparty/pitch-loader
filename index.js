const loaderUtils = require('loader-utils')
const path = require('path')
const isPitcher = l => l.path !== __filename

module.exports = code => code
module.exports.pitch = function() {
  const options = loaderUtils.getOptions(this)
  const base = path.parse(this.resourcePath).base
  if (typeof options.pitch !== 'function') return
  // remove self
  this.loaders = this.loaders.filter(isPitcher)
  const args = Array.prototype.slice.call(arguments, 0)
  options.pitch.call(this, args, {
    filename: base,
    context: this
  })
}
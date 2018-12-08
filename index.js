var shortcut = undefined

function shortcutPlugin (state, emitter) {
  shortcut = emitter
}

function shortcutGetter () {
  return shortcut.emit.apply(shortcut, arguments)
}

module.exports = shortcutPlugin
module.exports.emit = shortcutGetter

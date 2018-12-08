# choo-shortemit
shortcut access to `emit()` anywhere in your app

copy of Jon Gacnik's [choo-shortcache](https://github.com/jongacnik/choo-shortcache)

## Example
```javascript
app.use(require('choo-shortemit'))
```
Anywhere in your application
```javascript
var html = require('choo/html')
var Component = require('nanocomponent')
var { emit } = require('choo-shortemit')

module.exports = class MyComponent extends Component {
  createElement() {
    return html`
      <a href="#" onclick="${onclick}">Click me!</a>
    `

    function onclick(e) {
      e.preventDefault()
      emit('clicked')
    }
  }
}

```

## Why?
Sometimes you want to interact directly with the app so you want to call `emit()`, but it's a struggle (and ugly code) to pass it down to the component. This plugin allows you to emit event anywhere in your app. Under the hood it just creates a reference to `emitter.emit()`.

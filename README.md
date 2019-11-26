# Vue Cartkit Library

> An awesome vue component library built with Vue CLI 3.

## Usage

### In a module system

Install the library with NPM:

```bash
npm install vue-cartkit-library
```

Then register the library as a plugin to globally install all components:

```js
import VueCartkitLibrary from 'vue-cartkit-library'

Vue.use(VueCartkitComponents)
```

Or, import components individually for local registration:

```js
import { SalesPop } from 'vue-cartkit-library'

export default {
  components: { SalesPop }
}
```

#### Individually packaged components

If you only want to use a small subset of components, only import individually packaged components to reduce the size of your application:

```js
import SalesPop from 'vue-cartkit-library.SalesPop'
```

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app">
  <hello-world></hello-world>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-cartkit-library"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
  <hello-world></hello-world>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-cartkit-library/SalesPop"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

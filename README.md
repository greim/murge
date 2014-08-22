# Murge

Merge multiple objects into one, optionally creating a new cloned object.
Similar to `_.extend` or `jQuery.extend` but more flexible. Works in Node.js
and the browser.

Credit goes to https://github.com/yeikos/js.merge for creating this module.
This one contains changes that would likely break the massive number
of dependencies (~20k) on yeikos's, namely that this one only merges *owned*
properties, ignoring prototype properties.

Original npm `merge` module: https://www.npmjs.org/package/merge

## Node.js Usage

```sh
npm install murge --save
```

```js
var murge = require('murge');

// merge an object (modifies the first object)
console.log(murge({one:'hello'}, {two: 'world'}));
// -> {"one": "hello", "two": "world"}

// merge an object (does not modify the first object)
console.log(murge(null, {one:'hello'}, {two: 'world'}));
// -> {"one": "hello", "two": "world"}

// deep clone an object
var original = { x: { y: 1 } };
var cloned = murge(true, original);
cloned.x.y++;
console.log(original.x.y, cloned.x.y);
// -> 1, 2

// deep merge an object
var obj1 = { x: { y: 2 } }
var obj2 = { x: { z: 3 } }
var merged = murge(true, obj1, obj2);
console.log(merged);
// -> { x: { y: 2, z: 3 } }
```

## Browser Usage

```html
<script src="path/to/murge.js"></script>
<script>
  window.merge(ob1, ob2);
</script>
```

## Tests

```sh
npm test
```

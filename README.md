# Murge

Merge multiple objects into one, optionally creating a new cloned object.
Similar to `_.extend` or `jQuery.extend` but more flexible. Works in Node.js
and the browser.

Credit goes to [yeikos](https://github.com/yeikos) for creating this module
([github](https://github.com/yeikos/js.merge), [npm](https://www.npmjs.org/package/merge)).
This one contains a few changes I felt were necessary:

 1. It only merges own properties, ignoring ones from the prototype chain. This would likely break some of the ~24k dependencies on the other version and is the main reason for this fork.
 2. It contains [perf improvements](http://jsperf.com/merge-test) which have also been [submitted](https://github.com/yeikos/js.merge/pull/11) to the original module as a pull request, but not yet accepted as of this writing.
 3. It supports RequireJS/AMD, which the other does not as of this writing.

## Node.js Usage

```sh
$ npm install murge
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

## RequireJS/AMD usage

```js
require(['./murge'], function(murge){
  murge(obj1, obj2)
})
```

## Browser Usage

```html
<script src="path/to/murge.js"></script>
<script>
  window.murge(ob1, ob2)
</script>
```

## Tests

```sh
$ npm test
```

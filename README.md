# object-path-resolve
> A 200b (gzipped) utility function to resolve object properties with string paths

## Methods
### `resolve(obj: Object, path: String)`
> Retrieve a value from the `obj` based on the `path` (represented in dot and bracket notation)

## Usage
```js
import resolve from 'object-path-resolve'

const obj = {
  prop: { name: 'John' },
  arr: [
    'one', 'two', 'three'
  ]
}

resolve(obj, 'prop.name') // => 'John'
resolve(obj, 'arr[1]') // => 'two'
```

## License
[MIT](https://github.com/johnsylvain/object-path-resolve/blob/master/LICENSE)
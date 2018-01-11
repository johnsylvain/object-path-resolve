export default function resolve (obj, path) {
  let ref = obj
  path = path
    .split(/(?:[.\[\]])/g)
    .reduce((a, i) => Boolean(i)
      ? a.concat(i.replace(/^["'](.*)["']$/g, '$1'))
      : a
    , [])
  for (let i=0; i<path.length; i++) ref = ref[path[i]]
  return ref
}

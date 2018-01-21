export default function resolve (obj, path) {
  path = path
    .split(/[.\[\]]+/g)
    .filter(Boolean)
    .map(i => i.replace(/^["'](.*)["']$/g, '$1'))
  for (let i = 0; i < path.length; i++) obj = obj[path[i]]
  return obj
}

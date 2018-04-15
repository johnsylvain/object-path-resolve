export default function resolve (obj, path) {
  path = path
    .split(/[.\[\]]+/g)
    .filter(Boolean)
    .map(i => i.replace(/^["'](.*)["']$/g, '$1'))
  try {
    for (let i in path) obj = obj[path[i]]
    return obj
  } catch (e) {}
}

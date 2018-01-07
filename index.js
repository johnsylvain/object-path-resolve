module.exports = function resolve (obj, path) {
  path = path.split('.')
  let res = obj
  for (let i = 0; i < path.length; i++) res = res[path[i]]
  return res
}
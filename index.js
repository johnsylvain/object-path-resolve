export default function resolve (obj, path) {
  path = path
    .split(/[.\[\]]/g)
    .filter(i => i)
    .map(i => isNaN(i) 
      ? i.replace(/^["'](.*)["']$/g, '$1') 
      : parseInt(i)
    )
    
  let ref = obj
  for (let i = 0; i < path.length; i++) ref = ref[path[i]]
  return ref
}

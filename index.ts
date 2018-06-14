export default function resolve(obj: any, path: string): object | undefined {
  const params: string[] = path
    .split(/[.\[\]]+/g)
    .filter(Boolean)
    .map((i: string) => i.replace(/^["'](.*)["']$/g, "$1"));
  try {
    for (let i in params) obj = obj[params[i]];
    return obj;
  } catch (e) {}
}

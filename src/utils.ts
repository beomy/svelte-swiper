export function kebabcase (string: string): string {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export function getStyles (style: { [x: string]: string }): string {
  return Object.entries(style).reduce((acc: string, [key, value]) => {
    return `${acc} ${kebabcase(key)}: ${value};`
  }, '').trim();
}

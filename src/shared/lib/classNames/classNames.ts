type Mods = Record<string, boolean | string>;

// classNames('remove-btn', {hovered: true, selectable: false}, ['pdg']);
// 'remove-btn hovered pdg'

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
};
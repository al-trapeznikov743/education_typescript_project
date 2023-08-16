type Mods = Record<string, boolean | string>;

// classNames('remove-btn', {hovered: true, selectable: false}, ['pdg']);
// 'remove-btn hovered pdg'

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([value]) => !!value)
      .map(([key]) => key)
  ].join(' ');
};
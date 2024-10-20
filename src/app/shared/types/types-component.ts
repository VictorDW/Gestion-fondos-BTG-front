export type linkStructure = {
    _title: string,
    _icon?: string
}

export type navStructure = {
    _href: string,
    _link: linkStructure
}

export type typeSelect = number | string | null;

export type OptionSelect<T extends typeSelect> = {
  value: T,
  name: string
}
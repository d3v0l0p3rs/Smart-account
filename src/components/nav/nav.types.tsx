export interface Link {
  path: string
  name: string
}

export interface NavConf {
  links: Link[]
  activeClassName: string
}

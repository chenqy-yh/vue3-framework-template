import { IconType } from '@icon-park/vue-next/es/all'

interface Menu {
  title?: string
  icon?: string
  active?: boolean
  route?: string
}

export interface IMenu extends Menu {
  children?: IMenu[]
}

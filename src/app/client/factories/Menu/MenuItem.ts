import {BaseMenuItemDTO} from "../../../shared/models/BaseMenuItemDTO";

export abstract class MenuItem {
  protected readonly identifier: string
  protected readonly title: string
  protected readonly price: number
  protected readonly pic: string | null

  protected obs!: string
  obsEditing!: string
  withObs: boolean | ''

  protected constructor(menuItem: BaseMenuItemDTO) {
    this.identifier = menuItem.identifier
    this.title = menuItem.title
    this.price = Number(menuItem.price)
    this.withObs = ''
    this.pic = menuItem.pic
  }

  getIdentifier(){
    return this.identifier
  }
  getTitle(){
    return this.title
  }
  getPrice(){
    return this.price
  }
  setObs(obs: string){
    this.obs = obs
  }
  getObs(){
    return this.obs
  }
  getPic(){
    return this.pic
  }
}

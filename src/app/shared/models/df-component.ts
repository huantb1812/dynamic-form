export interface DfComponent {
  name: string;
  displayName: string;
  icon: string;
  type: TypeComponent,
  isClone?:boolean
}

export enum TypeComponent {
  Control='control',
  Layout='layout'
}

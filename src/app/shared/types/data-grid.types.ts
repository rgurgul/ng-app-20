export interface DataGridRowConfig<T> {
  key?: T;
  type?: FieldTypes;
  header?: string;
  disabled?: boolean;
}

export enum FieldTypes {
  INPUT = 'input',
  IMAGE = 'img',
  BUTTON = 'button'
}

export type ActionTypes = 'add' | 'remove' | 'update' | 'more' | 'buy';

export interface GridAction {
  type: ActionTypes,
  data: any
}

import { createAction, props } from '@ngrx/store';

export const initNewDfForm = createAction(
  '[dynamic form] Init a new form',
  props<{ name: string }>()
);

export const addField = createAction(
  '[dynamic form] add a new field',
  props<{ lable: string; propertyName: string; propertyType: string , required: boolean}>()
);

export const reset = createAction('[dynamic form] reset');

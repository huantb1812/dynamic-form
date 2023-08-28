export enum SchemaType {
  object = 'object',
}export enum PropertyType {
  string = 'string',
  boolean = 'boolean',
  object = 'object',
  integer = 'integer',
  number = 'number',
}
export interface SchemaProperty{

}
export interface DynamicForm {
  type: SchemaType;
  properties: any[]; //
  required: string[] // list all property name have to required
}

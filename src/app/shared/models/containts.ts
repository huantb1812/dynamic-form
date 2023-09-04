import { DfComponent, TypeComponent } from './df-component';

export const FIELDS: DfComponent[] = [
  { displayName: 'Text', name: 'text', icon: 'power_input', type:TypeComponent.Control },
  { displayName: 'Textarea', name: 'textarea', icon: 'article' , type:TypeComponent.Control},
  { displayName: 'Radio', name: 'radio', icon: 'radio_button_checked', type:TypeComponent.Control },
  { displayName: 'Checkbox', name: 'checkbox', icon: 'check_box' , type:TypeComponent.Control},
  { displayName: 'Date', name: 'date', icon: 'calendar_month', type:TypeComponent.Control },
];
export const LAYOUTS: DfComponent[] = [
  { displayName: 'Horizontal Layout', name: 'horizontal_layout', icon: 'swap_horiz', type:TypeComponent.Layout },
  { displayName: 'Vertical Layout', name: 'vertical_layout', icon: 'swap_vert', type:TypeComponent.Layout },
  { displayName: 'Group', name: 'group', icon: 'crop_free', type:TypeComponent.Layout },
  { displayName: 'Label', name: 'label', icon: 'text_fields', type:TypeComponent.Layout },
  { displayName: 'Categorization', name: 'categorization', icon: 'tab_group', type:TypeComponent.Layout },
];

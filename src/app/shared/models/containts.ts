import { Field } from './field';

export const FIELDS: Field[] = [
  { displayName: 'Text', name: 'text', icon: 'power_input' },
  { displayName: 'Textarea', name: 'textarea', icon: 'article' },
  { displayName: 'Radio', name: 'radio', icon: 'radio_button_checked' },
  { displayName: 'Checkbox', name: 'checkbox', icon: 'check_box' },
  { displayName: 'Date', name: 'date', icon: 'calendar_month' },
];
export const LAYOUTS: Field[] = [
  { displayName: 'Horizontal Layout', name: 'horizontal_layout', icon: 'swap_horiz' },
  { displayName: 'Vertical Layout', name: 'vertical_layout', icon: 'swap_vert' },
  { displayName: 'Group', name: 'group', icon: 'crop_free' },
  { displayName: 'Label', name: 'label', icon: 'text_fields' },
  { displayName: 'Categorization', name: 'categorization', icon: 'tab_group' },
];

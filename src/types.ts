export interface FieldUiState {
  id: string;
  expand: boolean;
}

export interface Size {
  width: number;
  height: number;
}

export interface Template {
  name: string;
  image: string | null;
  size: Size;
  fontName: 'NotoSansCJKjp';
  fields: Field[];
}

interface BaseField {
  id: string;
  name: string;
  sampleData: string;
  position: {
    x: number;
    y: number;
  };
  size: Size;
}

export interface TextField extends BaseField {
  type: 'text';
  style: {
    alignment: 'left' | 'center' | 'right';
    fontSize: number;
    characterSpacing: number;
    lineHeight: number;
  };
}

export interface ImageField extends BaseField {
  type: 'image';
  style: {};
}

export type Field = TextField | ImageField;

export function isTextField(field: Field): field is TextField {
  return field.type === 'text';
}

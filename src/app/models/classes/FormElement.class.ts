import { BorderControl } from "../interfaces/BorderControl";


const PRIMARY_COLOR: string = "#3aafa9";
const SECONDARY_COLOR: string = "#2b7a78"
const FONT_PRIMARY: string = "#17252a";

export class FormElement {
  id: number;
  type: string;
  placeholderText?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  required?: boolean;
  color?: string;
  borderStyle?: string;
  borderWidth?: string;
  borderColor?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderControl?: BorderControl;
  labelText?: string;
  checkboxStyle?: string;

  constructor(type: string) {

    this.id = Date.now() as number;
    this.type = type;

    switch (type) {
      case 'input':
        this.placeholderText = 'input';
        this.width = "100%";
        this.height = "40px";
        this.fontSize = "16px";
        this.required = false;
        this.color = FONT_PRIMARY;
        this.borderWidth = "2px";
        this.borderStyle = "solid";
        this.borderColor = PRIMARY_COLOR;
        this.fontWeight = "400";
        this.borderControl = {
          borderBottom: true,
          borderTop: true,
          borderLeft: true,
          borderRight: true
        };
        break;

      case 'textarea':
        this.placeholderText = 'textarea';
        this.width = "100%";
        this.height = "60px";
        this.fontSize = "16px";
        this.required = false;
        this.color = FONT_PRIMARY;
        this.borderWidth = "2px";
        this.borderStyle = "solid";
        this.borderColor = PRIMARY_COLOR;
        this.fontWeight = "400";
        this.borderControl = {
          borderBottom: true,
          borderTop: true,
          borderLeft: true,
          borderRight: true
        };
        break;

      case 'button':
        this.width = "100%";
        this.height = "40px";
        this.fontSize = "16px";
        this.color = FONT_PRIMARY;
        this.borderWidth = "2px";
        this.borderColor = "#2b7a78";
        this.fontWeight = "400";
        this.backgroundColor = PRIMARY_COLOR;
        this.borderControl = {
          borderBottom: true,
          borderTop: true,
          borderLeft: true,
          borderRight: true
        };
        break;
      case 'select':
        this.placeholderText = 'select';
        this.width = "100%";
        this.height = "45px";
        this.fontSize = "16px";
        this.required = false;
        this.color = FONT_PRIMARY;
        this.borderWidth = "2px";
        this.borderStyle = "solid";
        this.borderColor = PRIMARY_COLOR;
        this.fontWeight = "400";
        this.borderControl = {
          borderBottom: true,
          borderTop: true,
          borderLeft: true,
          borderRight: true
        };
        break;
      case 'checkbox':
        this.color = FONT_PRIMARY;
        this.fontSize = "16px";
        this.fontWeight = "400";
        this.labelText = 'Check me!';
        this.checkboxStyle = "primary";
    }
  }
}

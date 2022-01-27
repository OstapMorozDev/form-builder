

export class FormElement {
    id: number;
    type: string;
    placeholderText?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    isRequired?: boolean;
    textColor?: string;
    borderStyle?: string;
    borderWidth?: string;
    borderColor?: string;
    fontWeight?: string;
    backgroundColor?: string;

    constructor(type: string) {

        this.id = Date.now() as number;
        this.type = type;

        switch (type) {
            case 'input':
                this.placeholderText = 'input';
                this.width = "100%";
                this.height = "40px";
                this.fontSize = "16px";
                this.isRequired = false;
                this.textColor = "#17252a";
                this.borderWidth = "2px";
                this.borderStyle = "solid";
                this.borderColor = "#2b7a78";
                this.fontWeight = "400";
                break;

            case 'textarea':
                this.placeholderText = 'textarea';
                this.width = "100%";
                this.height = "60px";
                this.fontSize = "16px";
                this.isRequired = false;
                this.textColor = "#17252a";
                this.borderWidth = "2px";
                this.borderStyle = "solid";
                this.borderColor = "#2b7a78";
                this.fontWeight = "400";
                break;

            case 'button':
                this.width = "100%";
                this.height = "40px";
                this.fontSize = "16px";
                this.textColor = "#17252a";
                this.borderWidth = "2px";
                this.borderColor = "#2b7a78";
                this.fontWeight = "400";
                this.backgroundColor = "#2b7a78"
                break;
            
            
        }
    }
}
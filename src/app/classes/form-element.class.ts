export class FormElement {
    id: number;
    type: string;
    placeholderText?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    isRequired?: boolean
    borderStyle?: string
    textColor?: string

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
                this.borderStyle = "solid";
                this.textColor = "#17252a";
        }
    }
}
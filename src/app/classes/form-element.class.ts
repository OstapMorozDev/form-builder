export class FormElement {
    id: number;
    type: string;
    placeholderText?: string;
    width?: string;
    height?: string;
    fontSize?: string;

    constructor(type: string) {

        this.id = Date.now() as number;
        this.type = type;

        switch (type) {
            case 'input':
                this.placeholderText = 'input';
                this.width = "100%";
                this.height = "40px"
                this.fontSize = "16px"
        }
    }
}
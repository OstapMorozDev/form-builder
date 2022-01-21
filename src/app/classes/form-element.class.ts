export class FormElementC<T> {
    id: number;
    type: string;
    placeholderText?: string;
    width?: string;
    height?: string;

    constructor(id: number, type: string, placeholderText: string = "placeholder text",
        width: string = "100%", height: string = "100px") {

        this.id = id;
        this.type = type;
        this.placeholderText = placeholderText;
        this.width = width;
        this.height = height;
    }
}
export interface Image {
    id?: number;
    path?: string;
    type: ImageTypes;
    base64?: string;
}

export enum ImageTypes {
    TREE = "TREE",
    YARD_SKETCH = "YARD_SKETCH",
}
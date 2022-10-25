import { Image } from "./image.model"

export interface Tree {
    id?: number
    fallColor?: string;
    flower?: string;
    form?: string;
    fruit?: string;
    growthRateAndSize?: string;
    images?: Image[];
    name: string;
    nativeRegion?: string;
    notes?: string;
    scientificName?: string;
    tolerates?: string;
    use?: string;
}
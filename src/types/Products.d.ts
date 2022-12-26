interface Product {
    id: string;
    name: string;
    price: number;
    display: boolean;
    category: string;
    description?: string;
    images: string[];
    width?: number;
    height?: number;
    length?: number;
    manufacturer?: string;
    colors?: ColorVariant[];
}

export interface ColorVariant {
    color: string;
    price:number;
}

export interface ClothCategory {
    category: string;
    price: number;
}

export interface AdditionalSize{
    width?: number;
    height?: number;
    length?: number;
    price?: number;
}

interface Sofa extends Product {
    category: "sofa";
    clothCategories?: ClothCategory[];
}

interface Chair extends Product {
    category: "chair";
}

interface Bed extends Product {
    category: "bed";
    material?: string;
}

interface Closet extends Product {
    category: "closet";
    material?: string;
}

interface Bedding extends Product {
    category: "bedding";
    additionalSizes?: AdditionalSize[];
}

export type AllProducts = Sofa | Chair | Bed | Closet | Bedding;

export type ICategories = Extract<
  AllProducts["category"],
  
>;
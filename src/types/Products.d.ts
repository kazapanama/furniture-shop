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
    origin?:'Дубок'|'Volko'|'Інше';
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

interface Wardrobe extends Product {
    category: "wardrobe";
}

interface Dresser extends Product {
    category: "dresser";
}

interface Kitchen extends Product {
    category: "kitchen";
}

export type AllProducts = Sofa | Chair | Bed | Closet | Bedding | Wardrobe | Dresser | Kitchen;

export type ICategories = Extract<
  AllProducts["category"],
  
>;
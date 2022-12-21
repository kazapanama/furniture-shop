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



interface Sofa extends Product {
    
}

interface Chair extends Product {

}

interface Bed extends Product {

    material?: string;
}

interface Closet extends Product {

    material?: string;
}

interface Bedding extends Product {
}

export type AllProducts = Sofa | Chair | Bed | Closet | Bedding;
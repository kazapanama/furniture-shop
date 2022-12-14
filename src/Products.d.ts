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
}

interface Sofa extends Product {
    color?: string;
}

interface Chair extends Product {
    color?: string;
}

interface Bed extends Product {
    color?: string;
    material?: string;
}

interface Closet extends Product {
    color?: string;
    material?: string;
}

interface Bedding extends Product {

}

export type AllProducts = Sofa | Chair | Bed | Closet | Bedding;
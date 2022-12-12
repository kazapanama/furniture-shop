interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    category: string;
    images: string[];
}

interface Sofa extends Product {
    width?: number;
    height?: number;
    depth?: number;
    color?: string;
}

interface Chair extends Product {
    width?: number;
    height?: number;
    depth?: number;
    color?: string;
}

interface Bed extends Product {
    width?: number;
    height?: number;
    depth?: number;
    color?: string;
    material?: string;
}

interface Closet extends Product {
    width?: number;
    height?: number;
    depth?: number;
    color?: string;
    material?: string;
}

export type AllProducts = Sofa | Chair | Bed | Closet;
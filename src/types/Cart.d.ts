export interface ICartItem {
    id: string;
    price: number;
    quantity: number;
    color?: string;
    clothCategory?:string
}

export interface ICartSubmit{
    id:string
    price:number
    color?:string
    clothCategory?:string
}
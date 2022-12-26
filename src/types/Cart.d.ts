export interface ICartItem {
    id: string;
    price: number;
    quantity: number;
    color?: string;
    clothCategory?:string
    dimensions?:{width?:number,height?:number,length?:number}
}

export interface ICartSubmit{
    id:string
    price:number
    color?:string
    clothCategory?:string
    dimensions?:{width?:number,height?:number,length?:number}
}
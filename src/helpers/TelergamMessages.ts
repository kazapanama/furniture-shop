import { ICartItem } from "../types/Cart";

export function formatItem (item: ICartItem,name:string) {
    
    const {price, quantity, color, clothCategory, dimensions } = item;
    const message = `
    Товар: ${name},\n
    Ціна: ${price}грн,\n
    Кількість: ${quantity} шт,\n
    ${color ? `Колір: ${color},\n` : ""}
    ${clothCategory ? `Тканина: ${clothCategory},\n` : ""}
    ${dimensions ? `Розміри: ${dimensions.width}x${dimensions.length}см,\n` : ""}
    ---------------------\n
    `
    return message;
}


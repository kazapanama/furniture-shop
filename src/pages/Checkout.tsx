
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonRounded from "../components/atoms/ButtonRounded/ButtonRounded";
import CartItem from "../components/atoms/CartItem/CartItem";
import { formatItem } from "../helpers/TelergamMessages";

import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { resetToEmpty } from "../store/CartReducer";
import { store } from "../store/store";
import { setTitle } from '../helpers/GeneralFunctions';



const Checkout = () => {
    setTitle('Оформлення замовлення')

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [showForm,setShowForm] = useState(false)
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [communication,setCommunication] = useState<'phone'|'telegram'>('phone')

    
    const cart = useAppSelector(state => state.cart)

    const handleCheckout =  (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let message = `
        Надійшло нове замовлення!\n
        Ім'я: ${name}\n
        Телефон: ${phone}\n
        Спосіб зв'язку: ${communication==='phone'?'Телефон' :'Telegram'}\n
        `

        cart.forEach(item => {
            const productName = store.getState().products.products.find(product => product.id === item.id)!.name
            message += formatItem(item,productName)
        })

        message +=`Сума замовлення загалом: ${cart.reduce((a,b)=>a+b.price,0)}грн`
        message = message.replace(/\n/g, '%0A')
        
        fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_TELEGRAM_CHAT_ID}&text=${message}`)
        dispatch(resetToEmpty())
        navigate('/success')
    }

   
    if (cart.length === 0) return (<p className="text-center">Ви досі нічого не обрали 🥺</p>)
    
    return ( 
        <>
            <section className="p-2">
                <div className="flex flex-col gap-2 mb-2">
                
            {cart && cart.map(item=>(
                <CartItem key={item.id+item.price+item?.color} item={item}/>
            ))}

                </div>

                <div className="flex flex-col gap-5">
                <span>Всього до оплати: <strong>{cart.reduce((acc:number, item) => acc += item.quantity * item.price, 0)}</strong> грн</span>
                
                    <ButtonRounded text='Оформити замовлення' onClick={()=>setShowForm(true)} color='bg-teal-400'/>
                </div>

            </section>
           {showForm && <CheckoutForm setShowForm={setShowForm} name={name} setName={setName} phone={phone} setPhone={setPhone} handleCheckout={handleCheckout}
            setCommunication={setCommunication}/>}
        </>
     );
}
 
export default Checkout;


interface CheckoutFormProps {
    setShowForm: (value: boolean) => void
    name: string
    setName: (value: string) => void
    phone: string
    setPhone: (value: string) => void
    handleCheckout: (e:React.FormEvent<HTMLFormElement>) => void
    setCommunication: (value: 'phone'|'telegram') => void
}


const CheckoutForm:FC<CheckoutFormProps> = ({setShowForm,name,setName,phone,setPhone,handleCheckout,setCommunication}) => {
    
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setCommunication(e.target.value as 'phone'|'telegram')
    }
    
    
    
    return(
        <div className="w-screen h-screen bg-slate-800 absolute top-0 left-0 z-50 flex flex-col justify-center items-center gap-5">
            <button onClick={()=>setShowForm(false)}className='text-white text-4xl font-bold'>X</button>
            <form onSubmit={handleCheckout}>
                <div className="flex flex-col mb-3">
                    <label className="text-white mb-1 ">Ваше ім'я</label>
                    <input type="text" placeholder="Ім'я" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>

                <div className="flex flex-col mb-7">
                    <label className="text-white mb-1 ">Номер телефону</label>
                    <input type="text" placeholder="099-333-33-33" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                </div>

                <div className="w-full flex flex-col justify-center mb-5">
                    <span className="text-white mb-1">Оберіть спосіб зв'язку</span>
                    <select onChange={handleChange}>
                        <option value="phone">Телефон</option>
                        <option value="telegram">Telegram</option>
                    </select>
                </div>

           

                <ButtonRounded text='Оформити замовлення' color='bg-teal-400'/>
            </form>
        </div>
    )
}
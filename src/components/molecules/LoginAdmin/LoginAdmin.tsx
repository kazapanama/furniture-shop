import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {signInAdmin} from '../../../firebaseConfig/firebase'
import { useAppDispatch } from '../../../hooks/useStore';
import { loginUser } from '../../../store/UserReducer';
import ButtonRounded from '../../atoms/ButtonRounded/ButtonRounded';

const LoginAdmin = () => {
    
    
    const [email, setEmail] = useState('furniture860@gmail.com');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const admin = await signInAdmin({email, password});
       
       if (admin){
        dispatch(loginUser(admin.email))
        navigate('/admin/dashboard')
       } else {
              setError(true)
       }
    }
    
    
    return ( 
        <section className='flex flex-col items-center'>
            <form onSubmit={(e)=>handleLogin(e)} className='w-3/6 flex flex-col gap-5 justify-center'>
                <div className='flex flex-col'>
                    <label >Email:</label>
                    <input type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                    error ? setError(false) : null                        
                    }}/>
                </div>

                <div className='flex flex-col'>
                    <label >Пароль</label>
                    <input type="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                    error ? setError(false) : null
                    }}/>
                </div>
                <ButtonRounded text='Увійти' color='bg-teal-400'/>
            </form>
            {error && <span className='text-red-800'>Невірний логін або пароль</span>}
        </section>
     );
}
 
export default LoginAdmin;
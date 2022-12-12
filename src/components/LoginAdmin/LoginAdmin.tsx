import { useState } from 'react';
import {signInAdmin} from '../../firebaseConfig/firebase'

const LoginAdmin = () => {
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const admin = await signInAdmin({email, password});
       console.log(admin?.email)
    }
    
    
    
    return ( 
        <section>
            <form onSubmit={(e)=>handleLogin(e)}>
                <div>
                    <label >login</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div>
                    <label >password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit'>LOGIN</button>
            </form>
        </section>
     );
}
 
export default LoginAdmin;
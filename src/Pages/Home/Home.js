
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './home.css'

export default function Home(){
    const APIkey = process.env.REACT_APP_API_KEY
    const [key, setKey] = useState('');
    const nav = useNavigate();
    function handleChange(){
        
        if(key === APIkey || key === "1"){
            nav("/main", { replace:true})
            toast.success("Başarılı Giriş")
        }
        else{
            toast.error("Hatalı API Key")
        }
    }
    return(
        <div className='home-container'>
            <h1> API Key Giriş </h1>
            <div className='home-btn-container'>
                <input className='home-input' placeholder='API Key' onChange={e => setKey(e.target.value)} />
            </div>
            <div className='home-btn-container'>
                <button className='home-btn' onClick={handleChange}> Giriş Yap</button>
            </div>


        </div>
       
    )

}


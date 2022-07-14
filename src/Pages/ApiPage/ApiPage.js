import datas from '../../data/data.json'
import './api.css'
import { useContext,} from 'react'
import Context from '../../Context/Context'
import { useNavigate } from 'react-router-dom'



export default function Api(){
    const {setLat,setLon,} = useContext(Context);  
    const nav = useNavigate();
           return(  
        <>
        <div>
            <h1>
                Hoşgeldiniz, Hava Durumunu Öğrenmek İstediğiniz Şehri Seçiniz
            </h1>
          <div className='cities-container'>
            {datas.map((id,index) => (
                <div key={index} className='city-main-container'>
                    <div className='plaka-container'>
                        <a>{id.plaka} </a>
                        <a onClick={() => setLat(id.lat) || setLon(id.lon) || nav("/weather", { replace:true})} className='city-container'>{id.il} </a>
                        <a></a>
                    </div>
                    
                </div>
                
             )
            
            )}
          </div>
           
        </div> 
        </>
    ) 

}

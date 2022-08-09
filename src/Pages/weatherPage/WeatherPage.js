import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import './Wpage.css'

export default function WeatherPage(){
    const {wetData, dailyData} = useContext(Context);  
    const nav = useNavigate();
    console.log(wetData)
    console.log(dailyData)
    
    if(wetData !== "" && dailyData !== ""){
        let unix_timestamp = dailyData.current.dt
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var days = date.getDay();
        const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        
        
        
        var formattedTime = hours + ':' + minutes.substr(-2) ;
        console.log(dailyData)
    return(
        <>
        <div className='weather-container'>
            <div className="header">
                <div className="header-back">
                    <button onClick={() => nav("/main", { replace:true})} >Geri Dön </button>
                </div>
                <div className="header-mid">
                    <h1>Hava Durumu </h1>
                </div>
                
            </div>
            <div className="wt-description">
                <div className="wt-description-top">
                    <div className="wt-description-top-degrees">
                        <div>
                            <span><img src={"http://openweathermap.org/img/wn/"+wetData.weather[0].icon+"@2x.png"}/></span> 
                        </div>
                        <div className="wt-description-top-degrees-description">
                            <span> {Math.round((dailyData.current.temp-32)/1.8)} <span>&#8451;</span> </span>
                            <span>Nem: {dailyData.current.humidity}% </span>
                            <span>Rüzgar: {Math.round(wetData.wind.speed)}km/s </span>
                        </div>
                   
                    </div>
                    <div className="wt-description-top-description">
                        <span>{wetData.name} </span>
                        <span>{weekday[days]} </span>
                        <span className="first-letter">{wetData.weather[0].description}</span>
                        <span>{formattedTime} </span>
                    </div>
                   
                </div>
                <div className="wt-daily">
                    {dailyData.daily.map((id, index) => (
                        <div key={index} className="wt-daily-description"> 
                        <p>{index}</p>
                            <span><img src={"http://openweathermap.org/img/wn/"+id.weather[0].icon+"@2x.png"}/></span> 
                            <p>{Math.round((id.temp.day-32)/1.8)}<span>&#8451;</span> </p>
                            <span className="first-letter">{id.weather[0].description} </span> 
                            <span> {} </span>
                        </div>
                        
                    ))

                    }
                </div>
                <div>
                    
                  
                </div>
                
            </div>
            <div>

            </div>
           
            
                
        </div>
        </>

    )
}

}
import React,{useState,useEffect} from 'react'
import DayCards from './DayCards';
import './Home.css'



export default function Home() {
    const[dailyData,setdailyData]= useState([])
    
    useEffect(()=>{
        const componentDidMount = () => {
        const WeatherURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=673001,IN&units=imperial&APPID=f1c810bfdb6612cabb173d418e46d659'
        fetch(WeatherURL)
        .then((res) => res.json() )
        
        .then((data) => {
            console.log("Data List Loaded", data.list);
            const dailyData = data.list.filter((reading) =>
            reading.dt_txt.includes("12:00:00")
            );
            setdailyData(dailyData)
        });
    };
    componentDidMount()
    },[])
    



    const formatDayCards = () => { 
        return dailyData.map((reading, index) =>
        <DayCards reading={reading} key={index} />)
    }
  return (
    <React.Fragment>
        <div className='row' style={{height:"20px"}}></div>
        <div className='row'>
    
    
    <div className='col-sm-11' id='All'>
        <div className='col-sm-12' id='main'>
        <div className='row' style={{height:"20px"}}></div>
            <div className='col-sm-12' id='main2'>
            <div className='row' style={{height:"100px"}}></div>
                <div className='row'>
            <div className='col-sm-2'></div>

                <div className='col-sm-8'>
                    <p id='maintext'>5-Day Forecast</p>
                </div>
                <div className='col-sm-2'></div>
                </div>
            </div>
            <div className='row'> 
                <div className='col-sm-12' id='calicut'> Calicut,IN </div></div>
            <div className='row' style={{height:"20px"}}></div>
            <div className='row'>
           

        {formatDayCards()}
            


            </div>
            
        </div>
        </div>
    </div>
    </React.Fragment>
  )
}
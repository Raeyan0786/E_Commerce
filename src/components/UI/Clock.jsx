import {useState , useEffect} from 'react'
import '../../styles/clock.css'

const Clock = () => {
    const [days,setDays]=useState();
    const [hours,setHours]=useState();
    const [minutes,setMinutes]=useState();
    const [seconds,setSeconds]=useState();
    let interval;
    const countDown=()=>
    {
        const destination=new Date('Oct 10, 2023').getTime();
        interval=setInterval(()=>
        {
            const now=new Date().getTime();
            const difference=destination - now;
            const day=Math.floor(difference / (1000*60*60*24));
            const hour=Math.floor(difference % (1000*60*60*24) / (1000*60*60));
            const minute=Math.floor(difference % (1000*60*60) / (1000*60))
            const second=Math.floor(difference % (1000*60) / 1000)

            if(difference < 0) 
            {
                clearInterval(interval.current);
            }
            else{
                setDays(day);
                setHours(hour);
                setMinutes(minute);
                setSeconds(second);
            }

        });
    };

    useEffect(()=>
    {
        countDown()
    });
  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">{days}</h1>
                <h5 className="text-white fs-6 ">Days</h5>
            </div>
            <span className="text-white fs-3">:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">{hours}</h1>
                <h5 className="text-white fs-6">Hours</h5>
            </div>
            <span className="text-white fs-3">:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">{minutes}</h1>
                <h5 className="text-white fs-6">Minutes</h5>
            </div>
            <span className="text-white fs-3">:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
            <div className="text-center">
                <h1 className="text-white fs-3 mb-2">{seconds}</h1>
                <h5 className="text-white fs-6">Seconds</h5>
            </div>
            <span className="text-white fs-3">:</span>
        </div>
    </div>
  )
}

export default Clock
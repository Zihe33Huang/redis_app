import React, {useEffect, useState} from "react";
import "./Loading.css";

export default function Loading({isLoading, msg, counting}) {
    console.log(isLoading);
    const [seconds, setSeconds] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={isLoading ? "loading" : "noLoading"}>
            <div className="loading--icon"></div>
            <p>{msg}</p>
            {
                counting ? <p>Approximate {seconds} seconds</p> : ""
            }
        </div>
    )
}

import React, {useState, useEffect} from "react";
import "./MusicList.css";
import {host} from "../env";
import Loading from "./Loading";

export default function MusicList({setTotal}) {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const getMusic = () => {
        setIsLoading(true);
        setMsg("Loading");
        fetch(`${host}/api/music/getAll`)
            .then((resp) => resp.json())
            .then((data) => {
                setMusicList(data.musicList);
                setTotal(data.total);
                setIsLoading(false);
            });
    }

    const support = (id) => {
        fetch(`${host}/api/music/support/${id}`, {
            method: 'POST',
            body: JSON.stringify({
            }), headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((resp) => {
                return resp.json();
            })
            .then(data => {
                if (data !== -1) {
                    alert(`You've voted, please be back after ${data} seconds`)
                } else {
                    getMusic();
                    alert("Thanks for your support!")
                }
            })
    }

    const renew = () => {
        setIsLoading(true);
        setMsg("Crawling Data From Internet")
        fetch(`${host}/api/music/renew`, {
            method: 'POST',
            body: JSON.stringify({}), headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((resp) => {
                getMusic();
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getMusic();
    }, [])


    return (
        <div className="MusicList">
            <div className="renew">
                <button className="renew--btn" onClick={() => renew()}>renew</button>
                <p>* crawl newest data from Internet</p>
            </div>
            <Loading isLoading={isLoading} msg ={msg} counting={true}/>
            {
                musicList.map((music, index) => {
                    return (
                        <div className="Music">
                            <div className="music--info">
                                <img alt="no" src={music.img}/>
                                <div className="music--index">
                                    <h1>{index + 1}</h1>
                                </div>
                                <div className="music--title">
                                    <h3>{music.name}</h3>
                                    <h4>{music.singer}</h4>
                                </div>
                            </div>
                            <div className="music--score">
                                <h1>{music.score}</h1>
                                <button onClick={() => support(music.id)} className="support--btn">支持</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

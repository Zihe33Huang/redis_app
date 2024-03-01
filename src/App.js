import './App.css';
import Heading from "./components/Heading";
import MusicList from "./components/MusicList";
import {useState} from "react";

function App() {

    const [total, setTotal] = useState(0);
    const [showExp, setShowExp] = useState(false);
    return (
        <div className="App">
            <Heading setShowExp={setShowExp} total={total}></Heading>
            <MusicList setTotal={setTotal}></MusicList>

            <div className={showExp ? "exp" : "noexp"}>
                <button className="exp--close" onClick={() => setShowExp(false)} >X</button>
                <div className="exp--text">
                    <li>Using <span>Zset.ZREVRANGE</span> for Music Ranking.</li>
                    <li>Using <span>Zset.ZINCRBY</span> for supporting.</li>
                    <li>Using <span>Zset.CARD</span> for counting total.</li>
                    <li>Using <span>String.SET</span> with expire time for limiting support.</li>
                    <li>Using <span>JSoup</span>[crawling technology] to get data from Internet.</li>
                </div>
            </div>
        </div>
    );
}

export default App;

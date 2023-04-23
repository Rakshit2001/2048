import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom"; 
import BoardView from "./components/Board";
import './main.scss'; 
import './styles.scss';
import Axios from "axios";
import Timer from "./components/Timer";
import GameInstructions from "./components/GameInstructions";
import YoutubeRedirectButton from "./components/YoutubeRedirectButton";
import DropdownComponent from "./components/DropdownComponent";
import { useLocation } from "react-router-dom";




const Home=(props)=>{
const location = useLocation();

const {name}=location.state;
    return (
        // <div>{data}</div>
        // console.log(data),
        <>
        <div>
            <h1>Welcome {name}</h1>
        </div>
        <Timer/>
        <BoardView/>
        <br></br>
        <DropdownComponent/>
        <br></br>
        <YoutubeRedirectButton/>
       <GameInstructions/>
        </>
    )
}
export default Home;
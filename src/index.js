import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom"; 
import BoardView from "./components/Board";
import './main.scss'; 
import './styles.scss';
import Axios from "axios";
import Timer from "./components/Timer";
import GameInstructions from "./components/GameInstructions";
import NameInputComponent from "./name";
import Home from "./home";
import Name from "./name";
import {BrowserRouter, Routes, Route} from "react-router-dom";




const App=()=>{

    return (
        // <div>{data}</div>
        // console.log(data),
        <>
        {/* <Home></Home> */}

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Name></Name>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>

            {/* <Route path="/home" render={(props) => <Home {...props} element={<Home ></Home>}/>}/>       */}
              </Routes>
        
        </BrowserRouter>


        </>
    )
}
ReactDOM.render(<App/>,document.getElementById("root")); 
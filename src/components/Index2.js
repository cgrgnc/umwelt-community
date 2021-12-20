import React from 'react';
import "../styles/index2.css";
import {useState, useEffect} from "react";
import App from "../App";
import ClipLoader from "react-spinners/ClipLoader";

const Index2 = () => {
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])

    return (
        <div className='index2-main'>
            {
                loading ?
                <div className="snipper-box">
                    <ClipLoader color={"#FF8E00"} loading={loading} size={60} className="snipper" />
                </div>
                :
                <App />
            }
        </div>
    );
};

export default Index2;
import React, { useEffect, useState } from 'react';
import axios from "axios";


const Sorting = () => {
    const [data,setData] = useState([]);
    

    const getData = () => {
        axios.get("https://glow-6s9y.onrender.com/myglow")
        .then((res)=>{
            // console.log(res.data);
            setData(res.data);
            console.log(data);
        })
        .catch((err)=>console.log(err));
    }

    const sortHTL = () =>{
        console.log("HTL")
        let HTL = data.sort((a,b)=> b.price-a.price)
        console.log(HTL);
    }
    const SortLTH = () =>{
        console.log("LTH")
        let LTH = data.sort((a,b)=> a.price-b.price)
        console.log(LTH);
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      <h1>Hello there</h1>
      <button onClick={SortLTH}>LTH</button>
      <button onClick={sortHTL}>HTL</button>
    </div>
  )
}

export default Sorting;


import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css"
export const Home =()=>{
   const [data,setData] =useState({field_1:""})
   const [show,setShow] =useState([])

   useEffect(()=>{
    axios.get("http://localhost:3000/TableData").then((res)=>{
      // setShow([...show,res.data])
       console.log(res.data,"hi")
    })
    
 },[])
   const handleChange = (e) => {
    //  let {id,value} =e.target
    setData({field_1:e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
    
    axios.post("http://localhost:3000/TableData",data).then(()=>{
        //    setData()
    })
    .catch((err)=>{
        console.log(err)
    })
  };
 
    return(
        <div className="main_div">
      <div id="upper_div">
        <h1>Enter Data</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <span>
              <h2> Field 1 :</h2>
            </span>
            <span>
              <input
                type="text"
                id="stock"
                className="inp"
                placeholder="Enter name"
               onChange={handleChange}
              />
            </span>
          </div>
           
          <br />
          <input type="submit" id="button" value="Submit" />
        </form>
      </div>
      <div>
     
      </div>
    </div>
  );
    
}
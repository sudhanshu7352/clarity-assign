
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css"
export const Home =()=>{
   const [data,setData] =useState({field_1:""})
   const [show,setShow] =useState([])

  
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
    .then(()=>{
        getData()
    })
    .catch((err)=>{
        console.log(err)
    })
  };
  useEffect(()=>{
   getData()
 },[])

 const getData=()=>{
    axios.get("http://localhost:3000/TableData").then((res)=>{
        setShow(res.data)
        console.log(res.data,"hi")
     })
     
 }
 const add =()=>{
         
 }
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
          <input type="text" id="button2" value="Add" onClick={handle}/>
        </form>
      </div>
      <div>
        <h1>Form Data</h1>
       <table>
        <thead>
           <tr>
            <th>
               Field 1
            </th>
           </tr>
        </thead>
        <tbody>
          {show.map((e)=>(
            <tr key={e.id}>
                <td>{e.field_1}</td>
            </tr>
          ))}
        </tbody>
       </table>
      </div>
    </div>
  );
    
}
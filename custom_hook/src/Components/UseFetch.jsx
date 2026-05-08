import { useEffect } from "react";
import { useState } from "react";

const UseFetch = (url) => {

  // const apiUrl = 'https://api.npoint.io/9045c260b1565daa9e15';

  // fetch(apiUrl)
  //   .then(response => response.json())
  //   .then(data => {console.log(data);})
  //   .catch(error => {console.error('Error fetching data:', error);});

  const[data,setData]=useState();

  useEffect(()=>{
    fetch(url).then((res)=>res.json())
    .then((data)=>setData(data))
  },[])
  return [data];

}

export default UseFetch

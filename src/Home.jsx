import React, { useState } from 'react'
function Home() {
const [val,setVal]=useState("");
const [idd,setId]=useState(0)
const [arr,setArray]=useState([]);
    const adder=()=>{
        if(val===""){ return};
        let obj={}
    if(idd===0){ 
        obj={
            msg:val,id:Date.now()
        }
    }else{
        obj={
            msg:val,id:idd
        };
    let tt=arr.find((v)=>v.id===idd)
    // tt=[...tt,obj];
    tt.msg=val
    setArray(arr);
    setVal("")
    setId(0);return
    }
// console.log(obj);
    let t=[...arr,obj];
    // console.log(t);
    setArray(t);
    setVal("");
    setId(0)
    }  
     const del=(it)=>{
        // console.log(it)
let tt=arr.filter((i)=>i.id!==it)
setArray(tt)
     }

const edit=(id)=>{
let vv=arr.find((v)=>(v.id)===id)
// console.log(vv);
setVal(vv.msg);
setId(id);
}

    return (
   <div>
      <div>
          <input value={val} onChange={(e)=>{setVal(e.target.value)}} type="text" />
          <button  onClick={adder}>add</button>
        </div>       
        <div>
           {arr.map((v)=>(
            <div key={v.id}>
            <div>{v.msg}</div>
           <button onClick={()=>{del(v.id)}}>delete</button>
           <button onClick={()=>{edit(v.id)}}>Edit</button>
            </div>
           ))}

        </div>


    </div>
  )
}

export default Home
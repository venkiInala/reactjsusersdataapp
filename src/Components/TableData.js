
import React, { useEffect, useState } from 'react';
import ListComponent from './List';
const TableData = ()=>{
    const[data,setData]=useState([])
    const API="https://jsonplaceholder.typicode.com/users"
    const getData = async ()=>{
        const res= await fetch(API);
        const op= await res.json()
        console.log("data from api is",op)
        setData(op)
    }
   
    useEffect(()=>{
        getData()
    },[])

    const onDelete=  (id)=>{
         fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"DELETE"
        }).then((res)=>{
            if(res.status!==200){
                return 
            }
            else {
                setData(data.filter((user)=>{
                    return user.id !== id;
                }))
            }
        }).catch((err)=>{
            console.log(err)
        })
        

    }
    return(
        <div>

<ListComponent data={data}  onDelete={onDelete}/>

        </div>
    )
}
export default TableData
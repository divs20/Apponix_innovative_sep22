// import { MyH1 } from "../../components/headres/MyH1"
import { useEffect, useState } from "react"
import { flipkart } from "../../api/api"
import { Myh1 } from "../../Components"
import { Mycards } from "../../Components/Mycards/Mycards"

// export const Contact=()=>{
//     return <><Myh1 a={"im contact"} bg={"red"}/></>
// }
export const Contact=()=>{
    var [pro,setPro]=useState([])
    useEffect(()=>{
        flipkart().then((a)=>{
            setPro(a)
        })

    },[])
    console.log(pro)
     return <>
     {pro.map((d:any)=>{
        return<>
        <Mycards img={d.image} title={d.title} price={d.price}/></>})}
        </>
}

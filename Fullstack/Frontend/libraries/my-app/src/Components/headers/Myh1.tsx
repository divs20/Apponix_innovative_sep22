import { mystyle } from "./mystyle"
import './mycss.css'
interface IMyh1{
    a:string,
    bg:string,
}
// var mystyle={
//     color:'green',
//     fontSize:'60px'
// }
export const Myh1:React.FC<IMyh1>=(props)=>{
   // alert(props.bg)
    return <>
    <h2 style={mystyle}>fgg</h2>
    <h1 style={{backgroundColor:props.bg}}>{props.a}</h1></>
}

import { Mycorousel } from "../../Components/Mycorousel/Mycorousel"
import { Mynav } from "../../Components/Mynav/Mynav"
import img1 from '../../images/2.jpg'
import img2 from '../../images/3.jpeg'
import img3 from '../../images/4.jpg'
import { Myh1, MyState } from "../../Components"
import { Rating1 } from "../../Components/mui/Ratings/Rating1"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { Mycards } from "../../Components/Mycards/Mycards"



// interface Itest{
//     a:string
// }
// const Test:React.FC<Itest>=(props)=>{
//    console.log(props.a) 
//     //alert('hello')
//     return <></>
// }

// function test(a:object){
//    // alert(a)
//     console.log(a)

// }
// export const Home=()=>{
//     //test()
//    return  (<>
//    <h1>my topics</h1>
//    <ol>
//     <li><MyState/></li>
//     <li><Rating1/></li>
//    </ol>


//    <Myh1 a={"hello"} bg={"blue"}/> </>)
// }

export const Home = () => {
    return (<>
        <Container maxWidth="xl">

            <Grid
               
            >
                <Mynav/>
            </Grid>
        
        <Grid
     container
     direction="column"
     justifyContent="space-around"
     alignItems="stretch"
        >
            <Mycorousel/>
        </Grid>
    <br/>
    
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="stretch"
>

    

            <Mycards img={img1} />
            <Mycards img={img2} />
            <Mycards img={img3} />
        </Grid> 
        <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="stretch"
>

    

            <Mycards img={img1} />
            <Mycards img={img2} />
            <Mycards img={img3} />
        </Grid> 

        <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="stretch"
  
>

    

            <Mycards img={img1} />
            <Mycards img={img2} />
            <Mycards img={img3} />
        
        </Grid> 
        
    </Container>
</>)


    }
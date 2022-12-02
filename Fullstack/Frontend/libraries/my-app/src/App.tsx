// const App=()=>{
  import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Contact, Home} from './Pages'
import { Test } from './Pages/Test/Test';

import { Mylogin } from './Pages/Login/Mylogin'
  export const App = () => {
  
      return (<>
      <Router>
          <Routes>
         < Route path='/' element={<Home/>}/>
         < Route path='/contact' element={<Contact/>}/>
         < Route path='/about' element={<h1>hello i'm about</h1>}/>
         <Route path= '/test' element={<Test/>}/>
         < Route path='/Login' element={<Mylogin/>}/>

          </Routes>
      </Router> 
      
      </>)

  }



//   return <h1>hello</h1>
// }========================
// const Home = () => { return <><h1>hello im home</h1></>}


// export const App =()=>{

//   return (<><h1>hello</h1>
//   <h1>hello</h1>
//   <h1>hellohfedddmsx</h1>
//   <h1>hello45dfdgfdc</h1>
//   <h1>hello54667</h1></>
//   )
// }
// ==================================
// export const App =()=>{

//   return (<>
//   </>
//   )
// }
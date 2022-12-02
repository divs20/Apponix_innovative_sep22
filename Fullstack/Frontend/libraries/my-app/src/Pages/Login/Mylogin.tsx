import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { Myform1 } from "../../Components/Form/Myform1"

export const Mylogin:React.FC<{}>=()=>{
    return <>
    <Container maxWidth="xl">


<Grid>
  <h2>My Form</h2>
    <Myform1/>
</Grid>
    </Container>
    </>
}
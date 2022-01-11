import {Alert} from "react-bootstrap"



const MyWarning = function(props){

 return(
  <Alert variant={props.color}>
  {props.warning}
</Alert>
 )
}

export default MyWarning
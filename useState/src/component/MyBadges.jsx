import { Badge } from "react-bootstrap";

const MyBadges = (props) => (
  <>
    <Badge variant={props.color} text="dark">
      {props.Mytext}
    </Badge>
    
  </>
);

export default MyBadges;

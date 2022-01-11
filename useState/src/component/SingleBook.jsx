import React from 'react';
import{Component} from "react"
import{Card, Button, Container, Row, Col, Spinner} from "react-bootstrap"
import AddComment from './AddComent';
import CommentList from './CommentList';


class SingleBook extends Component{
    state={
        selected:false,
        asin:''
    }

 
    

    render(){
       
        return(
            (
               <Container key={this.props.book.asin}>
                   <Row className="d-flex justify-content-center">
                       <Col>
                       <Card onClick={()=>(this.setState({selected: !this.state.selected}, this.props.changeBookAsin(this.props.book.asin) ))}
                        style={{border:this.state.selected? "5px solid red":"none", width:"15rem"}} className="text-center m-3">
                <Card.Img  variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <span>Category : {this.props.book.category.toUpperCase()}</span>
                    
                    </Card.Text>
                    <Button variant="primary" onClick={(e)=>  this.props.changeBookAsin(this.props.book.asin)}>Comment </Button>
                </Card.Body>
            </Card>
                       <div style={{display:this.state.selected? "block":"none"}}>
                       </div>
                     
                       </Col>
                   </Row>
                   
               </Container>
            ))
        
    }



}

export default SingleBook
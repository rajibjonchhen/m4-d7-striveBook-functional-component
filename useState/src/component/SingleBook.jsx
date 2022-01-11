import React from 'react';
import{useState} from "react"
import{Card, Button, Container, Row, Col, Spinner} from "react-bootstrap"
import AddComment from './AddComent';
import CommentList from './CommentList';


const SingleBook=({book, changeBookAsin})=>{

const [selected ,setSelected ] = useState(false) 
const [ asin,setAsin ] = useState('') 
    

        return(
            (
               <Container key={book.asin}>
                   <Row className="d-flex justify-content-center">
                       <Col>
                       <Card onClick={()=>(setSelected(!selected), changeBookAsin(book.asin))}
                        style={{border:selected? "5px solid red":"none", width:"15rem"}} className="text-center m-3">
                <Card.Img  variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        <span>Category : {book.category.toUpperCase()}</span>
                    
                    </Card.Text>
                    <Button variant="primary" onClick={(e)=>  changeBookAsin(book.asin)}>Comment </Button>
                </Card.Body>
            </Card>
                       <div style={{display:selected? "block":"none"}}>
                       </div>
                     
                       </Col>
                   </Row>
                   
               </Container>
            )) 

}

export default SingleBook
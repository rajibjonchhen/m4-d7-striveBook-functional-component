import {useState} from "react"
import SingleBook from "../component/SingleBook"
import{Container, Col, Row, FormControl, Button, Form} from "react-bootstrap"



const BookList =({books,changeBookAsin,search})=>{

    return(
        <Container fluid>
          
            <Row>
            {
                  books.filter(book=>book.title.toLowerCase().includes(search.toLowerCase())).map((book)=>(
                    <Col sm={12} md={6} lg={4} key={book.asin} >
                    <SingleBook  changeBookAsin = {changeBookAsin} book={book}/>
                </Col>))
            }
          
                </Row>
        </Container>
      ) 
    }


export default BookList
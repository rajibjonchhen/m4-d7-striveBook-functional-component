import {useState} from "react"
import SingleBook from "../component/SingleBook"
import{Container, Col, Row, FormControl, Button, Form} from "react-bootstrap"



const BookList =({books,changeBookAsin})=>{
   
    
const [search,setSearch]= useState("")
    
    return(
        <Container>
           <Form className="d-flex m-3">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                      value ={search}
                    onChange={(e)=> (setSearch(e.target.value))}
                  />
                  
                  <Button variant="outline-success">Search</Button>
                  <span>{search}</span>
            </Form>
           
            <Row>
            {
                  books.filter(book=>book.title.includes(search)).map((book)=>(
                    <Col sm={12} md={6} lg={4} key={book.asin} >
                    <SingleBook  changeBookAsin = {changeBookAsin} book={book}/>
                </Col>))
            }
           
                </Row>
        </Container>
       ) 
    }


export default BookList
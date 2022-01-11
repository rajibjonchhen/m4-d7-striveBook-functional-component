import {Component} from "react"
import SingleBook from "../component/SingleBook"
import{Container, Col, Row, FormControl, Button, Form} from "react-bootstrap"



class BookList extends Component{
    state ={
        search :''
       }
    
render(){
    
    return(
        <Container>
           <Form className="d-flex m-3">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                      value ={this.state.search}
                    onChange={(e)=> (this.setState({search:e.target.value}))}
                  />
                  
                  <Button variant="outline-success">Search</Button>
                  <span>{this.state.search}</span>
            </Form>
           
            <Row>
            {
                  this.props.books.filter(book=>book.title.toLowerCase().includes(this.state.search.toLowerCase())).map((book)=>(
                    <Col sm={12} md={6} lg={4} key={book.asin} >
                    <SingleBook  changeBookAsin = {this.props.changeBookAsin} book={book}/>
                </Col>))
            }
           
                </Row>
        </Container>
       ) }
    }


export default BookList
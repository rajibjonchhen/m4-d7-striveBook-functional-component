import {useState} from "react"
import{Container, Col, Row, FormControl, Button, Form} from "react-bootstrap"

const SearchBar = ({handleSearch,search}) => {


    return(
        <div>

           <Form className="d-flex m-3 w-100 m-auto" style={{maxWidth:'400px'}}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value ={search}
                    onChange={(e)=> (handleSearch(e.target.value))}
                    />
                  
                  <Button variant="outline-success" className='bg-white'>Search</Button>
                 
            </Form>
          </div>
    )
}

export default SearchBar;
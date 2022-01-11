import React from 'react';
import {useState} from "react"
import { Form,Col,Button, InputGroup} from 'react-bootstrap';


const AddComment =({asin}) => {
 

     const [comments,setComments]= useState({
        comment : "",
        rate : "",
        elementId :asin
      })

      const [rateArray,setRateArray] = useState(['1','2','3','4','5'])

     const handleInput = (property,value) => {
            setComments({
            ...comments,
            [property]: value,
            elementId : asin
        })
        
        
     }

    const handleSubmit = async(event) => {
        console.log('comment is ',comments)
        
        event.preventDefault()
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments" ,{
        method:"POST",   
        body: JSON.stringify(comments), 
        headers: {
            "Content-Type" : "application/JSON",  
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2NDE4Mjc1NzYsImV4cCI6MTY0MzAzNzE3Nn0.jwiNMWRpg2y2Ole2--KiD0VnvoMTRx8BcxRRPXSl84A"
        }
    })
    let data = await response.json()
    if(response.ok){
        setComments({
            comment : "",
            rate : "",
            elementId :asin
          })
        }
    } catch (error) {
        console.log(error)
    }
}



    
        return ( 
            <Form className="w-100 p-2 my-2 rounded-lg text-white" onSubmit={handleSubmit} style={{ backgroundColor:'grey'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a comment</Form.Label>
                    <Form.Control as="textarea" rows={3} value={comments.comment} 
                    onChange={e =>handleInput("comment",e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Rate the book</Form.Label>
                
                    {
                    rateArray.map(i => (<span className="m-1">
                        <label for='rate'>{i} </label>
                        <input type='radio' name='rate' value={i} id='rate'  onChange={e =>handleInput("rate",e.target.value)} required></input>
                    </span>
                     ) )
                }
                </Form.Group>
                {/* <input type='radio' name='rate' value='2'></input>
                <input type='radio' name='rate' value='3'></input>
                <input type='radio' name='rate' value='4'></input>
                <input type='radio' name='rate' value='5'></input> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Button type='submit' variant="primary" className="m-2"> Submit</Button>
                </Form.Group>
            </Form>
         );
  
}
 
export default AddComment;
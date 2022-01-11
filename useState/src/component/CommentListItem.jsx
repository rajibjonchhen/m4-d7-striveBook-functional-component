import React, { useState } from 'react';
import {ListGroup} from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'

const CommentList =({comment})=>{

   
        
             return(
            <ListGroup.Item as="li" active className='bg-secondary'>
                       Rating  {comment.rate} * - {comment.comment} {comment.elementId} <BsTrash onClick={(e) => handleDelete(comment._id)}/>
            <hr/>
            </ListGroup.Item>
                    
                        )
        
            
              }
        
        const handleDelete = async(id) =>{
            console.log('trying to delete')
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                    method:"DELETE",
                    header:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2NDE4Mjc1NzYsImV4cCI6MTY0MzAzNzE3Nn0.jwiNMWRpg2y2Ole2--KiD0VnvoMTRx8BcxRRPXSl84A"
                    }
                })
                let data = await response.json()
                if(response.ok){
                    alert("deleted",data)
                }
            } catch (error) {
                
            }

        
}

export default CommentList;
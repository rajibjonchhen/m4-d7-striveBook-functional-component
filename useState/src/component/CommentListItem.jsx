import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
class CommentList extends Component{

    render(){
        
             return(
            <ListGroup.Item as="li" active>
                       Rating  {this.props.comment.rate} * - {this.props.comment.comment} {this.props.comment.elementId} {this.props.comment.commentId}<BsTrash className='text-danger' onClick={(e) => this.handleDelete(this.props.comment._id)}/>
            <hr/>
            </ListGroup.Item>
                    
                        )
        
            
              }
        
        handleDelete = async(id) =>{
            
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
}

export default CommentList;
import React, { useState,useEffect } from 'react';
import CommentListItem from './CommentListItem'
import {ListGroup} from 'react-bootstrap'

const CommentList =({asin}) =>{
   
    const [ comments,setComments]= useState([])
    const [ isLoading,setIsLoading]= useState(true)


    useEffect(()=>{
        fetchData()
    },[asin])

     const fetchData = async() => {
             try {
                 let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
                     method:"GET",   
                     headers: { 
                         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2NDE4Mjc1NzYsImV4cCI6MTY0MzAzNzE3Nn0.jwiNMWRpg2y2Ole2--KiD0VnvoMTRx8BcxRRPXSl84A"
                        }
                    })
                    
                    let data = await response.json()
                    if(data){
                        
                        setComments(data)  
                        setIsLoading(false)  
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        

   
    return(
        <ListGroup as="ul">   
            {comments && comments.map((comment,i) => <CommentListItem key={i} comment={comment}/>)}
        </ListGroup>
    )
    
}

export default CommentList
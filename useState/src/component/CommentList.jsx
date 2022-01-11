import React, { Component } from 'react';
import CommentListItem from './CommentListItem'
import {ListGroup} from 'react-bootstrap'

class CommentList extends Component{
    state={
       comments:[],
        isLoading:true,
    }
  

     componentDidUpdate = async(prevProps,prevState) => {
         if(prevProps.asin !== this.props.asin){
             try {
                 let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
                     method:"GET",   
                     headers: { 
                         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2NDE4Mjc1NzYsImV4cCI6MTY0MzAzNzE3Nn0.jwiNMWRpg2y2Ole2--KiD0VnvoMTRx8BcxRRPXSl84A"
                        }
                    })
                    
                    let data = await response.json()
                    if(data){
                        
                        this.setState({comments:data})  
                        this.setState({isLoading:false})  
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        }

    render(){
    return(
        <ListGroup as="ul">   
            {this.state.comments && this.state.comments.map((comment,i) => <CommentListItem key={i} comment={comment}/>)}
        </ListGroup>
    )
    }
}

export default CommentList
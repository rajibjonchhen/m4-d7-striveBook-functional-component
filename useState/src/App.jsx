
import React, {useState} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import scifi from "../src/scifi.json"
import history from "./history.json"
import romance from "./romance.json"
import horror from "./horror.json"
import fantasy from "./fantasy.json"
import MyWarning from './component/WarningSign';
import MyBadges from './component/MyBadges';
import BookList from './component/BookList';
import CommentList from './component/CommentList';
import AddComment from './component/AddComent';

const App = () => {

const[asin ,setAsin] = useState()
const[ showComment,setShowComment] = useState(false)
const [category,setCategory]= useState(history)  
  const changeBookAsin = (newAsin,condition) =>{
        setAsin(newAsin)
        setShowComment(true)    
  }

  const changeCategory=(category)=>{
    setCategory(category)
  }

    return (
      
      <div className="App">
      {/* <MyWarning warning="This Book is on High Demand" color="info"/> */}
      {/* <MyBadges Mytext="Buy The Latest Book"  color="danger" /> */}
     <Container fluid>
       <Row>
         <Col>
          <button onClick={(e)=>changeCategory(scifi)}>Scifi Books</button>
          <button onClick={(e)=>changeCategory(romance)}>Romantic Books</button>
          <button onClick={(e)=>changeCategory(fantasy)}>Fantasy Books</button>
          <button onClick={(e)=>changeCategory(horror)}>Horror Books</button>
          <button onClick={(e)=>changeCategory(history)}>History Books</button>
        </Col>
       </Row>
       <Row>
         <Col xs={6} sm={8} md={8} lg={showComment?9:12}>
            <BookList books={category} changeBookAsin = {changeBookAsin} />
            {/* <SingleBook className="singlBook" changeBookAsin = {this.changeBookAsin} book={scifiBooks[0]}/> */}
         </Col>

         <Col className="pt-5 text-center bg-dark" xs={6} sm={4} md={4} lg={3} style={{display:showComment? 'block':'none',position:'fixed', right:'0', height:'100vh'}}>
               
                {
                  category.filter(book=>book.asin.includes(asin)).map((book)=>(
                    <div key={book.asin} style={{maxWidth:'100px',width:'100%',display:'flex', fontSize:'18px',color:'white'}}>
                    <img className="w-100"src={book.img}/>
                  
                      <span className="w-100" style={{minWidth:'200px',whiteSpace:'wrap'}}>{book.title} </span>
                    
                </div>))
            }
            <AddComment asin = {asin}/>
            <CommentList asin={asin}/>
         </Col>
       </Row>
       </Container> 
      
    </div>
  );
}


export default App;

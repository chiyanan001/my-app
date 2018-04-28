import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col ,Button ,Alert} from 'reactstrap';


class App extends Component {
  state ={
    vote : false
  }
  onVote = ()=>{
    this.setState({vote:true})
  }
  render() {
    const {vote}=this.state

    // if (vote){
    //   return(
    //     <Container>
    //       <Row>
    //         <Col>
    //         <Alert color="success">
    //         ขอบคุณที่โหวต.
    //         </Alert>
    //         </Col>
    //         </Row>
    //        </Container>
    //   )

    // }
  
    return (
 <div>
     <Container>
      <Row>
          <Col xs="6">หน้ากากแอปเปิ้ล

          <img className = "mask-image" src="https://i.pinimg.com/736x/a5/9a/45/a59a4577d29d2c8d41a414f6ee6eb911.jpg" />
          <Button color="primary" onClick={this.onVote} >vote</Button>{' '}

          </Col>

          <Col xs="6">หน้ากากหนอนชาเขียว
          <img className = "mask-image" src="https://i.pinimg.com/originals/d6/8b/ef/d68beff3be31539bf310c3c7a709d9cc.jpg"/>
          { vote ?  null : (<Button color="primary"onClick={this.onVote}>vote</Button> ) }

          </Col>
        </Row>
       <Row>
         <Col>
         {

           vote ? (<Alert color="success">
                    ขอบคุณที่โหวต.
                    </Alert> ) : null
         }

         </Col>
         </Row>
        </Container>
        </div>
    );
  }
}

export default App;

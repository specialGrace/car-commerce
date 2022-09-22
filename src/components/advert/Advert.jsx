import React, { Component } from 'react'
import Slide from './Slide'
import { Data } from './Data'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import styles from './Advert.module.css';

 class Advert extends Component {
  constructor(props) {
    super(props)
    this.state = {
       current:0
    }

    this.prevHandler = this.prevHandler.bind(this)
    this.nextHandler = this.nextHandler.bind(this)
  }

  nextHandler(){
    this.setState({
      current: this.state.current === Data.length - 1 ? 0 : this.state.current + 1
    })
  }
  
  prevHandler(){
    this.setState({
      current: this.state.current === 0 ? Data.length - 1 : this.state.current - 1
    })
  }
  render() {
    return (
      <div className={styles.advert}> 
        <FaArrowAltCircleLeft className={`${styles.arrowLeft} ${styles.arrow}`} onClick={this.prevHandler}/>
        <FaArrowAltCircleRight className={`${styles.arrowRight} ${styles.arrow}`} onClick={this.nextHandler}/>
        {Data.map((sd, index) => (
          <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
              {this.state.current === index && (
                <Slide sd={sd} key={index}/>
              )}
          </div>
        ))}
        
      </div>
    )
  }
}

export default Advert
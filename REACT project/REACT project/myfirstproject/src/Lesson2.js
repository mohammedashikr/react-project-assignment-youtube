import { render } from "@testing-library/react";
import React from "react";
// import './Lesson2.css'
import styles from'./Lesson2.module.css'
class Lesson2 extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        //destucturing
        const{name,designation}=this.props
        return( 
            <>
            <h1 className={styles.App}>{name}</h1>
            <h1 className={styles.App}>{designation}</h1>
            {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></img> */}
            
            </>)
    }
}

export default Lesson2
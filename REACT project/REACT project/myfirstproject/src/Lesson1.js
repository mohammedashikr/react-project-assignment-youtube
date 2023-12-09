
const Lesson1 =(props)=>{
    // const num=10
    // const person={
    //     weight:80,
    //     height:176,
    // }
    // const isloggedin=false;
    return(
      <div>
      {/* <h1>{num}</h1> */}
      {/* <h1>{person.weight}</h1> */}
    {/* {
        isloggedin ? (<p>welcome</p>) : (<p>please login</p>)
    } */}
      <h1>{props.name}</h1>
      <p>{props.designation}</p>
      </div>
    )
}

export default Lesson1
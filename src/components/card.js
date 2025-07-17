function Card(props){
    return (
      <div className="card" style={{border:"2px solid black", padding:"20px"}}>
        <img  src="https://images.teemill.com/5da6db261d2eb8.92179296.jpeg.jpg?w=680&h=auto" height="200 px " width="200px"/>
        <div  style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Price:{props.Price}</h2>
            <h2> Shop Now</h2>
        </div>
      </div>
    )
}
export default Card;
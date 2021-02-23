import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const nayok =['anwar', 'jafor', 'salman', 'rubel', 'razzak' ,'bappi']
  const nayka=['mousumi', 'sabana', 'bubli', 'sabnur', 'purnima']
  const products=[
    {name : 'lifeboy', price: '30'},
    {name: 'lux', price:'45'}
  ]

  const nayokName = nayok.map(nayok => nayok)
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React Person</p>
       <Counter></Counter>
       <User></User>

       <ul>
        {
          nayok.map(nayok =><li>{nayok} </li>)
        }
        {
          products.map(product=><li>{product.name}</li> )
        }
       

       </ul>
       {
          products.map(product => <Product product ={product}></Product>) 
        }
       <Person name={nayok[0]} names={nayka[0]}></Person>
       <Person name={nayok[1]} names={nayka[1]}></Person>
       <Person name={nayok[2]} names={nayka[2]}></Person>
       
      </header>
    </div>
  );
}

function Product(props){

  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'300px'
  }
  return(
    <div style={productStyle}>
      <h2>Name:{props.product.name}</h2>
      <h5>{props.product.price} </h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
 
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  }
  return (
      <div style={personStyle}>
      <h1>Name:{props.name} </h1>
      <h3>Hero of {props.names} </h3>
  </div>
  )
 
}

function Counter(){
  const [count ,setCount]=useState(10);
  const handleIncrease=()=>setCount(count+1);
  return(
    <div>
      <h1>count:{count}</h1>
      <button onMouseMove={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )

}

function User(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h1>Users:{users.length}</h1>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

export default App;

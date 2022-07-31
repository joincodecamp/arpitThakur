
import './App.css';
import loopOver from './loopover';
import {useState} from 'react';
import Receive from './Receive';



function App() {
  const[name,setName] = useState('harry');
  const[age,setAge] = useState(30);

  const user = {
    Name: 'Arpit',
    location:'Mandi (H.P)',
    foodType:'Everything',
    age:20,
    likes:'love to listen songs',
    twitterUsername:'Arpitthakur'
  }


  const[phrase,setPhrase] = useState(" ")
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  const [offsetTop, setOffsetTop] = useState(300);

  function moveBoxUp() {
    setOffsetTop(offsetTop - 50);
  }
  

  function handleNumber1Change(e) {
    setNumber1(Number(e.target.value));
  }

  function handleNumber2Change(e) {
    setNumber2(+e.target.value);
  }

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  if(phrase === "seasome"){
    alert('You may pass');
  }

  return (
    <div className="App">
    
        <Receive prop={user}/>

    <div class="col-ar-12">
    <div class="col-ar-4">
    <div className = "userdetails">
    
      <h3>{user.Name}</h3>
      <p>
        <strong>Location</strong><br/>
        {user.location}
      </p>
      <p>
        <strong>Eats</strong><br/>
        {user.foodType}
      </p>
      <p>
        <strong>Age</strong><br/>
        {user.age}

      </p>
      <p>
        <strong>likes</strong><br/>
        {user.likes}
      </p>
      <p>
        <strong>Twitter</strong><br/>
        {user.twitterUsername}
      </p>
      </div> 
    </div>
    <div class="col-ar-4">
    
    <div className="loopover">
      
      {loopOver.map((user) => (
        <div className="user">
        {user.name}
        {user.location}
        {user.car}
        </div>
      ))}
      </div>
    </div>
    <div class="col-ar-4">
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

     
      <div className="input-display">
        <p>Display Name:{name} </p>
        <p>Display Age:{age} </p>
      </div>

    
      <div className="inputs">
      
        <div className="field">
          <label className="label">Name </label>
          <input className="input" type="text" placeholder="William" value={name} onChange={e=>setName(e.target.value)} />
        </div>

       

        <div className="field">
          <label className="label">Age: </label>
          <input className="input" type="number"placeholder="38"value={age}onChange={e=>setAge(e.target.value)} />
        </div>
      </div>
     
    </div>
    </div>
    </div>


    

    <div class="col-ar-12">
    <div class="col-ar-4">
    <div className = "js-4">
    <h2>What's the secret phrase?</h2>

<input
  type="text"
  value={phrase}
  onChange={(e) => setPhrase(e.target.value)}
  placeholder="Super duper secret"
/>

<p>
  Hint: It's <strong>open sesame</strong>
</p>
    </div>
    </div>
    <div class="col-ar-4">
    <div className='js-3'>
  

 
  <div className="App">
    <h1>Adding Two Numbers</h1>

    <div className="number-inputs">
      <input type="number" placeholder="0" onChange={handleNumber1Change} />
      <input type="number" placeholder="0" onChange={handleNumber2Change} />
    </div>
    

    <button onClick={calculateTotal}>Add Them!</button>

    <h2>{total}</h2>
  </div>
  </div>
    </div>
    <div class="col-ar-4">
     <div className="App">
    <h1>Move the Box!</h1>

  
    <button onClick={moveBoxUp}>👆 Move Up 👆</button>

   
    <div
      className="box"
      style={{
        transform: `translateY(${offsetTop}px)`
      }}
    />

    
  </div>
    </div>
    </div>

    
      
  
   
 


 
      </div>
      

      
  );
}

export default App



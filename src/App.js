import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateInstitue from './Component/CreateInstitute'
import Register from './Component/Register'
import PayFees from './Component/PayFees'
import CheckStatus from './Component/CheckStatus'

function App() {
  return (
    <div className="App">
      <div className="headline">
      <h1>Student Registration (Dapp)</h1>
      </div>
      <CreateInstitue/>

      <h3>Register yourself</h3>
      <Register/>

      <h3>PayFees</h3>
      <PayFees/>

      <h3>Check status</h3>
      <CheckStatus/>
      <footer>
        <p><strong>&copy; Anish Patel</strong></p>
      </footer>
    </div>
  );
}

export default App;

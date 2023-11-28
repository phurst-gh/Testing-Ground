import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegisterForm from './components/forms/Register';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Budget Calculator</h1>
      <div>
        <p>Is connected to Node? {data ? 'True.' : 'False.'}</p>
        {data && <p>The data supplied is: {data}</p>  }
      </div>

      <RegisterForm />
    </>
  )
}

export default App

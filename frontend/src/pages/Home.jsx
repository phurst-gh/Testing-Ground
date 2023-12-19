import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from '../components/tabs/Tabs';
import LoginForm from '../components/forms/Login';
import RegisterForm from '../components/forms/Register';

const Home = () => {
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

  const tabs = [
    { label: 'register', content: <RegisterForm /> },
    { label: 'login', content: <LoginForm /> }
  ];

  return (
    <>
      <h1>Budget Calculator</h1>
      <div>
        <p>Is connected to Node? {data ? 'True.' : 'False.'}</p>
      </div>

      <Tabs tabs={tabs} />
    </>
  )
}

export default Home;
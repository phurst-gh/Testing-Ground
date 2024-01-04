import React from 'react';

import LogoutForm from '../components/forms/Logout';
import Tabs from '../components/tabs/Tabs';

const HomeLoggedIn = () => {
  const loggedInTabs = [
    { label: 'logout', content: <LogoutForm /> },
  ];

  console.log('Inside HomeLoggedIn')

  return (
    <>
      <h1>Testing Ground</h1>
      <Tabs tabs={loggedInTabs} />
    </>
  )
}

export default HomeLoggedIn;
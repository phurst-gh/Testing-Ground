import React from 'react';

import LogoutForm from '../components/forms/Logout';
import Tabs from '../components/tabs/Tabs';

const HomeLoggedIn = () => {
  const loggedInTabs = [
    { label: 'logout', content: <LogoutForm /> },
  ];

  return (
    <>
      <h1>Home Logged In</h1>
      <Tabs tabs={loggedInTabs} />
    </>
  )
}

export default HomeLoggedIn;
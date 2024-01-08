import React from "react";

import { AuthProvider } from "./components/context/AuthContext";
import Routes from "./Routes";

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;

import React from "react";
import './App.css';
import Dash from "./container/dash";
import Register from "./container/register";
import Login from "./container/login";
import { AuthContext } from "./context/auth";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { routes } from "./routes";
import Welcomepage from "./container/welcomepage";
import Layout from "./components/layout/layout";


function App() {
  const { auth,autoLogin  } = React.useContext(AuthContext);
  console.log(auth);

  return (
   <React.Fragment>
     <BrowserRouter>
     <Layout>
     <Routes>

{/* <Route path="/" element={<Navigate to={autoLogin()} />} /> */}
<Route path={"/"} element={<Welcomepage />}/>
  <Route path={routes.login} element={<Login />}/>
  <Route path={routes.register}element={<Register />} />
  (auth.authentication &&
     <Route path={routes.dash}element={<Dash />} />
  )

</Routes>

     </Layout>
   
    
    

    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
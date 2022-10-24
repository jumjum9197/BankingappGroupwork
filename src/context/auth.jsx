import React from "react";
import { client } from "../services/client";

export const AuthContext = React.createContext({});

export const getUser = ()=>{
    JSON.parse(localStorage.getItem("current_user"));
}
const currentUser = JSON.parse(localStorage.getItem("current_user"));
const initialState = {
  authentication: false,
  user: {},
  allUsers: JSON.parse(localStorage.getItem("users")) || [],
  currentUser:currentUser,
  withdraw:"",
deposited:currentUser?.deposit
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, authentication: true };

    case "logout":
      return { ...state, authentication: false };

    case "set_user":
      return { ...state, users: action?.users };

      case "INCREMENT":
        return { ...state, currentUser:{...currentUser,deposit:parseFloat(state.currentUser.deposit)
            +parseFloat(action.deposited)}};

        case "DECREMENT":
            return { ...state, currentUser:{...currentUser,deposit:parseFloat(state.currentUser.deposit)
                -parseFloat(action.withdraw)}};
            default:
                return state
  }
};


const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const current_user = JSON.parse(localStorage.getItem("current_user"));
    if (current_user) {
      const log = auth.allUsers.filter((data) => {
        if (data?.email === current_user?.email) {
          return data;
        }
      });

      if (log.length > 0) {
        authDispatch({ type: "login" });
        authDispatch({ type: "set_user", user: log[0] });
      }
    }
  }, []);

 
 

  //   React.useEffect(() => {
  //    localStorage.setItem("current_user", JSON.stringify(auth?.currentUser)) 
    
  //   if(auth){
  //       let result = auth?.allUsers?.findIndex(x => {
  //           return x.email === auth?.currentUser?.email;
  //       })

  //       auth.allUsers[result].deposit = auth.currentUser.deposit;
  //       localStorage.setItem("users", JSON.stringify(auth.allUsers));
      
  //   }
    
  // }, [auth.currentUser.deposit])



  function autoLogin() {
    const current_user = JSON.parse(localStorage.getItem("current_user"));
    if (current_user) {
      const log = auth.allUsers.filter((data) => {
        if (data.email === current_user.email) {
          return data;
        }
      });

      if (log.length > 0) {
        return "/auth/dash";
      }
    }
    return "/auth/login";
  }

  const login = (email, password) => {
    const data = client.login({ email, password });
    if (data) {
      authDispatch({ type: "login" });
      authDispatch({ type: "set_user", users: data });
    }
    return data;
  };

  const register = (payload) => {
    const data = client.register(payload);
    return data;
  };

  const logout = () => {
    authDispatch({ type: "logout" });
    localStorage.removeItem("current_user");
    return true;
  };
  const handledeposit =(deposited)=>{
    authDispatch({type:"INCREMENT",deposited:deposited});
  }
  const handledwithdarw =(withdraw)=>{
    authDispatch({type:"DECREMENT",withdraw:withdraw});
  }

  const handleDeposit = (deposited) => {
    authDispatch({type: 'INCREMENT', deposited: deposited});
}

const handleWithdraw = (withdraw) => {
  authDispatch({type: 'DECREMENT', withdraw: withdraw});
}


  return (
    <AuthContext.Provider
      value={{
        login,
        auth,
        logout,
        register,
        autoLogin,
        handleDeposit,handleWithdraw
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

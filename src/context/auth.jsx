import React from "react";
import { client } from "../services/client";

export const AuthContext = React.createContext({});

export const getUser = ()=>{
    JSON.parse(localStorage.getItem("current_user"));
}

const initialState = {
  authentication: false,
  user: {},
  allUsers: JSON.parse(localStorage.getItem("users")) || [],

  withdraw:"",
  deposited:"",
  transfer:"",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, authentication: true };

    case "logout":
      return { ...state, authentication: false };

    case "set_user":
      return { ...state, user: action?.user };

      case "INCREMENT":
        return { ...state, user:{...state.user, deposit:parseFloat(state.user.deposit)
            + parseFloat(action.deposited)}};

            case "TRANSFER":
              return { ...state, user:{...state.user, deposit:parseFloat(state.user.deposit)
                  - parseFloat(action.transfer)}};

        case "DECREMENT":
            return { ...state, user:{...state.user,deposit:parseFloat(state.user.deposit)
                - parseFloat(action.withdraw)}};
            default:
                return state
  }
};


const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // other code
    const current_user = JSON.parse(localStorage.getItem("current_user"));
    if (current_user) {
      const log = auth.allUsers.filter((data) => {
        if (data?.email === current_user?.email) {
          return data;
        }
        return null
      }, []);

      if (log.length > 0) {
        authDispatch({ type: "login" });
        authDispatch({ type: "set_user", user: log[0] });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  function autoLogin() {
    const current_user = JSON.parse(localStorage.getItem("current_user"));
    if (current_user) {
      const log = auth.allUsers.filter((data) => {
        if (data.email === current_user.email) {
          return data;
        }
        return null;
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
      authDispatch({ type: "set_user", user: data });
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

  
  const handleDeposit = (deposited) => {
    if(deposited < 0){
      alert("you cant deposit negative amount")
  
    }
    else if(deposited == 0){
      alert("you cant deposit 0 naira")
    }
    else 

  
    authDispatch({type: 'INCREMENT', deposited: deposited});
}
// const handleTransfer = (transfer) => {
  
//   authDispatch({type: 'TRANSFER', transfer: transfer});
// }

const handleWithdraw = (withdraw) => {
  if(withdraw > auth.user.deposit){
    alert("insuffient fund")

  }else
  if(withdraw < 0 ){
    alert("you cant withdraw less than negative amount")

  }
  else if(withdraw == 0){
    alert("you cant withdraw 0naira")
  }else
 
  authDispatch({type: 'DECREMENT', withdraw: withdraw });
}

localStorage.setItem("current_user", JSON.stringify(auth?.user)) 
    
  if(auth){
      let result = auth?.allUsers?.findIndex(x => {
         return  x.email === auth?.user?.email;
          
      })


     if(!result){
      auth.allUsers[result].deposit = auth.user.deposit;
     }
      localStorage.setItem("users", JSON.stringify(auth.allUsers));
    
  }


  return (
    <AuthContext.Provider
      value={{
        login,
        auth,
        logout,
        register,
        autoLogin,
        handleDeposit,
        handleWithdraw,
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

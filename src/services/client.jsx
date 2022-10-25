class Client {
    #stored_data = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      password: "",
      deposit:"",
    };
  
    register(payload) {
      const schema = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        password: "",
        deposit:"",
        ...payload,
      };
      const store = JSON.parse(localStorage.getItem("users")) || [];
      if (store) {
        const userExist = store.filter((data) => {
          if (data.email === schema.email && data.password === schema.password) {
            return data;
          }
          return null;
        });
  
        if (userExist.length > 0) {
          alert(`user ${schema.email} exist`);
          return;
        }
  
        const allUsers = [...store];
        allUsers.push(schema);
        this.setData({ users: allUsers });
        alert(`Welcome ${schema.firstName} ${schema.lastName}`);
        return schema;
      }
    }
  
    login(payload) {
      const schema = {
        email: "",
        password: "",
        ...payload,
      };
  
      const store = JSON.parse(localStorage.getItem("users")) || [];
      if (store) {
        const userExist = store.filter((data) => {
          if (data.email === schema.email && data.password === schema.password) {
            return data;
          }
          return null;
        });
  
        if (userExist[0]?.email && userExist[0]?.password) {
          this.setData({ current_user: userExist[0] });
          alert(`Welcome ${userExist[0].firstName} ${userExist[0].lastName}`);
          return userExist[0];
        }
  
        alert(`Invalid details`);
      }
    }
  
    setData = (data) => {
      const store = window.localStorage;
      Object.keys(data).forEach((key) => {
        store.setItem(key, JSON.stringify(data[key]));
      });
    };
  }
  
  export const client = new Client();
  
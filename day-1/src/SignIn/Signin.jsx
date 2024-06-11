import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
    // Obj["awdiz"]
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // api call to backend
    try {
      if (userData.email && userData.password) {
        //   const response = await axios.post("https://awdiz-7/api/v1/user/register" , {userData});
        const response = {
          data: { success: true, message: "SignIn successfull." },
        };
        if (response.data.success) {
          setUserData({
            email: "",
            password: "",
          });
          router("/signin");
          toast.success(response.data.message);
        }
      } else {
        // throw Error("All fields are mandatory.");
        toast.error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      //   console.log(error);
      //   error =  { data : { success : false, message : "Password is invalid."}}
      toast.error(error.response.data.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label>Email : </label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={userData.email}
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={userData.password}
        />
        <br />
        <input type="submit" value="SignIn" />
        <br />
      </form>
    </div>
  );
};

export default SignIn;
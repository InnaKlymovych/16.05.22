import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
const navigate = useNavigate();

   return(
      <>
      <h1>Home Page</h1>
      <hr />

      <button onClick={() => navigate("/Wellcome")}>Go to Contact</button>
      
      <input type="checkbox" onChange={() => navigate("/Wellcome")}></input>
      <span>Check this checkbox to go to the contact page</span>
      
      <input type="text" onChange={(e) => {
         if (e.target.value === "Wellcome") {
            navigate("/Wellcome");
            }
         }}
         placeholder="Enter 'Wellcome' to navigate"></input>
      
      </>
   );
}

export default Login;
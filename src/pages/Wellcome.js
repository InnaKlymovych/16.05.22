import React from 'react';
import { useNavigate } from "react-router-dom";



const Wellcome = (props) => {
   const navigate = useNavigate();
   return (
      <>
      <h1>Wellcome</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
      </>
   );
};

export default Wellcome;
   


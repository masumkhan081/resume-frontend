import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { authContext } from "../context/Provider"; 

export default function Page1() {

  const { user, setTheUser } = useContext(authContext);
  const navigate = useNavigate();
  const [page1Error, setPage1Error] = useState("");


  return (
     
   <div>
      page-1 {user.title}
   </div>
  )
}

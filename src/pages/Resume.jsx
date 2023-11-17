import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import CustomButton from '../component-shared/Button'
import { Box, Button, Divider, Grid, Stack } from '@mui/material'
import { resumeContext } from "../context/Provider";
import { useLocation } from 'react-router-dom';
import navigtionMap from '../static-data/resumePages'

export default function Resume() {

   const location = useLocation();
   const navigate = useNavigate();
   const { resume, activePage, setActivePage } = useContext(resumeContext);

   useEffect(() => {
      console.log("i ran -1 ", location.pathname, location.pathname.endsWith == "resume");
      if (location.pathname == "/resume") {
         console.log("i ran in if ... ");
         navigate(navigtionMap[Object.keys(navigtionMap)[0]]);
      }
   }, [])


   return (
      <div className=" bg-red-100 h-full flex flex-col mt-4 gap-6" >

         <div className="flex sm:mx-0 mx-8 sm:flex-row flex-col justify-center md:gap-6 sm:gap-4 gap-2" >
            {Object.keys(navigtionMap).map((item, ind) => {
               return <Button key={ind} size='small' txt={item} variant={activePage == item ? "contained" : "outlined"} onClick={() => navigate(navigtionMap[item])}>{item}</Button>
            })}
         </div>

         <Outlet />

         <span>{JSON.stringify(resume)}</span>

      </div>
   )
}

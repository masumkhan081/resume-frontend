import React, { useContext, useEffect } from 'react'
import { resumeContext } from "../context/Provider";
import navigtionMap from '../static-data/resumePages'

export default function PDF() {

  const { resume, activePage, setActivePage } = useContext(resumeContext);
  useEffect(() => {
    setActivePage(Object.keys(navigtionMap)[4])
  }, [])

  return (

    <div>
      PDF
    </div>
  )
}

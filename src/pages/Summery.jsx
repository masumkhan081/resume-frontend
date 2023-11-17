import React, { useContext, useEffect } from 'react'
import navigtionMap from '../static-data/resumePages'
import { resumeContext } from '../context/Provider';

export default function Summery() {


  const { resume, setResumeData, activePage, setActivePage } = useContext(resumeContext);
  useEffect(() => {
    setActivePage(Object.keys(navigtionMap)[3])
  }, [])

  return (

    <div>
      summery
    </div>
  )
}

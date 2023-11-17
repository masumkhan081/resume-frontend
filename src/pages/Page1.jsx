import React, { useState, useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { resumeContext } from "../context/Provider";
import { Grid } from '@mui/material';
import { EnhancedTitle } from '../component-shared/EnhancedTitle';
import { TextInput } from '../component-shared/TextInput';
import navigtionMap from '../static-data/resumePages'
import List from '../component-shared/List';

export default function Page1() {
  //
  const { resume, setResumeData, activePage, setActivePage } = useContext(resumeContext);

  const [page1Error, setPage1Error] = useState("");
  // 
  const msgCommon10 = "Total 10 skills";
  const msgCommon5 = "Total 5 skills";
  // 
  const [skillLimit, setSkillLimit] = useState({
    frontEndSkills: 10,
    backEndSkills: 10,
    dataTierSkills: 10,
    personalSkills: 5,
  })
  // 
  const refs = {
    frontEndSkills: useRef(),
    backEndSkills: useRef(),
    dataTierSkills: useRef(),
    personalSkills: useRef(),
  }

  // 
  function enlistSkill(e, key) {
    e.preventDefault();
    let skillName = refs[key].current.value;

    console.log("enlist-skill " + skillName);
    if (skillLimit[key] > 0) {

      if (resume[key].includes(skillName)) {
        setWarning({ ...warning, [key]: "already listed" })
      } else if (skillName.length < 2) {
        setWarning({ ...warning, [key]: "ur is surprisingly tiny" })
      } else {
        refs[key].current.value = "";
        setResumeData({
          [key]: [...resume[key], skillName],
        });
        setSkillLimit({ ...skillLimit, [key]: skillLimit[key] - 1 });
      }
    }
  }

  function removeSkill(key) {
    return (skillName) => {
      setResumeData({
        [key]: resume[key].filter((item) => {
          return item !== skillName;
        }),
      });
      setSkillLimit({ ...skillLimit, [key]: skillLimit[key] + 1 });
    }
  }
  // 
  useEffect(() => {
    setActivePage(Object.keys(navigtionMap)[0])
  }, [])

  return (

    <div className='w-full flex md:flex-row flex-col bg-green-200'>

      <div className='flex md:w-1/2 w-full '>
        <div className='flex flex-col gap-4 sm:w-1/2 w-full px-2 py-4 border border-red-700 rounded-md'>
          <img src="" className='h-36 w-36 rounded-full border' alt='image on resume'></img>
          <div className='flex flex-col gap-1'>
            <label>Name On Resume </label>
            <input type="text" />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Preferred Title </label>
            <input type="text" />
          </div>
        </div>

        <div className='flex flex-col gap-2 sm:w-1/2 w-full px-2 py-4 border border-red-700 rounded-md'>

          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input type="email" className='py-0.125 rounded-sm' />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Phone </label>
            <input type="text" />
          </div><div className='flex flex-col gap-2'>
            <label>Home</label>
            <input type="text" />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Current Address</label>
            <input type="text" />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Github </label>
            <input type="text" />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Linkedin</label>
            <input type="text" />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Portfolio</label>
            <input type="text" />
          </div>


        </div>
      </div>

      <div className='flex flex-col gap-3 md:w-6/12 w-full md:px-2 px-4 py-4 border border-red-700 rounded-md'>
        <div className='flex flex-col gap-2'>
          <EnhancedTitle title="Front-end Skills:" instruction="Total 10 skills" msg={skillLimit["frontEndSkills"] + " Left"} />
          <form onSubmit={(e) => enlistSkill(e, "frontEndSkills")} className=''>
            <TextInput inputRef={refs.frontEndSkills} ph="" />
          </form>
          <List items={resume.frontEndSkills} removeSkill={removeSkill("frontEndSkills")} />
        </div>
        <div className='flex flex-col gap-2'>

          <EnhancedTitle title="Back-end Skills:" instruction="Total 10 skills" msg={skillLimit["backEndSkills"] + " Left"} />
          <form onSubmit={(e) => enlistSkill(e, "backEndSkills")} className=''>
            <TextInput inputRef={refs.backEndSkills} ph="" />
          </form>
          <List items={resume.backEndSkills} removeSkill={removeSkill("backEndSkills")} />
        </div>
        <div className='flex flex-col gap-2'>
          <EnhancedTitle title="Data-tier Skills:" instruction="Total 10 skills" msg={skillLimit["dataTierSkills"] + " Left"} />
          <form onSubmit={(e) => enlistSkill(e, "dataTierSkills")} className=''>
            <TextInput inputRef={refs.dataTierSkills} ph="" />
          </form>
          <List items={resume.dataTierSkills} removeSkill={removeSkill("dataTierSkills")} />
        </div>
        <div className='flex flex-col gap-2'>
          <EnhancedTitle title="Personal Skills:" instruction="Total 5 skills" msg={skillLimit["personalSkills"] + " Left"} />
          <form onSubmit={(e) => enlistSkill(e, "personalSkills")} className=''>
            <TextInput inputRef={refs.personalSkills} ph="" />
          </form>
          <List items={resume.personalSkills} removeSkill={removeSkill("personalSkills")} />
        </div>
      </div>

    </div >
  )
}

import React, { useContext, useEffect, useRef, useState } from 'react'
import { EnhancedTitle } from '../component-shared/EnhancedTitle'
import { TextInput } from '../component-shared/TextInput'
import List from '../component-shared/List'
import navigtionMap from '../static-data/resumePages'
import { resumeContext } from '../context/Provider'

export default function Page3() {

  const { resume, setResumeData, activePage, setActivePage } = useContext(resumeContext);
  const [page1Error, setPage1Error] = useState("");

  const [skillLimit, setSkillLimit] = useState({
    interests: 5,
    hobbies: 5,
  })
  //
  const titleRef = useRef();
  const descrRef = useRef();
  const linkRef = useRef();
  const refs = {
    interests: useRef(),
    hobbies: useRef(),
  }

  function handleSubmit(e) {

  }
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


  useEffect(() => {
    setActivePage(Object.keys(navigtionMap)[2])
  }, [])


  return (

    <div className='w-full h-full flex md:flex-row flex-col gap-4  bg-green-200'>
      <div className='flex flex-col justify-center gap-4 md:w-1/2 w-full md:px-4 px-8 py-4 border border-red-700 rounded-md'>
        <div className='flex flex-col gap-2'>
          <EnhancedTitle title="Front-end Skills:"  instruction="Total 5 skills" msg={skillLimit["interests"] + " Left"} />
          <form onSubmit={(e) => enlistSkill(e, "frontEndSkills")} className=''>
            <TextInput inputRef={refs.frontEndSkills} ph="" />
          </form>
          <List items={resume.interests} removeSkill={removeSkill("frontEndSkills")} />
        </div>

        {/* removeSkill={removeSkill("frontEndSkills")} */}

        <div className='flex flex-col gap-2'>
          <EnhancedTitle title="Front-end Skills:" instruction="Total 5 skills" msg={skillLimit["hobbies"] + " Left"} />
          <form onSubmit={(e) => enlistSkill(e, "frontEndSkills")} className=''>
            <TextInput inputRef={refs.frontEndSkills} ph="" />
          </form>
          <List items={resume.hobbies} removeSkill={removeSkill("frontEndSkills")} />
        </div>
      </div>

      <div className='flex flex-col gap-4 md:w-1/2 w-full md:px-4 px-8 py-4 border border-red-700 rounded-md'>

        <input
          ref={titleRef}
          type="text"
          placeholder="Project Title"
        />
        <input
          ref={descrRef}
          type="text"
          placeholder="Description/ Tools"
        />
        <input
          ref={linkRef}
          type="text"
          placeholder="Deployment/ src link"
        />
        <button
          onClick={handleSubmit}
          className="   bg-yellow-700  rounded-md border-1 text-dark"
        >
          Save
        </button>
      </div>

    </div>
  )
}

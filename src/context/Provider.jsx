import React, { createContext, useEffect, useState } from "react";
//
export const resumeContext = createContext();
//
export default function Provider({ children }) {
  //
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: ""
  });
  const [resume, setResume] = useState({
    resumePic: "",
    contactNumber: "",
    contactMail: "",
    name: "",
    title: "full-stack fucker",
    dob: "",
    currentAddress: "",
    home: "",
    github: "github.com/",
    linkedin: "linkedin.com/in/",
    portfolio: "",
    frontEndSkills: [],
    backEndSkills: [],
    dataTierSkills: [],
    personalSkills: [],
    hobbies: [],
    interests: [],
    projects: [],
    educations: [],
    experiences: [],
  });
  const [activePage, setActivePage] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //
  useEffect(() => {

  }, []);

  async function getResumeData(emal) {

  }
  function setResumeData(nextState) {
    setResume({ ...resume, ...nextState });
  }
  function setTheUser(nextState) {
    setUser({ ...user, ...nextState });
  }
  function setTheError(usedProvider) {
    let errMsg =
      "The email been used for a " +
      JSON.stringify(usedProvider) +
      " sign-up-account. Click corresponding button";
    errMsg = errMsg.replace(/"|"|.com/gi, "");
    setError(errMsg);
    // setTimeout(() => {
    //   setToast("");
    // }, 2000);
  }

  return (
    <resumeContext.Provider
      value={{
        user,
        setTheUser,
        resume,
        setResumeData,
        activePage,
        setActivePage,
        loading,
        setLoading,
        error,
        setTheError,
      }}
    >
      {children}
    </resumeContext.Provider>
  );
}

import React, { createContext, useEffect, useState } from "react";
//
export const authContext = createContext();
//
export default function Provider({ children }) {
  //
  const [user, setUser] = useState({
    account_pic: "",
    account_email: "",
    account_name: "",
    resume_name: "",
    resume_status: false,
    resume_email: "",
    dob: "",
    address: "",
    github: "github.com/",
    linkedin: "linkedin.com/in/",
    portfolio: "",
    resume_pic: "",
    phone_number: "",
    title: "full-stack fucker",
    front_end_skills: [],
    back_end_skills: [],
    data_tier_skills: [],
    personal_skills: [],
    hobbies: [],
    interests: [],
    projects: [],
    educations: [],
    experiences: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //
  useEffect(() => {

  }, []);

  async function create_if_new(theUser) {
    let USER_EXISTS_IN_DB = false;
    //
    try {

    } catch (e) {
      console.error("Error finding: ", e);
    }
  }

  async function get_resume_data(emal) {

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
    <authContext.Provider
      value={{
        user,
        setTheUser,
        loading,
        setLoading,
        error,
        setTheError,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

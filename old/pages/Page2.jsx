import React, { useContext, useRef, useState } from 'react'
import { resumeContext } from "../context/Provider";
import navigtionMap from '../static-data/resumePages'
import { useEffect } from 'react';


export default function Page2() {

  const { resume, setResumeData, activePage, setActivePage } = useContext(resumeContext);
  const [toast, setToast] = useState("");
  const [act, setAct] = useState({ type: "add", actOn: null });
  const [currWorking, setCurrWorking] = useState(false);
  const [startMonth, setStartMonth] = useState("Month");
  const [endMonth, setEndMonth] = useState("Month");
  //
  const options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //
  const degRef = useRef();
  const instRef = useRef();
  const passYearRef = useRef();
  const jobTitleRef = useRef();
  const employerRef = useRef();
  const startYearRef = useRef();
  const endYearRef = useRef();
  const startMRef = useRef("Month");
  const endMRef = useRef();
  // 
  function handleSubmit(e) {
    e.preventDefault();
    //
    const startM = startMRef.current.value;
    const endM = endMRef.current.value;
    const jobTitle = jobTitleRef.current.value;
    const employer = employerRef.current.value;
    const startYear = startYearRef.current.value;
    const endYear = endYearRef.current.value;
    const currentYear = new Date().getFullYear();

    let duration;

    if (jobTitle.length <= 1 && employer.length <= 1) {
      showToast("Too short input !");
    } else if (startYear.length < 4 || startYear < 1980) {
      showToast("check - starting year ");
    } else if (endYear > currentYear) {
      showToast("endyear !");
    } else if (startM == "Month") {
      showToast("Seelct starting month ");
    } else if (
      currWorking === false &&
      (endYear < startYear || endM == "Month" || endYear.length < 4)
    ) {
      console.log("len:  " + endYear.length);
      showToast("Check - end time");
    } else {
      duration = currWorking
        ? startM + "-" + startYear + "toPresent"
        : startM + "-" + startYear + "to" + endM + "-" + endYear;

      if (act.type == "add") {
        setTheUser({
          experiences: [...user.experiences, { jobTitle, employer, duration }],
        });
      }
      if (act.type == "edit") {
        setTheUser({
          experiences: user.experiences.map((item, ind) => {
            if (act.actOn == ind) {
              return {
                jobTitle,
                employer,
                duration,
              };
            } else {
              return item;
            }
          }),
        });
        setAct({ ...act, type: "add" });
      }
      jobTitleRef.current.value = "";
      employerRef.current.value = "";
      startYearRef.current.value = "";
      endYearRef.current.value = "";
      startMRef.current.value = "";
      endMRef.current.value = "";
      setCurrWorking(false);
    }
  }
  // 
  useEffect(() => {
    setActivePage(Object.keys(navigtionMap)[1])
  }, [])

  // 
  return (

    <div className='w-full h-full flex md:flex-row flex-col gap-4  bg-green-200 '>

      <div className='flex flex-col justify-center gap-4 md:w-1/2 w-full md:px-4 px-8 py-4 border border-red-700 rounded-md'>
        <input
          className=""
          placeholder="Degree Name"
          ref={degRef}
        ></input>

        <input
          ref={instRef}
          type="text"
          placeholder="Institution Name"
        ></input>
        <input
          ref={passYearRef}
          type="text"
          placeholder="Passed Year"
        ></input>

        <button
          onClick={handleSubmit}
          className="   bg-yellow-700  rounded-md border-1 text-dark"
        >
          Save
        </button>

      </div>

      <div className='flex flex-col gap-4 md:w-1/2 w-full md:px-4 px-8 py-4 border border-red-700 rounded-md'>

        <input
          ref={jobTitleRef}
          type="text"
          placeholder="Job Title/ Designation"
        ></input>
        <input
          ref={employerRef}
          type="text"
          placeholder="Employer"
        ></input>

        <div
          className="flex flex-col gap-4 justify-between"

        >
          <div className="flex gap-1">
            <strong>From:</strong>
            <select
              ref={startMRef}
              // value={startMonth}
              // onChange={onStartMonthChange}
              className="text-center rounded-3 bg-light bg-opacity-75 border-0 border-top border-success"
              style={{ width: "90px" }}
            >
              <option disabled={!true}>Month</option>
              {options.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
            <input
              ref={startYearRef}
              style={{ height: "27px", width: "90px" }}
              type="text"
              placeholder="Year"
            ></input>
          </div>

          <div className='flex gap-6'>
            <div className="flex gap-1">
              <strong className="me-1">To:</strong>
              <select
                ref={endMRef}
                disabled={currWorking}
                // value={endMonth}
                // onChange={onEndMonthChange}

                style={{ width: "90px" }}
              >
                <option disabled={!true}>Month</option>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>

              <input
                disabled={currWorking}
                ref={endYearRef}
                style={{ height: "27px", width: "90px" }}
                type="text"
                placeholder="Year"
              ></input>
            </div>

            <div className="flex gap-2 form-check  shadow-sm rounded-3 bg-light bg-opacity-75">
              <strong>Or:</strong>
              <input
                className="form-check-input"
                type="checkbox"
                checked={currWorking}
                onChange={() => {
                  setCurrWorking(!currWorking);
                }}
              />
              <label
                className=""
              >
                Working
              </label>
            </div>

          </div>


        </div>

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

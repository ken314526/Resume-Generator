import React, { useEffect, useRef, useState } from "react";
import styles from "./Body.module.css";
import { ArrowDown } from "react-feather";
import Editor from "../editor/Editor";
import Resume from "../resume/Resume";
import ReactToPrint from "react-to-print";

export default function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    education: "Education",
    certification: "Certification",
    workExp: "Work Experience",
    projects: "Projects",
    skills: "Skills",
  };

  const resumeRef = useRef();

  const [resumeInfo, setResumeInfo] = useState({
    basicInfo: {},
    education: {},
    workExp: {},
    projects: [],
    certification: [],
    skills: [],
    hobbies: [],
    languages: [],
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Generator</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}></div>
        <ReactToPrint
          trigger={() => (
            <button>
              Download <ArrowDown />
            </button>
          )}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor sections={sections} info={resumeInfo} setInfo={setResumeInfo} />
        <div className={styles.resumeSection}>
          <Resume ref={resumeRef} sections={sections} info={resumeInfo} />
        </div>
      </div>
    </div>
  );
}

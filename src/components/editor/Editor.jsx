import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../inputControl/InputControl";
import { X } from "react-feather";

export default function Editor({ sections, info, setInfo }) {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    title: "",
    aboutMe: "",
    address: "",
    email: "",
    phone: "",
    linkedln: "",
    github: "",
    behance: "",
    objective: "",
  });
  const [profileImg, setProfileImg] = useState();
  const [education, setEducation] = useState({
    collegeName: "",
    branch: "",
    field: "",
    cgpa: "",
    schoolName: "",
    percentage12: "",
    percentage10: "",
  });
  const [certification, setCertification] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [workExp, setWorkExp] = useState({});
  const [projects, setProjects] = useState(["", ""]);
  const [skills, setSkills] = useState(["", "", "", "", ""]);
  const [hobbies, setHobbies] = useState(["", ""]);
  const [languages, setLanguages] = useState(["", ""]);

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label={"Name"}
          placeholder={"Enter your full name"}
          value={basicInfo.name}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Profile Image"}
          type={"file"}
          value={basicInfo.profileImg}
          onChange={(e) =>
            setProfileImg(URL.createObjectURL(e.target.files[0]))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Title"}
          placeholder={"Enter your title eg. Frontend developer"}
          value={basicInfo.title}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"About Me"}
          minLength="10"
          maxLength="150"
          placeholder={"Tell about yourself"}
          value={basicInfo.aboutMe}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, aboutMe: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Address"}
          placeholder={"Enter your full address"}
          value={basicInfo.address}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, address: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Email"}
          placeholder={"Enter your e-mail"}
          value={basicInfo.email}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Phone Number"}
          placeholder={"Enter your phone nunmber"}
          value={basicInfo.phone}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"LinkedIn Profile"}
          placeholder={"Enter LinkedIn profile link"}
          value={basicInfo.linkedln}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, linkedln: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"GitHub Profile"}
          placeholder={"Enter GitHub profile link"}
          value={basicInfo.github}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, github: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Behance Profile"}
          placeholder={"Enter Behance profile link"}
          value={basicInfo.behance}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, behance: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Career Objective"}
          placeholder={"Enter your career objective"}
          minLength="10"
          maxLength="100"
          value={basicInfo.objective}
          onChange={(e) =>
            setBasicInfo((prev) => ({ ...prev, objective: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label={"College Details"}
          placeholder={"Enter college name"}
          value={education.collegeName}
          onChange={(e) =>
            setEducation((prev) => ({ ...prev, collegeName: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Branch"}
          placeholder={"Enter your branch"}
          value={education.branch}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              branch: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Field"}
          placeholder={"Enter your field"}
          value={education.field}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              field: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"CGPA"}
          placeholder={"Enter your CGPA"}
          value={education.cgpa}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              cgpa: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Higher School Details"}
          placeholder={"Enter your school name"}
          value={education.schoolName}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              schoolName: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Percentage"}
          placeholder={"Enter your 12th percentage"}
          value={education.percentage12}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              percentage12: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"High School Details"}
          placeholder={"Enter your school name"}
          value={education.schoolName}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              schoolName: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Percentage"}
          placeholder={"Enter your 10th percentage"}
          value={education.percentage10}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              percentage10: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label={"Title"}
          placeholder={"Enter title eg. Frontend developer"}
          value={workExp.title}
          onChange={(e) =>
            setWorkExp((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Company Name"}
          placeholder={"Enter company name eg. Amazon"}
          value={workExp.companyName}
          onChange={(e) =>
            setWorkExp((prev) => ({ ...prev, companyName: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Role"}
          placeholder={"Enter your role"}
          value={workExp.role}
          onChange={(e) =>
            setWorkExp((prev) => ({ ...prev, role: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Start Date"}
          type={"date"}
          placeholder={"Enter start date of work"}
          value={workExp.startDate}
          onChange={(e) =>
            setWorkExp((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"End Date"}
          type={"date"}
          placeholder={"Enter end date of work"}
          value={workExp.endDate}
          onChange={(e) =>
            setWorkExp((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label={"Work Description"}
          placeholder={"Enter work description"}
          value={workExp.description}
          onChange={(e) =>
            setWorkExp((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
    </div>
  );

  const projectsBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <label>Enter your Projects</label>
        {projects.map((c, i) => (
          <InputControl
            placeholder={`Project ${i + 1}`}
            value={c}
            onChange={(e) => {
              let newData = projects.map((val, idx) =>
                idx === i ? e.target.value : val
              );
              setProjects(newData);
            }}
          />
        ))}
      </div>
    </div>
  );

  const certificationBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>Enter your Certifications</label>
        {certification.map((c, i) => (
          <InputControl
            placeholder={`Certification ${i + 1}`}
            value={c}
            onChange={(e) => {
              let newData = certification.map((val, idx) =>
                idx === i ? e.target.value : val
              );
              setCertification(newData);
            }}
          />
        ))}
      </div>
    </div>
  );

  const skillsBody = (
    <div className={styles.detail}>
      <label>Enter your Skills</label>
      {skills.map((c, i) => (
        <InputControl
          placeholder={`Skill ${i + 1}`}
          value={c}
          onChange={(e) => {
            let newData = skills.map((val, idx) =>
              idx === i ? e.target.value : val
            );
            setSkills(newData);
          }}
        />
      ))}
      <label>Enter your Hobbies</label>
      {hobbies.map((c, i) => (
        <InputControl
          placeholder={`Hobby ${i + 1}`}
          value={c}
          onChange={(e) => {
            let newData = hobbies.map((val, idx) =>
              idx === i ? e.target.value : val
            );
            setHobbies(newData);
          }}
        />
      ))}
      <label>Enter your Languages</label>
      {languages.map((c, i) => (
        <InputControl
          placeholder={`Language ${i + 1}`}
          value={c}
          onChange={(e) => {
            let newData = languages.map((val, idx) =>
              idx === i ? e.target.value : val
            );
            setLanguages(newData);
          }}
        />
      ))}
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.education:
        return educationBody;
      case sections.certification:
        return certificationBody;
      case sections.workExp:
        return workExpBody;
      case sections.projects:
        return projectsBody;
      case sections.skills:
        return skillsBody;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    setInfo({
      basicInfo,
      profileImg,
      education,
      workExp,
      projects,
      certification,
      skills,
      hobbies,
      languages,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => {
              setSectionTitle(sections[key]);
              setActiveSectionKey(key);
            }}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter Section title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />

        {generateBody()}

        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}

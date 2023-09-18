import React, { forwardRef, useRef } from "react";
import styles from "./resume.module.css";
import home from "../assets/home.png";
import phone from "../assets/whatsapp.png";
import mail from "../assets/mail.png";
import linkedln from "../assets/linkedin.png";
import github from "../assets/github.png";
import behance from "../assets/behance.svg";
import profileImg from "../assets/profile.svg";

const Resume = forwardRef(({ info, sections }, ref) => {
  const containerRef = useRef();
  console.log(info);

  const panel1 = (
    <div className={styles.panel1}>
      <div>
        <h4>Career Objective</h4>
        <p className={styles.details}>
          {info?.basicInfo?.objective
            ? info?.basicInfo?.objective
            : "Career Objective"}
        </p>
      </div>
      <div>
        <h4>Personal Details</h4>
        <div className={styles.logoDetail}>
          <div className={styles.logo}>
            <img src={home} alt="Home" />
          </div>
          <span className={styles.details}>
            {info?.basicInfo?.address ? info?.basicInfo?.address : "Address"}
          </span>
        </div>
        <div className={styles.logoDetail}>
          <div className={styles.logo}>
            <img src={phone} alt="Phone" />
          </div>
          <span className={styles.details}>
            {info?.basicInfo?.phone ? info?.basicInfo?.phone : "+91-9999999999"}
          </span>
        </div>
      </div>
      <div className={styles.logoDetail}>
        <div className={styles.logo}>
          <img src={mail} alt="Mail" />
        </div>
        <span className={styles.details}>
          {info?.basicInfo?.email
            ? info?.basicInfo?.email
            : "yourEmail@gmail.com"}
        </span>
      </div>
      <div className={styles.logoDetail}>
        <div className={styles.logo}>
          <img src={linkedln} alt="Linkedln" />
        </div>
        <span className={styles.details}>
          {info?.basicInfo?.linkedln
            ? info?.basicInfo?.linkedln
            : "www.linkedln.com/"}
        </span>
      </div>
      <div className={styles.logoDetail}>
        <div className={styles.logo}>
          <img src={github} alt="Github" />
        </div>
        <span className={styles.details}>
          {info?.basicInfo?.github
            ? info?.basicInfo?.github
            : "www.github.com/"}
        </span>
      </div>
      <div className={styles.logoDetail}>
        <div className={styles.logo}>
          <img src={behance} alt="Behance" />
        </div>
        <span className={styles.details}>
          {info?.basicInfo?.behance
            ? info?.basicInfo?.behance
            : "www.behance.in/"}
        </span>
      </div>
    </div>
  );

  const panel2 = (
    <div className={styles.panel2}>
      <div>
        <h4>Education Details</h4>
        <div className={`${styles.details} ${styles.row1}`}>
          <h5>College Details</h5>
          <p>
            College Name:{" "}
            {info?.education?.collegeName ? info?.education?.collegeName : ""}
          </p>
          <p>
            Branch: {info?.education?.branch ? info?.education?.branch : ""}
          </p>
          <p>Field: {info?.education?.field ? info?.education?.field : ""}</p>
          <p>CGPA: {info?.education?.cgpa ? info?.education?.cgpa : ""}</p>
        </div>
        <div className={`${styles.details} ${styles.row1}`}>
          <h5>Inter School Details</h5>
          <p>
            School Name:{" "}
            {info?.education?.schoolName ? info?.education?.schoolName : ""}
          </p>
          <p>
            Percentage:{" "}
            {info?.education?.percentage12 ? info?.education?.percentage12 : ""}
          </p>
        </div>
        <div className={`${styles.details} ${styles.row1}`}>
          <h5>High School Details</h5>
          <p>
            School Name:{" "}
            {info?.education?.schoolName ? info?.education?.schoolName : ""}
          </p>
          <p>
            Percentage:{" "}
            {info?.education?.percentage10 ? info?.education?.percentage10 : ""}
          </p>
        </div>
      </div>
      <div>
        <h4>Certifications</h4>
        <div className={styles.certifications}>
          <ul>
            {info?.certification
              ? info?.certification.map((c, i) => <li key={c + i}>{c}</li>)
              : "Certifications"}
          </ul>
        </div>
      </div>
    </div>
  );

  const panel3 = (
    <div className={styles.panel3}>
      <div>
        <h4>Skills</h4>
        <ul className={styles.details}>
          {info?.skills
            ? info?.skills.map((s, i) => <li key={s + i}>{s}</li>)
            : "Skills"}
        </ul>
      </div>
      <div>
        <h4>Hobbies</h4>
        <ul className={styles.details}>
          {info?.hobbies
            ? info?.hobbies.map((h, i) => <li key={h + i}>{h}</li>)
            : "Hobbies"}
        </ul>
      </div>
      <div>
        <h4>Languages</h4>
        <ul className={styles.details}>
          {info?.languages
            ? info?.languages.map((l, i) => <li key={l + i}>{l}</li>)
            : "Languages"}
        </ul>
      </div>
    </div>
  );

  const panel4 = (
    <div className={styles.panel4}>
      <div className={styles.internship}>
        <h4>{info?.workExp?.title ? info?.workExp?.title : "Internship"}</h4>
        <div className={styles.details}>
          <p>
            Company Name-
            {info?.workExp?.companyName ? info?.workExp?.companyName : "XYZ"}
          </p>
          <p>Role- {info?.workExp?.role ? info?.workExp?.role : "Role"} </p>
          <p>
            {info?.workExp?.description
              ? info?.workExp?.description
              : "Work Description"}
          </p>
          <p>
            {info?.workExp?.startDate ? info?.workExp?.startDate : "Start Date"}{" "}
            - {info?.workExp?.endDate ? info?.workExp?.endDate : "End Date"}
          </p>
        </div>
      </div>
      <div className={styles.internship}>
        <h4>Project</h4>
        <ul className={styles.details}>
          {info?.projects
            ? info?.projects.map((p, i) => <li key={p + i}>{p}</li>)
            : "Projects"}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={ref}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.basic}>
          <img
            className={`${styles.col1} ${styles.image}`}
            src={info.profileImg ? info.profileImg : profileImg}
            alt="profilePic"
          />
          <div className={styles.col2}>
            <h1>{info?.basicInfo?.name ? info?.basicInfo?.name : "Name"}</h1>
            <h4>{info?.basicInfo?.title ? info?.basicInfo?.title : "Title"}</h4>
            <p>
              {info?.basicInfo?.aboutMe ? info?.basicInfo?.aboutMe : "About Me"}
            </p>
          </div>
        </div>
        <div className={styles.panels}>
          <div className={styles.col1}>
            {panel1}
            {panel3}
          </div>
          <div className={styles.col2}>
            {panel2}
            {panel4}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Resume;

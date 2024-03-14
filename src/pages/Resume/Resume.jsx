import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Yashaswi Education Society's International Institute of Management"
            date="2021-2023"
            description="Master of Computer Application."
          />
          <TimelineItem
            title="Gramonnati Mandal's Arts,Commerce and Science College"
            date="2017-2021"
            description="Bachelor of Computer Applications"
          />
          <TimelineItem
            title="High school "
            date="2015 — 2017"
            description="Science[PCMB]"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="MERN" value={70} />
          <SkillItem title="Javascript , Tailwand CSS ,Redux, git" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;

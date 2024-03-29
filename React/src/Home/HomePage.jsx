import React from "react";
import "./HomePage.css";
import { PiVault } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoMdBook } from "react-icons/io";
import { SiSpeedtest } from "react-icons/si";
import Courses from "./Courses/Courses";

import Words from "./Words/Words";
import Learn from "../Learn/Learn";
import { pageEnum, learnTypeEnum } from "../utils";

const HomePage = ({loginHandler}) => {
  const [page, setPage] = React.useState(pageEnum.Courses);
  const [currentCourse, setCurrentCourseId] = React.useState();

  const setupLearn = (id, learnType) => {
    setCurrentCourseId({
      id: id,
      learnType: learnType,
    });
    setPage(pageEnum.Learn);
  };

  return (
    <div className="homepage">
      <div className="homepage-sidebar">
        <div className="homepage-sidebar-top">
          <img src="https://via.placeholder.com/150" alt="avatar" />
          <IoMdBook size={24} onClick={() => setPage(pageEnum.Courses)} />
          <PiVault size={24} onClick={() => setPage(pageEnum.Words)} />
          <SiSpeedtest size={20} onClick={() => setPage(pageEnum.Learn)} />
        </div>
        <div className="homepage-sidebar-bottom">
          <IoIosLogOut size={24} onClick={() => {localStorage.clear()
            loginHandler()}} />
        </div>
      </div>
      <h1>VerbVault</h1>
      <div className="main">
        {page == pageEnum.Courses && (
          <Courses setupLearn={(id, learnType) => setupLearn(id, learnType)} />
        )}
        {page == pageEnum.Words && (
          <Words setupLearn={(id, learnType) => setupLearn(id, learnType)} />
        )}
        {page == pageEnum.Learn &&
          (currentCourse ? (
            <Learn
              learnTypeProp={currentCourse.learnType}
              courseId={currentCourse.id}
            />
          ) : (
            <Learn learnTypeProp={learnTypeEnum.Words} courseId={0} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;

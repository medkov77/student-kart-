import React from "react";
import { Link } from "react-router-dom";
import StudentKartPage from "./studentKartPage";
const MainPage = () => {
  const student = localStorage.getItem("student");

  return student ? (
    <StudentKartPage />
  ) : (
    <div className="container pt-5">
      <h1>Карточка студента</h1>
      <p>нет данных</p>
      <Link to="/create" role="dutton" className="btn btn-primary">
        Добавить
      </Link>
    </div>
  );
};

export default MainPage;

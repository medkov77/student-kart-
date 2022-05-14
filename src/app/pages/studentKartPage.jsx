import React from "react";
import { Link } from "react-router-dom";
const StudentKartPage = () => {
  const student = JSON.parse(localStorage.getItem("student"));
  const age = new Date().getFullYear() - student.yearOfBirth;
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) {
      return "лет";
    }
    if (lastOne === 1) return "год";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "года";
    return "лет";
  };
  return (
    <div className="container mt-4">
      <h1>Карточка студента</h1>
      <p className="fs-4">
        <b>Имя:</b> {student.name}
      </p>
      <p className="fs-4">
        <b>Фамилия:</b> {student.lastname}
      </p>
      <p className="fs-4">
        <b>Год рождения:</b> {student.yearOfBirth}
        {` (${age} ${renderPhrase(age)})`}
      </p>
      <p className="fs-4">
        <b>Портфолио:</b> <a href={student.portfolio}>{student.portfolio}</a>
      </p>
      <Link to="/edit" role="dutton" className="btn btn-primary">
        Редактировать
      </Link>
    </div>
  );
};
export default StudentKartPage;

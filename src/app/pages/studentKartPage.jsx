import React from "react";
const StudentKartPage = () => {
  const student = JSON.parse(localStorage.getItem("student"));
  const age = new Date().getFullYear() - student.yearOfBirth;
  return (
    <div className="container pb-4">
      <h1>Карточка студента</h1>
      <p>Имя: {student.name}</p>
      <p>Фамилия: {student.lastname}</p>
      <p>
        Год рождения: {student.yearOfBirth}
        {` (${age} лет)`}
      </p>
      <p>
        Портфолио: <a href={student.portfolio}>{student.portfolio}</a>
      </p>
    </div>
  );
};
export default StudentKartPage;

import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
    return (
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

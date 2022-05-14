import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../components/common/form/textField";
const EditStudentPage = () => {
  const student = JSON.parse(localStorage.getItem("student"));
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    name: student.name,
    lastname: student.lastname,
    yearOfBirth: student.yearOfBirth,
    portfolio: student.portfolio,
    number: "",
    num1: Math.ceil(Math.random() * 10),
    num2: Math.ceil(Math.random() * 10),
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleBack = () => navigate("/");
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    name: {
      isRequired: {
        message: `Поле "Имя" обязателно для заполнения`,
      },
      min: {
        message: `Поле "Имя" должно содержать минимум 3 символа`,
        value: 3,
      },
    },
    lastname: {
      isRequired: {
        message: `Поле "Фамилия" обязателно для заполнения`,
      },
      min: {
        message: `Поле "Фамилия" должно содержать минимум 3 символа`,
        value: 3,
      },
    },
    yearOfBirth: {
      isRequired: {
        message: `Поле "Год рождения" обязателно для заполнения`,
      },
      isYear: {
        message: `Поле "Год рождения" не корректро`,
      },
    },
    portfolio: {
      isRequired: {
        message: `Поле "Портфолио" обязательно для заполнения`,
      },
      isUrl: {
        message: `Поле "Портфолио" должно быть ссылкой`,
      },
    },
    number: {
      isRequired: {
        message: `Поле "Решите пример" обязательно для заполнения`,
      },
      isСalculate: {
        message: `Резкльтат неверный`,
        value: data.num1 + data.num2,
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    localStorage.setItem("student", JSON.stringify(data));
    setModal(true);
  };
  return (
    <>
      {modal && (
        <>
          <div className="w-100 h-100 bg-secondary opacity-25 fixed-top"></div>
          <div
            className="modal fade show d-block"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Обновлено
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModal(false)}
                  ></button>
                </div>
                <div className="modal-footer">
                  <Link to="/" className="text-decoration-none">
                    Close
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="container mt-5">
        <h1>Редактировать</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Имя"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextField
            type="text"
            label="Фамилия"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            error={errors.lastname}
          />
          <TextField
            type="number"
            label="Год рождения"
            name="yearOfBirth"
            value={data.yearOfBirth}
            onChange={handleChange}
            error={errors.yearOfBirth}
          />
          <TextField
            type="text"
            label="Портфолио"
            name="portfolio"
            value={data.portfolio}
            onChange={handleChange}
            error={errors.portfolio}
          />
          <TextField
            type="number"
            label={`Решите пример: ${data.num1}+${data.num2}=?`}
            name="number"
            value={data.number}
            onChange={handleChange}
            error={errors.number}
          />

          <button
            className="btn btn-secondary а me-2 "
            type="button"
            onClick={handleBack}
          >
            Назад
          </button>
          <button
            className="btn btn-primary а"
            type="submit"
            disabled={!isValid}
          >
            Обновить
          </button>
        </form>
      </div>
    </>
  );
};

export default EditStudentPage;

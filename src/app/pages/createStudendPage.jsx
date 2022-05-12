import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import TextField from "../components/common/form/textField";
const CreateStudentPage = () => {
    const [data, setData] = useState({
        name: "",
        lastname: "",
        yearOfBirth: "",
        portfolio: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = target => {
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: `Поле "Имя" обязателно для заполнения`,
            },
        },
        lastname: {
            isRequired: {
                message: `Поле "Фамилия" обязателно для заполнения`,
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

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        localStorage.setItem("student", JSON.stringify(data));
    };
    return (
        <div className="container mt-4">
            <h1>Создать</h1>
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

                <button
                    className="btn btn-primary а"
                    type="submit"
                    disabled={!isValid}
                >
                    Создать
                </button>
            </form>
        </div>
    );
};

export default CreateStudentPage;

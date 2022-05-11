import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import TextField from "../components/common/form/textField";
const CreateStudentPage = () => {
    const [data, setData] = useState({});

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
                message: "Имя обязательно для заполнения",
            },
        },
        lastname: {
            isRequired: {
                message: "Фамилия обязательна для заполнения",
            },
        },
        yearOfBirth: {
            isRequired: {
                message: "Год рождения обязателен для заполнения",
            },
        },
        portfolio: {
            isRequired: {
                message: "Портфолио обязательно для заполнения",
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
    };
    return (
        <div className="container mt-4">
            <h1>Создать</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="name"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Фамилия"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    error={errors.lastname}
                />
                <TextField
                    label="Год рождения"
                    name="yearOfBirth"
                    value={data.yearOfBirth}
                    onChange={handleChange}
                    error={errors.yearOfBirth}
                />
                <TextField
                    label="Портфолио"
                    name="portfolio"
                    value={data.portfolio}
                    onChange={handleChange}
                    error={errors.portfolio}
                />

                <button
                    className="btn btn-primary "
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

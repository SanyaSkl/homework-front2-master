import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[];
    addUserCallback: (name: string) => void;
};

export const pureAddUser = (
    name: string,
    setError: (error: string) => void,
    setName: (name: string) => void,
    addUserCallback: (name: string) => void
) => {
    if (name.trim() === "") {
        setError("Имя не может быть пустым");
    } else {
        addUserCallback(name);
        setName("");
        setError("");
    }
};

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
    if (name.trim() === "") {
        setError("Имя не может быть пустым");
    }
};

export const pureOnEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    addUser: () => void
) => {
    if (e.key === "Enter") {
        addUser();
    }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        error && setError("");
    };

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    };

    const onBlur = () => {
        pureOnBlur(name, setError);
    };

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser);
    };

    const totalUsers = users.length;
    const lastUserName = users.length > 0 ? users[users.length - 1].name : "";

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
            onBlur={onBlur}
            onEnter={onEnter}
        />
    );
};

export default GreetingContainer;
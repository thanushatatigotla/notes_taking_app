import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let ContextApi = createContext();

const Notecontext = (props) => {

    // Form data
    let [state, setState] = useState({
        title: "",
        description: "",
        category: ""
    });

    // Get notes from localStorage
    let getlocaldata = () => {
        let lists = localStorage.getItem("NOTES");

        if (lists) {
            return JSON.parse(lists);
        } else {
            return [];
        }
    };

    // All notes
    let [task, setTask] = useState(getlocaldata());

    // Theme
    let [theme, setTheme] = useState("light");

    // Add note
    let addNote = (title, description, category) => {

        let newNote = {
            title,
            description,
            category,
            id: uuidv4()
        };

        setTask((previousTasks) => [
            ...previousTasks,
            newNote
        ]);
    };

    // Change theme
    let toggleTheme = () => {
        setTheme(
            theme === "light" ? "dark" : "light"
        );
    };

    // Save notes to localStorage
    useEffect(() => {
        localStorage.setItem(
            "NOTES",
            JSON.stringify(task)
        );
    }, [task]);

    return (
        <ContextApi.Provider
            value={{
                state,
                setState,
                addNote,
                task,
                theme,
                toggleTheme
            }}
        >
            {props.children}
        </ContextApi.Provider>
    );
};

export default Notecontext;
import {action} from '@storybook/addon-actions'
import {Select} from "./Select";
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithValue = () => {
    const [value, setValue] = useState("2")
    return <>
        <Select
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},
            ]}
            onChange={setValue}
        />
    </>
}

export const WithoutValue = () => {
const [value, setValue] = useState(null)
    return <>
        <Select
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},
            ]}
            onChange={setValue}
        />
    </>
}

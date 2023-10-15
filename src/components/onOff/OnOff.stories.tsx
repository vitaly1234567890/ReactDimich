import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
};

const callBack = action('on or off clicked')
export const OnMode = () => <OnOff onChange={callBack} on={true} />
export const OffMode = () => <OnOff onChange={callBack} on={false} />
export const OnOffChanged = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}

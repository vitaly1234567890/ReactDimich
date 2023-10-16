
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {useState} from "react";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callBack = action('on or off clicked')
export const UncontrolledOnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack} />
export const UncontrolledOffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack} />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {UncontrolledRating} from "./UncontrolledRating";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

const callBack = action("rating changed inside component")
export const EmptyRatting = () => <UncontrolledRating defaultValue={0} onChange={callBack}/>
export const Ratting1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>
export const Ratting2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>
export const Ratting3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>
export const Ratting4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>
export const Ratting5 = () => <UncontrolledRating defaultValue={5} onChange={callBack}/>

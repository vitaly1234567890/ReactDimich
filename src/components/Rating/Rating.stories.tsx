import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating',
    component: Rating,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyRatting = () => <Rating value={0} onClick={x=>x}/>
export const Ratting1 = () => <Rating value={1} onClick={x=>x}/>
export const Ratting2 = () => <Rating value={2} onClick={x=>x}/>
export const Ratting3 = () => <Rating value={3} onClick={x=>x}/>
export const Ratting4 = () => <Rating value={4} onClick={x=>x}/>
export const Ratting5 = () => <Rating value={5} onClick={x=>x}/>
export const RattingChanged = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}

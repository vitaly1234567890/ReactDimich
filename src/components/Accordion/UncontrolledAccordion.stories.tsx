 import {action} from '@storybook/addon-actions'
import React, {useState} from "react";
 import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    component: UncontrolledAccordion
};


const onChangeHandler = action('on Change')

export const UncontrolledAccordionDemo = () => {
    return <UncontrolledAccordion title1={"Accordion"}/>
}



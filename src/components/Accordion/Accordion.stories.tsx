 import {action} from '@storybook/addon-actions'

import Accordion  from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
};


const onChangeHandler = action('on Change')

export const CollapsedAccordion = () => {
    return <Accordion title1={'Collapsed Accordion'}
                      collapsed={true}
                      onChange = {onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion title1={'Opened Accordion'}
                      collapsed={false}
                      onChange = {onChangeHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion title1={'Accordion'}
                      collapsed={collapsed}
                      onChange = {()=> setCollapsed(!collapsed)}/>
}



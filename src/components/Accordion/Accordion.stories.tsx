 import {action} from '@storybook/addon-actions'

import Accordion  from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("some items was clicked")


const onChangeHandler = action('on Change')

export const CollapsedAccordion = () => {
    return <Accordion title1={'Collapsed Accordion'}
                      collapsed={true}
                      onChange = {onChangeHandler}
                      items={[]}
                      onClick={onClickCallback}
    />
}

export const OpenedAccordion = () => {
    return <Accordion title1={'Opened Accordion'}
                      collapsed={false}
                      onChange = {onChangeHandler}
                      items={[{title:'Dimich', value: 1}, {title:'Valera', value: 2}, {title:'Victor', value: 3}]}
                      onClick={onClickCallback}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion title1={'Accordion'}
                      collapsed={collapsed}
                      onChange = {()=> setCollapsed(!collapsed)}
                      items={[
                          {title:'Dimich', value: 1},
                          {title:'Valera', value: 2},
                          {title:'Victor', value: 3}
                      ]}
                      onClick={(id) => {alert(`USer with ${id}`)}}
    />
}



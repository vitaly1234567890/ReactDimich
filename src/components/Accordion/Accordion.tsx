import React from "react";



type AccordionPropstype = {
    title1: string
    collapsed: boolean
    onChange: () => void

}
function Accordion(props: AccordionPropstype) {
        return <div>
            <AccordionTitle
                titleValue={props.title1}
                onChange={props.onChange}/>
            { !props.collapsed && <AccordionBody /> }
        </div>
}

type AccordionTitlePropstype = {
    titleValue: string
    onChange: () => void

}
function AccordionTitle(props:AccordionTitlePropstype){
    return <h3 onClick={props.onChange}>---{props.titleValue}---</h3>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default Accordion;

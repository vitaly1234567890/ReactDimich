import React from "react";



type AccordionPropstype = {
    title1: string
    collapsed: boolean
}
function Accordion(props: AccordionPropstype) {

        return <div>
            <AccordionTitle titleValue={props.title1} />
            { !props.collapsed && <AccordionBody /> }
        </div>

}

type AccordionTitlePropstype = {
    titleValue: string
}
function AccordionTitle(props:AccordionTitlePropstype){
    return <h3>---{props.titleValue}---</h3>
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

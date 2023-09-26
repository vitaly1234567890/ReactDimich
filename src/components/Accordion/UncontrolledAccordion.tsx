import React, {useState} from "react";



type AccordionPropstype = {
    title1: string

}
export function UncontrolledAccordion(props: AccordionPropstype) {

    const [collapsed, setCollapsed] = useState(false)

        return <div>
            <AccordionTitle titleValue={props.title1} />
            <button onClick={ ()=>{setCollapsed(!collapsed)}}>collapse</button>
            { !collapsed && <AccordionBody /> }
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



import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropstype = {
    title1: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void

}
function Accordion(props: AccordionPropstype) {
        return <div>
            <AccordionTitle
                titleValue={props.title1}
                onChange={props.onChange}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
}

type AccordionTitlePropstype = {
    titleValue: string
    onChange: () => void

}
function AccordionTitle(props:AccordionTitlePropstype){
    return <h3 onClick={ (e) =>props.onChange()}>---{props.titleValue}---</h3>
}

type AccordionBodyPropstype = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropstype) {
    return <div>
        <ul>
            {props.items.map((el, index) => <li  onClick={() => {props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    </div>
}

export default Accordion;

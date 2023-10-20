import {ChangeEvent, useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectProps = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectProps) => {

    return(
        <div>
            <div>{props.value}</div>
            {props.items.map((el) => <div>{el.title}</div>)}
        </div>
    )
}
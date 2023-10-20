import type { Meta, StoryObj } from '@storybook/react';
import {ChangeEvent, useRef, useState} from "react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'input',
  //component: Input
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfControlledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualeState = event.currentTarget.value
        setValue(actualeState)


    }
  return  (
      <><input onChange={onChange}/> - {value} - </>
  )
}
export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }


    return  (
        <><input ref={inputRef} /> <button onClick={save}>save</button> Actual value: {value}--</>
    )
}
export const ControlledInputWithFixedValue = () => <input value={"It-Incubator.by"}/>

export const ControlledInput = () => {
    const [value, setValue] = useState("")

        return (
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            )
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)

        return(
            <input type="checkbox" checked={value} onChange={onChange}/>
            )

}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string>("4")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)


    return(
        <select value={value} onChange={onChange}>
            <option>None</option>
            <option value={'2'}>Minsk</option>
            <option value={'3'}>Moskow</option>
            <option value={'4'}>Horki</option>
        </select>
    )

}





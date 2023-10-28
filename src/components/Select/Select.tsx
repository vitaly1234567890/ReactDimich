import {ChangeEvent, useEffect, useState} from "react";
import {inspect} from "util";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectProps = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

interface KeyboardEvent<HTMLDivElement> {
    e: KeyboardEvent<HTMLDivElement>;
}

export const Select = (props: SelectProps) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const selectedItem = props.items.find(i => i.value === props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                        const pretendentElement =e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }

                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

                {active &&
                    <div className={styles.items}>
                        {props.items.map((el) => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(el.value)
                            }}
                            className={styles.item + " " + (hoveredItem === el ? styles.selected : "")}
                            key={el.value}
                            onClick={() => onItemClick(el.value)}
                        >{el.title}
                        </div>)}
                    </div>
                }
            </div>
        </>

    )
}
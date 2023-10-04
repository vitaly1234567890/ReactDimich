import React, {useState} from 'react';

type UncontrolledOnOffProps = {
    onChange: (on: boolean) => void
}


export const UncontrolledOnOff = (props: UncontrolledOnOffProps) => {

    let [on, setOn]=useState(false)



    const onStyle = {
        height: '20px',
        width: '30px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        height: '20px',
        width: '30px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicator = {
        height: '10px',
        width: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = ()=>
    {setOn(true)
        props.onChange(true)
    }

    const offClicked = ()=>
    {setOn(false)
        props.onChange(false)
    }

    return (
        <div className={'ButtonStyle'}>
            <div style={onStyle} onClick={ onClicked}>On</div>
            <div style={offStyle} onClick={ offClicked}>Off</div>
            <div style={indicator}></div>
        </div>

    );
};


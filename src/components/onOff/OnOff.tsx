import React, {useState} from 'react';

type OnOffPropsType = {
    // action: boolean
}


export const OnOff = (props: OnOffPropsType) => {

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

    return (
        <div className={'ButtonStyle'}>
            <div style={onStyle} onClick={ ()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={ ()=>{setOn(false)}}>Off</div>
            <div style={indicator}></div>
        </div>

    );
};


import React from 'react';

type OnOffPropsType = {
    action: boolean
}



const OnOff = (props: OnOffPropsType) => {

    return (
        <div>
            { props.action && <Buttons />}
            { !props.action && <Buttons2 />}
        </div>
    );
};


function Buttons() {
    return (
        <div className={"ButtonStyle"}>
            <button className={"on"}>On</button>
            <button >Off</button>
            <button className={'round1'}></button>
        </div>
    )
}

function Buttons2() {
    return (
        <div className={"ButtonStyle"}>
            <button>On</button>
            <button className={"off"}>Off</button>
            <button className={'round2'}></button>
        </div>
    )
}

export default OnOff;
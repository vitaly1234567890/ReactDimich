import React from 'react';
import './App.css';
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
  return (
    <div className={'App'}>
        <PageTitle title={"Hello"}/>
        <OnOff />
        <OnOff />
        <UncontrolledAccordion title1={'Menu'}/>
        <UncontrolledAccordion title1={'Users'}/>
        <UncontrolledRating />
        <UncontrolledRating />

    </div>
  );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{ props.title }</h1>
}

export default App;

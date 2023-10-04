import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionValue, setAccordionValue] =useState(false)
    let [switchOn, setSwitchOn]=useState(false)


  return (
    <div className={'App'}>
        <PageTitle title={"Hello"}/>
        <OnOff on={switchOn} onChange={setSwitchOn}/>
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        <Accordion title1={'User'} collapsed={accordionValue} onChange = {()=> setAccordionValue(!accordionValue)}/>
        <UncontrolledAccordion title1={'Menu'}/>
        {/*<UncontrolledRating />*/}
        {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
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

import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/onOff/OnOff";

function App() {
  return (
    <div>
        {/*<PageTitle title={"This is APP component"}/>*/}
        {/*<Accordion title1={'Menu'} collapsed={true}/>*/}
        {/*<Accordion title1={'Users'} collapsed={false}/>*/}
        {/*Article 2*/}
        {/*<Rating value={0}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        <OnOff action={true}/>
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

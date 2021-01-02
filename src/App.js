import React, {useState} from 'react';


import "./AccordionStyle.css";
import Accordion from './Accordion';

function App() {
  const [active, setActive] = useState("");
  return (
    
    <div className="App">
      <h2 align="center">FAQ's</h2>
      <Accordion title="What is clubb.fit?" active={active} setActive={setActive} />
      <Accordion title="Does clubb.fit have its own centres where I can train?" active={active} setActive={setActive} />
      <Accordion title="Are clubb.fit coaches certified?" active={active} setActive={setActive} />
      <Accordion title="How do group classes work?" active={active} setActive={setActive} />
      <Accordion title="How do personal classes work?" active={active} setActive={setActive} />
      <Accordion title="Is there a mimimum number of people required for a group class?" active={active} setActive={setActive} />
      <Accordion title="Can I choose to have a just ladies/men’s class?" active={active} setActive={setActive} />
      <Accordion title="Do I need to pay anything to the society office for my class?" active={active} setActive={setActive} />
      <Accordion title="Can I choose a trainer myself?" active={active} setActive={setActive} />
    </div>
  );
}

export default App;

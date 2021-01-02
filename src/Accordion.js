import React from 'react';

const Accordion = ({title, active, setActive}) => {
  return(
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={()=> setActive(title)}>
            {active === title ? "-" : "+"}
          </span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
          <p><hr color="black"></hr>Clubb Fit FAQ Accordion Content here...
          <hr color="black"></hr>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Accordion;
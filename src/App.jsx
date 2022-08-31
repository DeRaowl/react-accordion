import './App.css';
import React, { useState } from 'react';
import {
  AccordionContext,
  AccordionContextItem,
} from './context/Accordion/AccordionContext';
import {
  useAccordion,
  useAccordionItem,
} from './context/Accordion/AccordionContext';

import faqData from './constants/faqData';

const App = () => {
  return (
    <div className='app'>
      <Accordion defaultActive='1' collapsable={true}>
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} id={faq.id}>
            <AccordionToggle>{faq.header}</AccordionToggle>
            <AccordionBody>{faq.body}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const Accordion = ({
  defaultActive = null,
  children,
  collapsable = true,
  ...props
}) => {
  const [activePanel, setActivePanel] = useState(defaultActive);

  const toggleActivePanel = (id) => {
    let tempId = id;
    if (collapsable && activePanel == tempId) tempId = null;
    setActivePanel(tempId);
  };

  const value = {
    activePanel,
    toggleActivePanel,
    collapsable,
  };

  return (
    <div {...props}>
      <AccordionContext.Provider value={value}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};
const AccordionItem = ({ id, children, ...props }) => {
  const value = {
    id,
  };
  return (
    <div {...props}>
      <AccordionContextItem.Provider value={value}>
        {children}
      </AccordionContextItem.Provider>
    </div>
  );
};
const AccordionToggle = ({ children }) => {
  const { toggleActivePanel } = useAccordion();
  const { id } = useAccordionItem();
  return <h2 onClick={() => toggleActivePanel(id)}>{children}</h2>;
};
const AccordionBody = ({ children }) => {
  const { activePanel } = useAccordion();
  const { id } = useAccordionItem();
  return <>{activePanel == id ? children : null}</>;
};

export default App;

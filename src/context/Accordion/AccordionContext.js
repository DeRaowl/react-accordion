import { createContext } from 'react';
import { useContext } from 'react';

const AccordionContext = createContext(null);
const AccordionContextItem = createContext(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error('useAccordion must be used within <Accordion/> ');
  }

  return context;
};

const useAccordionItem = () => {
  const context = useContext(AccordionContextItem);

  if (context === undefined) {
    throw new Error('useAccordion must be used within <AccordionItem/> ');
  }

  return context;
};

export {
  useAccordion,
  useAccordionItem,
  AccordionContext,
  AccordionContextItem,
};

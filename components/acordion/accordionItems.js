import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const accordionItem = ({ title, message }) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{title}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>{message}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};
export default accordionItem;

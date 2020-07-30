import { Accordion } from "react-accessible-accordion";
import AccordionItem from "./accordionItems";

const questions = [
  {
    title: "¿Dónde podeis actuar?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan non nibh sed maximus. Etiam venenatis lacus eget sapien mollis vulputate. Maecenas auctor at massa eget tristique. Praesent venenatis a odio a hendrerit. Phasellus in imperdiet dui. Sed ut ultrices justo, iaculis commodo lacus. Mauris tempor suscipit elit et volutpat. Etiam eu erat auctor, tristique tellus et, elementum nisi. Vivamus faucibus dolor ut sagittis mattis. Curabitur vel mattis magna, in blandit lectus. Vivamus quis auctor metus. Suspendisse vel egestas libero. ",
  },
  {
    title: "¿Cuántos músicos sois?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan non nibh sed maximus. Etiam venenatis lacus eget sapien mollis vulputate. Maecenas auctor at massa eget tristique. Praesent venenatis a odio a hendrerit. Phasellus in imperdiet dui. Sed ut ultrices justo, iaculis commodo lacus. Mauris tempor suscipit elit et volutpat. Etiam eu erat auctor, tristique tellus et, elementum nisi. Vivamus faucibus dolor ut sagittis mattis. Curabitur vel mattis magna, in blandit lectus. Vivamus quis auctor metus. Suspendisse vel egestas libero. ",
  },
  {
    title: "¿Sois suficientes para mi acto?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan non nibh sed maximus. Etiam venenatis lacus eget sapien mollis vulputate. Maecenas auctor at massa eget tristique. Praesent venenatis a odio a hendrerit. Phasellus in imperdiet dui. Sed ut ultrices justo, iaculis commodo lacus. Mauris tempor suscipit elit et volutpat. Etiam eu erat auctor, tristique tellus et, elementum nisi. Vivamus faucibus dolor ut sagittis mattis. Curabitur vel mattis magna, in blandit lectus. Vivamus quis auctor metus. Suspendisse vel egestas libero. ",
  },
  {
    title: "¿Qué podeis tocar?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan non nibh sed maximus. Etiam venenatis lacus eget sapien mollis vulputate. Maecenas auctor at massa eget tristique. Praesent venenatis a odio a hendrerit. Phasellus in imperdiet dui. Sed ut ultrices justo, iaculis commodo lacus. Mauris tempor suscipit elit et volutpat. Etiam eu erat auctor, tristique tellus et, elementum nisi. Vivamus faucibus dolor ut sagittis mattis. Curabitur vel mattis magna, in blandit lectus. Vivamus quis auctor metus. Suspendisse vel egestas libero. ",
  },
];
const items = questions.map((question) => {
  return (
    <AccordionItem
      title={question.title}
      message={question.message}
      key={question.title}
    />
  );
});

const accordion = () => {
  return <Accordion allowZeroExpanded={true}>{items}</Accordion>;
};
export default accordion;

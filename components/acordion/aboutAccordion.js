import { Accordion } from "react-accessible-accordion";
import AccordionItem from "./accordionItems";

const questions = [
  {
    title: "¿Dónde podeis actuar?",
    message:
      "Actualmente estamos disponibles para actuar debido a nuestra localización en la provincia de Valencia, Castellón y Teruel. ¡Pero no dudes en ponerte en contacto con nosotros si tienes dudas si podemos tocar en tu fiesta!",
  },
  {
    title: "¿Cuántos músicos sois?",
    message:
      "Actualmente estamos compuestos por siete músicos de forma fija, debido a nuestra composición nos permite realizar cualquier acto de charanga a un precio competitivo. Sin embargo, si tu acto lo necesita podemos aumentar la plantilla ya que tenemos relación con grandes músicos.",
  },
  {
    title: "¿Sois suficientes para mi acto?",
    message:
      "Esa es un gran pregunta, y aseguramos que estará contento con el grupo. Si tienes dudas puedes ponerte en contacto para que analicemos tu situación.",
  },
  {
    title: "¿Cuál es vuestro repertorio musical?",
    message:
      "Tenemos un amplio abanico en nuestro repertorio, que engloban pasodobles, canciones modernas, mix de caciones conocidas como canciones de charanga típica. También adaptadas a todos los públicos 😋.",
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

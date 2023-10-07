import questions from "./../mocks/data";
import FlashCardItem from "./FlashCardItem";

export default function FlashCards() {
  const renderedCards = questions.map((question) => (
    <FlashCardItem
      key={question.id}
      question={question.question}
      answer={question.answer}
    />
  ));

  return <>{renderedCards}</>;
}

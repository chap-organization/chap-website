import styles from "../../styles/Components/FAQ/Question.module.css"

const Question = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.question}>{props.question}</h1>
      <p className={styles.answer}>{props.answer}</p>
    </div>
  );
};

export default Question;

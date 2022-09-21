import Question from "./Question";
import FAQHeading from "./FAQHeading";
import styles from "../../styles/Components/FAQ/FAQPage.module.css";

export default function FAQPage() {
  return (
    <div>
      <FAQHeading />
      <div className={styles.container}>
        <Question
          question="LOREM IPSUM IS SIMPLY DUMMY YEXT OF THE PRINTING AND TYPESETTING INDUSTRY?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Question
          question="LOREM IPSUM IS SIMPLY DUMMY YEXT OF THE PRINTING AND TYPESETTING INDUSTRY?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Question
          question="LOREM IPSUM IS SIMPLY DUMMY YEXT OF THE PRINTING AND TYPESETTING INDUSTRY?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Question
          question="LOREM IPSUM IS SIMPLY DUMMY YEXT OF THE PRINTING AND TYPESETTING INDUSTRY?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Question
          question="LOREM IPSUM IS SIMPLY DUMMY YEXT OF THE PRINTING AND TYPESETTING INDUSTRY?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Question
          question="LOREM IPSUM IS SIMPLY DUMMY YEXT OF THE PRINTING AND TYPESETTING INDUSTRY?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Question
          question="LOREM IPSUM IS SIMPLY DUMMY YEXT OF THE PRINTING AND TYPESETTING INDUSTRY?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </div>
    </div>
  );
}

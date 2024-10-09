import styles from "./Faq.module.css";
import { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h1>FAQs</h1>
      <div className={styles.faqs}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.quesCont}>
            <h3 onClick={() => toggleAnswer(index)}>{faq.question}</h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is the purpose of Groups?",
    answer:
      "Groups are designed to help users stay motivated by journaling and working towards their goals together. Being part of a group fosters accountability and provides a supportive community to share progress and challenges.",
  },
  {
    question: "How are group scores tracked?",
    answer:
      "Each group has a defined number of days for the journaling challenge. You can see how many days each member has successfully journaled out of the total challenge duration.",
  },
  {
    question: "What happens if I miss a day of journaling?",
    answer:
      "Missing a day of journaling can affect your score within the group, but you can continue participating. Consistency earns you more points and increases your chances of being ranked higher on the leaderboard.",
  },
  {
    question: "How can I win in the group?",
    answer: (
      <ul>
        <li>
          To win in a group, you need to stay consistent with your journaling
          and complete as many journal entries as possible within the group's
          challenge duration. Each day you successfully journal increases your
          score. The more consistent you are compared to other group members,
          the higher your rank on the leaderboard.
        </li>
        <br />
        <li>
          Winners are typically determined based on total entries and streaks.
          Top performers may win a share of the pooled tokens or other rewards.
        </li>
      </ul>
    ),
  },
];

export default FAQs;

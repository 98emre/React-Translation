import { createElement } from "react";
import styles from "../../css/Translation.module.css";

const TranslationItem = ({ letter, animIndex }) => {
  const handleAnimationLetterEnd = (event) => {
    const target = event.target;
    target.classList.remove(styles.bounceAnim);
  };

  const handleAnimationLetterStart = (event) => {
    const target = event.target;

    if (letter == "_SPACE_") return;

    const spanText = document.createElement("span");
    document.body.appendChild(spanText);

    setTimeout(() => {
      spanText.classList = `${styles.textAnim} ${styles.textHandSign} ${styles.unSelectable}`;
      spanText.style.left = `${
        getOffset(event.target).left +
        event.target.getBoundingClientRect().width / 2
      }px`;
      spanText.style.top = `${getOffset(event.target).top}px`;
      spanText.onAnimationEnd = handleAnimationTextEnd;
      spanText.textContent = letter;
    }, 100);

    const handleMouseOver = () => {
      console.log("letter: " + letter);
      spanText.style.left = `${
        getOffset(event.target).left +
        event.target.getBoundingClientRect().width / 2
      }px`;
      spanText.style.top = `${getOffset(event.target).top}px`;

      spanText.style.opacity = 1;
    };

    const handleMouseOut = () => {
      spanText.style.opacity = 0;
    };

    target.addEventListener("mouseover", handleMouseOver);
    target.addEventListener("mouseout", handleMouseOut);
  };

  const handleAnimationTextEnd = (event) => {
    event.target.classList.remove(styles.textAnim);
    event.target.style.opacity = "0";
  };

  return (
    <>
      <img
        draggable="false"
        src={"individial_signs/" + letter + ".png"}
        className={`${styles.bounceAnim} ${styles.handSigns} ${styles.unSelectable}`}
        style={{ animationDelay: `${animIndex * 0.2}s` }}
        alt={letter}
        onAnimationEnd={handleAnimationLetterEnd}
        onAnimationStart={handleAnimationLetterStart}
      />
    </>
  );
};

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

export default TranslationItem;

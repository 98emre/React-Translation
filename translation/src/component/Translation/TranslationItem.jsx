

import styles from '../../css/Translation.module.css';


const TranslationItem = ({letter, animIndex}) => {

  const handleAnimationEnd = (event) => {
    event.target.classList.remove(styles.bounceAnim);
  };
  
  return (
    <>
      {  console.log("Letter: " + letter)}
      <img src={"individial_signs/"+ letter +".png"} className={`${styles.bounceAnim} ${styles.handSigns} ${styles.unSelectable}`} style={{ animationDelay: `${animIndex * 0.2}s`}} alt={"${letter}"} onAnimationEnd={handleAnimationEnd}/>
    </>
  )
}
 
export default TranslationItem 
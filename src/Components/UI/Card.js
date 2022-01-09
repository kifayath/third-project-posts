import CardCss from "../UI/Card.module.css";
const Card = (props) => {
  return <div className={CardCss.card}>{props.children}</div>;
};

export default Card;

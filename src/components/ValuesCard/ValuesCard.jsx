import "./ValuesCard.css";

const ValuesCard = () => {
  return (
    <div className="container bg-dark our-values">
      <div className="values-card d-flex justify-content-between align-items-center">
        <p className="omni-card-title value-title">Our Core Values</p>
        <p className="common-text">Integrity First</p>
        <p className="common-text">Customer Focus</p>
        <p className="common-text">Innovation Driven</p>
        <p className="common-text">Excellence Always</p>
      </div>
    </div>
  );
};

export default ValuesCard;

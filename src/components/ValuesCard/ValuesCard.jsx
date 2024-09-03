import "./ValuesCard.css";

const ValuesCard = () => {
  return (
    <div className="container">
      <div className="values-card d-flex flex-wrap gap-3 justify-content-center gap-x-4 justify-content-md-between align-items-center bg-dark our-values text-center">
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

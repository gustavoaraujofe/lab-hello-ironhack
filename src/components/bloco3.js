import imgDeclarative from "../assets/images/icon3.png";

function bloco() {
  return (
    <div className="card bloco">
      <img src={imgDeclarative} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Single-Way</h5>
        <p className="card-text">
          A set or immutable values are passed to the component's.
        </p>
      </div>
    </div>
  );
}

export default bloco();

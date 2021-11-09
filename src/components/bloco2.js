import imgDeclarative from "../assets/images/icon2.png";

function bloco() {
  return (
    <div className="card bloco">
      <img src={imgDeclarative} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Components</h5>
        <p className="card-text">
          Build encapsulated components that manage their state.
        </p>
      </div>
    </div>
  );
}

export default bloco;

import imgDeclarative from "../assets/images/icon4.png";

function bloco() {
  return (
    <div className="card bloco">
      <img src={imgDeclarative} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">JSX</h5>
        <p className="card-text">
          Statically-typed. designed to run on modern browsers.
        </p>
      </div>
    </div>
  );
}

export default bloco();

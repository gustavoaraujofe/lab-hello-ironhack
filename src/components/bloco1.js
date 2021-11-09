import imgDeclarative from "../assets/images/icon1.png";

function bloco() {
  return (
    <div className="card bloco">
      <img src={imgDeclarative} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Declarative</h5>
        <p className="card-text">
          React makes it painless to creat interactive Uls.
        </p>
      </div>
    </div>
  );
}

export default bloco();

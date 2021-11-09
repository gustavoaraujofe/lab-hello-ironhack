import bloco1 from "./bloco1";
import bloco2 from "./bloco2";
import bloco3 from "./bloco3";
import bloco4 from "./bloco4";

function conjuntoBlocos() {
  return (
    <div className="blocos">
      <div>{bloco1}</div>
      <div>{bloco2}</div>
      <div>{bloco3}</div>
      <div>{bloco4}</div>
    </div>
  );
}

export default conjuntoBlocos();

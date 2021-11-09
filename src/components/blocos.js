import Bloco1 from "./bloco1";
import Bloco2 from "./bloco2";
import Bloco3 from "./bloco3";
import Bloco4 from "./bloco4";

function conjuntoBlocos() {
  return (
    <div className="blocos">
      <div><Bloco1 /></div>
      <div><Bloco2 /></div>
      <div><Bloco3 /></div>
      <div><Bloco4 /></div>
    </div>
  );
}

export default conjuntoBlocos;

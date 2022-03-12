import Navbar from "./navbar/Navbar";
import Corpo from "./corpo/Corpo";
import Fundomobile from "./fundomobile/Fundomobile";

export default function App(){
    return(
        <div>
            <Navbar />
            <Corpo  />
            <Fundomobile />
        </div>
    );
}
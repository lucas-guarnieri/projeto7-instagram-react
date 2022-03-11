import ReactDom from "react-dom";
import NavBar from "./components/nav-bar/navbar";

function App(){
    return(
        <div>
            <NavBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
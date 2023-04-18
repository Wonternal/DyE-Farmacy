import "./App.css";
import { BrowserRouter } from "react-router-dom";
import DyEFarmacyApp from "./components/dyeFarmacyApp/DyEFarmacyApp";

function App() {
    return (
        <>
            <BrowserRouter>
                <DyEFarmacyApp />
            </BrowserRouter>
        </>
    );
}

export default App;

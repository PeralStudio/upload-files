import { Toaster } from "react-hot-toast";

import InputImage from "./components/InputImage";
import ImageUploaded from "./components/ImageUploaded";
import ResultForm from "./components/ResultForm";
import BtnNextImage from "./components/BtnNextImage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Toaster />
            <InputImage />
            <div style={{ display: "contents" }}>
                <ImageUploaded />
            </div>
            <ResultForm />
            <div>
                <BtnNextImage />
            </div>
        </div>
    );
}

export default App;

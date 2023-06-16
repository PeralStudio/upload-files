import { Toaster } from "react-hot-toast";
import { useStore } from "./store/store";

import InputImage from "./components/InputImage";
import ImageUploaded from "./components/ImageUploaded";
import ResultForm from "./components/ResultForm";
import BtnNextImage from "./components/BtnNextImage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const { image } = useStore((state) => ({
        image: state.image
    }));

    return (
        <div className="App">
            <Toaster />
            {!image && <h1 style={{ marginTop: "100px" }}>Subir Archivo</h1>}
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

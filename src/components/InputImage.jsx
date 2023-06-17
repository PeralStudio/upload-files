import { useStore } from "../store/store";
import toast from "react-hot-toast";
import logo from "../assets/logo-upload.png";

const InputImage = () => {
    const { image } = useStore((state) => ({
        image: state.image
    }));

    const { setLoading, setImage, setType, setArchiveName, refreshPage } = useStore();

    const uploadImage = async (e) => {
        let res;
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "subir-imagenes");
        setLoading(true);
        setType(e.target.files[0].type);
        setArchiveName(e.target.files[0].name);

        if (e.target.files[0].type.includes("image")) {
            res = await fetch("https://api.cloudinary.com/v1_1/peralstudio/image/upload", {
                method: "POST",
                body: data
            });
        } else if (
            e.target.files[0].type.includes("audio") ||
            e.target.files[0].type.includes("video")
        ) {
            res = await fetch("https://api.cloudinary.com/v1_1/peralstudio/video/upload", {
                method: "POST",
                body: data
            });
        }

        const file = await res.json();

        if (
            file.format === "jpg" ||
            file.format === "png" ||
            file.format === "gif" ||
            file.format === "webp" ||
            file.format === "mp3" ||
            file.format === "mp4" ||
            file.format === "mpeg"
        ) {
            setImage(file.secure_url);
            setLoading(false);
            toast.success(`Archivo subido con éxito`, {
                duration: 3000,
                position: "top-center",

                // Styling
                style: {},
                className: "",

                // Change colors of success/error/loading icon
                iconTheme: {
                    primary: "#78CC66",
                    secondary: "#fff"
                },

                // Aria
                ariaProps: {
                    role: "status",
                    "aria-live": "polite"
                }
            });
        } else {
            refreshPage();
            toast.error("Formato de imagen no aceptado", {
                duration: 3000,
                position: "top-center",

                // Styling
                style: {},
                className: "",

                // Change colors of success/error/loading icon
                iconTheme: {
                    primary: "#E15549",
                    secondary: "#fff"
                },

                // Aria
                ariaProps: {
                    role: "status",
                    "aria-live": "polite"
                }
            });

            return;
        }
    };

    return (
        <>
            <img src={logo} alt="imagen" style={{ width: "10rem", marginTop: "2rem" }} />
            {!image && <h1 style={{ marginTop: "4rem" }}>Subir Archivo</h1>}
            <div className="custom-file" style={{ width: "350px" }}>
                {!image && (
                    <input
                        type="file"
                        name="file"
                        placeholder={"Buscar imagen"}
                        onChange={uploadImage}
                        className="custom-file-input"
                        id="inputGroupFile01"
                    />
                )}
                {!image && (
                    <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                        style={{ marginTop: "20px" }}
                    >
                        Buscar Archivo
                    </label>
                )}
            </div>
        </>
    );
};

export default InputImage;

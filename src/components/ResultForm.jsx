import { useStore } from "../store/store";
import toast from "react-hot-toast";

const ResultForm = () => {
    const { image } = useStore((state) => ({
        image: state.image
    }));

    const copyLink = (e) => {
        e.preventDefault();

        const [link] = e.target.elements;
        link.select();
        document.execCommand("copy");
        toast.success("Copiado al portapeles", {
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
    };

    return (
        <form onSubmit={copyLink}>
            {image && (
                <input
                    type="text"
                    name="link"
                    value={image}
                    style={{ width: "500px", marginTop: "50px" }}
                />
            )}
            {image && <button className="btn btn-primary">Copiar</button>}
        </form>
    );
};

export default ResultForm;

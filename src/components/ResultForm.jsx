import { useStore } from "../store/store";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareButtons from "./ShareButtons";

const ResultForm = () => {
    const { image } = useStore((state) => ({
        image: state.image
    }));

    const copyLink = () => {
        navigator.clipboard.writeText(image);

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
        <>
            <form onSubmit={copyLink}>
                {image && (
                    <input
                        type="text"
                        name="link"
                        value={image}
                        style={{ width: "500px", marginTop: "40px" }}
                    />
                )}
                {image && (
                    <Button
                        onClick={() => copyLink()}
                        style={{ marginLeft: "1rem", marginBottom: "0.2rem" }}
                        variant="contained"
                        size="small"
                        color="success"
                        endIcon={<ContentCopyIcon />}
                    >
                        Copiar
                    </Button>
                )}
            </form>
            {image && <ShareButtons />}
        </>
    );
};

export default ResultForm;

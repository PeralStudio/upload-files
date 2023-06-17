import { useStore } from "../store/store";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const BtnNextImage = () => {
    const { image } = useStore((state) => ({
        image: state.image
    }));

    const { refreshPage } = useStore();

    return (
        <>
            {image && (
                <>
                    <Button
                        onClick={() => refreshPage()}
                        style={{ marginTop: "2.5rem" }}
                        variant="contained"
                        size="small"
                        color="primary"
                        endIcon={<UploadFileIcon />}
                    >
                        Subir otro archivo
                    </Button>
                </>
            )}
        </>
    );
};

export default BtnNextImage;

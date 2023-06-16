import { useStore } from "../store/store";

const BtnNextImage = () => {
    const { image } = useStore((state) => ({
        image: state.image
    }));

    const { refreshPage } = useStore();

    return (
        <>
            {image && (
                <button onClick={() => refreshPage()} className="btn btn-dark">
                    Subir otro archivo
                </button>
            )}
        </>
    );
};

export default BtnNextImage;

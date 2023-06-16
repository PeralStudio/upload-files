import { FidgetSpinner } from "react-loader-spinner";
import { useStore } from "../store/store";

const ImageUploaded = () => {
    const { loading, image, type, archiveName } = useStore((state) => ({
        loading: state.loading,
        image: state.image,
        type: state.type,
        archiveName: state.archiveName
    }));

    return (
        <>
            {loading ? (
                <>
                    <FidgetSpinner
                        visible={loading}
                        height="90"
                        width="90"
                        ariaLabel="img-loading"
                        wrapperStyle={{ marginTop: "6rem", marginBottom: "1rem" }}
                        wrapperClass="dna-wrapper"
                        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                        backgroundColor="#474e60"
                    />
                    <h5>Subiendo {type.includes("image") ? "imagen" : "video"}...</h5>
                    <p>{archiveName}</p>
                </>
            ) : (
                <>
                    {type.includes("image") && image && (
                        <img className="img" src={image} alt="img-uploaded" />
                    )}
                    {type.includes("video") && image && (
                        <video
                            className="video"
                            src={image}
                            alt="video-uploaded"
                            controls
                            width={600}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default ImageUploaded;

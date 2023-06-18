import { useStore } from "../store/store";
import {
    FacebookIcon,
    FacebookShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrIcon,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";

const ShareButtons = () => {
    const { image } = useStore((state) => ({
        image: state.image
    }));

    return (
        <div style={{ marginTop: "40px", gap: "1rem", display: "flex" }}>
            <TwitterShareButton url={image}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton
                url={image}
                quote="Haz click aquí para compartir tu imagen"
                hashtag="#subirarchivos.peralstudio"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={image}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TelegramShareButton url={image}>
                <TelegramIcon size={32} round />
            </TelegramShareButton>
            <PinterestShareButton>
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            <RedditShareButton url={image}>
                <RedditIcon size={32} round />
            </RedditShareButton>
            <TumblrShareButton url={image}>
                <TumblrIcon size={32} round />
            </TumblrShareButton>
        </div>
    );
};

export default ShareButtons;

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export type GallerySlide = { src: string; alt: string };

export default function ProjectGallery({
  slides,
  open,
  index = 0,
  onClose,
}: {
  slides: GallerySlide[];
  open: boolean;
  index?: number;
  onClose: () => void;
}) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Thumbnails, Zoom, Counter]}
      carousel={{ finite: slides.length <= 1 }}
      styles={{
        root: {
          "--yarl__color_backdrop": "rgba(8, 9, 12, 0.92)",
          "--yarl__color_button": "rgba(230, 232, 236, 0.7)",
          "--yarl__color_button_active": "rgba(230, 232, 236, 1)",
        },
      }}
    />
  );
}

import styles from "./Photos.module.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import mg8180 from "../../assets/media/photoGallery/_MG_8180.webp";
import img3927 from "../../assets/media/photoGallery/IMG_3927.webp";
import blockParty830 from "../../assets/media/photoGallery/8-20 Block Party-830.webp";
import blockParty992 from "../../assets/media/photoGallery/8-20 Block Party-992.webp";
import dsc8038 from "../../assets/media/photoGallery/DSC_8038.webp";
import dsc8365 from "../../assets/media/photoGallery/DSC_8365.webp";
import dsc8390 from "../../assets/media/photoGallery/DSC_8390.webp";
import dsc9285 from "../../assets/media/photoGallery/DSC_9285.webp";
import img7276 from "../../assets/media/photoGallery/IMG_7276.webp";
import img7638 from "../../assets/media/photoGallery/IMG_7638.webp";
import kjw00520 from "../../assets/media/photoGallery/KJW00520.webp";
import kjw00540 from "../../assets/media/photoGallery/KJW00540.webp";

import CustomPhoto from "./CustomPhoto";

const images = [
  {
    src: mg8180,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: img3927,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: blockParty830,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: blockParty992,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: dsc8038,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: dsc8365,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: dsc8390,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: dsc9285,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: img7276,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: img7638,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: kjw00520,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
  {
    src: kjw00540,
    width: 300,
    height: 200,
    title: "Placeholder",
  },
];

export default function Photos() {
  return (
    <div className={styles.photosContainer} id="photos">
      <h2>PORTFOLIO</h2>
      <div className={styles.rowPhotoAlbum}>
        {images.map((image) => {
          return <CustomPhoto src={image.src} caption={image.title} />;
        })}
        {/* <RowsPhotoAlbum
          rowConstraints={{ minPhotos: 3 }}
          photos={images}
          spacing={16}
          render={{
            photo: ({ onClick }, { wrapperStyle, imageProps, photo }) => (
              <CustomPhoto
                src={photo.src}
                width={photo.width}
                height={photo.height}
                wrapperStyle={wrapperStyle}
                // imageProps={imageProps}
                caption={photo.title}
              />
            ),
          }}
          // render={{
          //   photo: ({ title, wrapperStyle, imageProps }) => (
          //     <CustomPhoto
          //       wrapperStyle={wrapperStyle}
          //       imageProps={imageProps}
          //       caption={title}
          //     />
          //   ),
          // }}
        /> */}
      </div>

      {/* <Swiper slidesPerView={3} className={styles.rowPhotoAlbum}>
        {images.map((image) => {
          return (
            <SwiperSlide>
              <CustomPhoto
                src={image.src}
                width={image.width}
                height={image.height}
                caption={image.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </div>
  );
}

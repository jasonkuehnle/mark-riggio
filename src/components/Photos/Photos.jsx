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
import nine57 from "../../assets/media/photoGallery/957-314-restauri-2-1.webp";
import img2890 from "../../assets/media/photoGallery/IMG_2890_crowd-1.webp";
import dn1 from "../../assets/media/photoGallery/discoNap1.webp";
import dn2 from "../../assets/media/photoGallery/discoNap2.webp";
import wbyHaven from "../../assets/media/photoGallery/IMG_9042.webp";
import kjw00887 from "../../assets/media/photoGallery/KJW00887.webp";
import dn3 from "../../assets/media/photoGallery/IMG_0768-1.webp";
import nine572 from "../../assets/media/photoGallery/957_117_tierney-1.webp";
import lfo from "../../assets/media/photoGallery/_MG_8075-Enhanced-NR.webp";

import CustomPhoto from "./CustomPhoto";

const images = [
  {
    src: img7276,
    width: 300,
    height: 200,
    title: "Oakland Block Party",
  },
  {
    src: img3927,
    width: 300,
    height: 200,
    title: "Wild Blue Yonder Tour",
  },
  {
    src: dsc8038,
    width: 300,
    height: 200,
    title: "The Discover Church",
  },
  {
    src: nine57,
    width: 300,
    height: 200,
    title: "9fiftyseven at HAVEN",
  },
  {
    src: dn1,
    width: 300,
    height: 200,
    title: "Disco Nap at HAVEN",
  },
  {
    src: img2890,
    width: 300,
    height: 200,
    title: "Madeline Jo & Friends at HAVEN",
  },
  {
    src: img7638,
    width: 300,
    height: 200,
    title: "Oakland Block Party",
  },
  {
    src: nine572,
    width: 300,
    height: 200,
    title: "9fiftyseven at HAVEN",
  },
  {
    src: dn3,
    width: 300,
    height: 200,
    title: "Disco Nap at HAVEN",
  },
  {
    src: kjw00887,
    width: 300,
    height: 200,
    title: "The Discover Church",
  },
  {
    src: lfo,
    width: 300,
    height: 200,
    title: "Live from Oakland",
  },
  {
    src: wbyHaven,
    width: 300,
    height: 200,
    title: "Wild Blue Yonder at HAVEN",
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

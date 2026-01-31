import React from "react";
import { Container } from "react-bootstrap";
import { galleryFilterData } from "@/data/galleryData";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface GalleryItem {
  id: number;
  src: string;
  filterCategory: string[];
  col: number;
  lg: number;
  width: number;
  height: number;
}

const Gallery: React.FC = () => {
  return (
    <section className='gallery-page section-space'>
      <Container>
        <PhotoSwipeGallery>
          <ResponsiveMasonry>
            <Masonry columnsCount={3} gutter='30px'>
              {galleryFilterData.map((item: GalleryItem) => (
                <div className='gallery-page__card' key={item.id}>
                  <img src={item.src} alt='Gallery image' />
                  <div className='gallery-page__card__hover'>
                    <Item
                      original={item.src}
                      thumbnail={item.src}
                      width={item.width}
                      height={item.height}
                    >
                      {({ ref, open }) => (
                        <a
                          href='#'
                          className='img-popup'
                          ref={ref}
                          onClick={(e) => {
                            e.preventDefault();
                            open(e);
                          }}
                        >
                          <div className='gallery-page__card__icon'>
                            <span className='gallery-page__card__icon__item'></span>
                          </div>
                        </a>
                      )}
                    </Item>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </PhotoSwipeGallery>
      </Container>
    </section>
  );
};

export default Gallery;

'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 6
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5
  }
};

type Props = {
    children: React.ReactNode;
}

export default function MultiCarousel({children}:Props) {
 
return <Carousel containerClass="flex w-full gap-2" responsive={responsive}>{children}</Carousel>
}
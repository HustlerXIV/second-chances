declare module "@splidejs/react-splide" {
  import { ComponentType } from "react";

  export interface SplideOptions {
    type?: "slide" | "loop" | "fade";
    autoplay?: boolean;
    pagination?: boolean;
    arrows?: boolean;
    // Add any additional options as needed
  }

  export interface SplideProps {
    options?: SplideOptions;
    on?: Record<string, (event: Event) => void>;
    children?: React.ReactNode;
  }

  export interface SplideSlideProps {
    children?: React.ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

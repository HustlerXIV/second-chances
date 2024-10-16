import Image from "next/image";
import React from "react";
import Container from "./Container";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const title = "EVERY PET<br/> DESERVES A<br/>HOME";
const subtitle =
  "Over thousand of pet needs a proper<br/>home and second chance";

const Banner = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/adopt");
  };

  return (
    <div
      className="relative w-full h-[522px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner-bg.svg')" }}
    >
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          pagination: false,
          arrows: false,
        }}
      >
        <SplideSlide>
          <Container>
            <div className="flex h-full pt-[20px] flex-col items-center justify-center gap-[40px] md:flex-row md:items-center md:pt-0">
              <div className="h-full flex flex-col justify-center gap-[20px]">
                <div
                  className="text-black font-bold text-[32px] leading-[40px] md:text-[64px] md:leading-[80px]"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
                <div
                  className="text-customDarkGray font-bold text-[20px]"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>
                <CustomButton
                  label="ADOPT NOW"
                  variant="contained"
                  sx={{ maxWidth: "200px", fontWeight: "bold" }}
                  onClick={() => handleOnClick()}
                />
              </div>
              <div className="w-full max-w-[200px] md:max-w-[580px]">
                <Image
                  src="/images/dog-and-kid.svg"
                  layout="responsive"
                  alt=""
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </Container>
        </SplideSlide>
        <SplideSlide>
          <Container>
            <div className="flex h-full pt-[20px] flex-col items-center justify-center gap-[40px] md:flex-row md:items-center md:pt-0">
              <div className="w-full max-w-[200px] md:max-w-[580px]">
                <Image
                  src="/images/dog-and-kid.svg"
                  layout="responsive"
                  alt=""
                  width={0}
                  height={0}
                />
              </div>
              <div className="h-full flex flex-col justify-center gap-[20px]">
                <div
                  className="text-black font-bold text-[32px] leading-[40px] md:text-[64px] md:leading-[80px]"
                  dangerouslySetInnerHTML={{ __html: "JOIN US!" }}
                ></div>
                <div
                  className="text-customDarkGray font-bold text-[20px]"
                  dangerouslySetInnerHTML={{ __html: "Do the good things" }}
                ></div>
                <CustomButton
                  label="JOIN US"
                  design="containedBlack"
                  sx={{ maxWidth: "200px", fontWeight: "bold" }}
                  onClick={() => router.push("/sign-up")}
                />
              </div>
            </div>
          </Container>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Banner;

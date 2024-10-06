import Image from "next/image";
import React from "react";
import Container from "./Container";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

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
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner-bg.svg')" }}
    >
      <Container
        style={{
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <div className="h-full flex flex-col justify-center gap-[20px]">
          <div
            className="text-black font-bold"
            style={{ fontSize: "64px", lineHeight: "80px" }}
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div
            style={{ fontSize: "20px" }}
            className="text-customDarkGray font-bold"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></div>
          <CustomButton
            label="ADOPT NOW"
            variant="contained"
            sx={{ maxWidth: "200px", fontWeight: "bold" }}
            onClick={() => handleOnClick()}
          />
        </div>
        <div className="max-w-[580px]">
          <Image
            src="/images/dog-and-kid.svg"
            layout="responsive"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;

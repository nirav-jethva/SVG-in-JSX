import Image from "next/image";
import React from "react";

const WithTag = () => {
  return (
    <>
      {["facebook", "instagram", "whatsapp"].map((key) => (
        <Image
          alt={key}
          height={100}
          key={key}
          priority
          src={`/images/${key}.svg`}
          width={100}
        />
      ))}
    </>
  );
};

export default WithTag;

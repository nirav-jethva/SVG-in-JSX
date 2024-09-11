import React from "react";

const Sprite = () => {
  return (
    <>
      <svg viewBox="0 0 16 16">
        <use xlinkHref="/images/social-media.svg#facebook" />
      </svg>
      <svg viewBox="0 0 16 16">
        <use xlinkHref="/images/social-media.svg#instagram" />
      </svg>
      <svg viewBox="0 0 16 16">
        <use xlinkHref="/images/social-media.svg#whatsapp" />
      </svg>
    </>
  );
};

export default Sprite;

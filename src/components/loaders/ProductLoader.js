import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = ({ width }) => {
  let h = width * 1.8;
  let margin = 18;
  return (
    <ContentLoader
      speed={4}
      width={width}
      height={h}
      viewBox={`0 0 ${width} ${h}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width={width} height={width} />
      <rect x="8" y={width + margin} rx="8" ry="8" width="142" height="20" />
      <rect
        x="8"
        y={width + margin * 2 + 20}
        rx="8"
        ry="8"
        width="106"
        height="16"
      />
      <rect
        x="8"
        y={width + margin * 3 + 20 + 16}
        rx="8"
        ry="8"
        width="64"
        height="18"
      />
      <rect
        x="8"
        y={width + margin * 5 + 20 + 16 + 18}
        rx="8"
        ry="8"
        width="72"
        height="20"
      />
    </ContentLoader>
  );
};

export default ProductLoader;

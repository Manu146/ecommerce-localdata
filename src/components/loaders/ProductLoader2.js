import React, { useCallback } from "react";
import useWindowSize from "../../customHooks/useWindowSize";
import ContentLoader from "react-content-loader";

const ProductLoader2 = () => {
  const { width } = useWindowSize();
  let divider = useCallback(
    (width) => {
      if (width <= 640) return 2;
      if (width > 640 && width <= 768) return 3;
      if (width > 768 && width <= 1024) return 4;
      if (width > 1024) return 5;
    },
    [width]
  );
  let cardw = Math.ceil((width * 0.91) / divider(width));
  let cardh = Math.ceil(cardw * 1.8);
  let margin = 18;
  return (
    <ContentLoader
      speed={4}
      width={cardw - 16}
      height={cardh}
      viewBox={`0 0 ${cardw - 16} ${cardh}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width={cardw - 16} height={cardw} />
      <rect x="8" y={cardw + margin} rx="8" ry="8" width="142" height="20" />
      <rect
        x="8"
        y={cardw + margin * 2 + 20}
        rx="8"
        ry="8"
        width="106"
        height="16"
      />
      <rect
        x="8"
        y={cardw + margin * 3 + 20 + 16}
        rx="8"
        ry="8"
        width="64"
        height="18"
      />
      <rect
        x="8"
        y={cardw + margin * 5 + 20 + 16 + 18}
        rx="8"
        ry="8"
        width="72"
        height="20"
      />
    </ContentLoader>
  );
};

export default ProductLoader2;

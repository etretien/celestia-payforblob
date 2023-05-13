import React, { FC } from 'react';

export type LucidLogoProps = {
  width: string;
  height: string;
  colorBody?: string;
  colorLine?: string;
};

export const LucidLogo: FC<LucidLogoProps> = ({
  width,
  height,
  colorBody = 'url(#paint0_radial_983_218)',
  colorLine = 'url(#paint1_radial_983_218)',
}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 240 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.675 45.3012L161.714 20.706L146.916 75.9344C146.753 76.5622 146.647 77.1915 146.595 77.8169C148.04 77.6413 149.474 77.1778 150.814 76.404L146.558 78.8617C146.558 78.8618 146.558 78.8618 146.558 78.8619L204.675 45.3012ZM149.19 85.9122C150.123 84.0299 151.598 82.3904 153.545 81.2524L210.262 48.5L228.2 58.769C235.038 62.6838 239.25 69.9187 239.25 77.7484L239.25 112.073L154.809 89.4738C152.529 88.8637 150.605 87.5882 149.19 85.9122ZM140.87 76.9997L141.564 74.4067C141.329 75.2836 140.996 76.1079 140.579 76.8708C138.588 75.9529 136.848 74.4392 135.655 72.4088L98.7876 8.53916L108.575 2.93611C115.413 -0.978711 123.837 -0.978709 130.675 2.93611L156.72 17.8466L140.87 76.9997C140.87 76.9997 140.87 76.9997 140.87 76.9997ZM93.9574 11.3045L130.792 75.116L130.805 75.1394C132.151 77.4836 132.549 80.1137 132.118 82.5853C130.755 82.7469 129.339 82.6575 127.933 82.2811L20.2976 53.475L93.9574 11.3045ZM128.942 88.6328C128.288 89.2727 127.544 89.8418 126.715 90.3204L-7.14656e-06 163.494L1.18603e-05 77.7483C1.22025e-05 69.9187 4.21241 62.6838 11.0505 58.769L13.4402 57.4009L126.493 87.6566C126.523 87.6647 126.554 87.673 126.584 87.6814C127.421 87.913 128.21 88.2345 128.942 88.6328ZM-7.42741e-06 169.919L129.497 95.1392L129.543 95.1125C130.869 94.3555 132.285 93.9007 133.711 93.7268C134.77 96.0098 135.065 98.6635 134.362 101.285L93.0794 255.355L11.0505 208.393C4.21242 204.479 -8.6218e-06 197.244 -8.27955e-06 189.414L-7.42741e-06 169.919ZM143.205 97.1857C143.767 97.7896 144.27 98.4657 144.7 99.2104L212.81 217.204L130.675 264.226C123.837 268.141 115.413 268.141 108.575 264.226L98.0739 258.215L139.737 102.724C139.745 102.697 139.752 102.67 139.759 102.643C140.366 100.442 141.595 98.5764 143.205 97.1857ZM217.64 214.439L149.52 96.427C149.18 95.8394 148.901 95.2337 148.679 94.617C150.172 94.3697 151.739 94.4246 153.297 94.8304L239.25 117.834L239.25 189.414C239.25 197.244 235.038 204.479 228.2 208.393L217.64 214.439Z"
          fill={colorBody}
        />
        <path
          opacity="0.75"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149.191 85.9112C150.124 84.0292 151.598 82.3901 153.545 81.2521L210.263 48.4998L204.676 45.3011L146.56 78.8609L150.815 76.4038C149.475 77.1773 148.041 77.6409 146.597 77.8166C146.568 78.1662 146.556 78.5147 146.56 78.8609C146.59 81.4749 147.547 83.9635 149.191 85.9112ZM93.958 11.3044L98.7882 8.53906L135.656 72.4086C136.849 74.4394 138.589 75.9533 140.581 76.8712C138.844 80.0512 135.659 82.166 132.118 82.5855C132.549 80.1138 132.151 77.4835 130.806 75.1392L130.792 75.1158L93.958 11.3044ZM0.000465968 169.919L0.000466249 163.494L126.716 90.3202C127.545 89.8415 128.289 89.2723 128.943 88.6323C131.072 89.7903 132.725 91.5972 133.713 93.7264C132.286 93.9003 130.87 94.3551 129.544 95.1123L129.497 95.139L0.000465968 169.919ZM217.641 214.439L212.81 217.204L144.7 99.2102C144.271 98.4658 143.768 97.7899 143.206 97.1863C144.751 95.8515 146.647 94.9541 148.68 94.6172C148.902 95.2338 149.181 95.8393 149.52 96.4268L217.641 214.439Z"
          fill={colorLine}
        />
        <defs>
          <radialGradient
            id="paint0_radial_983_218"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(239 -15) rotate(133.392) scale(327.519 331.216)"
          >
            <stop stopColor="#F4FF00" />
            <stop offset="0.359375" stopColor="#D8FF00" />
            <stop offset="1" stopColor="#D402BF" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_983_218"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(126.473 79.0121) rotate(155.736) scale(151.124 153.616)"
          >
            <stop stopColor="#E9FF01" />
            <stop offset="1" stopColor="#D402BF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

import React from "react";

function Logo({ theme }) {
  return (
    <svg
      width="205"
      height="33"
      viewBox="0 0 205 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66.204 22.3539H63.0531V21.1355C62.6529 21.5863 62.1577 21.9429 61.6032 22.1796C61.0487 22.4163 60.4487 22.5272 59.8462 22.5044C58.4844 22.5044 57.4341 22.1158 56.6953 21.3351C56.1238 20.7388 55.7435 19.9854 55.603 19.1715C55.4177 18.0788 55.3345 16.9712 55.3545 15.863C55.335 14.763 55.4182 13.6636 55.603 12.5791C55.7435 11.7652 56.1238 11.0118 56.6953 10.4155C57.4446 9.63594 58.4949 9.24616 59.8462 9.24616C60.4338 9.21962 61.02 9.32145 61.5642 9.54455C62.1083 9.76766 62.5973 10.1067 62.9971 10.538V4.64236H66.232L66.204 22.3539ZM62.9691 15.863C63.0161 14.9222 62.8683 13.9818 62.535 13.1007C62.2444 12.4706 61.6492 12.1555 60.7565 12.1555C60.3527 12.1405 59.9523 12.2349 59.5977 12.4286C59.2862 12.618 59.049 12.9083 58.9255 13.2513C58.7856 13.6154 58.6904 13.9951 58.6419 14.3821C58.5843 14.8736 58.5585 15.3682 58.5649 15.863C58.5587 16.3578 58.5845 16.8525 58.6419 17.3439C58.6912 17.7342 58.7864 18.1173 58.9255 18.4853C59.0457 18.8328 59.2834 19.1275 59.5977 19.3185C59.9563 19.5003 60.3527 19.595 60.7547 19.595C61.1568 19.595 61.5532 19.5003 61.9118 19.3185C62.2253 19.1302 62.4659 18.8415 62.5945 18.4993C62.7471 18.1297 62.8484 17.741 62.8956 17.3439C62.9491 16.8522 62.9736 16.3577 62.9691 15.863V15.863Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M79.6374 22.3539H76.4865V21.2371C76.0963 21.6459 75.627 21.9711 75.1071 22.1928C74.5299 22.4023 73.9179 22.4998 73.3041 22.4799C71.8617 22.4799 70.7589 22.0983 69.9957 21.3351C69.634 20.9448 69.3532 20.4868 69.1693 19.9875C68.9855 19.4882 68.9022 18.9574 68.9244 18.4258C68.9087 17.9198 69.003 17.4165 69.2006 16.9505C69.3983 16.4845 69.6946 16.0669 70.0692 15.7265C70.8324 15.0263 71.9434 14.6762 73.4022 14.6762H76.413V14.0215C76.4395 13.7363 76.402 13.4487 76.3033 13.1798C76.2046 12.9109 76.0471 12.6674 75.8424 12.4671C75.4607 12.145 74.8446 11.9804 74.0008 11.9804C73.5285 11.9686 73.0595 12.0631 72.6286 12.2571C72.1977 12.451 71.816 12.7393 71.5116 13.1008L69.4741 11.0877C70.0109 10.4573 70.6885 9.96197 71.4521 9.64179C72.3118 9.35145 73.2165 9.21747 74.1234 9.24617C77.8064 9.24617 79.6479 10.7714 79.6479 13.822L79.6374 22.3539ZM76.4025 17.5785V16.8783H73.9518C72.6751 16.8783 72.0368 17.3755 72.0368 18.3697C72.0368 19.364 72.6915 19.8542 74.0008 19.8402C74.6963 19.8921 75.3842 19.6683 75.9159 19.217C76.238 18.9404 76.4025 18.3907 76.4025 17.5785Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M92.8681 18.2753C92.9007 18.8885 92.7759 19.4999 92.5057 20.0514C92.2355 20.6029 91.8288 21.0761 91.3242 21.4262C90.2996 22.1474 88.982 22.508 87.3716 22.508C86.3299 22.5268 85.2906 22.4008 84.2837 22.1334C83.3548 21.8492 82.5122 21.3364 81.833 20.642L83.9336 18.5414C84.7272 19.3536 85.8802 19.7597 87.3926 19.7597C87.9517 19.7707 88.5056 19.6509 89.01 19.4096C89.2095 19.3287 89.3801 19.1896 89.4993 19.0103C89.6186 18.8311 89.6811 18.6201 89.6787 18.4048C89.6787 17.6906 89.2236 17.2927 88.3133 17.211L86.2127 17.0114C83.7224 16.764 82.4784 15.5527 82.4807 13.3774C82.457 12.791 82.5774 12.2077 82.8313 11.6785C83.0852 11.1494 83.4648 10.6905 83.9371 10.342C84.9754 9.58498 86.238 9.19903 87.5221 9.24624C89.7277 9.24624 91.3779 9.75155 92.4725 10.7622L90.4839 12.7787C89.8351 12.1952 88.8303 11.9035 87.4696 11.9035C86.9837 11.8643 86.4986 11.9874 86.0902 12.2536C85.9483 12.3531 85.8324 12.4851 85.752 12.6386C85.6716 12.7921 85.6291 12.9626 85.6281 13.1358C85.6281 13.7824 86.0762 14.1558 86.9725 14.2562L89.0135 14.4557C91.5833 14.7148 92.8681 15.988 92.8681 18.2753Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M106.351 22.3538H103.116V14.5186C103.116 13.7064 102.905 13.1089 102.483 12.7261C102.072 12.3515 101.533 12.1475 100.977 12.1555C100.413 12.1447 99.8664 12.3487 99.4473 12.7261C99.0248 13.1066 98.8136 13.7041 98.8136 14.5186V22.3538H95.5752V4.64236H98.8101V10.594C99.2066 10.1553 99.6938 9.80813 100.238 9.57658C100.782 9.34504 101.37 9.23468 101.961 9.25316C102.523 9.22466 103.084 9.31085 103.612 9.50647C104.139 9.70209 104.621 10.003 105.028 10.391C105.905 11.2686 106.344 12.4951 106.344 14.0705L106.351 22.3538Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M119.733 22.3539H118.473V20.8134C118.064 21.3855 117.516 21.8435 116.88 22.1438C116.255 22.3929 115.585 22.512 114.912 22.4939C113.652 22.4939 112.674 22.1438 111.979 21.4436C110.949 20.4143 110.435 18.714 110.435 16.3427C110.435 13.9713 110.949 12.271 111.979 11.2417C112.679 10.5415 113.657 10.1914 114.912 10.1914C115.585 10.1734 116.255 10.2925 116.88 10.5415C117.519 10.8506 118.068 11.3198 118.473 11.9034V4.64236H119.733V22.3539ZM118.333 18.2262C118.423 17.6084 118.465 16.9845 118.459 16.3602C118.465 15.7358 118.423 15.112 118.333 14.4941C118.247 13.9539 118.093 13.4268 117.874 12.9257C117.662 12.4283 117.293 12.0139 116.824 11.7459C116.279 11.4775 115.68 11.3379 115.073 11.3379C114.466 11.3379 113.867 11.4775 113.323 11.7459C112.853 12.0135 112.484 12.428 112.273 12.9257C112.052 13.4267 111.897 13.9538 111.81 14.4941C111.723 15.1123 111.682 15.736 111.688 16.3602C111.682 16.9844 111.723 17.6081 111.81 18.2262C111.897 18.7654 112.052 19.2913 112.273 19.7911C112.482 20.2909 112.852 20.707 113.323 20.9745C113.867 21.2428 114.466 21.3824 115.073 21.3824C115.68 21.3824 116.279 21.2428 116.824 20.9745C117.295 20.707 117.665 20.2909 117.874 19.7911C118.093 19.2912 118.247 18.7653 118.333 18.2262Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M125.981 6.21081H124.416V4.64236H125.981V6.21081ZM125.834 22.3538H124.563V10.363H125.834V22.3538Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M137.404 12.2815C137.107 11.9648 136.75 11.7101 136.354 11.5323C135.959 11.3901 135.541 11.3236 135.121 11.3362C134.675 11.3151 134.23 11.3991 133.822 11.5815C133.414 11.764 133.054 12.0397 132.772 12.3865C132.19 13.1155 131.886 14.0275 131.914 14.9598V22.3468H130.644V10.363H131.914V11.9559C132.275 11.3984 132.786 10.9542 133.388 10.6745C134.025 10.3678 134.723 10.2109 135.429 10.2159C135.963 10.2 136.494 10.2933 136.99 10.4902C137.486 10.6871 137.937 10.9833 138.314 11.3607L137.404 12.2815Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M148.993 16.6335H140.661C140.661 18.1786 140.992 19.3514 141.655 20.152C142.318 20.9525 143.287 21.354 144.564 21.3563C145.18 21.368 145.791 21.2486 146.357 21.0062C146.924 20.7315 147.438 20.3567 147.873 19.8999L148.818 20.6456C148.262 21.2266 147.605 21.7012 146.878 22.046C146.121 22.3552 145.308 22.5031 144.491 22.4801C142.831 22.4801 141.566 21.9573 140.696 20.9117C139.825 19.8661 139.39 18.3408 139.39 16.3359C139.39 14.3964 139.813 12.8874 140.661 11.8091C141.077 11.2771 141.616 10.8526 142.23 10.5712C142.845 10.2898 143.518 10.1596 144.193 10.1917C145.703 10.1917 146.881 10.7052 147.725 11.7321C148.57 12.7591 148.993 14.1945 148.993 16.0383V16.6335ZM147.739 15.6147C147.723 14.8416 147.58 14.0764 147.316 13.3496C147.068 12.7405 146.637 12.2231 146.084 11.8687C145.523 11.5129 144.871 11.328 144.207 11.3365C143.546 11.3225 142.895 11.5067 142.339 11.8655C141.783 12.2242 141.347 12.7411 141.088 13.3496C140.825 14.0767 140.683 14.8418 140.668 15.6147H147.739Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M161.634 20.6559C161.142 21.258 160.527 21.7495 159.831 22.0983C159.15 22.3821 158.416 22.5181 157.678 22.4974C156.045 22.4974 154.755 21.9501 153.81 20.8555C152.865 19.7608 152.398 18.2601 152.409 16.3532C152.409 14.4463 152.876 12.9456 153.81 11.8509C154.743 10.7563 156.033 10.209 157.678 10.209C158.416 10.189 159.149 10.3237 159.831 10.6046C160.526 10.956 161.141 11.4484 161.634 12.0505L160.763 12.8452C160.357 12.3677 159.869 11.9679 159.32 11.6654C158.808 11.4224 158.246 11.3025 157.678 11.3153C156.278 11.3153 155.216 11.8451 154.492 12.9047C153.946 13.703 153.673 14.8478 153.673 16.3392C153.673 17.8306 153.946 18.9743 154.492 19.7702C155.207 20.8345 156.269 21.3654 157.678 21.3631C158.241 21.3734 158.798 21.2535 159.306 21.013C159.86 20.7129 160.354 20.3129 160.763 19.8332L161.634 20.6559Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M169.646 22.3539H168.55C168.155 22.3773 167.759 22.3125 167.391 22.1641C167.024 22.0158 166.694 21.7876 166.425 21.4961C165.895 20.8599 165.624 20.0475 165.665 19.2205V11.3083H164.023V10.363H165.665V6.53293H166.933V10.363H169.646V11.3083H166.933V19.2555C166.933 20.5836 167.547 21.2476 168.774 21.2476H169.646V22.3539Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M182.281 16.3602C182.281 18.5821 181.784 20.1902 180.79 21.1845C179.888 22.0287 178.699 22.4985 177.464 22.4985C176.229 22.4985 175.04 22.0287 174.138 21.1845C173.144 20.1902 172.646 18.5821 172.646 16.3602C172.646 14.1382 173.144 12.5289 174.138 11.5323C175.041 10.6904 176.229 10.2222 177.464 10.2222C178.698 10.2222 179.887 10.6904 180.79 11.5323C181.784 12.5313 182.281 14.1405 182.281 16.3602ZM181.014 16.3602C181.014 14.4043 180.664 13.0692 179.964 12.355C179.3 11.7021 178.406 11.3361 177.474 11.3361C176.543 11.3361 175.649 11.7021 174.985 12.355C174.285 13.0692 173.929 14.4043 173.917 16.3602C173.906 18.3161 174.262 19.6511 174.985 20.3653C175.649 21.0183 176.543 21.3842 177.474 21.3842C178.406 21.3842 179.3 21.0183 179.964 20.3653C180.657 19.6511 181.003 18.3161 181.003 16.3602H181.014Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M193.152 12.2816C192.861 11.9669 192.511 11.7123 192.122 11.5324C191.727 11.3905 191.309 11.324 190.89 11.3363C190.443 11.3154 189.997 11.3996 189.589 11.582C189.18 11.7644 188.82 12.0399 188.537 12.3866C187.957 13.1165 187.653 14.0278 187.679 14.9598V22.3469H186.412V10.3631H187.679V11.956C188.04 11.3994 188.549 10.9553 189.15 10.6746C189.785 10.3679 190.482 10.211 191.187 10.216C191.721 10.1996 192.252 10.2928 192.748 10.4897C193.245 10.6866 193.695 10.9831 194.072 11.3608L193.152 12.2816Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M204.52 10.363L198.946 25.6133C198.8 26.1436 198.518 26.6265 198.127 27.0137C197.504 27.5607 196.689 27.8377 195.862 27.784H195.267V26.6601H195.739C196.241 26.7021 196.743 26.5792 197.168 26.31C197.534 25.9564 197.796 25.5098 197.928 25.0182L198.897 22.3539L194.518 10.363H195.918L199.527 20.866L203.134 10.363H204.52Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M20.4299 3.09863L20.4194 6.21451L17.7796 7.75145L5.37561 14.96L5.36511 18.454L2.67285 20.0189L2.69036 13.409L20.4299 3.09863Z"
        fill={theme === "light" ? "#BDBDBD" : "#ABABAB"}
      />
      <path
        d="M33.8656 13.9515L33.8586 17.0674L31.1909 18.6148L21.4791 24.2584L21.4686 27.7559L18.7764 29.3208L18.7939 22.711L31.1979 15.5024L33.8656 13.9515Z"
        fill={theme === "light" ? "#BDBDBD" : "#ABABAB"}
      />
      <path
        d="M20.4614 9.30197L20.4509 12.4143L8.04688 19.6264L8.05738 16.5105L20.4614 9.30197Z"
        fill={theme === "light" ? "#BDBDBD" : "#ABABAB"}
      />
      <path
        d="M23.167 13.9515L23.1565 17.0674L16.1125 21.16L16.102 24.654L8.07422 29.3208L8.09172 22.7075L23.167 13.9515Z"
        fill={theme === "light" ? "#BDBDBD" : "#ABABAB"}
      />
      <path
        d="M33.8637 13.9517L31.1959 15.5026L18.7919 22.7112L16.1067 21.1602L23.1506 17.0676L28.5107 13.9517L20.4584 9.30238L8.0544 16.5109L5.36914 14.96L17.7731 7.75144L20.4129 6.2145L20.4409 6.2005L23.1261 7.75144L31.1819 12.4008L33.8637 13.9517Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M23.1633 13.9515L8.08801 22.7074L5.40625 21.16L8.046 19.6266L20.45 12.4145L20.478 12.4005L23.1633 13.9515Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M44.5711 13.9514L41.9033 15.5024L24.1638 25.8093L21.4786 24.2583L31.1903 18.6148L33.858 17.0673L39.2181 13.9514L20.4248 3.09837L2.68526 13.4088L0 11.8613L17.7395 1.54744L20.4073 0L23.089 1.54744L41.8858 12.4005L44.5711 13.9514Z"
        fill={theme === "light" ? "black" : "white"}
      />
      <path
        d="M44.5689 13.9515L44.5479 20.5614L41.8836 22.1123L24.1406 32.4227L24.1616 25.8094L41.9011 15.5024L44.5689 13.9515Z"
        fill={theme === "light" ? "#BDBDBD" : "#ABABAB"}
      />
    </svg>
  );
}

export default Logo;

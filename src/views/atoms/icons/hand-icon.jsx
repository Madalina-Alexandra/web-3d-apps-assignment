import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HandIcon = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1 });
    tl.to(
      iconRef.current,
      { y: -5, duration: 0.5 },
      "start"
    );
    tl.to(iconRef.current, { y: 0, duration: 0.5 });
  }, []);

  return (
    <svg
      ref={iconRef}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 11.5C16 10.837 15.7366 10.2011 15.2678 9.73223C14.7989 9.26339 14.163 9 13.5 9C12.837 9 12.2011 9.26339 11.7322 9.73223C11.2634 10.2011 11 10.837 11 11.5V14.5"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 13.5V11.5C21 10.837 20.7366 10.2011 20.2678 9.73223C19.7989 9.26339 19.163 9 18.5 9C17.837 9 17.2011 9.26339 16.7322 9.73223C16.2634 10.2011 16 10.837 16 11.5V15.5"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 18.5V14.5H8.5C7.83797 14.5033 7.20399 14.7677 6.73586 15.2359C6.26773 15.704 6.00329 16.338 6 17V19C6 21.6522 7.05357 24.1957 8.92893 26.0711C10.8043 27.9464 13.3478 29 16 29C18.6522 29 21.1957 27.9464 23.0711 26.0711C24.9464 24.1957 26 21.6522 26 19V13.5C26 12.837 25.7366 12.2011 25.2678 11.7322C24.7989 11.2634 24.163 11 23.5 11C22.837 11 22.2011 11.2634 21.7322 11.7322C21.2634 12.2011 21 12.837 21 13.5V15.5"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HandIcon;

import React, { useEffect, useState } from "react";
import "../styles/returntotoparrow.css";

export default function ReturnToTopArrow() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (window.scrollY > 20 && !isAtBottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button id="returnToTop" onClick={scrollToTop}>
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}

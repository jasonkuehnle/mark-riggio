import styles from "./Photos.module.css";
import { useRef, useState, useEffect } from "react";

export default function CustomPhoto({
  wrapperStyle,
  src,
  width,
  height,
  caption,
}) {
  const [visible, setVisible] = useState(false);
  const pointer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (pointer.current) {
        pointer.current.style.left = e.clientX + "px";
        pointer.current.style.top = e.clientY + "px";
        // pointer.current.style.setProperty("--mouseX", `${e.clientX}px`);
        // pointer.current.style.setProperty("--mouseY", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={wrapperStyle} className={styles.customPhoto}>
      <div
        ref={pointer}
        className={styles.pointer}
        style={{
          opacity: visible ? 1 : 0,
          //   display: activeDescription ? "flex" : "none",
          visibility: visible ? "visible" : "hidden",
        }}
      >
        {caption}
      </div>
      <img
        src={src}
        // width={width}
        // height={height}
        // {...imageProps}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      ></img>
    </div>
  );
}

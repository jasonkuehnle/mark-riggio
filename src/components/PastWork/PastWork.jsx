import styles from "./PastWork.module.css";
import pastWorkList from "./pastWorkList.js";
import { useRef, useState, useEffect } from "react";

export default function PastWork() {
  const pointer = useRef(null);
  const [activeDescription, setActiveDescription] = useState("");

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
    <div className={styles.pastWorkContainer} id="past-work">
      <div className={styles.pastWorkHeader}>
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <h6>Hover to learn more!</h6>
      </div>
      <div
        ref={pointer}
        className={styles.pointer}
        style={{
          opacity: activeDescription ? 1 : 0,
          //   display: activeDescription ? "flex" : "none",
          visibility: activeDescription ? "visible" : "hidden",
        }}
      >
        {activeDescription && (
          <ul>
            {activeDescription.split("\n").map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.pastWorkList}>
        {pastWorkList.map((item, index) => (
          <div
            key={index}
            className={styles.pastWorkItem}
            onMouseEnter={() => {
              setActiveDescription(item.description);
            }}
            onMouseLeave={() => setActiveDescription("")}
          >
            <h4>{item.title}</h4>
            {/* <h4>{item.yearsWorked}</h4> */}
          </div>
        ))}
      </div>
    </div>
  );
}

// // src/context/AnimationContext.jsx
// "use client";

// import { createContext, useContext, useState } from "react";

// const AnimationContext = createContext(null);

// export function AnimationProvider({ children }) {
//   const [sourceElement, setSourceElement] = useState(null);
//   const [currentColor, setCurrentColor] = useState(null);
//   const [currentLayout, setCurrentLayout] = useState(0);

//   return (
//     <AnimationContext.Provider
//       value={{
//         sourceElement,
//         setSourceElement,
//         currentColor,
//         setCurrentColor,
//         currentLayout,
//         setCurrentLayout,
//       }}
//     >
//       {children}
//     </AnimationContext.Provider>
//   );
// }

// export function useAnimation() {
//   const context = useContext(AnimationContext);
//   if (!context) {
//     throw new Error("useAnimation must be used within an AnimationProvider");
//   }
//   return context;
// }

"use client";

import { createContext, useContext, useState } from "react";

const AnimationContext = createContext(null);

export function AnimationProvider({ children }) {
  const [sourceElement, setSourceElement] = useState(null);
  const [currentColor, setCurrentColor] = useState(null);
  const [currentLayout, setCurrentLayout] = useState(0); // Store the layout
  const [returningFromPage, setReturningFromPage] = useState(false);

  return (
    <AnimationContext.Provider
      value={{
        sourceElement,
        setSourceElement,
        currentColor,
        setCurrentColor,
        currentLayout,
        setCurrentLayout,
        returningFromPage,
        setReturningFromPage,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}

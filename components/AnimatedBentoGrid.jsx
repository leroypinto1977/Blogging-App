// "use client";

// import { useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import gsap from "gsap";
// import "@/app/globals.css";

// export default function AnimatedBentoGrid() {
//   const router = useRouter();

//   // Refs for each shape
//   const moreRef = useRef(null);
//   const insideRef = useRef(null);
//   const coverRef = useRef(null);
//   const pursuitRef = useRef(null);
//   const aboutRef = useRef(null);

//   // Container ref for animation scope
//   const containerRef = useRef(null);

//   const handleClick = (path, shapeName) => {
//     if (shapeName === "green" || shapeName === "blue") {
//       const targetRef =
//         shapeName === "green" ? insideRef.current : pursuitRef.current;
//       const tl = gsap.timeline({
//         onComplete: () => router.push(path),
//       });

//       // Fade out other divs quickly
//       tl.to(
//         [
//           moreRef.current,
//           coverRef.current,
//           shapeName === "green" ? pursuitRef.current : insideRef.current,
//           aboutRef.current,
//         ],
//         {
//           opacity: 0,
//           duration: 0.3,
//           ease: "power3.inOut",
//         }
//       )
//         // Expand target div to fill the entire viewport
//         .to(targetRef, {
//           width: "100vw",
//           height: "100vh",
//           left: "50%",
//           top: "50%",
//           xPercent: -50,
//           yPercent: -50,
//           borderRadius: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         })
//         // Fade out target div
//         .to(
//           targetRef,
//           {
//             opacity: 0,
//             duration: 0.5,
//             ease: "power3.inOut",
//           },
//           "-=0.3"
//         );
//     } else {
//       router.push(path);
//     }
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({
//       defaults: { ease: "power3.out", duration: 0.8 },
//     });

//     gsap.set(
//       [
//         moreRef.current,
//         insideRef.current,
//         coverRef.current,
//         pursuitRef.current,
//         aboutRef.current,
//       ],
//       { opacity: 0 }
//     );

//     tl.fromTo(moreRef.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1 })
//       .fromTo(
//         insideRef.current,
//         { x: 100, opacity: 0 },
//         { x: 0, opacity: 1 },
//         "-=0.5"
//       )
//       .fromTo(
//         pursuitRef.current,
//         { y: 100, x: 0, opacity: 0 },
//         { y: 0, x: 0, opacity: 1 },
//         "-=0.5"
//       )
//       .fromTo(
//         coverRef.current,
//         { y: 100, x: 100, opacity: 0 },
//         { y: 0, x: 0, opacity: 1 },
//         "-=0.5"
//       )
//       .fromTo(
//         aboutRef.current,
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1 },
//         "-=0.5"
//       );

//     const textElements = containerRef.current?.querySelectorAll("h1");
//     if (textElements) {
//       tl.fromTo(
//         textElements,
//         { y: 20, opacity: 0 },
//         { y: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power2.out" },
//         "-=0.3"
//       );
//     }
//   }, []);

//   return (
//     <div
//       className="min-h-screen bg-white flex items-center justify-center p-4 font-robotoCondensed font-bold"
//       ref={containerRef}
//     >
//       <div className="relative w-full max-w-4xl aspect-[2/1]">
//         {[
//           {
//             name: "green",
//             color: "#4CAF50",
//             ref: insideRef,
//             path: "/green",
//             width: "31%",
//             height: "50%",
//             left: "25%",
//             top: "0%",
//           },
//           {
//             name: "yellow",
//             color: "#FFD700",
//             ref: moreRef,
//             path: "/yellow",
//             width: "21%",
//             height: "50%",
//             left: "3%",
//             top: "0%",
//           },
//           {
//             name: "black",
//             color: "#000000",
//             ref: coverRef,
//             path: "/black",
//             width: "40%",
//             height: "100%",
//             left: "57%",
//             top: "0%",
//           },
//           {
//             name: "blue",
//             color: "#FD5C63",
//             ref: pursuitRef,
//             path: "/blue",
//             width: "41%",
//             height: "48%",
//             left: "3%",
//             top: "52%",
//           },
//           {
//             name: "gray",
//             color: "#7CB9E8",
//             ref: aboutRef,
//             path: "/gray",
//             width: "11%",
//             height: "48%",
//             left: "45%",
//             top: "52%",
//           },
//         ].map((shape) => (
//           <div
//             key={shape.name}
//             ref={shape.ref}
//             className="absolute flex items-center justify-center cursor-pointer"
//             style={{
//               backgroundColor: shape.color,
//               borderRadius: "24px",
//               width: shape.width,
//               height: shape.height,
//               left: shape.left,
//               top: shape.top,
//             }}
//             onClick={() => handleClick(shape.path, shape.name)}
//           >
//             {shape.name === "green" && (
//               <div className="flex flex-col items-center justify-center w-full h-full px-4">
//                 <h1
//                   className="text-white font-bold text-center tracking-wider leading-tight w-full"
//                   style={{
//                     fontSize: "clamp(1rem, 10vw, 4.2rem)",
//                     lineHeight: "1",
//                   }}
//                 >
//                   INSIDE
//                 </h1>
//                 <h1
//                   className="text-white font-bold text-center tracking-wider leading-tight w-full"
//                   style={{
//                     fontSize: "clamp(1rem, 10vw, 3.2rem)",
//                     lineHeight: "1",
//                   }}
//                 >
//                   MY MIND
//                 </h1>
//               </div>
//             )}
//             {shape.name === "yellow" && (
//               <div className="flex items-center justify-center w-full h-full">
//                 <h1
//                   className="text-black font-bold text-center tracking-wider leading-tight"
//                   style={{
//                     fontSize: "clamp(1rem, 8vw, 2.5rem)",
//                     transform: "rotate(-90deg)",
//                     transformOrigin: "center",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   MORE
//                 </h1>
//               </div>
//             )}
//             {shape.name === "black" && (
//               <h1 className="text-white text-3xl font-bold text-center tracking-wider leading-tight">
//                 [With cover image]
//               </h1>
//             )}
//             {shape.name === "blue" && (
//               <div className="flex flex-col items-center justify-center w-full h-full px-4">
//                 <h1
//                   className="text-white font-bold text-center tracking-wider leading-tight w-full"
//                   style={{
//                     fontSize: "clamp(1rem, 10vw, 3.4rem)",
//                     lineHeight: "1",
//                   }}
//                 >
//                   PURSUIT OF
//                 </h1>
//                 <h1
//                   className="text-white font-bold text-center tracking-wider leading-tight w-full"
//                   style={{
//                     fontSize: "clamp(1rem, 10vw, 3.3rem)",
//                     lineHeight: "1",
//                   }}
//                 >
//                   KNOWLEDGE
//                 </h1>
//               </div>
//             )}
//             {shape.name === "gray" && (
//               <div className="flex items-center justify-center w-full h-full">
//                 <h1
//                   className="text-white font-bold text-center tracking-wider leading-tight"
//                   style={{
//                     fontSize: "clamp(1rem, 8vw, 2.5rem)",
//                     transform: "rotate(-90deg)",
//                     transformOrigin: "center",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   ABOUT
//                 </h1>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import "@/app/globals.css";

export default function AnimatedBentoGrid() {
  const router = useRouter();

  // Refs for each shape
  const moreRef = useRef(null);
  const insideRef = useRef(null);
  const coverRef = useRef(null);
  const pursuitRef = useRef(null);
  const aboutRef = useRef(null);

  // Container ref for animation scope
  const containerRef = useRef(null);

  const handleClick = (path, shapeName) => {
    if (shapeName === "green" || shapeName === "blue" || shapeName === "gray") {
      const targetRef =
        shapeName === "green"
          ? insideRef.current
          : shapeName === "blue"
          ? pursuitRef.current
          : aboutRef.current;
      const tl = gsap.timeline({
        onComplete: () => router.push(path),
      });

      // Fade out other divs quickly
      tl.to(
        [
          moreRef.current,
          coverRef.current,
          shapeName === "green" ? pursuitRef.current : insideRef.current,
          shapeName === "blue" ? aboutRef.current : pursuitRef.current,
          shapeName === "gray" ? null : aboutRef.current,
        ].filter(Boolean),
        {
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
        }
      )
        // Expand target div to fill the entire viewport
        .to(targetRef, {
          width: "100vw",
          height: "100vh",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: 0,
          duration: 0.8,
          ease: "power3.inOut",
        })
        // Fade out target div
        .to(
          targetRef,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "-=0.3"
        );
    } else {
      router.push(path);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    gsap.set(
      [
        moreRef.current,
        insideRef.current,
        coverRef.current,
        pursuitRef.current,
        aboutRef.current,
      ],
      { opacity: 0 }
    );

    tl.fromTo(moreRef.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        insideRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        pursuitRef.current,
        { y: 100, x: 0, opacity: 0 },
        { y: 0, x: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        coverRef.current,
        { y: 100, x: 100, opacity: 0 },
        { y: 0, x: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        aboutRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      );

    const textElements = containerRef.current?.querySelectorAll("h1");
    if (textElements) {
      tl.fromTo(
        textElements,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center p-4 font-robotoCondensed font-bold"
      ref={containerRef}
    >
      <div className="relative w-full max-w-4xl aspect-[2/1]">
        {[
          {
            name: "green",
            color: "#4CAF50",
            ref: insideRef,
            path: "/green",
            width: "31%",
            height: "50%",
            left: "25%",
            top: "0%",
          },
          {
            name: "yellow",
            color: "#FFD700",
            ref: moreRef,
            path: "/yellow",
            width: "21%",
            height: "50%",
            left: "3%",
            top: "0%",
          },
          {
            name: "black",
            color: "#000000",
            ref: coverRef,
            path: "/black",
            width: "40%",
            height: "100%",
            left: "57%",
            top: "0%",
          },
          {
            name: "blue",
            color: "#FD5C63",
            ref: pursuitRef,
            path: "/blue",
            width: "41%",
            height: "48%",
            left: "3%",
            top: "52%",
          },
          {
            name: "gray",
            color: "#7CB9E8",
            ref: aboutRef,
            path: "/gray",
            width: "11%",
            height: "48%",
            left: "45%",
            top: "52%",
          },
        ].map((shape) => (
          <div
            key={shape.name}
            ref={shape.ref}
            className="absolute flex items-center justify-center cursor-pointer"
            style={{
              backgroundColor: shape.color,
              borderRadius: "24px",
              width: shape.width,
              height: shape.height,
              left: shape.left,
              top: shape.top,
            }}
            onClick={() => handleClick(shape.path, shape.name)}
          >
            {shape.name === "green" && (
              <div className="flex flex-col items-center justify-center w-full h-full px-4">
                <h1
                  className="text-white font-bold text-center tracking-wider leading-tight w-full"
                  style={{
                    fontSize: "clamp(1rem, 10vw, 4.2rem)",
                    lineHeight: "1",
                  }}
                >
                  INSIDE
                </h1>
                <h1
                  className="text-white font-bold text-center tracking-wider leading-tight w-full"
                  style={{
                    fontSize: "clamp(1rem, 10vw, 3.2rem)",
                    lineHeight: "1",
                  }}
                >
                  MY MIND
                </h1>
              </div>
            )}
            {shape.name === "yellow" && (
              <div className="flex items-center justify-center w-full h-full">
                <h1
                  className="text-black font-bold text-center tracking-wider leading-tight"
                  style={{
                    fontSize: "clamp(1rem, 8vw, 2.5rem)",
                    transform: "rotate(-90deg)",
                    transformOrigin: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  MORE
                </h1>
              </div>
            )}
            {shape.name === "black" && (
              <h1 className="text-white text-3xl font-bold text-center tracking-wider leading-tight">
                [With cover image]
              </h1>
            )}
            {shape.name === "blue" && (
              <div className="flex flex-col items-center justify-center w-full h-full px-4">
                <h1
                  className="text-white font-bold text-center tracking-wider leading-tight w-full"
                  style={{
                    fontSize: "clamp(1rem, 10vw, 3.4rem)",
                    lineHeight: "1",
                  }}
                >
                  PURSUIT OF
                </h1>
                <h1
                  className="text-white font-bold text-center tracking-wider leading-tight w-full"
                  style={{
                    fontSize: "clamp(1rem, 10vw, 3.3rem)",
                    lineHeight: "1",
                  }}
                >
                  KNOWLEDGE
                </h1>
              </div>
            )}
            {shape.name === "gray" && (
              <div className="flex items-center justify-center w-full h-full">
                <h1
                  className="text-white font-bold text-center tracking-wider leading-tight"
                  style={{
                    fontSize: "clamp(1rem, 8vw, 2.5rem)",
                    transform: "rotate(-90deg)",
                    transformOrigin: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  ABOUT
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

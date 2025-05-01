// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// const layouts = [0, 1, 2, 3] as const;
// type Layout = (typeof layouts)[number];

// export default function HomeBentoGrid() {
//   const [layout, setLayout] = useState<Layout>(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isGreenHovered, setIsGreenHovered] = useState(false);
//   const [isYellowHovered, setIsYellowHovered] = useState(false);
//   const [isBlackHovered, setIsBlackHovered] = useState(false);
//   const [isBlueHovered, setIsBlueHovered] = useState(false);
//   const [isGrayHovered, setIsGrayHovered] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (!isHovered) {
//       interval = setInterval(() => {
//         setLayout((prev) => {
//           let next = layouts[Math.floor(Math.random() * layouts.length)];
//           while (next === prev) {
//             next = layouts[Math.floor(Math.random() * layouts.length)];
//           }
//           return next;
//         });
//       }, 3000);
//     }

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   const handleClick = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4">
//       <div className="relative w-full max-w-4xl aspect-[2/1]">
//         {/* Green shape 1 */}
//         <motion.div
//           className="absolute bg-[#7AB555] flex items-center justify-center cursor-pointer"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             borderRadius:
//               layout === 0
//                 ? "0px"
//                 : layout === 1
//                 ? "24px"
//                 : layout === 2
//                 ? "0"
//                 : "999px",
//             width:
//               layout === 0
//                 ? "20%"
//                 : layout === 1
//                 ? "21%"
//                 : layout === 2
//                 ? "10%"
//                 : "10%",
//             height:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "50%"
//                 : layout === 2
//                 ? "80%"
//                 : "70%",
//             left:
//               layout === 0
//                 ? "0%"
//                 : layout === 1
//                 ? "3%"
//                 : layout === 2
//                 ? "10%"
//                 : "10%",
//             top:
//               layout === 0
//                 ? "0%"
//                 : layout === 1
//                 ? "0%"
//                 : layout === 2
//                 ? "20%"
//                 : "40%",
//           }}
//           transition={{ duration: 1 }}
//           whileHover={{ opacity: 0.85 }}
//           onHoverStart={() => {
//             setIsHovered(true);
//             setIsGreenHovered(true);
//           }}
//           onHoverEnd={() => {
//             setIsHovered(false);
//             setIsGreenHovered(false);
//           }}
//           onClick={() => handleClick("/green")}
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 10, rotate: 0 }}
//             animate={{
//               opacity: isGreenHovered ? 1 : 0,
//               y: isGreenHovered ? 0 : 10,
//               rotate: isGreenHovered ? -90 : -90,
//             }}
//             transition={{ duration: 0.5 }}
//             className="text-white text-2xl font-bold text-center"
//           >
//             [Others]
//           </motion.h1>
//         </motion.div>

//         {/* Yellow shape */}
//         <motion.div
//           className="absolute bg-[#FFD700] flex items-center justify-center cursor-pointer"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             borderRadius:
//               layout === 0
//                 ? "0px"
//                 : layout === 1
//                 ? "24px"
//                 : layout === 2
//                 ? "0"
//                 : "999px",
//             width:
//               layout === 0
//                 ? "30%"
//                 : layout === 1
//                 ? "31%"
//                 : layout === 2
//                 ? "15%"
//                 : "20%",
//             height:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "50%"
//                 : layout === 2
//                 ? "80%"
//                 : "70%",
//             left:
//               layout === 0
//                 ? "20%"
//                 : layout === 1
//                 ? "25%"
//                 : layout === 2
//                 ? "22%"
//                 : "22%",
//             top:
//               layout === 0
//                 ? "0%"
//                 : layout === 1
//                 ? "0%"
//                 : layout === 2
//                 ? "0%"
//                 : "30%",
//           }}
//           transition={{ duration: 1 }}
//           whileHover={{ opacity: 0.85 }}
//           onHoverStart={() => {
//             setIsHovered(true);
//             setIsYellowHovered(true);
//           }}
//           onHoverEnd={() => {
//             setIsHovered(false);
//             setIsYellowHovered(false);
//           }}
//           onClick={() => handleClick("/yellow")}
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{
//               opacity: isYellowHovered ? 1 : 0,
//               y: isYellowHovered ? 0 : 10,
//             }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold text-center"
//           >
//             Hover Text
//           </motion.h1>
//         </motion.div>

//         {/* Black shape */}
//         <motion.div
//           className="absolute bg-black flex items-center justify-center cursor-pointer"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             borderRadius:
//               layout === 0
//                 ? "0px"
//                 : layout === 1
//                 ? "24px"
//                 : layout === 2
//                 ? "0"
//                 : "999px",
//             width:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "40%"
//                 : layout === 2
//                 ? "30%"
//                 : "46%",
//             height:
//               layout === 0
//                 ? "100%"
//                 : layout === 1
//                 ? "100%"
//                 : layout === 2
//                 ? "80%"
//                 : "70%",
//             left:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "57%"
//                 : layout === 2
//                 ? "39%"
//                 : "44%",
//             top:
//               layout === 0
//                 ? "0%"
//                 : layout === 1
//                 ? "0%"
//                 : layout === 2
//                 ? "30%"
//                 : "5%",
//           }}
//           transition={{ duration: 1 }}
//           whileHover={{ opacity: 0.85 }}
//           onHoverStart={() => {
//             setIsHovered(true);
//             setIsBlackHovered(true);
//           }}
//           onHoverEnd={() => {
//             setIsHovered(false);
//             setIsBlackHovered(false);
//           }}
//           onClick={() => handleClick("/black")}
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{
//               opacity: isBlackHovered ? 1 : 0,
//               y: isBlackHovered ? 0 : 10,
//             }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold text-white text-center"
//           >
//             Hover Text
//           </motion.h1>
//         </motion.div>

//         {/* Blue shape */}
//         <motion.div
//           className="absolute bg-[#87CEEB] flex items-center justify-center cursor-pointer"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             borderRadius:
//               layout === 0
//                 ? "0px"
//                 : layout === 1
//                 ? "24px"
//                 : layout === 2
//                 ? "0"
//                 : "999px",
//             width:
//               layout === 0
//                 ? "40%"
//                 : layout === 1
//                 ? "41%"
//                 : layout === 2
//                 ? "10%"
//                 : "30%",
//             height:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "48%"
//                 : layout === 2
//                 ? "80%"
//                 : "70%",
//             left:
//               layout === 0
//                 ? "0%"
//                 : layout === 1
//                 ? "3%"
//                 : layout === 2
//                 ? "71%"
//                 : "60%",
//             top:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "52%"
//                 : layout === 2
//                 ? "50%"
//                 : "60%",
//           }}
//           transition={{ duration: 1 }}
//           whileHover={{ opacity: 0.85 }}
//           onHoverStart={() => {
//             setIsHovered(true);
//             setIsBlueHovered(true);
//           }}
//           onHoverEnd={() => {
//             setIsHovered(false);
//             setIsBlueHovered(false);
//           }}
//           onClick={() => handleClick("/blue")}
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{
//               opacity: isBlueHovered ? 1 : 0,
//               y: isBlueHovered ? 0 : 10,
//             }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold text-center"
//           >
//             [POK]
//           </motion.h1>
//         </motion.div>

//         {/* Gray shape */}
//         <motion.div
//           className="absolute bg-[#808080] flex items-center justify-center cursor-pointer"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             borderRadius:
//               layout === 0
//                 ? "0px"
//                 : layout === 1
//                 ? "24px"
//                 : layout === 2
//                 ? "0"
//                 : "999px",
//             width:
//               layout === 0
//                 ? "10%"
//                 : layout === 1
//                 ? "11%"
//                 : layout === 2
//                 ? "7%"
//                 : "10%",
//             height:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "48%"
//                 : layout === 2
//                 ? "80%"
//                 : "70%",
//             left:
//               layout === 0
//                 ? "40%"
//                 : layout === 1
//                 ? "45%"
//                 : layout === 2
//                 ? "83%"
//                 : "40%",
//             top:
//               layout === 0
//                 ? "50%"
//                 : layout === 1
//                 ? "52%"
//                 : layout === 2
//                 ? "8%"
//                 : "-20%",
//           }}
//           transition={{ duration: 1 }}
//           whileHover={{ opacity: 0.85 }}
//           onHoverStart={() => {
//             setIsHovered(true);
//             setIsGrayHovered(true);
//           }}
//           onHoverEnd={() => {
//             setIsHovered(false);
//             setIsGrayHovered(false);
//           }}
//           onClick={() => handleClick("/gray")}
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 10, rotate: 0 }}
//             animate={{
//               opacity: isGrayHovered ? 1 : 0,
//               y: isGrayHovered ? 0 : 10,
//               rotate: isGrayHovered ? -90 : -90,
//             }}
//             transition={{ duration: 0.5 }}
//             className="text-white text-2xl font-bold text-center"
//           >
//             [EMAIL]
//           </motion.h1>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const layouts = [0, 1, 2, 3];

function HomeBentoGrid() {
  const [layout, setLayout] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isGreenHovered, setIsGreenHovered] = useState(false);
  const [isYellowHovered, setIsYellowHovered] = useState(false);
  const [isBlackHovered, setIsBlackHovered] = useState(false);
  const [isBlueHovered, setIsBlueHovered] = useState(false);
  const [isGrayHovered, setIsGrayHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setLayout((prev) => {
          let next = layouts[Math.floor(Math.random() * layouts.length)];
          while (next === prev) {
            next = layouts[Math.floor(Math.random() * layouts.length)];
          }
          return 1;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-[2/1]">
        {/* Green shape 1 */}
        <motion.div
          className="absolute bg-[#7AB555] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, left: "3%", top: "0%" }}
          animate={{
            opacity: 1,
            borderRadius: "24px",
            width: "21%",
            height: "50%",
            left: "3%",
            top: "0%",
          }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 0.85 }}
          onHoverStart={() => {
            setIsHovered(true);
            setIsGreenHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
            setIsGreenHovered(false);
          }}
          onClick={() => handleClick("/green")}
        >
          <motion.h1
            initial={{ opacity: 1, y: 10, rotate: -90 }}
            animate={{
              opacity: isGreenHovered ? 1 : 1,
              y: isGreenHovered ? 0 : 10,
              rotate: isGreenHovered ? -90 : -90,
            }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl font-bold text-center"
          >
            [Others]
          </motion.h1>
        </motion.div>

        {/* Yellow shape */}
        <motion.div
          className="absolute bg-[#FFD700] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, left: "25%", top: "0%" }}
          animate={{
            opacity: 1,
            borderRadius: "24px",
            width: "31%",
            height: "50%",
            left: "25%",
            top: "0%",
          }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 0.85 }}
          onHoverStart={() => {
            setIsHovered(true);
            setIsYellowHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
            setIsYellowHovered(false);
          }}
          onClick={() => handleClick("/yellow")}
        >
          <motion.h1
            initial={{ opacity: 1, y: 10 }}
            animate={{
              opacity: isYellowHovered ? 1 : 1,
              y: isYellowHovered ? 0 : 10,
            }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center"
          >
            Hover Text
          </motion.h1>
        </motion.div>

        {/* Black shape */}
        <motion.div
          className="absolute bg-black flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, left: "57%", top: "0%" }}
          animate={{
            opacity: 1,
            borderRadius: "24px",
            width: "40%",
            height: "100%",
            left: "57%",
            top: "0%",
          }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 0.85 }}
          onHoverStart={() => {
            setIsHovered(true);
            setIsBlackHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
            setIsBlackHovered(false);
          }}
          onClick={() => handleClick("/black")}
        >
          <motion.h1
            initial={{ opacity: 1, y: 10 }}
            animate={{
              opacity: isBlackHovered ? 1 : 1,
              y: isBlackHovered ? 0 : 10,
            }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white text-center"
          >
            Hover Text
          </motion.h1>
        </motion.div>

        {/* Blue shape */}
        <motion.div
          className="absolute bg-[#87CEEB] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, left: "3%", top: "52%" }}
          animate={{
            opacity: 1,
            borderRadius: "24px",
            width: "41%",
            height: "48%",
            left: "3%",
            top: "52%",
          }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 0.85 }}
          onHoverStart={() => {
            setIsHovered(true);
            setIsBlueHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
            setIsBlueHovered(false);
          }}
          onClick={() => handleClick("/blue")}
        >
          <motion.h1
            initial={{ opacity: 1, y: 10 }}
            animate={{
              opacity: isBlueHovered ? 1 : 1,
              y: isBlueHovered ? 0 : 10,
            }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center"
          >
            [POK]
          </motion.h1>
        </motion.div>

        {/* Gray shape */}
        <motion.div
          className="absolute bg-[#808080] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, left: "45%", top: "52%" }}
          animate={{
            opacity: 1,
            borderRadius: "24px",
            width: "11%",
            height: "48%",
            left: "45%",
            top: "52%",
          }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 0.85 }}
          onHoverStart={() => {
            setIsHovered(true);
            setIsGrayHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
            setIsGrayHovered(false);
          }}
          onClick={() => handleClick("/gray")}
        >
          <motion.h1
            initial={{ opacity: 1, y: 10, rotate: -90 }}
            animate={{
              opacity: isGrayHovered ? 1 : 1,
              y: isGrayHovered ? 0 : 10,
              // rotate: isGrayHovered ? -90 : -90,
            }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl font-bold text-center"
          >
            [EMAIL]
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeBentoGrid;

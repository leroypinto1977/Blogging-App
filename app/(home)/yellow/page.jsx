// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
//       <div className="max-w-md">
//         <img
//           src="/service/bg_yellow.png" // Replace with your preferred construction gif
//           alt="Under Construction"
//           className="mx-auto w-64 h-auto mb-6"
//         />
//       </div>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main
//       className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: 'url("/service/bg_yellow.png")',
//       }}
//     >
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-[#fff4c5]">
      <img
        src="/service/bg_yellow.png"
        alt="Under Construction"
        className="w-4/5 h-auto object-contain"
      />
    </main>
  );
}

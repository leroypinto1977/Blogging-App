// "use client";

// import { useRef, useEffect } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const sections = 5; // Total number of sections

// function IntroSection() {
//   const sectionRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       card1Ref.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     gsap.fromTo(
//       card2Ref.current,
//       { x: 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2'out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-[90%] h-[80vh] mx-auto">
//         <Card
//           ref={card1Ref}
//           className="absolute left-0 top-0 w-[65%] h-[calc(100%-6rem)] p-8 bg-white shadow-xl flex m-4"
//         >
//           <div className="w-full h-full flex flex-col justify-center">
//             <img
//               src="/api/placeholder/500/500"
//               alt="Project"
//               className="max-w-full max-h-[70%] object-contain mx-auto"
//             />
//             <h2 className="text-center text-2xl font-bold mt-4">
//               Project Title
//             </h2>
//           </div>
//         </Card>
//         <Card
//           ref={card2Ref}
//           className="absolute right-0 bottom-0 w-[30%] h-[25%] p-4 bg-white shadow-xl m-4"
//         >
//           <div className="w-full h-full flex items-center justify-center">
//             <p className="text-center text-gray-600">Short Introduction Text</p>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function EducationSection() {
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);
//   const imagesRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     imagesRef.current.forEach((img, index) => {
//       gsap.fromTo(
//         img,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-full h-[90vh] flex items-center justify-center">
//         <Card
//           ref={cardRef}
//           className="relative w-[60%] h-[70%] p-8 bg-white shadow-xl z-10"
//         >
//           <h2 className="text-center text-2xl font-bold mb-8">Education</h2>
//           <div className="space-y-6">
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">Imperial College London</p>
//               <p className="text-gray-600">United Kingdom</p>
//             </div>
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">HEC Paris Summer School</p>
//               <p className="text-gray-600">Paris</p>
//             </div>
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">
//                 Bannari Amman Institute of Technology
//               </p>
//               <p className="text-gray-600">Sathyamangalam, Erode</p>
//             </div>
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">The Indian Public School</p>
//               <p className="text-gray-600">Erode</p>
//             </div>
//           </div>
//         </Card>
//         <div className="absolute w-full h-full pointer-events-none">
//           <div
//             ref={(el) => (imagesRef.current[0] = el)}
//             className="absolute top-[30%] left-[20%] w-[320px] h-[180px] transform -translate-x-1/2 -translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="Imperial College London"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div
//             ref={(el) => (imagesRef.current[1] = el)}
//             className="absolute top-[30%] right-[20%] w-[320px] h-[180px] transform translate-x-1/2 -translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="HEC Paris Summer School"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div
//             ref={(el) => (imagesRef.current[2] = el)}
//             className="absolute bottom-[30%] left-[20%] w-[320px] h-[180px] transform -translate-x-1/2 translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="Bannari Amman Institute of Technology"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div
//             ref={(el) => (imagesRef.current[3] = el)}
//             className="absolute bottom-[30%] right-[20%] w-[320px] h-[180px] transform translate-x-1/2 translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="The Indian Public School"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GallerySection() {
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);
//   const imagesRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     imagesRef.current.forEach((img, index) => {
//       gsap.fromTo(
//         img,
//         { scale: 0.9, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.1,
//           ease: "powered.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-full h-[90vh]">
//         <Card
//           ref={cardRef}
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] p-8 bg-white shadow-xl"
//         >
//           <h2 className="text-center text-2xl font-bold mb-8">
//             Experience & Projects
//           </h2>
//           <div className="grid grid-cols-3 gap-6 h-[calc(100%-4rem)] overflow-y-auto">
//             {[
//               { src: "/api/placeholder/200/200", alt: "Project 1" },
//               { src: "/api/placeholder/200/200", alt: "Project 2" },
//               { src: "/api/placeholder/200/200", alt: "Project 3" },
//               { src: "/api/placeholder/200/200", alt: "Project 4" },
//               { src: "/api/placeholder/200/200", alt: "Project 5" },
//               { src: "/api/placeholder/200/200", alt: "Project 6" },
//             ].map((img, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (imagesRef.current[index] = el)}
//                 className="aspect-square overflow-hidden rounded-lg shadow-md"
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
//                 />
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function GoalsSection() {
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     itemsRef.current.forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { x: 50, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-full h-[90vh]">
//         <Card
//           ref={cardRef}
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] p-8 bg-white shadow-xl"
//         >
//           <h2 className="text-center text-3xl font-bold mb-8">Goals</h2>
//           <ul className="space-y-4 max-w-2xl mx-auto">
//             {[
//               "Become a leader in digital product design",
//               "Create interfaces that positively impact users' lives",
//               "Collaborate with innovative teams on groundbreaking projects",
//               "Mentor the next generation of UX/UI designers",
//               "Build a sustainable design practice focused on accessibility",
//             ].map((point, index) => (
//               <li
//                 key={index}
//                 ref={(el) => (itemsRef.current[index] = el)}
//                 className="flex items-start"
//               >
//                 <span className="inline-block w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3"></span>
//                 <span className="text-lg">{point}</span>
//               </li>
//             ))}
//           </ul>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function ContactSection() {
//   const sectionRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       card1Ref.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     [card2Ref, card3Ref].forEach((ref, index) => {
//       gsap.fromTo(
//         ref.current,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-[90%] h-[80%] flex gap-8">
//         <Card ref={card1Ref} className="w-1/2 h-full p-8 bg-white shadow-xl">
//           <div className="h-full flex flex-col justify-center">
//             <h2 className="text-2xl font-bold mb-4">Join My Newsletter</h2>
//             <p className="text-gray-600 mb-8">
//               Get updates on my latest projects and design insights
//             </p>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Your name" className="mt-1" />
//               </div>
//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Your email address"
//                   className="mt-1"
//                 />
//               </div>
//               <Button className="w-full mt-4">Subscribe</Button>
//             </div>
//           </div>
//         </Card>
//         <div className="w-1/2 h-full flex flex-col gap-6">
//           {[
//             {
//               image: "/api/placeholder/320/180",
//               title: "Follow My Design Blog",
//               description: "Weekly articles on UX/UI trends",
//             },
//             {
//               image: "/api/placeholder/320/180",
//               title: "Check My Latest Project",
//               description: "A case study on designing for accessibility",
//             },
//           ].map((card, index) => (
//             <Card
//               key={index}
//               ref={index === 0 ? card2Ref : card3Ref}
//               className="w-full h-1/2 overflow-hidden shadow-xl"
//             >
//               <div className="relative h-full w-full">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
//                   <h3 className="font-bold text-lg">{card.title}</h3>
//                   <p className="text-gray-600">{card.description}</p>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function PortfolioPage() {
//   const containerRef = useRef(null);
//   const panelsRef = useRef(null);

//   useEffect(() => {
//     const panels = panelsRef.current;
//     const totalPanels = sections;

//     // Set up horizontal scrolling animation
//     gsap.to(panels, {
//       x: () => -(panels.scrollWidth - window.innerWidth),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: () => `+=${panels.scrollWidth - window.innerWidth}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         snap: {
//           snapTo: 1 / (totalPanels - 1),
//           duration: { min: 0.2, max: 0.4 },
//           ease: "power1.inOut",
//         },
//       },
//     });

//     // Enable smooth scrolling (basic implementation without ScrollSmoother)
//     document.body.style.overflow = "auto";
//     window.scrollTo(0, 0);

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="h-[100vh] overflow-y-auto bg-blue-50">
//       <div
//         ref={panelsRef}
//         className="flex h-screen w-[500vw] flex-nowrap"
//         style={{ willChange: "transform" }}
//       >
//         <IntroSection />
//         <EducationSection />
//         <GallerySection />
//         <GoalsSection />
//         <ContactSection />
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const sections = 5; // Total number of sections

// function IntroSection() {
//   const sectionRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       card1Ref.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     gsap.fromTo(
//       card2Ref.current,
//       { x: 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2'out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-[90%] h-[80vh] mx-auto">
//         <Card
//           ref={card1Ref}
//           className="absolute left-0 top-0 w-[65%] h-[calc(100%-6rem)] p-8 bg-white shadow-xl flex m-4"
//         >
//           <div className="w-full h-full flex flex-col justify-center">
//             <img
//               src="/api/placeholder/500/500"
//               alt="Project"
//               className="max-w-full max-h-[70%] object-contain mx-auto"
//             />
//             <h2 className="text-center text-2xl font-bold mt-4">
//               Project Title
//             </h2>
//           </div>
//         </Card>
//         <Card
//           ref={card2Ref}
//           className="absolute right-0 bottom-0 w-[30%] h-[25%] p-4 bg-white shadow-xl m-4"
//         >
//           <div className="w-full h-full flex items-center justify-center">
//             <p className="text-center text-gray-600">Short Introduction Text</p>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function EducationSection() {
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);
//   const imagesRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     imagesRef.current.forEach((img, index) => {
//       gsap.fromTo(
//         img,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-full h-[90vh] flex items-center justify-center">
//         <Card
//           ref={cardRef}
//           className="relative w-[60%] h-[70%] p-8 bg-white shadow-xl z-10"
//         >
//           <h2 className="text-center text-2xl font-bold mb-8">Education</h2>
//           <div className="space-y-6">
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">Imperial College London</p>
//               <p className="text-gray-600">United Kingdom</p>
//             </div>
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">HEC Paris Summer School</p>
//               <p className="text-gray-600">Paris</p>
//             </div>
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">
//                 Bannari Amman Institute of Technology
//               </p>
//               <p className="text-gray-600">Sathyamangalam, Erode</p>
//             </div>
//             <div className="text-center py-2">
//               <p className="font-semibold text-lg">The Indian Public School</p>
//               <p className="text-gray-600">Erode</p>
//             </div>
//           </div>
//         </Card>
//         <div className="absolute w-full h-full pointer-events-none">
//           <div
//             ref={(el) => (imagesRef.current[0] = el)}
//             className="absolute top-[30%] left-[20%] w-[320px] h-[180px] transform -translate-x-1/2 -translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="Imperial College London"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div
//             ref={(el) => (imagesRef.current[1] = el)}
//             className="absolute top-[30%] right-[20%] w-[320px] h-[180px] transform translate-x-1/2 -translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="HEC Paris Summer School"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div
//             ref={(el) => (imagesRef.current[2] = el)}
//             className="absolute bottom-[30%] left-[20%] w-[320px] h-[180px] transform -translate-x-1/2 translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="Bannari Amman Institute of Technology"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//           <div
//             ref={(el) => (imagesRef.current[3] = el)}
//             className="absolute bottom-[30%] right-[20%] w-[320px] h-[180px] transform translate-x-1/2 translate-y-1/2"
//           >
//             <img
//               src="/api/placeholder/320/180"
//               alt="The Indian Public School"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GallerySection() {
//   const sectionRef = useRef(null);
//   const [parent] = useAutoAnimate();
//   const [carouselApi, setCarouselApi] = useState(null); // Changed from useRef to useState
//   const [active, setActive] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       name: "Smart City Dashboard",
//       designation: "UI/UX Design",
//       description:
//         "Designed an intuitive dashboard for city administrators to monitor real-time data on traffic, utilities, and public services, enhancing urban management efficiency.",
//       src: "/api/placeholder/400/320",
//     },
//     {
//       name: "HealthSync App",
//       designation: "Mobile App Design",
//       description:
//         "Created a user-friendly mobile application that connects patients with healthcare providers, featuring appointment scheduling and health record management.",
//       src: "/api/placeholder/400/320",
//     },
//     {
//       name: "EcoTrack Platform",
//       designation: "Web Application",
//       description:
//         "Developed a web platform to help businesses track their carbon footprint and adopt sustainable practices, with interactive data visualizations.",
//       src: "/api/placeholder/400/320",
//     },
//     {
//       name: "EduLearn Portal",
//       designation: "E-Learning Interface",
//       description:
//         "Designed an engaging e-learning portal for students, featuring gamified learning modules and progress tracking for enhanced educational outcomes.",
//       src: "/api/placeholder/400/320",
//     },
//     {
//       name: "FitBuddy Wearable",
//       designation: "Wearable UI",
//       description:
//         "Crafted an intuitive interface for a fitness wearable, allowing users to monitor their activity, set goals, and receive personalized workout recommendations.",
//       src: "/api/placeholder/400/320",
//     },
//   ];

//   useEffect(() => {
//     if (carouselApi) {
//       carouselApi.scrollTo(active);

//       const onSelect = () => {
//         setActive(carouselApi.selectedScrollSnap());
//       };

//       carouselApi.on("select", onSelect);

//       return () => {
//         carouselApi.off("select", onSelect);
//       };
//     }
//   }, [carouselApi]);

//   useEffect(() => {
//     if (carouselApi) {
//       carouselApi.scrollTo(active);
//     }
//   }, [active, carouselApi]);

//   const handleNext = () => {
//     if (carouselApi) {
//       carouselApi.scrollNext();
//     } else {
//       setActive((prev) => (prev + 1) % projects.length);
//     }
//   };

//   const handlePrev = () => {
//     if (carouselApi) {
//       carouselApi.scrollPrev();
//     } else {
//       setActive((prev) => (prev - 1 + projects.length) % projects.length);
//     }
//   };

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProject(null);
//   };

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-full h-[90vh] flex items-center justify-center">
//         <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-bold px-4 md:px-8 lg:px-12 py-16">
//           <h2 className="text-center text-2xl font-bold mb-8">
//             Experience & Projects
//           </h2>
//           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
//             <div>
//               <Carousel
//                 className="w-full"
//                 setApi={setCarouselApi}
//                 opts={{
//                   loop: true,
//                   align: "start",
//                 }}
//               >
//                 <CarouselContent>
//                   {projects.map((project, index) => (
//                     <CarouselItem key={project.src}>
//                       <div className="p-1">
//                         <Card className="border-0 shadow-lg">
//                           <CardContent className="flex items-center justify-center p-0">
//                             <Image
//                               src={project.src}
//                               alt={project.name}
//                               width={500}
//                               height={500}
//                               draggable={false}
//                               className="h-80 w-full rounded-3xl object-cover object-center bg-white p-6 cursor-pointer"
//                               onClick={() => openModal(project)}
//                             />
//                           </CardContent>
//                         </Card>
//                       </div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//               </Carousel>
//             </div>

//             <div className="flex justify-between flex-col py-4" ref={parent}>
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active}
//                   initial={{
//                     y: 20,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     y: 0,
//                     opacity: 1,
//                   }}
//                   exit={{
//                     y: -20,
//                     opacity: 0,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <h3
//                     className="text-2xl font-bold text-black cursor-pointer"
//                     onClick={() => openModal(projects[active])}
//                   >
//                     {projects[active].name}
//                   </h3>
//                   <p className="text-sm text-gray-500 dark:text-neutral-500">
//                     {projects[active].designation}
//                   </p>
//                   <motion.p className="text-lg max-w-2xl text-neutral-800 my-8">
//                     {projects[active].description
//                       .split(" ")
//                       .map((word, index) => (
//                         <motion.span
//                           key={index}
//                           initial={{
//                             filter: "blur(10px)",
//                             opacity: 0,
//                             y: 5,
//                           }}
//                           animate={{
//                             filter: "blur(0px)",
//                             opacity: 1,
//                             y: 0,
//                           }}
//                           transition={{
//                             duration: 0.2,
//                             ease: "easeInOut",
//                             delay: 0.02 * index,
//                           }}
//                           className="inline-block"
//                         >
//                           {word}
//                         </motion.span>
//                       ))}
//                   </motion.p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           <div className="flex justify-center gap-4 mt-8">
//             <button
//               onClick={handlePrev}
//               className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
//             >
//               <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-200 group-hover/button:rotate-12 transition-transform duration-300" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
//             >
//               <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-200 group-hover/button:-rotate-12 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>

//         {modalOpen && selectedProject && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg max-w-2xl w-full mx-4 p-6 relative">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               <Image
//                 src={selectedProject.src}
//                 alt={selectedProject.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-64 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
//                 <p className="text-sm text-gray-500">
//                   {selectedProject.designation}
//                 </p>
//                 <p className="text-lg text-neutral-800 mt-4">
//                   {selectedProject.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function GoalsSection() {
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     itemsRef.current.forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { x: 50, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-full h-[90vh]">
//         <Card
//           ref={cardRef}
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] p-8 bg-white shadow-xl"
//         >
//           <h2 className="text-center text-3xl font-bold mb-8">Goals</h2>
//           <ul className="space-y-4 max-w-2xl mx-auto">
//             {[
//               "Become a leader in digital product design",
//               "Create interfaces that positively impact users' lives",
//               "Collaborate with innovative teams on groundbreaking projects",
//               "Mentor the next generation of UX/UI designers",
//               "Build a sustainable design practice focused on accessibility",
//             ].map((point, index) => (
//               <li
//                 key={index}
//                 ref={(el) => (itemsRef.current[index] = el)}
//                 className="flex items-start"
//               >
//                 <span className="inline-block w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3"></span>
//                 <span className="text-lg">{point}</span>
//               </li>
//             ))}
//           </ul>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function ContactSection() {
//   const sectionRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       card1Ref.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     [card2Ref, card3Ref].forEach((ref, index) => {
//       gsap.fromTo(
//         ref.current,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
//     >
//       <div className="relative w-[90%] h-[80%] flex gap-8">
//         <Card ref={card1Ref} className="w-1/2 h-full p-8 bg-white shadow-xl">
//           <div className="h-full flex flex-col justify-center">
//             <h2 className="text-2xl font-bold mb-4">Join My Newsletter</h2>
//             <p className="text-gray-600 mb-8">
//               Get updates on my latest projects and design insights
//             </p>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Your name" className="mt-1" />
//               </div>
//               <div>
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Your email address"
//                   className="mt-1"
//                 />
//               </div>
//               <Button className="w-full mt-4">Subscribe</Button>
//             </div>
//           </div>
//         </Card>
//         <div className="w-1/2 h-full flex flex-col gap-6">
//           {[
//             {
//               image: "/api/placeholder/320/180",
//               title: "Follow My Design Blog",
//               description: "Weekly articles on UX/UI trends",
//             },
//             {
//               image: "/api/placeholder/320/180",
//               title: "Check My Latest Project",
//               description: "A case study on designing for accessibility",
//             },
//           ].map((card, index) => (
//             <Card
//               key={index}
//               ref={index === 0 ? card2Ref : card3Ref}
//               className="w-full h-1/2 overflow-hidden shadow-xl"
//             >
//               <div className="relative h-full w-full">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
//                   <h3 className="font-bold text-lg">{card.title}</h3>
//                   <p className="text-gray-600">{card.description}</p>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function PortfolioPage() {
//   const containerRef = useRef(null);
//   const panelsRef = useRef(null);

//   useEffect(() => {
//     const panels = panelsRef.current;
//     const totalPanels = sections;

//     // Set up horizontal scrolling animation
//     gsap.to(panels, {
//       x: () => -(panels.scrollWidth - window.innerWidth),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: () => `+=${panels.scrollWidth - window.innerWidth}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         snap: {
//           snapTo: 1 / (totalPanels - 1),
//           duration: { min: 0.2, max: 0.4 },
//           ease: "power1.inOut",
//         },
//       },
//     });

//     // Enable smooth scrolling (basic implementation without ScrollSmoother)
//     document.body.style.overflow = "auto";
//     window.scrollTo(0, 0);

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="h-[100vh] overflow-y-auto bg-blue-50">
//       <div
//         ref={panelsRef}
//         className="flex h-screen w-[500vw] flex-nowrap"
//         style={{ willChange: "transform" }}
//       >
//         <IntroSection />
//         <EducationSection />
//         <GallerySection />
//         <GoalsSection />
//         <ContactSection />
//       </div>
//     </div>
//   );
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const sections = 5; // Total number of sections

function IntroSection() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      card1Ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      card2Ref.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2'out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
    >
      <div className="relative w-[90%] h-[80vh] mx-auto">
        <Card
          ref={card1Ref}
          className="absolute left-0 top-0 w-[65%] h-[calc(100%-6rem)] p-8 bg-white shadow-xl flex m-4"
        >
          <div className="w-full h-full flex flex-col justify-center">
            <img
              src="/api/placeholder/500/500"
              alt="Project"
              className="max-w-full max-h-[70%] object-contain mx-auto"
            />
            <h2 className="text-center text-2xl font-bold mt-4">
              Project Title
            </h2>
          </div>
        </Card>
        <Card
          ref={card2Ref}
          className="absolute right-0 bottom-0 w-[30%] h-[25%] p-4 bg-white shadow-xl m-4"
        >
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-center text-gray-600">Short Introduction Text</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function EducationSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
    >
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <Card
          ref={cardRef}
          className="relative w-[60%] h-[70%] p-8 bg-white shadow-xl z-10"
        >
          <h2 className="text-center text-2xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="text-center py-2">
              <p className="font-semibold text-lg">Imperial College London</p>
              <p className="text-gray-600">United Kingdom</p>
            </div>
            <div className="text-center py-2">
              <p className="font-semibold text-lg">HEC Paris Summer School</p>
              <p className="text-gray-600">Paris</p>
            </div>
            <div className="text-center py-2">
              <p className="font-semibold text-lg">
                Bannari Amman Institute of Technology
              </p>
              <p className="text-gray-600">Sathyamangalam, Erode</p>
            </div>
            <div className="text-center py-2">
              <p className="font-semibold text-lg">The Indian Public School</p>
              <p className="text-gray-600">Erode</p>
            </div>
          </div>
        </Card>
        <div className="absolute w-full h-full pointer-events-none">
          <div
            ref={(el) => (imagesRef.current[0] = el)}
            className="absolute top-[30%] left-[20%] w-[320px] h-[180px] transform -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/api/placeholder/320/180"
              alt="Imperial College London"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div
            ref={(el) => (imagesRef.current[1] = el)}
            className="absolute top-[30%] right-[20%] w-[320px] h-[180px] transform translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/api/placeholder/320/180"
              alt="HEC Paris Summer School"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div
            ref={(el) => (imagesRef.current[2] = el)}
            className="absolute bottom-[30%] left-[20%] w-[320px] h-[180px] transform -translate-x-1/2 translate-y-1/2"
          >
            <img
              src="/api/placeholder/320/180"
              alt="Bannari Amman Institute of Technology"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div
            ref={(el) => (imagesRef.current[3] = el)}
            className="absolute bottom-[30%] right-[20%] w-[320px] h-[180px] transform translate-x-1/2 translate-y-1/2"
          >
            <img
              src="/api/placeholder/320/180"
              alt="The Indian Public School"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GallerySection() {
  const sectionRef = useRef(null);
  const [parent] = useAutoAnimate();
  const [carouselApi, setCarouselApi] = useState(null);
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Smart City Dashboard",
      designation: "UI/UX Design",
      description:
        "Designed an intuitive dashboard for city administrators to monitor real-time data on traffic, utilities, and public services, enhancing urban management efficiency.",
      src: "/api/placeholder/400/320",
    },
    {
      name: "HealthSync App",
      designation: "Mobile App Design",
      description:
        "Created a user-friendly mobile application that connects patients with healthcare providers, featuring appointment scheduling and health record management.",
      src: "/api/placeholder/400/320",
    },
    {
      name: "EcoTrack Platform",
      designation: "Web Application",
      description:
        "Developed a web platform to help businesses track their carbon footprint and adopt sustainable practices, with interactive data visualizations.",
      src: "/api/placeholder/400/320",
    },
    {
      name: "EduLearn Portal",
      designation: "E-Learning Interface",
      description:
        "Designed an engaging e-learning portal for students, featuring gamified learning modules and progress tracking for enhanced educational outcomes.",
      src: "/api/placeholder/400/320",
    },
    {
      name: "FitBuddy Wearable",
      designation: "Wearable UI",
      description:
        "Crafted an intuitive interface for a fitness wearable, allowing users to monitor their activity, set goals, and receive personalized workout recommendations.",
      src: "/api/placeholder/400/320",
    },
  ];

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(active);

      const onSelect = () => {
        setActive(carouselApi.selectedScrollSnap());
      };

      carouselApi.on("select", onSelect);

      return () => {
        carouselApi.off("select", onSelect);
      };
    }
  }, [carouselApi]);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(active);
    }
  }, [active, carouselApi]);

  const handleNext = () => {
    if (carouselApi) {
      carouselApi.scrollNext();
    } else {
      setActive((prev) => (prev + 1) % projects.length);
    }
  };

  const handlePrev = () => {
    if (carouselApi) {
      carouselApi.scrollPrev();
    } else {
      setActive((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
    >
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <Card className="max-w-sm md:max-w-4xl mx-auto bg-white shadow-xl p-8">
          <h2 className="text-center text-2xl font-bold mb-8">
            Experience & Projects
          </h2>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <Carousel
                className="w-full"
                setApi={setCarouselApi}
                opts={{
                  loop: true,
                  align: "start",
                }}
              >
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={project.src}>
                      <div className="p-1">
                        <Card className="border-0 shadow-lg">
                          <CardContent className="flex items-center justify-center p-0">
                            <Image
                              src={project.src}
                              alt={project.name}
                              width={500}
                              height={500}
                              draggable={false}
                              className="h-80 w-full rounded-3xl object-cover object-center bg-white p-6 cursor-pointer"
                              onClick={() => openModal(project)}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="flex justify-between flex-col py-4" ref={parent}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -20,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="cursor-pointer"
                  onClick={() => openModal(projects[active])}
                >
                  <h3 className="text-2xl font-bold text-black">
                    {projects[active].name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    {projects[active].designation}
                  </p>
                  <motion.p className="text-lg max-w-2xl text-neutral-800 my-8">
                    {projects[active].description
                      .split(" ")
                      .map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{
                            filter: "blur(10px)",
                            opacity: 0,
                            y: 5,
                          }}
                          animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: 0.02 * index,
                          }}
                          className="inline-block"
                        >
                          {word} 
                        </motion.span>
                      ))}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-200 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-200 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </Card>

        {modalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full mx-4 p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Image
                src={selectedProject.src}
                alt={selectedProject.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
                <p className="text-sm text-gray-500">
                  {selectedProject.designation}
                </p>
                <p className="text-lg text-neutral-800 mt-4">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GoalsSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
    >
      <div className="relative w-full h-[90vh]">
        <Card
          ref={cardRef}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] p-8 bg-white shadow-xl"
        >
          <h2 className="text-center text-3xl font-bold mb-8">Goals</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {[
              "Become a leader in digital product design",
              "Create interfaces that positively impact users' lives",
              "Collaborate with innovative teams on groundbreaking projects",
              "Mentor the next generation of UX/UI designers",
              "Build a sustainable design practice focused on accessibility",
            ].map((point, index) => (
              <li
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="flex items-start"
              >
                <span className="inline-block w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3"></span>
                <span className="text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

function ContactSection() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      card1Ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    [card2Ref, card3Ref].forEach((ref, index) => {
      gsap.fromTo(
        ref.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-screen flex items-center justify-center flex-shrink-0 snap-start"
    >
      <div className="relative w-[90%] h-[80%] flex gap-8">
        <Card ref={card1Ref} className="w-1/2 h-full p-8 bg-white shadow-xl">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Join My Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get updates on my latest projects and design insights
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="mt-1"
                />
              </div>
              <Button className="w-full mt-4">Subscribe</Button>
            </div>
          </div>
        </Card>
        <div className="w-1/2 h-full flex flex-col gap-6">
          {[
            {
              image: "/api/placeholder/320/180",
              title: "Follow My Design Blog",
              description: "Weekly articles on UX/UI trends",
            },
            {
              image: "/api/placeholder/320/180",
              title: "Check My Latest Project",
              description: "A case study on designing for accessibility",
            },
          ].map((card, index) => (
            <Card
              key={index}
              ref={index === 0 ? card2Ref : card3Ref}
              className="w-full h-1/2 overflow-hidden shadow-xl"
            >
              <div className="relative h-full w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const containerRef = useRef(null);
  const panelsRef = useRef(null);

  useEffect(() => {
    const panels = panelsRef.current;
    const totalPanels = sections;

    // Set up horizontal scrolling animation
    gsap.to(panels, {
      x: () => -(panels.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${panels.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (totalPanels - 1),
          duration: { min: 0.2, max: 0.4 },
          ease: "power1.inOut",
        },
      },
    });

    // Enable smooth scrolling (basic implementation without ScrollSmoother)
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[100vh] overflow-y-auto bg-blue-50">
      <div
        ref={panelsRef}
        className="flex h-screen w-[500vw] flex-nowrap"
        style={{ willChange: "transform" }}
      >
        <IntroSection />
        <EducationSection />
        <GallerySection />
        <GoalsSection />
        <ContactSection />
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <main className="h-screen w-screen flex items-center justify-center bg-[#ff8171]">
//       <img
//         src="/service/bg_red3.png"
//         alt="Under Construction"
//         className="w-4/5 h-auto object-contain"
//       />
//     </main>
//   );
// }

// "use client";
// import Image from "next/image";
// import "../../globals.css";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationEllipsis,
// } from "@/components/ui/pagination";
// import { useRouter } from "next/navigation";
// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const BlogSection = ({ currentPage, setCurrentPage, blogData, myBlogsRef }) => {
//   const sectionRef = useRef(null);

//   const itemsPerPage = 12;
//   const totalPages = Math.ceil(blogData.length / itemsPerPage);
//   const paginatedData = blogData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current?.children,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.2,
//         duration: 0.8,
//         ease: "power3.out",
//       }
//     );
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     if (myBlogsRef.current) {
//       myBlogsRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <div
//         ref={sectionRef}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {paginatedData.map((blog) => (
//           <Card key={blog.id} className="border-none shadow-none">
//             <CardContent className="p-0 relative min-h-[200px]">
//               <div className="relative h-full">
//                 <Image
//                   src={blog.image}
//                   alt="Blog image"
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//               <div className="absolute bottom-0 left-0 p-4 w-full">
//                 <p className="text-xs text-black">
//                   {blog.author} · {blog.date}
//                 </p>
//                 <h3 className="text-base font-bold text-black">{blog.title}</h3>
//                 <p className="text-sm text-black mt-1">{blog.description}</p>
//                 <div className="flex mt-2 space-x-2">
//                   <span className="bg-neutral-200 text-neutral-800 px-2 py-1 rounded-sm text-xs">
//                     Interview
//                   </span>
//                   <span className="bg-neutral-200 text-neutral-800 px-2 py-1 rounded-sm text-xs">
//                     Photography
//                   </span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <Pagination>
//           <PaginationContent>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <PaginationItem key={page}>
//                 <PaginationLink
//                   href="#"
//                   isActive={currentPage === page}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handlePageChange(page);
//                   }}
//                 >
//                   {page}
//                 </PaginationLink>
//               </PaginationItem>
//             ))}
//             {totalPages > 5 && (
//               <PaginationItem>
//                 <PaginationEllipsis />
//               </PaginationItem>
//             )}
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </>
//   );
// };

// export default function InterviewPage() {
//   const router = useRouter();
//   const [currentPage, setCurrentPage] = useState(1);
//   const myBlogsRef = useRef(null);

//   const blogData = Array.from({ length: 25 }, (_, index) => ({
//     id: index + 1,
//     author: "Varsha Gopisankar",
//     date: `Mar ${8 + (index % 20)}, 2025`,
//     title: `Interview with Photographer & UX Designer, Viola LeBlanc`,
//     description:
//       "Viola LeBlanc is a Photographer and UX Designer from New York. She has worked with Spotify, Nike, Chanel, Meta, and Square",
//     image: [
//       "/images/blogs/dummy.png",
//       "/images/blogs/dummy.png",
//       "/images/blogs/dummy.png",
//       "/images/blogs/dummy.png",
//       "/images/blogs/dummy.png",
//       "/images/blogs/dummy.png",
//     ][index % 6],
//   }));

//   return (
//     <div className="container mx-auto px-4 max-w-8xl relative">
//       <header className="py-6 text-center">
//         <h1 className="text-6xl text-black pt-3 font-crustaceans">
//           Varsha Gopisankar
//         </h1>
//       </header>

//       {/* Featured Section */}
//       <section className="my-16">
//         <div className="flex justify-center items-center space-x-8">
//           <div className="bg-neutral-200 w-full h-[70vh] rounded-lg shadow-inner" />
//         </div>
//       </section>

//       {/* My Blogs Section */}
//       <section ref={myBlogsRef} className="mb-12 pt-12">
//         <div className="flex justify-center items-center mb-6">
//           <h2 className="text-xl font-bold">Pursuit Of Knowledge</h2>
//         </div>

//         <BlogSection
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//           blogData={blogData}
//           myBlogsRef={myBlogsRef}
//         />
//       </section>

//       {/* Email Form */}
//       <section className="my-12 bg-slate-200 p-8 rounded-lg flex items-center justify-center">
//         <div className="text-center">
//           <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
//           <p className="mb-4">
//             Get the latest interviews and articles delivered to your inbox
//           </p>
//           <div className="flex max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-grow p-2 rounded-l-md border-0"
//             />
//             <button className="bg-black text-white px-4 py-2 rounded-r-md">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import "../../globals.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = ({ currentPage, setCurrentPage, blogData, myBlogsRef }) => {
  const sectionRef = useRef(null);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const paginatedData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current?.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (myBlogsRef.current) {
      myBlogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {paginatedData.map((blog) => (
          <Card key={blog.id} className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="relative w-full mx-4 h-[300px]">
                <Image
                  src={blog.image}
                  alt="Blog image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-black">
                  {blog.author} · {blog.date}
                </p>
                <h3 className="text-base font-bold text-black mt-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-black mt-1">{blog.description}</p>
                <div className="flex mt-2 space-x-2">
                  <span className="bg-neutral-200 text-neutral-800 px-2 py-1 rounded-sm text-xs">
                    Interview
                  </span>
                  <span className="bg-neutral-200 text-neutral-800 px-2 py-1 rounded-sm text-xs">
                    Photography
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalPages > 5 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default function InterviewPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const myBlogsRef = useRef(null);

  const blogData = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    author: "Varsha Gopisankar",
    date: `Mar ${8 + (index % 20)}, 2025`,
    title: `Interview with Photographer & UX Designer, Viola LeBlanc`,
    description:
      "Viola LeBlanc is a Photographer and UX Designer from New York. She has worked with Spotify, Nike, Chanel, Meta, and Square",
    image: [
      "/images/blogs/dummy.png",
      "/images/blogs/dummy.png",
      "/images/blogs/dummy.png",
      "/images/blogs/dummy.png",
      "/images/blogs/dummy.png",
      "/images/blogs/dummy.png",
    ][index % 6],
  }));

  return (
    <div className="container mx-auto px-4 max-w-8xl relative">
      <header className="py-6 text-center">
        <h1 className="text-6xl text-black pt-3 font-crustaceans">
          Varsha Gopisankar
        </h1>
      </header>

      {/* Featured Section */}
      <section className="my-16">
        <div className="flex justify-center items-center space-x-8">
          <div className="bg-neutral-200 w-full h-[70vh] rounded-lg shadow-inner" />
        </div>
      </section>

      {/* My Blogs Section */}
      <section ref={myBlogsRef} className="mb-12 pt-12 w-full">
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-xl font-bold">Pursuit Of Knowledge</h2>
        </div>

        <BlogSection
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          blogData={blogData}
          myBlogsRef={myBlogsRef}
        />
      </section>

      {/* Email Form */}
      <section className="my-12 bg-slate-200 p-8 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
          <p className="mb-4">
            Get the latest interviews and articles delivered to your inbox
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-2 rounded-l-md border-0"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

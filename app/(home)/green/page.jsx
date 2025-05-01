"use client";
import Image from "next/image";
import "../../globals.css";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { ArrowLeft, Grid, List } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// BlogSection component to handle blog content and animations
const BlogSection = ({
  view,
  currentPage,
  setCurrentPage,
  blogData,
  myBlogsRef,
}) => {
  const sectionRef = useRef(null);

  const itemsPerPage = view === "grid" ? 12 : 10;
  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const paginatedData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    // Slide up animation for the blog section only
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
  }, [view, currentPage]); // Re-run animation when view or page changes

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to the "My Blogs" section
    if (myBlogsRef.current) {
      myBlogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={sectionRef}>
        {view === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedData.map((blog) => (
              <Card key={blog.id}>
                <CardContent className="p-0 relative min-h-[200px]">
                  <div className="relative h-full">
                    <Image
                      src={blog.image}
                      alt="Blog image"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <p className="text-xs text-black">
                      {blog.author} · {blog.date}
                    </p>
                    <h3 className="text-base font-bold text-black">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-black mt-1">
                      {blog.description}
                    </p>
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
        ) : (
          <div className="space-y-6">
            {paginatedData.map((blog) => (
              <Card key={blog.id}>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={blog.image}
                      alt="Blog image"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-black">
                      {blog.author} · {blog.date}
                    </p>
                    <h3 className="text-base font-bold text-black">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-black mt-1">
                      {blog.description}
                    </p>
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
        )}
      </div>

      {/* Pagination */}
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

const CategoriesSection = () => {
  const categoriesRef = useRef(null);
  const folderRefs = useRef([]);

  const categories = [
    {
      name: "Recos",
      image: "/images/folders/folder1.png",
      x: -110,
      y: 70,
      top: -900,
      z: 0,
    },
    {
      name: "Travel",
      image: "/images/folders/folder3.png",
      x: 190,
      y: 120,
      top: -700,
      z: 1,
    },
    {
      name: "Reads",
      image: "/images/folders/folder2.png",
      x: -10,
      y: 160,
      top: -500,
      z: 2,
    },
    {
      name: "travel2",
      image: "/images/folders/folder5.png",
      x: -200,
      y: 210,
      top: -300,
      z: 3,
    },
    {
      name: "Self-reflection",
      image: "/images/folders/folder4.png",
      x: 90,
      y: 230,
      top: -100,
      z: 4,
    },
  ];

  useEffect(() => {
    folderRefs.current.forEach((folder, index) => {
      gsap.set(folder, {
        y: categories[index].y,
        // y: 0,
        x: categories[index].x,
        position: "sticky",
        // top: `${index * 50}px`,
        // top: `-200px`,
        top: categories[index].top,
        zIndex: categories[index].z,
      });

      ScrollTrigger.create({
        trigger: categoriesRef.current,
        start: "top 70%", // Start when section is 80% in view
        end: "bottom 80%", // End before reaching the newsletter section
        onEnter: () => {
          gsap.to(folder, {
            y: categories[index].y,
            duration: 1.8,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(folder, {
            y: categories[index].y, // Return to initial y position
            duration: 1.8,
            ease: "power3.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="my-12 h-[2300px]">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <div ref={categoriesRef} className="relative h-[1000px]">
        {" "}
        {/* Reduced height to limit scroll effect */}
        {categories.map((category, index) => (
          <div
            key={category.name}
            ref={(el) => (folderRefs.current[index] = el)}
            className="absolute bottom-0 left-0 w-full flex justify-center"
            style={{ zIndex: categories.length - index }}
          >
            <div className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full max-w-[500px]"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function InterviewPage() {
  const router = useRouter();
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Refs for animations and scrolling
  const headerLeftRef = useRef(null);
  const headerCenterRef = useRef(null);
  const headerRightRef = useRef(null);
  const backArrowRef = useRef(null);
  const myBlogsRef = useRef(null);

  // Dummy data (25 items)
  const blogData = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    author: "Varsha Gopisankar",
    date: `Mar ${8 + (index % 20)}, 2025`,
    title: `Interview with Photographer & UX Designer, Viola LeBlanc`,
    description:
      "Viola LeBlanc is an Photographer and UX Designer from New York. She has worked with Spotify, Nike, Chanel, Meta, and Square",
    image: [
      "/images/lake-boats.jpg",
      "/images/narrow-alley.jpg",
      "/images/london-street.jpg",
      "/images/vinyl-record.jpg",
      "/images/notebook-stickers.jpg",
      "/images/silhouette-sunset.jpg",
    ][index % 6],
  }));

  useEffect(() => {
    // Header section staggered animation (left -> right -> center)

    gsap.set(
      [headerLeftRef.current, headerCenterRef.current, headerRightRef.current],
      {
        y: 100,
        opacity: 0,
      }
    );

    const tl = gsap.timeline();
    tl.fromTo(
      headerLeftRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        headerRightRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        headerCenterRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    // Back arrow animation
    gsap.set(backArrowRef.current, { x: -50, opacity: 0 });
  }, []); // Run only once on mount

  const handleBackClick = () => {
    const tl = gsap.timeline({
      onComplete: () => router.push("/"),
    });

    tl.to(backArrowRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.5,
    }).to(
      [headerLeftRef.current, headerCenterRef.current, headerRightRef.current],
      {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      },
      "-=0.3"
    );
  };

  return (
    <div className="container mx-auto px-4 max-w-8xl relative">
      {/* Back Arrow */}

      <div
        ref={backArrowRef}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
        style={{ marginLeft: "50px" }}
        onClick={handleBackClick}
      >
        <ArrowLeft className="w-8 h-8 text-black" />
      </div>

      {/* Header Section */}

      <header className="py-6 text-center">
        <h1 className="text-2xl text-black font-script">Varsha Gopisankar</h1>
      </header>

      {/* 1st Section: Hero with three blog posts */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 min-h-[700px]">
        <div ref={headerLeftRef} className="flex flex-col">
          <div className="relative aspect-[3/4]">
            <Image
              src="/images/personal1.png"
              alt="Quaint street view"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="mt-4">
            <span className="text-sm">Interview with</span>
            <h2 className="text-lg font-bold">Jessica Woods</h2>
            <p className="text-xs mt-1">March 22, 2025</p>
          </div>
        </div>

        <div ref={headerCenterRef} className="flex flex-col">
          <div className="relative h-full">
            <Image
              src="/images/personal1.png"
              alt="Mountain sunset view"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-[80%] bg-white p-3 rounded-md">
              <p className="text-xs">Varsha Gopisankar · Mar 8, 2025</p>
              <h2 className="text-xl font-bold">
                Interview with Photographer & UX Designer, Viola LeBlanc
              </h2>
            </div>
          </div>
        </div>

        <div ref={headerRightRef} className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-lg font-bold">The Art of Mindfulness</h2>
            <p className="text-xs mt-1">Varsha Gopisankar · Mar 15, 2025</p>
            <p className="text-sm mt-2">
              Exploring how photography connects us to the present moment
            </p>
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/images/personal1.png"
              alt="Hand holding stones"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 2nd Section: My Blogs */}

      <section ref={myBlogsRef} className="mb-12 pt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Blogs</h2>
          <Tabs
            defaultValue="grid"
            onValueChange={(value) => {
              setView(value);
              setCurrentPage(1);
            }}
          >
            <TabsList>
              <TabsTrigger value="grid" className="flex items-center gap-2">
                <Grid className="w-4 h-4" /> Grid
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <List className="w-4 h-4" /> List
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <BlogSection
          view={view}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          blogData={blogData}
          myBlogsRef={myBlogsRef}
        />
      </section>

      {/* Categories Section with Folder Animation */}
      <CategoriesSection />

      {/* Email Form */}
      <section className="my-12 bg-slate-200 p-8 rounded-lg flex items-center justify-center">
        {" "}
        {/* Increased bottom margin */}
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

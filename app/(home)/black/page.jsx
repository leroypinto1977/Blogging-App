"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function InterviewPage() {
  return (
    <div className="container mx-auto px-4 max-w-8xl">
      {/* Header Section */}
      <header className="py-6 text-center">
        <h1 className="text-2xl text-black font-script">Varsha Gopisankar</h1>
      </header>

      {/* 1st Section: Hero with three blog posts */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 h-screen min-h-[700px]">
        <div className="flex flex-col h-[70vh]">
          <div className="relative flex-1 ">
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

        <div className="relative h-[80vh] md:col-span-1">
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

        <div className="flex flex-col h-[80vh]">
          <div className="h-[10vh]">
            <h1></h1>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">The Art of Mindfulness</h2>
            <p className="text-xs mt-1">Varsha Gopisankar · Mar 15, 2025</p>
            <p className="text-sm mt-2">
              Exploring how photography connects us to the present moment
            </p>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/personal1.png"
              alt="Hand holding stones"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 2nd Section: Interview Grid Layout */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Latest Interviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-full lg:col-span-2">
            <CardContent className="p-0 relative min-h-[200px]">
              <div className="relative h-full">
                <Image
                  src="/images/lake-boats.jpg"
                  alt="Lake with boats"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <p className="text-xs text-black">
                  Varsha Gopisankar · Mar 8, 2025
                </p>
                <h3 className="text-xl font-bold text-black">
                  Interview with Photographer & UX Designer, Viola LeBlanc
                </h3>
                <p className="text-sm text-black mt-1">
                  Viola LeBlanc is an Photographer and UX Designer from New
                  York. She has worked with Spotify, Nike, Chanel, Meta, and
                  Square
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

          <Card>
            <CardContent className="p-0 relative min-h-[200px]">
              <div className="relative h-full">
                <Image
                  src="/images/narrow-alley.jpg"
                  alt="Narrow alley"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs text-black">
                  Varsha Gopisankar · Mar 8, 2025
                </p>
                <h3 className="text-base font-bold text-black">
                  Interview with Photographer & UX Designer, Viola LeBlanc
                </h3>
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

          <Card>
            <CardContent className="p-0 relative min-h-[200px]">
              <div className="relative h-full">
                <Image
                  src="/images/london-street.jpg"
                  alt="London street with red bus"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs text-black">
                  Varsha Gopisankar · Mar 8, 2025
                </p>
                <h3 className="text-base font-bold text-black">
                  Interview with Photographer & UX Designer, Viola LeBlanc
                </h3>
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

          <Card>
            <CardContent className="p-0 relative min-h-[200px]">
              <div className="relative h-full">
                <Image
                  src="/images/vinyl-record.jpg"
                  alt="Vinyl record"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs text-black">
                  Varsha Gopisankar · Mar 8, 2025
                </p>
                <h3 className="text-base font-bold text-black">
                  Interview with Photographer & UX Designer, Viola LeBlanc
                </h3>
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

          <Card>
            <CardContent className="p-0 relative min-h-[200px]">
              <div className="relative h-full">
                <Image
                  src="/images/notebook-stickers.jpg"
                  alt="Notebook with stickers"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs text-black">
                  Varsha Gopisankar · Mar 8, 2025
                </p>
                <h3 className="text-base font-bold text-black">
                  Interview with Photographer & UX Designer, Viola LeBlanc
                </h3>
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

          <Card>
            <CardContent className="p-0 relative min-h-[200px]">
              <div className="relative h-full">
                <Image
                  src="/images/silhouette-sunset.jpg"
                  alt="People silhouette at sunset"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs text-black">
                  Varsha Gopisankar · Mar 8, 2025
                </p>
                <h3 className="text-base font-bold text-black">
                  Interview with Photographer & UX Designer, Viola LeBlanc
                </h3>
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
        </div>
      </section>

      {/* 3rd Section: Pagination */}
      <div className="flex justify-center mb-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* 4th Section: Categories */}
      <section className="my-12">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-lime-200 px-4 py-2 rounded-md">
            <span className="font-medium">Recos</span>
          </div>
          <div className="bg-pink-200 px-4 py-2 rounded-md">
            <span className="font-medium">Reads</span>
          </div>
          <div className="bg-amber-200 px-4 py-2 rounded-md">
            <span className="font-medium">Travel</span>
          </div>
          <div className="bg-red-200 px-4 py-2 rounded-md">
            <span className="font-medium">Self-reflection</span>
          </div>
        </div>
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

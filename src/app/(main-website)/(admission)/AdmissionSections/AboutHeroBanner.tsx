"use client";

import { useEffect, useState } from "react";
// import heroImage1 from "heroimage1.webp";
// import heroImage2 from "heroimage2.webp";
// import heroImage3 from "heroimage3.webp";

import { Label } from "@/components/ui/label";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Mail,
  Pause,
  Phone,
  Play,
  User,
} from "lucide-react";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdmissionBanner } from "@/lib/types/admission";
import Link from "next/link";
import { STRAPI_URL } from "@/app/constant";

type AboutHeroBannerProps = {
  banners: AdmissionBanner[];
};
const AboutHeroBanner = ({ banners }: AboutHeroBannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
  });

  // const banners = [
  //   {
  //     image: "/heroimage1.webp",
  //     title: "Step Into Future",
  //     subtitle: "",
  //     description:
  //       "Empowering young minds with cutting-edge technology and innovation. Shape your career in the digital age with our world-class programs.",
  //     cta1: "Apply Now",
  //     cta2: "Explore Tech Programs",
  //   },
  //   {
  //     image: "/heroimage2.webp",
  //     title: "Excellence in Legal Education",
  //     subtitle: "Future Legal Leaders",
  //     description:
  //       "Build a distinguished career in law with our comprehensive legal education program. Learn from experienced faculty and industry experts.",
  //     cta1: "Apply for Law",
  //     cta2: "Virtual Campus Tour",
  //   },
  //   {
  //     image: "/heroimage3.webp",
  //     title: "Creative Media & Communication",
  //     subtitle: "Digital Storytellers",
  //     description:
  //       "Master the art of digital media, journalism, and communication. Create compelling content and build your personal brand in the media industry.",
  //     cta1: "Join Media School",
  //     cta2: "View Portfolio",
  //   },
  // ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <>
      <div id="home">
        <header className="relative bg-gradient-to-r from-blue-50 to-red-50 overflow-hidden">
          <div className="relative h-[70vh] md:h-[100vh] min-h-[800px] sm:min-h-[500px] md:min-h-[700px]">
            {/* Carousel Container */}
            <div className="absolute inset-0">
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={`${STRAPI_URL}${banner.image.url}`}
                      alt={`${banner.title} - University Banner`}
                      width={1200} // Specify the width
                      height={800} // Specify the height
                      className="w-full h-full object-cover"
                    />
                    {/* Reduced overlay effects for better image visibility */}
                    <div className="absolute inset-0 bg-black/15"></div>
                  </div>

                  {/* Content - Left Text + Right Form Layout */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 w-full">
                      <div className="grid lg:grid-cols-5 gap-8 items-center h-full py-20">
                        {/* Left Side - Text Content (3/5 width on desktop, full width on mobile) */}
                        <div className="col-span-full lg:col-span-3 text-left text-white">
                          <div className="mb-4">
                            <span className="inline-block bg-white/30 backdrop-blur-md rounded-full px-4 py-2 text-sm uppercase tracking-wide shadow-lg">
                              {banner.badge}
                            </span>
                          </div>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-lg font-bold">
                            {banner.title}{" "}
                            <span className="block text-yellow-300 mt-2 drop-shadow-lg">
                              {banner.subtitle}
                            </span>
                          </h1>
                          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100 max-w-2xl drop-shadow-md">
                            {banner.description}
                          </p>
                          <div>
                            {banner.ctas?.map((cta, idx) =>
                              cta.buttonclass || cta.buttonlink ? (
                                <Link
                                  key={idx}
                                  href={cta.buttonlink}
                                  className={`${cta.buttonclass} bg-university-red mr-2.5 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                                >
                                  {cta.buttontext}
                                </Link>
                              ) : null
                            )}

                            {/* <Button
                              size="lg"
                              className="bg-university-red hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                              {banner.cta1}
                            </Button> */}
                          </div>
                        </div>

                        {/* Right Side - Compact Admission Form (2/5 width) - Hidden on Mobile */}
                        <div className="lg:col-span-2 relative hidden lg:block">
                          <Card className="bg-white/95 backdrop-blur-md shadow-2xl border-0 max-w-sm mx-auto">
                            <CardHeader className="text-center pb-3 pt-4 px-4">
                              <CardTitle className="text-lg text-gray-800 mb-1">
                                Get Admission Info
                              </CardTitle>
                              <p className="text-xs text-gray-600">
                                Fill form below for details
                              </p>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                              <form
                                onSubmit={handleSubmit}
                                className="space-y-3"
                              >
                                {/* Name Field */}
                                <div className="space-y-1">
                                  <Label
                                    htmlFor="name"
                                    className="text-xs text-gray-700 flex items-center gap-1"
                                  >
                                    <User className="w-3 h-3" />
                                    Full Name *
                                  </Label>
                                  <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                      handleInputChange("name", e.target.value)
                                    }
                                    required
                                    className="h-8 text-sm border-gray-200 focus:border-university-blue focus:ring-university-blue/20"
                                  />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-1">
                                  <Label
                                    htmlFor="email"
                                    className="text-xs text-gray-700 flex items-center gap-1"
                                  >
                                    <Mail className="w-3 h-3" />
                                    Email *
                                  </Label>
                                  <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={(e) =>
                                      handleInputChange("email", e.target.value)
                                    }
                                    required
                                    className="h-8 text-sm border-gray-200 focus:border-university-blue focus:ring-university-blue/20"
                                  />
                                </div>

                                {/* Phone Field */}
                                <div className="space-y-1">
                                  <Label
                                    htmlFor="phone"
                                    className="text-xs text-gray-700 flex items-center gap-1"
                                  >
                                    <Phone className="w-3 h-3" />
                                    Phone *
                                  </Label>
                                  <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter phone"
                                    value={formData.phone}
                                    onChange={(e) =>
                                      handleInputChange("phone", e.target.value)
                                    }
                                    required
                                    className="h-8 text-sm border-gray-200 focus:border-university-blue focus:ring-university-blue/20"
                                  />
                                </div>

                                {/* Course Interest */}
                                <div className="space-y-1">
                                  <Label
                                    htmlFor="course"
                                    className="text-xs text-gray-700 flex items-center gap-1"
                                  >
                                    <GraduationCap className="w-3 h-3" />
                                    Course Interest
                                  </Label>
                                  <Select
                                    value={formData.course}
                                    onValueChange={(value) =>
                                      handleInputChange("course", value)
                                    }
                                  >
                                    <SelectTrigger className="h-8 text-sm border-gray-200 focus:border-university-blue focus:ring-university-blue/20">
                                      <SelectValue placeholder="Select course" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="engineering">
                                        Engineering
                                      </SelectItem>
                                      <SelectItem value="law">Law</SelectItem>
                                      <SelectItem value="media">
                                        Media
                                      </SelectItem>
                                      <SelectItem value="management">
                                        Management
                                      </SelectItem>
                                      <SelectItem value="commerce">
                                        Commerce
                                      </SelectItem>
                                      <SelectItem value="arts">Arts</SelectItem>
                                      <SelectItem value="other">
                                        Other
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                {/* Qualification */}
                                <div className="space-y-1">
                                  <Label
                                    htmlFor="qualification"
                                    className="text-xs text-gray-700"
                                  >
                                    Qualification
                                  </Label>
                                  <Select
                                    value={formData.qualification}
                                    onValueChange={(value) =>
                                      handleInputChange("qualification", value)
                                    }
                                  >
                                    <SelectTrigger className="h-8 text-sm border-gray-200 focus:border-university-blue focus:ring-university-blue/20">
                                      <SelectValue placeholder="Select qualification" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="12th">
                                        12th Grade
                                      </SelectItem>
                                      <SelectItem value="diploma">
                                        Diploma
                                      </SelectItem>
                                      <SelectItem value="graduate">
                                        Graduate
                                      </SelectItem>
                                      <SelectItem value="postgraduate">
                                        Post Graduate
                                      </SelectItem>
                                      <SelectItem value="other">
                                        Other
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                {/* Submit Button */}
                                <Button
                                  type="submit"
                                  className="w-full bg-university-red hover:bg-red-700 text-white py-2 text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-4"
                                >
                                  Get Info Now
                                </Button>
                              </form>

                              {/* Contact Info */}
                              <div className="mt-3 pt-3 border-t border-gray-200 text-center">
                                <p className="text-xs text-gray-600 mb-1">
                                  Or call directly
                                </p>
                                <p className="text-university-red text-sm">
                                  📞 +91-11-48884888
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-20">
              <button
                onClick={prevSlide}
                className="pointer-events-auto bg-white/30 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto bg-white/30 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Controls - Hidden on Mobile */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
              <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
                {/* Slide Indicators */}
                <div className="flex space-x-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                {/* Auto-play Control */}
                <div className="w-px h-6 bg-white/30"></div>
                <button
                  onClick={toggleAutoPlay}
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
              <div className="w-full h-1 bg-white/20">
                <div
                  className="h-full bg-gradient-to-r from-university-red to-university-blue transition-all duration-300"
                  style={{
                    width: `${((currentSlide + 1) / banners.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default AboutHeroBanner;

import React from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star, ArrowRight } from 'lucide-react';

const SportsCarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      title: "Summer Sports Collection",
      subtitle: "Gear Up for Adventure",
      description: "Discover premium equipment for swimming, tennis, and outdoor activities",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      buttonText: "Shop Summer",
      discount: "Up to 40% OFF",
      bgGradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Basketball Essentials",
      subtitle: "Dominate the Court",
      description: "Professional-grade basketballs, shoes, and training equipment",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
      buttonText: "Shop Basketball",
      discount: "New Arrivals",
      bgGradient: "from-orange-600 to-red-500"
    },
    {
      id: 3,
      title: "Fitness & Training",
      subtitle: "Achieve Your Goals",
      description: "Complete home gym setup with weights, mats, and accessories",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      buttonText: "Shop Fitness",
      discount: "Free Shipping",
      bgGradient: "from-purple-600 to-pink-500"
    },
    {
      id: 4,
      title: "Running Revolution",
      subtitle: "Every Step Counts",
      description: "Professional running shoes, apparel, and tracking devices",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      buttonText: "Shop Running",
      discount: "Limited Time",
      bgGradient: "from-green-600 to-teal-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-gray-950">
      {/* Main Carousel Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-80`}></div>
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <div className="max-w-2xl text-white">
                  {/* Discount Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/10">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold tracking-wide">{slide.discount}</span>
                  </div>

                  {/* Title and Subtitle */}
                  <h1 className="text-5xl lg:text-6xl font-bold mb-3 leading-tight text-white">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl lg:text-2xl font-medium text-gray-100 mb-4">
                    {slide.subtitle}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <button className="group inline-flex items-center gap-3 bg-white text-gray-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                      <ShoppingBag className="w-5 h-5" />
                      {slide.buttonText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button className="inline-flex items-center gap-2 text-white border border-white/40 px-6 py-4 rounded-full font-medium hover:bg-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-white bg-opacity-5 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full blur-xl animate-ping"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/15 bg-opacity-15 backdrop-blur-md hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/10 border-opacity-10 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/10 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear shadow-sm"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black/[0.3] backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium z-20 border border-white/[0.3]">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default SportsCarouselBanner;
import { useState, useEffect } from "react";
import { Heart, Sparkles, Gift, Star, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";
import photo7 from "@/assets/photo7.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const photos = [
    { src: photo1, alt: "Beautiful memories", caption: "Every moment with you is special" },
    { src: photo2, alt: "Special moments", caption: "Making dreams come true" },
    { src: photo3, alt: "Hollywood dreams", caption: "Chasing stars together" },
    { src: photo4, alt: "Sunset vibes", caption: "Golden hour magic" },
    { src: photo5, alt: "Golden hour", caption: "Sunset dreams" },
    { src: photo6, alt: "Evening glow", caption: "Beautiful evenings" },
    { src: photo7, alt: "Perfect night", caption: "Unforgettable memories" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Heart className="text-primary/10 animate-float w-4 h-4 md:w-6 md:h-6" />
              ) : i % 3 === 1 ? (
                <Star className="text-accent/10 animate-float w-3 h-3 md:w-5 md:h-5" />
              ) : (
                <Flower2 className="text-primary/10 animate-float w-5 h-5 md:w-7 md:h-7" />
              )}
            </div>
          ))}
        </div>

        <div className={`text-center z-10 max-w-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Decorative Top */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-bounce-slow" />
            <Gift className="w-10 h-10 md:w-14 md:h-14 text-accent animate-pulse-glow" />
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-bounce-slow" style={{ animationDelay: "0.5s" }} />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Happy
            </span>
            <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]" style={{ animationDelay: "0.5s" }}>
              Birthday!
            </span>
          </h1>
          
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20"></div>
            </div>
            <div className="relative flex justify-center">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary bg-background px-2 animate-pulse-glow" />
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-light px-4">
            To the most amazing soul
          </p>
          
          <div className="bg-primary/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-primary/10 shadow-lg">
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
              May your special day be filled with endless joy, beautiful surprises, and all the love you deserve ✨
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1.5 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story-Style Gallery Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-foreground">
              Beautiful Moments
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <Flower2 className="w-5 h-5 text-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
          
          {/* Mobile-First Story Cards */}
          <div className="space-y-8">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-card rounded-3xl overflow-hidden shadow-xl border border-primary/10"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Hearts on Hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Heart className="w-6 h-6 text-white fill-white animate-pulse-glow" />
                  </div>
                </div>
                
                {/* Caption Card */}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Memory #{index + 1}</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    {photo.caption}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 gap-2 text-primary hover:text-primary hover:bg-primary/10"
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">Love it</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 gap-2 text-accent hover:text-accent hover:bg-accent/10"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm">Amazing</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Message Card */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-lg mx-auto">
          <div className="bg-card/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-primary/20 relative overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-full"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Gift className="w-16 h-16 text-primary animate-bounce-slow" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-6 h-6 text-accent animate-pulse-glow" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-foreground">
                A Special Birthday Wish
              </h3>
              
              <div className="space-y-4 text-center">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  May this year bring you endless blessings, unforgettable adventures, and dreams that come true! 🌟
                </p>
                
                <div className="py-4">
                  <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full px-6 py-3">
                    <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Cheers to You! 🎉
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary animate-pulse-glow"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-primary/10">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-glow" />
            <span className="text-sm">for an amazing person</span>
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <Flower2 className="w-4 h-4 text-primary/50" />
            <Sparkles className="w-4 h-4 text-accent/50" />
            <Flower2 className="w-4 h-4 text-primary/50" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

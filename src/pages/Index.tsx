import { useState, useEffect } from "react";
import { Heart, Sparkles, Gift } from "lucide-react";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";
import photo7 from "@/assets/photo7.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const photos = [
    { src: photo1, alt: "Beautiful memories" },
    { src: photo2, alt: "Special moments" },
    { src: photo3, alt: "Hollywood dreams" },
    { src: photo4, alt: "Sunset vibes" },
    { src: photo5, alt: "Golden hour" },
    { src: photo6, alt: "Evening glow" },
    { src: photo7, alt: "Perfect night" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
              }}
            />
          ))}
        </div>

        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex justify-center mb-8">
            <Sparkles className="w-16 h-16 text-primary animate-float" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Happy Birthday!
          </h1>
          
          <p className="text-2xl md:text-4xl text-muted-foreground mb-8 font-light">
            Celebrating the most beautiful soul
          </p>
          
          <div className="flex gap-4 justify-center items-center">
            <Gift className="w-8 h-8 text-accent animate-float" style={{ animationDelay: "0.5s" }} />
            <p className="text-lg md:text-xl text-foreground/80">
              Wishing you endless joy, love, and magical moments
            </p>
            <Gift className="w-8 h-8 text-accent animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Beautiful Memories
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Capturing moments that make life extraordinary
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[3/4] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-lg font-medium flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-primary/20">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              A Special Wish for You
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              May this year bring you countless blessings, unforgettable adventures, 
              and all the happiness your heart can hold. You deserve every bit of joy 
              that comes your way!
            </p>
            <p className="text-2xl font-semibold text-primary">
              Cheers to another amazing year! 🎉
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for an amazing person
        </p>
      </footer>
    </div>
  );
};

export default Index;

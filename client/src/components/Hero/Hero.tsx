import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWords } from "../ui/flip-words";
import EyeLogo from "@/components/ui/EyeLogo";

const Hero = () => {
  const words = ["confidence", "boldness", "accuracy", "precision", "intelligence", "wisdom"];
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState(false);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef(null);
  const scrollThreshold = 200; // Scroll threshold to trigger the effect

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > scrollThreshold && !scrolled && !animating) {
        setAnimating(true);
        // Set a small delay before setting scrolled to true for smooth transition
        setTimeout(() => setScrolled(true), 50);
      } else if (scrollPosition <= scrollThreshold && scrolled) {
        setAnimating(true);
        // Set a small delay before setting scrolled to false for smooth transition
        setTimeout(() => setScrolled(false), 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, animating]);

  // Handle animation end
  useEffect(() => {
    const logoElement = logoRef.current;
    
    const handleAnimationEnd = () => {
      setAnimating(false);
    };

    if (logoElement) {
      logoElement.addEventListener("transitionend", handleAnimationEnd);
      return () => {
        logoElement.removeEventListener("transitionend", handleAnimationEnd);
      };
    }
  }, [scrolled]);

  return (
    <div>
      <div className="relative overflow-hidden">
        <Spotlight />
      </div>

      {/* Floating eye logo when scrolled */}
      <div 
        ref={logoRef}
        className={`fixed z-50 ${
          scrolled 
            ? "top-4 right-4 opacity-100 scale-100" 
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0"
        } transition-all duration-700 ease-in-out`}
        style={{ 
          transitionProperty: "top, right, left, transform, opacity, scale",
          pointerEvents: scrolled ? "auto" : "none"
        }}
      >
        {scrolled && <EyeLogo size={36} />}
      </div>
      
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-48 -mt-3">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-gray-700">
            Stocket: Your gateway to smarter market insights and foresight.{" "}
            <a href="/learning" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-gray-400">
            <div className="flex items-center justify-center">
              <span className="text-fuchsia-800 pr-5">Stocket</span> <br />
              <div ref={targetRef} className={`transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
                <EyeLogo size={50} />
              </div>
            </div>
            Own the Market.
            Predict the Market with<FlipWords words={words} /> <br />
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Predict. Profit. Repeat
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
              Get started
            </Button>
            <a
              href="/learning"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
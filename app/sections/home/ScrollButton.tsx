import { useEffect, useState } from "react";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    setIsFlying(true);
    setTimeout(() => {
      setIsFlying(false);
    }, 1000);

    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToHero}
      className={`fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${isFlying ? "animate-bounce" : ""}`}
      aria-label="Scroll to top"
      style={{
        transform: isFlying ? 'translateY(-100px) scale(1.2)' : 'translateY(0) scale(1)',
        transition: 'transform 1s ease-out, opacity 0.3s ease'
      }}
    >
      <div className="relative">
        <img 
          src="/rocket.png" 
          alt="Rocket" 
          className={`w-12 h-12 transition-transform duration-300 hover:scale-110 ${
            isFlying ? 'animate-pulse' : ''
          }`} 
        />
        

        {isFlying && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full animate-pulse opacity-80"></div>
              <div className="w-1.5 h-4 bg-gradient-to-t from-red-500 to-orange-400 rounded-full animate-pulse opacity-60 animation-delay-100"></div>
              <div className="w-1 h-3 bg-gradient-to-t from-red-600 to-red-400 rounded-full animate-pulse opacity-40 animation-delay-200"></div>
            </div>
          </div>
        )}
        
        {isFlying && (
          <>
            <div className="absolute -top-3 -left-3 w-2 h-2 bg-gradient-to-r from-yellow-300 to-yellow-100 rounded-full animate-ping shadow-lg shadow-yellow-300/50"></div>
            <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-gradient-to-r from-orange-300 to-orange-100 rounded-full animate-ping shadow-lg shadow-orange-300/50" style={{animationDelay: '0.15s'}}></div>
            <div className="absolute top-0 -left-4 w-1 h-1 bg-gradient-to-r from-red-300 to-pink-200 rounded-full animate-ping shadow-md shadow-red-300/40" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1 -right-2 w-1 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full animate-ping shadow-md shadow-yellow-400/40" style={{animationDelay: '0.45s'}}></div>
            
            <div className="absolute -top-1 left-0 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-80" style={{animationDelay: '0.1s'}}></div>
            <div className="absolute top-3 -left-1 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse opacity-70" style={{animationDelay: '0.25s'}}></div>
            <div className="absolute -top-4 right-1 w-1 h-1 bg-orange-200 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.35s'}}></div>
            <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-red-200 rounded-full animate-pulse opacity-50" style={{animationDelay: '0.5s'}}></div>
          </>
        )}
      </div>
    </button>
  );
};
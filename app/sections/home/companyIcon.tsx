// import { useEffect, useRef, useState } from "react";

// export default function CompanyIcon() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [displayText, setDisplayText] = useState("");
//   const fullText = "Unified AI for all your work.";
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             setTimeout(() => setShowContent(true), 300);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.1,
//       }
//     );

//     const currentRef = ref.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isVisible && currentIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + fullText[currentIndex]);
//         setCurrentIndex((prev) => prev + 1);
//       }, 40);
//       return () => clearTimeout(timeout);
//     }
//   }, [isVisible, currentIndex, fullText]);

//   return (
//     <section
//       ref={ref}
//       className="relative w-full min-h-screen flex items-center justify-between overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50/30 to-blue-50/20"></div>
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f6ea_1px,transparent_1px),linear-gradient(to_bottom,#f8f6ea_1px,transparent_1px)] bg-[size:40px_40px] opacity-100"></div>
    
//       <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//       <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-indigo-300/5 to-cyan-300/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

//       <div className="relative z-10 w-full px-8 md:px-16 lg:px-32 py-16 flex items-center justify-between">
//         <div className={`max-w-2xl transition-all duration-1000 ease-out ${
//           showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
//         }`}>
//           <div className="mb-8">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl text-navy-950 leading-tight">
//               <span className="bg-navy-900 bg-clip-text text-transparent">
//                 {displayText}
//               </span>
//               <span className="animate-pulse text-navy-900 ml-1">|</span>
//             </h1>
            
//             <div className={`mt-4 h-1 bg-navy-800 rounded-full transition-all duration-1000 ${
//               displayText.length > 10 ? 'w-24 opacity-100' : 'w-0 opacity-0'
//             }`}></div>
//           </div>

//           <div className={`transition-all duration-700 delay-700 ${
//             showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//           }`}>
//             <p className="text-lg md:text-xl lg:text-2xl text-navy-800 leading-relaxed mb-8">
//               Your <span className="font-semibold text-navy-900">multilingual, multimodal</span> AI assistant that can help with anything. 
//               <br className="hidden md:block" />
//               Search, create, code, learn, automate and collaborate with a 
//               <span className="font-semibold text-navy-900"> unified and secure</span> experience.
//             </p>
//           </div>
//         </div>
//         <div className={`hidden lg:block w-1/3 xl:w-2/5 transition-all duration-1000 ease-out ${
//           isVisible 
//             ? "translate-y-0 opacity-100 rotate-0 scale-100" 
//             : "translate-y-20 opacity-0 -rotate-12 scale-95"
//         }`}>
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl scale-110"></div>
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//               <img 
//                 src="/image1.avif" 
//                 alt="AI Assistant Visualization" 
//                 className="w-full h-auto transition-all duration-700 hover:scale-105"
//                 style={{ filter: 'saturate(0.5)' }}
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent rounded-2xl"></div>
//             </div>
//             <div className="absolute -top-4 -right-4 w-8 h-8 bg-warning-300 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
//             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-warning-300 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}></div>
//             <div className="absolute top-1/2 -left-6 w-4 h-4 bg-warning-300 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


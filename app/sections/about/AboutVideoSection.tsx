import AnimatedSection from "../../routes/company/about";

const AboutVideoSection = () => {
    return (
       
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-navy-950 to-navy-950 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <video
              src="/abouthero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative w-full h-auto object-cover shadow-2xl rounded-2xl border border-white/20 backdrop-blur-sm transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
    )
}

export default AboutVideoSection
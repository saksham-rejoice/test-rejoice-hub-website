const circleStrings = [
  "Competitive salary packages",
  "Friendly Environment",
  "On-time Salary",
  "Personal Career Growth",
  "Career Growth Opportunity",
];

export default function InnovativeCulture() {
  return (
    <div className="py-16 bg-blue-900 relative">
      <div className="cus-container relative">
        <div className="">
          <div className="pb-12">
            <div className="">
              <span className="text-lg text-center font-medium text-navy-950 block mb-2">
                Innovative Culture
              </span>
              <h2 className="text-4xl max-mobile:text-3xl text-navy-950 leading-tight text-center">
                Here At Rejoicehub LLP
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            {circleStrings.map((str, index) => (
              <div
                key={index}
                className="w-56 h-56 mr-[-20px]  rounded-full border border-solid border-primary-200  bg-primary-100 p-6 flex items-center justify-center text-center px-4 text-lg font-semibold text-white hover:text-primary hover:bg-white/40 transition-all duration-300"
              >
                {str}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const GrowingCount = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="py-16 relative bg-white" ref={statsRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="pb-12 max-mobile:pb-10">
          <h2 className="heading3 text-center  text-navy-950">
            Growing <span className="text-gradient">Together</span>
          </h2>
        </div>
        <div className="grid grid-cols-4 max-tab:grid-cols-2 gap-5 max-mobile:gap-4">
          {[
            {
              end: 810,
              suffix: "+",
              label: "Repository",
              icon: (
                <img
                  src="/states/repo.svg"
                  alt="repo"
                  className="w-16 h-16 mx-auto max-mobile:w-12 max-mobile:h-12"
                />
              ),
            },
            {
              end: 500,
              suffix: "+",
              label: "Customers",
              icon: (
                <img
                  src="/states/user.svg"
                  alt="user"
                  className="w-16 h-16 mx-auto max-mobile:w-12 max-mobile:h-12"
                />
              ),
            },
            {
              end: 112,
              suffix: "+",
              label: "Strong Team",
              icon: (
                <img
                  src="/states/team.svg"
                  alt="team"
                  className="w-16 h-16 mx-auto max-mobile:w-12 max-mobile:h-12"
                />
              ),
            },
            {
              end: 80,
              suffix: "%",
              label: "Repeat Business Rate",
              icon: (
                <img
                  src="/states/rocket.svg"
                  alt="rocket"
                  className="w-16 h-16 mx-auto max-mobile:w-12 max-mobile:h-12"
                />
              ),
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
            >
              <div className="">
                <div className="text-2xl max-mobile:text-3xl mb-3 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl max-mobile:text-3xl text-center  font-bold text-primary-200 mb-2">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    start={statsInView}
                  />
                </div>
                <div className="text-navy-700 text-center max-mobile:text-base text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  start = false,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  start?: boolean;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <div className="animated-counter">
      {count}
      {suffix}
    </div>
  );
};

import MedalIcon from "/assets/icons/MedalIcon.svg";
import ClockIcon from "/assets/icons/clock.svg";
import TargetIcon from "/assets/icons/TargetIcon.svg";
import ChartUpIcon from "/assets/icons/ChartUpIcon.svg";


export default function UsApart() {
  const items = [
    {
      icon: MedalIcon,
      title: "100% AI-Native",
      subtitle: "AI-First Approach",
      description:
        "Unlike traditional agencies, we're built from the ground up for AI. Every solution is AI-native.",
    },
    {
      icon: ClockIcon,
      title: "10x Faster",
      subtitle: "Rapid Deployment",
      description:
        "Our AI agents can be deployed in days, not months. See results within weeks.",
    },
    {
      icon: TargetIcon,
      title: "95%+ Accuracy",
      subtitle: "Precision & Accuracy",
      description:
        "Our AI models achieve 95%+ accuracy rates, outperforming industry standards.",
    },
    {
      icon: ChartUpIcon,
      title: "Always Learning",
      subtitle: "AI-First Approach",
      description:
        "Our AI systems improve over time, becoming more valuable with each interaction.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container-lg">
        <div className="pb-[60px]">
          <h2 className="heading2 text-primary text-center mb-4">
            What Sets <span className="text-blue-100"> Us Apart</span>
          </h2>
          <p className="text-lg text-grey-600 max-w-[900px] mx-auto text-center max-mobile:text-base">
            Our unique approach and proven capabilities give us a competitive
            edge that others can't match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[url('/assets/images/line-img.png')] w-full bg-no-repeat bg-center bg-cover rounded-2xl p-6"
            >
              <div className="pb-7">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="text-2xl font-medium text-primary">{item.title}</h3>
              <span className="text-lg pb-2.5 block font-normal text-blue-100">
                {item.subtitle}
              </span>
              <p className="text-lg text-primary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import AutoCarousel from "./AutoCarouse";

interface ToolImagesSectionProps {
  screenshots: string[];
}

const ToolImagesSection = ({ screenshots }: ToolImagesSectionProps) => {
  if (!screenshots.length) return null;
  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <AutoCarousel screenshots={screenshots} />
    </section>
  );
};

export default ToolImagesSection;

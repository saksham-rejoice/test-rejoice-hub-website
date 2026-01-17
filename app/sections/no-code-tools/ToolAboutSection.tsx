import CommanMd from "~/sections/commansection/CommanMd";

interface ToolAboutSectionProps {
  info: string;
}

const ToolAboutSection = ({ info }: ToolAboutSectionProps) => (
  <section className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
    <CommanMd markdown={info} />
  </section>
);

export default ToolAboutSection;

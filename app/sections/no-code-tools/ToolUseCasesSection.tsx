import CommanMd from "~/sections/commansection/CommanMd";

interface UseCase {
  name: string;
}

interface ToolUseCasesSectionProps {
  useCases?: string | UseCase[];
}

const ToolUseCasesSection = ({ useCases }: ToolUseCasesSectionProps) => {
  if (!useCases) return null;
  if (typeof useCases === "string")
    return (
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h2>
        <CommanMd markdown={useCases} />
      </section>
    );
  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h2>
      <div className="flex flex-wrap gap-3">
        {useCases.map((useCase, i) => (
          <span
            key={i}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-white border border-blue-200"
          >
            {useCase.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ToolUseCasesSection;

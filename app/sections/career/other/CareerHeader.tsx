

interface CareerHeaderProps {
  positionType: string;
}

export default function CareerHeader({ positionType }: CareerHeaderProps) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 pl-6">
      {positionType}
    </h1>
  );
}

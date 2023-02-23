interface ISectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Section = ({ title, description, children }: ISectionProps) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-y-6 container min-h-screen snap-center">
      <h2 className="text-4xl sm:text-6xl font-bold text-center">{title}</h2>
      <p className="text-center font-light text-lg sm:text-xl text-gray-600 max-w-4xl">
        {description}
      </p>
      {children}
    </div>
  );
};

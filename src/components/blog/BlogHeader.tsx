export function BlogHeader() {
  return (
    <div className="flex flex-col lg:flex-row mb-8 gap-8">
      <div className="lg:w-2/3">
        <h1 className="text-4xl md:text-5xl font-medium leading-tight text-gray-900">
          Your Destination for <br />
          <span className="text-[#3b82f6]">Smarter Decisions</span>
        </h1>
      </div>
      <div className="lg:w-1/3 pt-2">
        <p className="text-gray-600 font-normal text-[18px] leading-[32px] tracking-normal pr-4">
          Discover fresh perspectives, actionable ideas, and valuable knowledge designed to support business growth and innovation.
        </p>
      </div>
    </div>
  );
}

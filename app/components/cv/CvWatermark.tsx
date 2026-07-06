type CvWatermarkProps = {
  company: string;
};

export default function CvWatermark({ company }: CvWatermarkProps) {
  const label = `Confidential - Shared with ${company}`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <div className="grid h-full w-full scale-125 rotate-[-18deg] grid-cols-2 place-items-center gap-x-8 gap-y-10 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/[0.045] sm:grid-cols-3 sm:text-xs">
        {Array.from({ length: 20 }, (_, index) => (
          <span className="whitespace-nowrap" key={index}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

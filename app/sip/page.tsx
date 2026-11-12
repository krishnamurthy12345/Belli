import SIPCalculator from "@/components/calculator/SIPCalculator";

export default function SIPPage() {
  return (
    <main className="section-padding bg-[#F8FAF8] min-h-screen">
      <div className="container-width">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08D28]">
            Systematic Investment Plan
          </span>
          <h1 className="mt-3 text-4xl font-bold text-[#10231C] sm:text-5xl">
            Build Wealth with SIP Investing
          </h1>
          <p className="mt-4 text-base text-[#53635C]">
            Invest a fixed amount regularly to take advantage of rupee-cost averaging and long-term compounding.
          </p>
        </div>

        {/* Reuse your existing SIP Calculator */}
        <SIPCalculator />
      </div>
    </main>
  );
}
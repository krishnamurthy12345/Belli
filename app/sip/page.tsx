import SIPCalculator from "@/components/calculator/SIPCalculator";

export default function SIPPage() {
  return (
    <main className="section-padding bg-[var(--color-light)] min-h-screen">
      <div className="container-width">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Systematic Investment Plan
          </span>
          <h1 className="mt-3 text-4xl font-bold text-[var(--color-dark)] sm:text-5xl">
            Build Wealth with SIP Investing
          </h1>
          <p className="mt-4 text-base text-[var(--text-color-muted)]">
            Invest a fixed amount regularly to take advantage of rupee-cost averaging and long-term compounding.
          </p>
        </div>

        {/* Reuse your existing SIP Calculator */}
        <SIPCalculator />
      </div>
    </main>
  );
}
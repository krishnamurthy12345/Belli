import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fundCategories = [
  {
    title: "Equity Mutual Funds",
    tag: "Long-Term Growth",
    description: "Invest primarily in company stocks to build wealth over a 5+ year horizon.",
  },
  {
    title: "Debt Mutual Funds",
    tag: "Stability & Income",
    description: "Focus on fixed-income securities like government bonds and corporate debt with lower volatility.",
  },
  {
    title: "Hybrid Funds",
    tag: "Balanced Allocation",
    description: "A mix of equity and debt instruments designed to balance risk and steady returns.",
  },
  {
    title: "ELSS Tax Saver",
    tag: "Section 80C Benefit",
    description: "Equity-linked savings schemes offering tax deductions up to ₹1.5 lakh with a 3-year lock-in.",
  },
];

export default function MutualFundsPage() {
  return (
    <main className="section-padding min-h-screen bg-[#F8FAF8]">
      <div className="container-width">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08D28]">
            Investment Solutions
          </span>
          <h1 className="mt-3 text-4xl font-bold text-[#10231C] sm:text-5xl">
            Explore Mutual Funds
          </h1>
          <p className="mt-4 text-base text-[#53635C]">
            Choose from diversified fund categories tailored to your risk appetite, time horizon, and financial milestones.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {fundCategories.map((fund) => (
            <div
              key={fund.title}
              className="rounded-2xl border border-[#10231C]/10 bg-white p-7 shadow-sm transition-all hover:border-[#0B3D2E]/30 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B08D28]">
                {fund.tag}
              </span>
              <h2 className="mt-2 text-xl font-bold text-[#10231C]">
                {fund.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#53635C]">
                {fund.description}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B3D2E] hover:text-[#1B5E48]"
              >
                Consult on this category <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  const calculation = useMemo(() => {
    const months = years * 12;
    const monthlyRate = returnRate / 12 / 100;

    const investedAmount = monthlyInvestment * months;

    let estimatedValue = investedAmount;

    if (monthlyRate > 0) {
      estimatedValue =
        monthlyInvestment *
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate));
    }

    const estimatedReturns = estimatedValue - investedAmount;

    return {
      investedAmount,
      estimatedReturns,
      estimatedValue,
    };
  }, [monthlyInvestment, years, returnRate]);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#E4EBE7] bg-white p-6 shadow-[0_25px_70px_rgba(11,61,46,0.10)] sm:p-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#0B3D2E]/10 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mb-8 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4EE] text-[#0B3D2E]">
            <Calculator size={22} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#10231C] sm:text-2xl">
              SIP Calculator
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#697971]">
              See how your monthly investments could grow over time.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          {/* Monthly Investment */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label className="text-sm font-semibold text-[#53635C]">
                Monthly Investment
              </label>

              <span className="text-lg font-bold text-[#0B3D2E]">
                {formatCurrency(monthlyInvestment)}
              </span>
            </div>

            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#DDE7E2] accent-[#0B3D2E]"
            />

            <div className="mt-2 flex justify-between text-xs text-[#8A9690]">
              <span>₹500</span>
              <span>₹1 Lakh</span>
            </div>
          </div>

          {/* Investment Period */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label className="text-sm font-semibold text-[#53635C]">
                Investment Period
              </label>

              <span className="text-lg font-bold text-[#0B3D2E]">
                {years} {years === 1 ? "Year" : "Years"}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#DDE7E2] accent-[#0B3D2E]"
            />

            <div className="mt-2 flex justify-between text-xs text-[#8A9690]">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Expected Return */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label className="text-sm font-semibold text-[#53635C]">
                Expected Return
              </label>

              <span className="text-lg font-bold text-[#0B3D2E]">
                {returnRate}%
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="h-2 w-full cursor-pointer rounded-full bg-[#DDE7E2] accent-[#0B3D2E]"
            />

            <div className="mt-2 flex justify-between text-xs text-[#8A9690]">
              <span>1%</span>
              <span>20%</span>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mt-9 overflow-hidden rounded-2xl bg-[#0B3D2E] p-6 text-white">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-white/65">Estimated Value</p>

              <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                {formatCurrency(calculation.estimatedValue)}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <TrendingUp size={21} />
            </div>
          </div>

          {/* Progress visualization */}
          <div className="mb-5 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#D4AF37] transition-all duration-500"
              style={{
                width: `${Math.min(
                  90,
                  Math.max(
                    10,
                    (calculation.estimatedReturns /
                      calculation.estimatedValue) *
                      100
                  )
                )}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/55">Total Invested</p>

              <p className="mt-1 text-base font-semibold">
                {formatCurrency(calculation.investedAmount)}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/55">Estimated Growth</p>

              <p className="mt-1 text-base font-semibold text-[#D4AF37]">
                {formatCurrency(calculation.estimatedReturns)}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-xs leading-5 text-[#8A9690]">
          This calculator provides an illustrative estimate based on the
          assumed rate of return. Actual investment returns may vary and are
          not guaranteed.
        </p>
      </div>
    </div>
  );
}
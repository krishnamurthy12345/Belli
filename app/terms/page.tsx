// app/terms-and-conditions/page.tsx
import React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2">Terms &amp; Conditions</h1>
      <p className="text-sm text-gray-600 mb-6">
        <strong>Last Updated: October 8, 2026</strong>
      </p>

      <p className="mb-4">Welcome to the Bellis Capital website.</p>
      <p className="mb-6">
        By accessing or using this website, you agree to comply with these Terms &amp; Conditions. If you do not agree with these terms, please do not use this website.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. About This Website</h2>
        <p className="mb-2">
          This website is operated by Bellis Capital and is intended to provide general information about our services, investment-related education, financial concepts, and ways to contact our team.
        </p>
        <p>
          The information presented on this website is intended for general informational and educational purposes unless specifically stated otherwise.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. No Guarantee of Investment Returns</h2>
        <p className="mb-2 font-medium text-amber-800 bg-amber-50 p-3 rounded-md border-l-4 border-amber-500">
          Investments are subject to market risks.
        </p>
        <p className="mb-2">
          Past performance does not guarantee future results. The value of investments may rise or fall, and investors may receive less than the amount originally invested.
        </p>
        <p>
          No statement on this website should be interpreted as a guarantee of returns, profits, capital protection, or future investment performance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Not Individual Financial Advice</h2>
        <p className="mb-2">
          Information available on this website should not automatically be considered personalized financial, investment, tax, legal, or accounting advice.
        </p>
        <p className="mb-2">
          Investment decisions should be made after considering your individual financial circumstances, objectives, risk tolerance, investment horizon, and other relevant factors.
        </p>
        <p>
          Where appropriate, you should seek advice from a qualified professional before making investment decisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Mutual Fund Risk</h2>
        <p className="mb-2">Mutual fund investments are subject to market risks.</p>
        <p className="mb-2">Investors should read all scheme-related documents carefully before investing.</p>
        <p className="mb-2">
          Different mutual fund schemes and investment products may involve different levels of risk, volatility, costs, liquidity considerations, and investment objectives.
        </p>
        <p>There is no assurance that the investment objective of any mutual fund scheme will be achieved.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. No Guarantee or Promise</h2>
        <p className="mb-2">Nothing contained on this website constitutes a promise or guarantee regarding:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Investment returns</li>
          <li>Capital appreciation</li>
          <li>Income generation</li>
          <li>Market performance</li>
          <li>Specific investment outcomes</li>
          <li>Future financial performance</li>
        </ul>
        <p>
          Any examples, illustrations, calculations, projections, or historical information are provided for educational purposes and should not be interpreted as a guarantee of future results.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Calculators and Illustrations</h2>
        <p className="mb-2">
          Any SIP calculators, return calculators, projections, examples, charts, or other numerical illustrations available on the website are intended for educational and illustrative purposes.
        </p>
        <p className="mb-2">
          Actual investment results may differ substantially due to market conditions, taxation, expenses, timing, investment choices, and other factors.
        </p>
        <p>Calculator results should not be treated as a recommendation to invest in any particular product or scheme.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Investment Products and Recommendations</h2>
        <p className="mb-2">
          Information regarding mutual funds, investment strategies, asset classes, or other financial products may be provided for general educational purposes or as part of a specific advisory interaction, where applicable.
        </p>
        <p className="mb-2">The suitability of an investment depends on the individual investor's circumstances.</p>
        <p>No investment should be made solely on the basis of information appearing on this website.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Regulatory Status</h2>
        <p className="mb-2">
          References to regulatory compliance, registration, authorization, or association with any regulatory authority must be interpreted only according to Bellis Capital's actual legal and regulatory status.
        </p>
        <p>
          Nothing on this website should be interpreted as stating that any regulatory authority has endorsed, recommended, guaranteed, or approved Bellis Capital, its website, or any investment product unless expressly stated and legally applicable.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Third-Party Websites</h2>
        <p className="mb-2">
          This website may contain links to external websites and platforms, including social media, mapping, communication, educational, and other third-party services.
        </p>
        <p className="mb-2">These links are provided for convenience and informational purposes.</p>
        <p className="mb-2">
          Bellis Capital does not control and is not responsible for the content, accuracy, availability, security, privacy practices, or terms of third-party websites.
        </p>
        <p>Accessing third-party websites is at your own discretion and risk.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Intellectual Property</h2>
        <p className="mb-2">
          Unless otherwise stated, the content of this website, including text, graphics, logos, images, design elements, videos, and other materials, is owned by or licensed to Bellis Capital.
        </p>
        <p className="mb-2">You may access and view the website for personal and lawful purposes.</p>
        <p>
          You may not reproduce, modify, distribute, publish, transmit, sell, or commercially exploit website content without prior written permission, except where permitted by applicable law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Website Availability</h2>
        <p className="mb-2">We attempt to keep the website available and functional; however, we do not guarantee that the website will always be:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Available without interruption</li>
          <li>Free from errors</li>
          <li>Free from viruses or other harmful components</li>
          <li>Completely accurate or up to date</li>
        </ul>
        <p>We may modify, suspend, or discontinue any part of the website without prior notice.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">12. Accuracy of Information</h2>
        <p className="mb-2">We make reasonable efforts to present useful and accurate information.</p>
        <p className="mb-2">However, financial markets, regulations, products, rates, and other information can change over time.</p>
        <p className="mb-2">Accordingly, information on this website may not always reflect the latest developments.</p>
        <p>You should verify important information before making financial or investment decisions.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">13. Limitation of Liability</h2>
        <p className="mb-2">
          To the extent permitted by applicable law, Bellis Capital shall not be responsible for losses, damages, or consequences arising from reliance solely on general information available on this website.
        </p>
        <p className="mb-2">
          This includes, where applicable, losses arising from investment decisions, market movements, technical interruptions, third-party websites, or inaccurate or outdated information.
        </p>
        <p>Nothing in these Terms is intended to exclude liability that cannot legally be excluded under applicable law.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">14. User-Submitted Information</h2>
        <p className="mb-2">
          When submitting information through our enquiry or advisory forms, you agree that the information provided by you is accurate and belongs to you or that you have appropriate authority to provide it.
        </p>
        <p>You should not submit confidential authentication credentials such as passwords, OTPs, PINs, or security codes.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">15. Privacy</h2>
        <p>
          Your use of this website is also subject to our Privacy Policy, which explains how information submitted through the website may be collected and processed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">16. Governing Law</h2>
        <p className="mb-2">These Terms &amp; Conditions shall be governed by and interpreted in accordance with the applicable laws of India.</p>
        <p>
          Subject to applicable law, courts having appropriate jurisdiction in Tamil Nadu shall have jurisdiction over disputes arising in connection with these Terms or your use of the website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">17. Changes to These Terms</h2>
        <p className="mb-2">Bellis Capital may update these Terms &amp; Conditions from time to time.</p>
        <p className="mb-2">Changes will become effective when the updated terms are published on this page.</p>
        <p>You are encouraged to review this page periodically.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">18. Contact Us</h2>
        <p className="mb-4">For questions regarding these Terms &amp; Conditions, please contact:</p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
          <p className="font-semibold text-lg">Bellis Capital</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:belliscapitalofficial@gmail.com" className="text-blue-600 hover:underline">
              belliscapitalofficial@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91 94889 74620
          </p>
          <p>
            <strong>Location:</strong> Coimbatore, Tamil Nadu, India
          </p>
        </div>
      </section>

      <hr className="my-6 border-gray-200" />

      <p className="text-xs text-gray-500 italic">
        <strong>Important:</strong> These Terms &amp; Conditions are a general website template and should be reviewed by a qualified Indian legal/compliance professional before publication, especially to ensure that the wording accurately reflects Bellis Capital's actual business model, registrations, licenses, advisory activities, and regulatory obligations.
      </p>
    </main>
  );
}
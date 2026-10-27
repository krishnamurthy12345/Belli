// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">
        <strong>Last Updated: October 8, 2026</strong>
      </p>

      <p className="mb-4">
        Bellis Capital (“Bellis Capital”, “we”, “us”, or “our”) respects your
        privacy and is committed to protecting the personal information you
        share with us through this website.
      </p>

      <p className="mb-6">
        This Privacy Policy explains how we collect, use, store, and protect
        information when you visit or interact with our website and submit
        information through our contact or advisory request forms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-2">When you voluntarily submit information through our website, we may collect:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Full name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Financial requirements or investment-related queries</li>
        <li>Comments or other information you choose to provide</li>
        <li>Information submitted through our advisory request form</li>
      </ul>
      <p className="mb-4">
        We may also collect limited technical information automatically, such
        as browser type, device information, IP address, pages visited, and
        general website usage information, where applicable.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">We may use the information you provide to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Respond to your enquiries and requests</li>
        <li>Contact you regarding an advisory or investment-related enquiry</li>
        <li>Understand your requirements and provide relevant information</li>
        <li>Schedule or coordinate an advisory conversation</li>
        <li>Improve our website, services, and user experience</li>
        <li>Maintain records relating to enquiries and communications</li>
        <li>Comply with applicable legal and regulatory requirements</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Contact and Communication</h2>
      <p className="mb-4">
        By submitting an enquiry form, you acknowledge that Bellis Capital may
        contact you using the phone number or email address provided by you
        for the purpose of responding to your enquiry.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Financial Information</h2>
      <p className="mb-2">We request that you do not submit highly sensitive information such as:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Bank account passwords</li>
        <li>Internet banking credentials</li>
        <li>OTPs</li>
        <li>Credit/debit card PINs</li>
        <li>Trading account passwords</li>
        <li>Authentication codes</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">13. Contact Us</h2>
      <div className="mt-4 space-y-1">
        <p><strong>Bellis Capital</strong></p>
        <p><strong>Email:</strong> <a href="mailto:belliscapitalofficial@gmail.com" className="text-blue-600 underline">belliscapitalofficial@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 94889 74620</p>
        <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
      </div>
    </main>
  );
}
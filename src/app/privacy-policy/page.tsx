import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PixConvert",
  description:
    "PixConvert privacy policy. We process all images locally in your browser. Your files never leave your device.",
  alternates: {
    canonical: "https://pixconvert.org/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://pixconvert.org/privacy-policy",
    siteName: "PixConvert",
    title: "Privacy Policy | PixConvert",
    description:
      "PixConvert privacy policy. We process all images locally in your browser. Your files never leave your device.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | PixConvert",
    description:
      "PixConvert privacy policy. We process all images locally in your browser.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[800px] px-6 py-16">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-on-surface-variant mb-8">
          Last updated: May 22, 2024
        </p>

        <div className="space-y-8 text-base text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              Our Core Principle
            </h2>
            <p>
              PixConvert is designed with privacy as its foundation. All image
              processing happens directly in your web browser using WebAssembly
              (WASM). Your files are never uploaded to our servers or any
              third-party server.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              Information We Do Not Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your images or files</li>
              <li>File names or metadata</li>
              <li>Personal identification information</li>
              <li>Payment information (we do not charge)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              Information We May Collect
            </h2>
            <p>We may collect anonymized usage statistics through privacy-focused analytics tools to help us improve the service. This data cannot be used to identify you personally.</p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              Cookies
            </h2>
            <p>
              We do not use tracking cookies. Any cookies used are strictly
              functional and necessary for the application to work properly.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@pixconvert.org"
                className="text-primary hover:underline"
              >
                support@pixconvert.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

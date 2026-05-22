import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PixConvert",
  description:
    "PixConvert terms of service. Free local image conversion tool. By using our service, you agree to these terms.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[800px] px-6 py-16">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-on-surface-variant mb-8">
          Last updated: May 22, 2024
        </p>

        <div className="space-y-8 text-base text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using PixConvert, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do
              not use our service.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              2. Service Description
            </h2>
            <p>
              PixConvert is a free, browser-based image conversion tool. All
              processing happens locally on your device using WebAssembly. We do
              not store, transmit, or process your files on our servers.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              3. Use Limitations
            </h2>
            <p>
              You agree not to use PixConvert for any unlawful purpose or in any
              way that could damage, disable, or impair the service. You are
              solely responsible for the files you process using our tool.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              4. No Warranty
            </h2>
            <p>
              PixConvert is provided &quot;as is&quot; without any warranties,
              expressed or implied. We do not guarantee that the service will be
              uninterrupted, timely, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall PixConvert be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with your use of the service.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              6. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Continued
              use of the service after changes constitutes acceptance of the new
              terms.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-3">
              7. Contact
            </h2>
            <p>
              For questions about these Terms, please contact us at{" "}
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

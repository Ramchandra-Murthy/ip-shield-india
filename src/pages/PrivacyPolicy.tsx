import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy | IP Protection India</title>
      <meta name="description" content="Privacy policy for IP Protection India website — how we collect, use, and protect your personal information." />
    </Helmet>
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-8 font-serif text-4xl font-bold">Privacy Policy</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <p>
            This privacy policy describes how IP Protection India ("we", "us", or "our") collects, uses, and protects information when you use our website and services.
          </p>
          <h2 className="font-serif text-xl font-bold text-foreground">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personal details you provide through forms (name, email, phone number)</li>
            <li>Trademark and brand information submitted through our tools</li>
            <li>Website usage data (pages visited, time spent, browser type)</li>
            <li>Information collected through cookies and similar technologies</li>
          </ul>
          <h2 className="font-serif text-xl font-bold text-foreground">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To process trademark registration requests and provide legal services</li>
            <li>To respond to your inquiries and consultation requests</li>
            <li>To improve our website and tools</li>
            <li>To send relevant updates about your case (with your consent)</li>
          </ul>
          <h2 className="font-serif text-xl font-bold text-foreground">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information. Client information submitted through our forms is treated with strict confidentiality in accordance with attorney-client privilege under Indian law.
          </p>
          <h2 className="font-serif text-xl font-bold text-foreground">Third-Party Services</h2>
          <p>
            We may use third-party analytics services to understand website usage patterns. These services may collect anonymous usage data. We do not sell or rent your personal information to third parties.
          </p>
          <h2 className="font-serif text-xl font-bold text-foreground">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at{" "}
            <a href="mailto:anuradharkulkarni1976@gmail.com" className="text-primary hover:underline">anuradharkulkarni1976@gmail.com</a>.
          </p>
          <h2 className="font-serif text-xl font-bold text-foreground">Contact</h2>
          <p>
            For questions about this privacy policy, contact Advocate Anuradha R. Kulkarni at{" "}
            <a href="tel:+919869832220" className="text-primary hover:underline">+91 9869832220</a>.
          </p>
          <p className="text-xs mt-8">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}</p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
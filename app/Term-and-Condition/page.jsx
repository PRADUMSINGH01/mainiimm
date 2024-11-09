import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md my-12"> 
      <Head>
        <title>Terms & Conditions</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <div className="prose max-w-3xl mx-auto">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our e-learning platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the platform.
        </p>

        <h2>2. User Accounts</h2>
        <p>
          You may need to create a user account to access certain features of the platform. You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on the platform, including courses, videos, text, graphics, logos, and software, is the property of [Your Company Name] or its content creators and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the platform without prior written permission.
        </p>

        <h2>4. Course Enrollment and Access</h2>
        <p>
          When you enroll in a course, you are granted a non-exclusive, non-transferable license to access the course materials for personal, non-commercial use. Access to courses may be limited by time or other restrictions as specified in the course description. We reserve the right to modify or discontinue courses at any time.
        </p>

        <h2>5. Payments and Refunds</h2>
        <p>
          Some courses on the platform may require payment. All payments are processed through a secure third-party payment processor. Refunds may be available under certain circumstances as outlined in our Refund Policy.
        </p>

        <h2>6. User Conduct</h2>
        <p>
          You agree to use the platform only for lawful purposes and in a manner that does not infringe the rights of others. You may not use the platform to upload or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          The platform is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the platform's operation or the information, content, materials, or products included on the platform.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the platform or the inability to use the platform.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may terminate your access to the platform at any time for any reason without notice.
        </p>

        <h2>10. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the platform.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of  Jurisdiction.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:[iimtarget.gmail.com]" className="text-blue-500 hover:underline">iimtarget@gmail.com</a>. 
        </p>
      </div>
    </div>
  );
}
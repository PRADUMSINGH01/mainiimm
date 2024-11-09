import Head from 'next/head';

export default function About() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md my-12">
      <Head>
        <title>About Us</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

      <div className="prose max-w-3xl mx-auto">
        <p>
          At iimtarget, we're passionate about making high-quality education accessible to everyone, everywhere. Our e-learning platform is designed to empower learners of all ages and backgrounds to achieve their goals and unlock their full potential.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a world-class learning experience that is engaging, effective, and affordable. We believe that education should be a lifelong journey, and we're committed to providing the tools and resources that learners need to succeed at every stage.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a future where education is not limited by geography, income, or background. We strive to create a global community of learners who are connected, inspired, and empowered to make a positive impact on the world.
        </p>

        <h2>Our Team</h2>
        <p>
          Our team is comprised of experienced educators, technologists, and designers who are dedicated to creating the best possible learning experience. We're passionate about what we do, and we're constantly innovating to improve our platform and offerings.
        </p>

        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to contact us at <a href="mailto:[your email address]" className="text-blue-500 hover:underline">iimtarget@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
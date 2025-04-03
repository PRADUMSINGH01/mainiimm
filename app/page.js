import HowToUseComponent from "@/components/chat/HowtoUse";
import Dashboard from "@/components/chat/Dashboard";
import FAQ from "@/components/chat/FQ";
import Navbar from "@/components/chat/Navbar";
import Footer from "@/components/chat/Footer";
import MembershipCard from "@/components/chat/Membership";
import CourseCard from "@/components/chat/Courses/Courses";
import Image from "next/image";
import CATCourseSections from "@/components/chat/Courses/Courses";
import Business from "@/components/chat/Test/Business";
import FlashCard from "@/components/chat/Test/FlashCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <HowToUseComponent />
      <MembershipCard />
      <CATCourseSections />
      <FAQ />
      <Footer />
    </>
  );
}

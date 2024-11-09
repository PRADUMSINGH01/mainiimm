
import HowToUseComponent from "@/components/chat/HowtoUse";
import Dashboard from "@/components/chat/Dashboard";
import FAQ from "@/components/chat/FQ";
import Navbar from "@/components/chat/Navbar";
import Footer from "@/components/chat/Footer";
import MembershipCard from "@/components/chat/Membership";
import RazorpayPayment from "@/components/chat/PaymentUI";
export default function Home() {



  

  return (
   <>
<Navbar/>
<Dashboard/>
<HowToUseComponent/>
<MembershipCard/>

<FAQ/>
<Footer/>
   </>
  );
}

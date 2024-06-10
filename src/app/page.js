//css and bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

//icons
import "remixicon/fonts/remixicon.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";

//components
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Client from "@/components/client/Client";
import AboutUs from "@/components/aboutUs/AboutUs";
import Count from "@/components/count/Count";
import Services from "@/components/services/Services";
import MoreServices from "@/components/moreServices/MoreServices";
import Features from "@/components/features/Features";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/backToTop/BackToTop";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Client />
        <AboutUs />
        <Count />
        <Services />
        <MoreServices />
        <Features />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}

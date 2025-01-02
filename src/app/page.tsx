import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Services from "@/components/services";
import MaidProfiles from "@/components/maid-profiles";
import Testimonials from "@/components/testimonials";
import Workflow from "@/components/workflow";
import WhyChooseUs from "@/components/why-choose-us";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs id="about" />
      <Services id="services" />
      <MaidProfiles id="maids" />
      <Testimonials id="testimonials" />
      <Workflow />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

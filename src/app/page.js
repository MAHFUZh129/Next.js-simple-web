import CTA from "@/components/landingPage/CTA";
import FeaturedJobs from "@/components/landingPage/FeaturedJobs";
import Features from "@/components/landingPage/Features";
import Hero from "@/components/landingPage/Hero";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Stats from "@/components/landingPage/Stats";
import Testimonials from "@/components/landingPage/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mi">
     <Hero></Hero>
     <Stats></Stats>
     <Features></Features>
     <FeaturedJobs></FeaturedJobs>
     <HowItWorks></HowItWorks>
     <Testimonials></Testimonials>
     <CTA></CTA>
    </div>
  );
}

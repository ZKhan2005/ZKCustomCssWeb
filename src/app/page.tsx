import Features from "@/app/features/page";
import Herosection from "@/components/herosection/Herosection";
import Shop from "@/app/shop/page";
import Contact from "./contact/page";
import Offer from "@/components/offer/Offer";



export default function Home() {
  return (
    <div>
    
    <Herosection/>
    <Shop/>
    <Features/>
    <Offer/>
    <Contact/>
    
    </div>
  )
}

import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { Features } from "@/components/Features/Features";
import TickerTape from "@/components/TickerTape/TickerTape";
import AppChatBot from "@/components/Chatbot/AppChatBot";
import PricingCard from "@/components/PricingCard/PricingCard";
import { StatsCounter } from '@/components/ui/StatsCounter';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <StatsCounter />
      <div className="flex flex-row items-center justify-center py-16">
        <div className="flex flex-wrap justify-center items-stretch gap-8 py-16">
          <PricingCard
            title={"Free"}
            price={"₹0"}
            duration={"Forever"}
            tier="Copper"
            features={[
              "View basic stock trends",
              "3-day stock price prediction",
              "Limited to 5 tickers",
              "Ads supported",
            ]}
          />
          <PricingCard
            title={"Pro"}
            price={"₹999"}
            duration={"Month"}
            tier="Silver"
            features={[
              "7-day AI price predictions",
              "Access to 10 tickers",
              "Sector-wise stock insights",
              "Ad-free experience",
            ]}
          />
          <PricingCard
            title={"ProPlus"}
            price={"₹1999"}
            duration={"Year"}
            tier="Gold"
            features={[
              "30-day long-term predictions",
              "Track up to 100 tickers",
              "Technical overlays (MACD, RSI)",
              "Stock movement alerts",
            ]}
          />
        </div>
      </div>
      <Footer />
      <AppChatBot />
      <TickerTape />
    </>
  );
};

export default Landing;

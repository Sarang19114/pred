"use client";

import { useEffect, useRef, useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface PageProps {
  ticker: string;
  sidebarOpen?: boolean;
}

const StockChart = ({ ticker = "GOOGL", sidebarOpen = true }: PageProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const webAppTheme = localStorage.getItem("vite-ui-theme") || "light";
    setTheme(webAppTheme);

    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
            "autosize": true,
            "symbol": "NASDAQ:${ticker || "GOOGL"}",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "${theme}",
            "style": "1",
            "locale": "en",
            "backgroundColor": "${
              theme === "dark" ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)"
            }",
            "gridColor": "rgba(201, 218, 248, 0.06)",
            "hide_top_toolbar": true,
            "allow_symbol_change": true,
            "calendar": false,
            "hide_volume": true,
            "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    return () => {
      if (container.current?.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, [ticker, theme]);

  // Determine additional classes based on sidebar state
  const chartSizeClasses = sidebarOpen 
    ? "col-span-1 sm:col-span-2 lg:col-span-3" 
    : "col-span-1 sm:col-span-3 lg:col-span-4";

  const chartHeightClasses = sidebarOpen ? "h-96" : "h-112";

  return (
    <div className={`${chartSizeClasses} z-50 transition-all duration-300`}>
      <CardContainer containerClassName="py-1 w-full max-w-7xl mx-auto">
        <CardBody className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border overflow-hidden">
          <CardItem
            translateZ={50}
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {ticker || "GOOGL"} Stock Chart
          </CardItem>

          <CardItem
            translateZ={60}
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Interactive candlestick chart powered by TradingView
          </CardItem>

          <CardItem translateZ={100} className={`w-full mt-4 ${chartHeightClasses} z-50 transition-all duration-300`}>
            <div
              ref={container}
              className="tradingview-widget-container w-full h-full rounded-xl"
            ></div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default StockChart;
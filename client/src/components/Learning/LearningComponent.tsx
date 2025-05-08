import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stockMarketData = [
  {
    title: "1. Market Structure & Participants",
    content: [
      {
        subtitle: "1.1 Stock Exchanges vs. OTC",
        details: [
          "Centralized Exchanges: NYSE, NASDAQ—orders are matched via an order book. Provides transparency in bid/ask spreads.",
          "Over-the-Counter (OTC): Trades done directly between parties—used for smaller or unlisted securities. Often less liquidity and higher risk.",
          "Electronic Communication Networks (ECNs): Automated systems matching buy/sell orders—operate almost 24/7 for after-hours trading.",
        ],
      },
      {
        subtitle: "1.2 Who’s Trading?",
        details: [
          "Retail Investors: Typically trade via brokers, smaller order sizes, use apps like Robinhood.",
          "Institutional Investors: Manage large pools (mutual funds, pension funds). Their activity can move entire markets.",
          "Market Makers: Continuously quote buy and sell prices, profiting from the spread—key to liquidity.",
          "High-Frequency Traders: Use algorithms to capture millisecond price discrepancies—can increase overall volatility.",
        ],
      },
    ],
  },
  {
    title: "2. Trading Styles & Order Mechanics",
    content: [
      {
        subtitle: "2.1 In-Depth Trading Styles",
        details: [
          "Scalping: 5–10 second trades seeking 0.05–0.1% moves. Requires high leverage, tight risk controls.",
          "Day Trading: Multiple trades within market hours. Positions are closed before end of day to avoid overnight risk.",
          "Swing Trading: Hold 1–20 days. Uses technical indicators like moving average crossovers, Fibonacci retracements.",
          "Position Trading: Weeks to months. Based on macroeconomic trends—e.g., interest rate cycles, sector rotations.",
        ],
      },
      {
        subtitle: "2.2 Advanced Order Types",
        details: [
          "Iceberg Orders: Large orders split into smaller visible chunks to hide true size—used by institutions.",
          "Good ‘Til Canceled (GTC): Stays open until filled or manually canceled—beware stale pricing.",
          "Fill or Kill (FOK): Must execute in full immediately or be canceled—used for large block trades.",
          "Market-on-Close (MOC): Executes at the closing price—often used by index funds to track benchmarks.",
        ],
      },
    ],
  },
  {
    title: "3. Fundamental Analysis Deep Dive",
    content: [
      {
        subtitle: "3.1 Ratio Analysis",
        details: [
          "Current Ratio = Current Assets / Current Liabilities. Measures short-term liquidity. Target >1.5.",
          "Quick Ratio = (Current Assets − Inventory) / Current Liabilities. Stricter liquidity gauge.",
          "Interest Coverage = EBIT / Interest Expense. Ability to service debt—higher is safer.",
          "PEG Ratio = (P/E) / Annual EPS Growth. Adjusts valuation for growth—ideal around 1.0.",
        ],
      },
      {
        subtitle: "3.2 Cash Flow Analysis",
        details: [
          "Operating Cash Flow: Cash generated from core business—compare to net income for quality assessment.",
          "Free Cash Flow (FCF) = Operating Cash Flow − Capital Expenditures. Available for dividends, buybacks, debt paydown.",
          "Negative FCF isn’t always bad for growth companies, but persistent negative FCF can signal trouble.",
        ],
      },
      {
        subtitle: "3.3 Qualitative Evaluation",
        details: [
          "Management Tenure & Track Record: Look at CEO/CFO background, past performance during cycles.",
          "Competitive Moat: Patents, network effects, brand strength, cost advantages.",
          "Regulatory Environment: Exposure to policy changes, antitrust risk, environmental regulation.",
        ],
      },
    ],
  },
  {
    title: "4. Technical Analysis In-Depth",
    content: [
      {
        subtitle: "4.1 Moving Averages & Crossovers",
        details: [
          "Simple MA vs. Exponential MA: EMA reacts faster to recent price changes—useful in trending markets.",
          "Golden Cross / Death Cross: 50-day MA crossing the 200-day MA signals long-term trend shifts.",
          "Weighting & Smoothing: Experiment with 8-, 21-, 55-period MAs for short, intermediate, and long signals.",
        ],
      },
      {
        subtitle: "4.2 Oscillators & Momentum",
        details: [
          "RSI Divergence: Price makes new high, RSI fails—potential reversal signal.",
          "Stochastic Oscillator: Compares close to trading range—useful in sideways markets.",
          "MACD Histogram: Difference between MACD and its signal line—visual cue for momentum shifts.",
        ],
      },
      {
        subtitle: "4.3 Volume & Volatility",
        details: [
          "On-Balance Volume (OBV): Cumulative volume flow—confirms trend strength.",
          "Volume Profile: Volume distribution at price levels—identifies support/resistance zones.",
          "Average True Range (ATR): Measures volatility—helps size stops and set profit targets.",
        ],
      },
      {
        subtitle: "4.4 Price Patterns with Examples",
        details: [
          "Head & Shoulders: Neckline break confirms reversal. Example: AAPL daily chart 2020.",
          "Cup & Handle: Consolidation (‘cup’) then shallow pullback (‘handle’) leads to continuation.",
          "Descending Triangle: Lower highs with flat support—bearish continuation pattern.",
        ],
      },
    ],
  },
  {
    title: "5. Risk & Portfolio Management",
    content: [
      {
        subtitle: "5.1 Position Sizing Models",
        details: [
          "Fixed Fractional: Risk a fixed % of capital per trade (e.g., 1%).",
          "Kelly Criterion: Optimal bet size = Win% − (Loss% / Win%). Very aggressive—use half-Kelly for safety.",
          "Volatility-Based Sizing: Size inversely proportional to ATR to equalize dollar risk.",
        ],
      },
      {
        subtitle: "5.2 Hedging Techniques",
        details: [
          "Protective Puts: Buy puts to cap downside while maintaining upside potential.",
          "Covered Calls: Sell calls against long stock—generate income but cap upside.",
          "Pairs Trading: Long undervalued stock, short overvalued in same sector—market-neutral approach.",
        ],
      },
      {
        subtitle: "5.3 Portfolio Construction",
        details: [
          "Mean-Variance Optimization: Modern portfolio theory to balance risk/return—requires covariance estimates.",
          "Risk Parity: Allocate capital by risk contribution, not dollar amounts—diversified volatility exposures.",
          "Strategic vs. Tactical Allocation: Strategic = long-term targets; Tactical = short-term tilts based on market views.",
        ],
      },
    ],
  },
  {
    title: "6. Market Sentiment & Macro Drivers",
    content: [
      {
        subtitle: "6.1 Sentiment Indicators",
        details: [
          "VIX Futures Curve: Contango vs. backwardation—indicative of fear vs. complacency.",
          "Institutional Flows: ETF and mutual fund inflows/outflows—shows where big money is moving.",
          "Social Media Analytics: Unusual spikes in ticker mentions—use NLP tools to quantify buzz.",
        ],
      },
      {
        subtitle: "6.2 Macro & News Impact",
        details: [
          "Fed Policy Decisions: Rate hikes/cuts can trigger sector rotations—track Fed minutes and speeches.",
          "Economic Releases: Nonfarm Payrolls, CPI, PMI—expect increased volatility around release times.",
          "Geopolitical Risk: Trade embargoes, elections, military conflicts—factor into scenario analyses.",
        ],
      },
    ],
  },
  {
    title: "7. Research, Tools & Continuous Learning",
    content: [
      {
        subtitle: "7.1 Research Platforms",
        details: [
          "Bloomberg Terminal / Refinitiv Eikon: Professional-grade data, expensive but comprehensive.",
          "Seeking Alpha / Zacks: Retail-focused analysis, earnings transcripts, crowd ratings.",
          "EDGAR & SEDAR: Direct sources for regulatory filings—avoid second-hand misinterpretations.",
        ],
      },
      {
        subtitle: "7.2 Charting & Automation",
        details: [
          "Backtesting Frameworks: Python’s Backtrader or QuantConnect—validate strategies on historical data.",
          "API Access: Interactive Brokers, Alpaca – for building algorithmic trading bots.",
          "Custom Indicators: Write Pine Script (TradingView) or ThinkScript (Thinkorswim) for bespoke signals.",
        ],
      },
      {
        subtitle: "7.3 Ongoing Education",
        details: [
          "Books: “Margin of Safety” (Seth Klarman), “Market Wizards” series (Jack Schwager).",
          "Online Courses: Coursera’s Investment Management, Udacity’s Self-Driving Cars (for quant modeling).",
          "Communities: Join local or online investor clubs—peer discussions expose new perspectives.",
        ],
      },
    ],
  },
];

const StockMarketLearning: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <Card className="w-full border-none">
      <CardHeader>
        <CardTitle>Stock Market Learning Resource</CardTitle>
        <CardDescription>
          An exhaustive compendium covering market mechanics, analysis techniques,
          risk management, sentiment, and advanced tools.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion
          type="multiple"
          value={expandedSections}
          onValueChange={setExpandedSections}
          className="w-full"
        >
          {stockMarketData.map((section, idx) => (
            <AccordionItem value={section.title} key={idx}>
              <AccordionTrigger onClick={() => toggleSection(section.title)}>
                <span className="text-lg font-semibold">{section.title}</span>
              </AccordionTrigger>
              <AccordionContent>
                {section.content.map((item, subIdx) => (
                  <div key={subIdx} className="mb-6">
                    <h3 className="text-base font-medium mb-2">{item.subtitle}</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default StockMarketLearning;

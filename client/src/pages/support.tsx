import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode, FormEvent, useState } from "react";
import { BarChart2, HelpCircle, FileText, Mail} from "lucide-react";

const SupportSection = ({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) => (
  <Card className="mb-8" id={id}>
    <CardHeader>
      <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">{children}</CardContent>
  </Card>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="mb-6">
    <h3 className="font-semibold text-base md:text-lg mb-2">{question}</h3>
    <p className="text-sm md:text-base text-muted-foreground">{answer}</p>
  </div>
);

const Support = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your support ticket API
    console.log("Support request:", formState);
    setSubmitted(true);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="relative">
        <header className="flex h-16 shrink-0 items-center gap-4 border-b px-4">
          <SidebarTrigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6" />
          <h1 className="text-2xl font-bold">Stocket Support</h1>
        </header>

        <ScrollArea className="h-[calc(100vh-4rem)] px-4 py-6">
          {/* Hero / Quick Actions */}
          <SupportSection title="How Can We Help?">
            <p className="text-base md:text-lg">
              Welcome to Stocket Support. Choose an option below or fill out the form
              to get in touch with our team directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <BarChart2 className="h-8 w-8 mb-3" />
                  <h4 className="font-semibold mb-2">Prediction Tools Guide</h4>
                  <p className="text-sm mb-3">
                    Detailed walkthroughs for each model and configuration.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = "/home"}
                  >
                    View Guide
                  </Button>
                </CardContent>
              </Card>
              <Card className="border">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <HelpCircle className="h-8 w-8 mb-3" />
                  <h4 className="font-semibold mb-2">FAQs</h4>
                  <p className="text-sm mb-3">
                    Answers to common questions across all topics.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Read FAQs
                  </Button>
                </CardContent>
              </Card>
              <Card className="border">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <FileText className="h-8 w-8 mb-3" />
                  <h4 className="font-semibold mb-2">Developer Docs</h4>
                  <p className="text-sm mb-3">
                    API reference, integration examples, and code samples.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = "/lstm"}
                  >
                    Browse Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SupportSection>

          {/* FAQs */}
          <SupportSection title="Frequently Asked Questions" id="faq-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
              {/* Models */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Prediction Models</h2>
                <FAQItem
                  question="Which models power Stocket?"
                  answer="Stocket uses LSTM for sequence learning, ARIMA for time-series stationarity, and ensemble methods combining Random Forests and Gradient Boosting to capture different patterns."
                />
                <FAQItem
                  question="How do I choose the right model?"
                  answer="Select LSTM for capturing complex temporal dependencies, ARIMA for mean-reverting trends, and ensembles for robust, general-purpose forecasting. Refer to our guide for configuration tips per asset class."
                />
              </div>

              {/* Usage */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Using the Platform</h2>
                <FAQItem
                  question="Can I backtest predictions?"
                  answer="Yes—use our backtesting API endpoint to run simulations on historical data. You’ll receive performance metrics like Sharpe ratio and max drawdown."
                />
                <FAQItem
                  question="How do I export results?"
                  answer="After running a forecast, click 'Export CSV' or 'Download Report' in the UI. Programmatic exports are available via our RESTful API."
                />
              </div>

              {/* Data */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Data & Updates</h2>
                <FAQItem
                  question="How fresh is your market data?"
                  answer="We ingest real-time price feeds from multiple exchanges, updating every minute during market hours. End‐of‐day snapshots are stored for archival backtests."
                />
                <FAQItem
                  question="Can I upload my own data?"
                  answer="Yes—use the 'Custom Dataset' feature to upload CSVs. We support timestamp, open, high, low, close, and volume columns. See the data schema in our docs."
                />
              </div>

              {/* Account & Billing */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Account & Billing</h2>
                <FAQItem
                  question="What are the pricing plans?"
                  answer="We offer Free, Pro, and Enterprise tiers. Free includes 1 forecast/day; Pro includes unlimited forecasts and priority support. Enterprise offers custom SLAs and data integrations."
                />
                <FAQItem
                  question="How do I upgrade or cancel?"
                  answer="Go to Account > Billing in the sidebar. You can change your plan or cancel your subscription at any time. Prorated credits are applied for mid-cycle changes."
                />
              </div>
            </div>
          </SupportSection>

          {/* Contact Form */}
          <SupportSection title="Contact Us">
            {submitted ? (
              <p className="text-green-600">
                Thank you! Your request has been submitted. Our team will be in touch
                within 24 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            )}
            <div className="mt-6 space-y-2">
              <p className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4" /> rastogi.sarang19@gmail.com
              </p>
            </div>
          </SupportSection>
        </ScrollArea>
      </div>
    </SidebarProvider>
  );
};

export default Support;

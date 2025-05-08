import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicy() {
    const [lastUpdated] = useState("May 08, 2025")

    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Stocket Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

                <ScrollArea className="h-[600px] rounded-md border p-4">
                    <div className="pr-4">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                            <p>
                                Welcome to Stocket. We are committed to respecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our services or browse our website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                            <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                            <p>We may collect personally identifiable information that you voluntarily provide, such as:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Profile or account details</li>
                                <li>Other information you share via forms or contact options</li>
                            </ul>
                            <h3 className="text-xl font-medium mb-2">Usage Information</h3>
                            <p>We also automatically gather certain non-personal data, including:</p>
                            <ul className="list-disc pl-6">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Pages visited and time spent</li>
                                <li>Date and time of access</li>
                                <li>Referring URLs</li>
                                <li>Device and operating system information</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                            <p>Your information may be used to:</p>
                            <ul className="list-disc pl-6">
                                <li>Operate and maintain our website and services</li>
                                <li>Enhance user experience and personalize content</li>
                                <li>Analyze user interactions and improve performance</li>
                                <li>Respond to inquiries and offer customer support</li>
                                <li>Send service updates, newsletters, or promotional content (if opted-in)</li>
                                <li>Ensure compliance with legal obligations and protect user rights</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies and similar technologies to improve your browsing experience, remember preferences, and analyze site traffic. You can control the use of cookies through your browser settings. Disabling cookies may impact certain site functionalities.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                            <p>
                                We may partner with third-party services for analytics, advertising, payment processing, or other operations. These third parties operate under their own privacy policies, and we encourage you to review them. We are not responsible for their practices.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                            <p>
                                We implement robust technical and organizational measures to protect your data. While we strive to use commercially acceptable means to ensure security, no internet transmission or electronic storage method is 100% secure.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6">
                                <li>Access, update, or delete your personal information</li>
                                <li>Withdraw consent or opt out of communications</li>
                                <li>Request data portability or restriction of processing</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
                            <p>
                                Your data may be transferred to and stored in countries with different data protection laws. We ensure appropriate safeguards are in place to comply with applicable legal standards and protect your information regardless of location.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
                            <p>
                                We may update this Privacy Policy periodically to reflect changes in our practices or regulations. We encourage you to review this page regularly to stay informed about how we protect your data.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy, feel free to reach out to us at&nbsp;
                                <a
                                    href="mailto:rastogi.saran19@gmail.com"
                                    className="text-blue-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @rastogi.saran19@gmail.com
                                </a>.
                            </p>
                        </section>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

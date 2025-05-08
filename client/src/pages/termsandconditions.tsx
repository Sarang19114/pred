import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
                <p className="text-muted-foreground mb-8">Effective Date: November 08, 2024</p>

                <ScrollArea className="h-[600px] rounded-md border p-4">
                    <div className="pr-4">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing or using our website or services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Use of Our Services</h2>
                            <p>You agree to use our services only for lawful purposes and in a manner that does not infringe the rights or restrict the use of others. You may not use our platform for any illegal or unauthorized activity.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Account Responsibility</h2>
                            <p>If you create an account, you are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized access or use of your account.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                            <p>All content on this website, including text, graphics, logos, and software, is the property of Stocket or its licensors and is protected by copyright and other intellectual property laws. You may not copy, distribute, or modify any content without our prior written consent.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
                            <p>We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms or is otherwise harmful to our users or platform.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
                            <p>Our services are provided "as is" and "as available" without warranties of any kind. We do not guarantee that the platform will be error-free or uninterrupted.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                            <p>To the maximum extent permitted by law, Stocket shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the platform or any content therein.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
                            <p>We reserve the right to modify these Terms at any time. We will notify users of changes by updating the effective date. Continued use of the service after changes constitutes acceptance of the updated Terms.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
                            <p>These Terms shall be governed by and construed in accordance with the laws of your local jurisdiction, without regard to its conflict of law provisions.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                            <p>If you have any questions about these Terms, please contact us at <a href="mailto:@rastogi.saran19@gmail.com" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">this email address</a>.</p>
                        </section>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

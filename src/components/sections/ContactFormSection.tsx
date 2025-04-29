import { ArrowRight } from "lucide-react";

export default function ContactFormSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-munsell-500)_0%,_transparent_50%)] opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--color-tekhelet-500)_0%,_transparent_70%)] opacity-20 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{"Let's Build Something Amazing"}</h2>
                    <p className="text-xl text-white-300">
                        {"Ready to transform your digital presence? Let's discuss how we can help your business grow."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-oxford-300/50 backdrop-blur-sm rounded-lg p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white-300 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white-300 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-white-300 mb-2">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white-300 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                    placeholder="Your company name"
                                />
                            </div>
                            <div>
                                <label htmlFor="projectType" className="block text-white-300 mb-2">Project Type</label>
                                <select
                                    id="projectType"
                                    className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white-300 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                >
                                    <option value="">Select project type</option>
                                    <option value="website">Website Development</option>
                                    <option value="system">Custom Web System</option>
                                    <option value="optimization">Performance Optimization</option>
                                    <option value="wordpress">WordPress Development</option>
                                    <option value="velo">Velo Framework</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white-300 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="tech-button group w-full flex items-center justify-center gap-2"
                            >
                                Send Message
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-oxford-300/50 backdrop-blur-sm rounded-lg p-8">
                            <h3 className="text-xl font-semibold mb-4">Prefer to talk?</h3>
                            <p className="text-white-300 mb-6">
                                Schedule a call with our team to discuss your project in detail.
                            </p>
                            <button className="tech-button group flex items-center gap-2">
                                Schedule a Call
                                <span className="w-2 h-2 rounded-full bg-turquoise-500 group-hover:bg-munsell-500 transition-colors"></span>
                            </button>
                        </div>

                        <div className="bg-oxford-300/50 backdrop-blur-sm rounded-lg p-8">
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <ul className="space-y-4 text-white-300">
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    contact@simanstudio.com
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +1 (555) 123-4567
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
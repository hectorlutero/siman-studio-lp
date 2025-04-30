import { ArrowRight } from "lucide-react";

const content = {
    title: "Let's Build Something Amazing",
    description: "Ready to transform your digital presence? Let's discuss how we can help your business grow.",
    form: {
        fields: [
            {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "Your name"
            },
            {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "your@email.com"
            },
            {
                id: "company",
                label: "Company",
                type: "text",
                placeholder: "Your company name"
            },
            {
                id: "projectType",
                label: "Project Type",
                type: "select",
                options: [
                    { value: "", label: "Select project type" },
                    { value: "website", label: "Website Development" },
                    { value: "system", label: "Custom Web System" },
                    { value: "optimization", label: "Performance Optimization" },
                    { value: "wordpress", label: "WordPress Development" },
                    { value: "velo", label: "Velo Framework" }
                ]
            },
            {
                id: "message",
                label: "Message",
                type: "textarea",
                placeholder: "Tell us about your project..."
            }
        ],
        submitButton: {
            text: "Send Message",
            icon: ArrowRight
        }
    },
    contactInfo: {
        talk: {
            title: "Prefer to talk?",
            description: "Schedule a call with our team to discuss your project in detail.",
            button: {
                text: "Schedule a Call",
                iconColor: "turquoise",
                hoverColor: "munsell"
            }
        },
        details: {
            title: "Contact Information",
            items: [
                {
                    icon: (
                        <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    ),
                    text: "contact@simanstudio.com"
                },
                {
                    icon: (
                        <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    ),
                    text: "+1 (555) 123-4567"
                }
            ]
        }
    }
};

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
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="block text-white tech-heading">{content.title}</span>
                    </h2>
                    <p className="text-xl text-white-300">
                        {content.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-oxford-300/50 backdrop-blur-sm rounded-lg p-8">
                        <form className="space-y-6">
                            {content.form.fields.map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={field.id} className="block text-white-300 mb-2">{field.label}</label>
                                    {field.type === 'select' ? (
                                        <select
                                            id={field.id}
                                            className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                        >
                                            {field.options?.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            id={field.id}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white-300 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                            placeholder={field.placeholder}
                                        ></textarea>
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            className="w-full px-4 py-3 rounded-lg bg-oxford-400/50 border border-oxford-500 text-white-300 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-colors"
                                            placeholder={field.placeholder}
                                        />
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="tech-button group w-full flex items-center justify-center gap-2"
                            >
                                {content.form.submitButton.text}
                                <content.form.submitButton.icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-oxford-300/50 backdrop-blur-sm rounded-lg p-8">
                            <h3 className="text-xl font-semibold mb-4">{content.contactInfo.talk.title}</h3>
                            <p className="text-white-300 mb-6">
                                {content.contactInfo.talk.description}
                            </p>
                            <button className="tech-button group flex items-center gap-2">
                                {content.contactInfo.talk.button.text}
                                <span className={`w-2 h-2 rounded-full bg-${content.contactInfo.talk.button.iconColor}-500 group-hover:bg-${content.contactInfo.talk.button.hoverColor}-500 transition-colors`}></span>
                            </button>
                        </div>

                        <div className="bg-oxford-300/50 backdrop-blur-sm rounded-lg p-8">
                            <h3 className="text-xl font-semibold mb-4">{content.contactInfo.details.title}</h3>
                            <ul className="space-y-4 text-white-300">
                                {content.contactInfo.details.items.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        {item.icon}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
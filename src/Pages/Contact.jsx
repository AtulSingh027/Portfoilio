import React from 'react'
import { Mail, Phone, MessageCircle, Instagram,Github,Linkedin } from 'lucide-react'

export default function Contact() {
    const contactDetails = [
        {
            label: 'Email',
            value: 'vishwakarmad2337@gmail.com',
            icon: <Mail className="w-6 h-6" />,
            link: 'mailto:vishwakarmad2337@gmail.com'
        },
        {
            label: 'WhatsApp',
            value: '+91 9516886127',
            icon: <MessageCircle className="w-6 h-6" />,
            link: 'https://wa.me/919516886127'
        },
        {
            label: 'Phone',
            value: '+91 9516886127',
            icon: <Phone className="w-6 h-6" />,
            link: 'tel:+919516886127'
        },
        {
            label: 'Instagram',
            value: '_deep_vish_',
            icon: <Instagram className="w-6 h-6" />,
            link: 'https://instagram.com/_deep_vish_'
        },
        {
            label: 'GitHub',
            value: 'github.com/deepak-vishawakarma',
            icon: <Github className="w-6 h-6"/>,
            link: 'https://github.com/deepak-vishawakarma'
        },
        {
            label: 'LinkedIn',
            value: 'linkedin.com/in/deepak-vishwakarma-592424326',
            icon: <Linkedin className="w-6 h-6" />,
            link: 'https://www.linkedin.com/in/deepak-vishwakarma-592424326'
        }
    ]

    return (
        <div className="bg-slate-100 min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">GET IN TOUCH</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Feel free to reach out through any of the following channels
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactDetails.map((detail, index) => (
                        <a 
                            href={detail.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            key={index} 
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                                    {detail.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{detail.label}</h3>
                            </div>
                            <p className="text-gray-600 break-words">{detail.value}</p>
                        </a>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="mt-16 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="Your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea 
                                id="message" 
                                rows="4" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
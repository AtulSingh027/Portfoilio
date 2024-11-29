import React from 'react'
import "./Contact.css"


export default function Contact() {
    const contactDetails = [
        {
            label: 'Email',
            value: 'youremail@gmail.com'
        },
        {
            label: 'WhatsApp',
            value: '+1 (123) 456-7890'
        },
        {
            label: 'Phone',
            value: '+1 (987) 654-3210'
        },
        {
            label: 'Instagram',
            value: '@your_instagram_handle'
        },
        {
            label: 'GitHub',
            value: 'your-github-username'
        },
        {
            label: 'LinkedIn',
            value: 'your-linkedin-profile'
        }
    ]

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Information</h2>
            <div className="contact-info-grid">
                {contactDetails.map((detail, index) => (
                    <div key={index} className="contact-info-item">
                        {detail.icon}
                        <div className="contact-info-details">
                            <div className="contact-info-label">{detail.label}</div>
                            <div className="contact-info-value">{detail.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
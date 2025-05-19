import React from 'react'

const servicesData = [
  {
    title: "Web Development",
    description: "Modern and responsive websites tailored to your needs.",
    icon: "💻"
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for Android and iOS.",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    description: "Clean, modern, and user-friendly interfaces.",
    icon: "🎨"
  },
  {
    title: "SEO Optimization",
    description: "Boost your website's visibility on search engines.",
    icon: "🚀"
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-subheading">We offer a wide range of digital solutions to grow your business.</p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
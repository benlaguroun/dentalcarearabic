import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const PublicServices: React.FC = () => {
  const services = [
    {
      id: "general",
      title: "General Dentistry",
      description:
        "Our general dentistry services focus on preventive care and maintaining your oral health.",
      image:
        "https://plus.unsplash.com/premium_photo-1661582103683-9f4757c91f0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      treatments: [
        {
          name: "Dental Cleaning",
          price: "$120",
          description: "Professional cleaning to remove plaque and tartar.",
        },
        {
          name: "Dental Examination",
          price: "$80",
          description: "Comprehensive examination of teeth, gums, and mouth.",
        },
        {
          name: "Dental Fillings",
          price: "$150+",
          description: "Filling cavities with composite resin material.",
        },
        {
          name: "Dental X-Rays",
          price: "$75",
          description: "Digital x-rays to detect hidden dental issues.",
        },
      ],
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with our range of cosmetic dental procedures.",
      image:
        "https://plus.unsplash.com/premium_photo-1661538990160-4468349e14c7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      treatments: [
        {
          name: "Teeth Whitening",
          price: "$350",
          description:
            "Professional whitening to remove stains and discoloration.",
        },
        {
          name: "Dental Veneers",
          price: "$1,500+ per tooth",
          description:
            "Custom shells to cover front surface of teeth for a beautiful smile.",
        },
        {
          name: "Dental Bonding",
          price: "$300+ per tooth",
          description:
            "Repair chipped or cracked teeth with tooth-colored resin.",
        },
        {
          name: "Smile Makeover",
          price: "Varies",
          description: "Comprehensive treatment plan to transform your smile.",
        },
      ],
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description:
        "Straighten your teeth and correct bite issues with our orthodontic treatments.",
      image:
        "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      treatments: [
        {
          name: "Traditional Braces",
          price: "$3,000+",
          description:
            "Metal braces to straighten teeth and correct bite issues.",
        },
        {
          name: "Clear Aligners",
          price: "$4,000+",
          description: "Invisible aligners for discreet teeth straightening.",
        },
        {
          name: "Retainers",
          price: "$300+",
          description:
            "Custom retainers to maintain teeth alignment after treatment.",
        },
        {
          name: "Orthodontic Consultation",
          price: "$100",
          description:
            "Evaluation and treatment planning for orthodontic needs.",
        },
      ],
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      description:
        "Specialized dental care for children in a friendly and comfortable environment.",
      image:
        "https://plus.unsplash.com/premium_photo-1661582573208-b4070a686198?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      treatments: [
        {
          name: "Child Dental Exam",
          price: "$70",
          description: "Gentle examination tailored for young patients.",
        },
        {
          name: "Fluoride Treatment",
          price: "$40",
          description: "Preventive treatment to strengthen tooth enamel.",
        },
        {
          name: "Dental Sealants",
          price: "$50 per tooth",
          description: "Protective coating to prevent cavities in molars.",
        },
        {
          name: "Child-Friendly Education",
          price: "Included",
          description: "Fun and educational approach to dental hygiene.",
        },
      ],
    },
    {
      id: "surgical",
      title: "Oral Surgery",
      description:
        "Expert surgical procedures to address complex dental issues.",
      image:
        "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      treatments: [
        {
          name: "Tooth Extraction",
          price: "$200+",
          description: "Removal of damaged or problematic teeth.",
        },
        {
          name: "Wisdom Teeth Removal",
          price: "$350+ per tooth",
          description: "Extraction of impacted or problematic wisdom teeth.",
        },
        {
          name: "Dental Implants",
          price: "$3,000+ per implant",
          description: "Artificial tooth root to support replacement teeth.",
        },
        {
          name: "Bone Grafting",
          price: "$500+",
          description: "Procedure to rebuild jaw bone for implant placement.",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Dental Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive dental care for patients of all ages. We offer a
              wide range of services to meet your oral health needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`mb-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } lg:flex lg:items-center lg:gap-12`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Treatments & Pricing
                  </h3>
                  <div className="space-y-4">
                    {service.treatments.map((treatment, i) => (
                      <div
                        key={i}
                        className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-gray-900">
                            {treatment.name}
                          </h4>
                          <span className="text-blue-600 font-medium">
                            {treatment.price}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {treatment.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Insurance & Payment Options
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with most major insurance providers and offer flexible
              payment options
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Accepted Insurance Plans
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Delta Dental</li>
                  <li>• Blue Cross Blue Shield</li>
                  <li>• Cigna</li>
                  <li>• Aetna</li>
                  <li>• MetLife</li>
                  <li>• Guardian</li>
                  <li>• United Healthcare</li>
                  <li>• And many more...</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Please contact our office to verify your specific insurance
                  coverage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Payment Options
                </h3>
                <p className="text-gray-600 mb-4">
                  We strive to make dental care accessible and offer several
                  payment options:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cash, check, and all major credit cards</li>
                  <li>• Flexible payment plans</li>
                  <li>• CareCredit dental financing</li>
                  <li>• In-house membership plan for uninsured patients</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Our team will work with you to find the best payment solution
                  for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book an appointment today and take the first step towards a
            healthier smile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicServices;

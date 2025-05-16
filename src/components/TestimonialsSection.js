"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const testimonials = [
  {
    name: "Uday Kiran Reddy",
    role: "Software Development Engineer, PayPal",
    image: "/testimonials/uday.png",
    linkedin: "https://www.linkedin.com/in/ukr26/",
    feedback: "Devashish is an incredibly talented and dedicated individual. His strong grasp of core computer science concepts and problem-solving mindset make him stand out in any team. We had the opportunity to work together on a Smart India Hackathon project and his collaborative nature and calm presence made the experience smooth and enjoyable. A true team player and a dependable contributor, Devashish is someone you’d always want on your side."
  },
  {
    name: "Bonagiri Sai Santosh",
    role: "Software Engineer, Oracle",
    image: "/testimonials/santosh.png",
    linkedin: "https://www.linkedin.com/in/sai-santosh-bonagiri-335168225/?originalSubdomain=in",
    feedback: "I had the pleasure of working closely with Devashish during our B.Tech years, collaborating on several projects and hackathons. His immense talent, dedication, and problem-solving abilities consistently stood out. Whether it was late-night brainstorming or tight deadlines, Devashish always brought innovative ideas and delivered high-quality work. His strong work ethic and technical acumen have rightly earned him opportunities at top tech giants like Providence and HSBC. It was truly a rewarding experience to work alongside someone as driven and skilled as Devashish."
  },
  {
    name: "Praneeth Katta",
    role: "Software Development Engineer, Zeta",
    image: "/testimonials/praneeth.png",
    linkedin: "https://www.linkedin.com/in/praneeth-katta-964646233/",
    feedback: "I’ve had the pleasure of knowing Devashish Mudigonda, and I can confidently say that he is one of the most hardworking and passionate developers I’ve met. His dedication to learning and building impactful solutions—whether it’s through his work with web development, automation tools, or real-time image processing—truly sets him apart. His internships at HSBC and Providence India, combined with his active participation in hackathons and extracurriculars, reflect his drive and commitment to excellence. Devashish brings energy, curiosity, and technical depth to every project he takes on."
  },
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const intervalSeconds = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % testimonials.length);
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = testimonials.slice(startIndex, startIndex + 3).concat(
    testimonials.slice(0, Math.max(0, startIndex + 3 - testimonials.length))
  );

  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="page-title text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
                {testimonial.linkedin && (
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    aria-label={`LinkedIn of ${testimonial.name}`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const testimonials = [
  { name: "Rohit Sharma", text: "Very caring doctor. Excellent treatment." },
  {
    name: "Priya Das",
    text: "Friendly and knowledgeable. Highly recommended.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="testimonial-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <p>“{t.text}”</p>
          <h4>- {t.name}</h4>
        </motion.div>
      ))}
    </section>
  );
}

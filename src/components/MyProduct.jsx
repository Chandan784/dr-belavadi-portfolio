"use client";
import { motion } from "framer-motion";

const brandLogo =
  "https://media.licdn.com/dms/image/v2/D560BAQHrJNCfK_w4TQ/company-logo_200_200/B56Zjg0nptHQAI-/0/1756118547518?e=1767830400&v=beta&t=5PnwSL0pbYWQfKKPwlWetml6ah_JVF2k_y7OdmjDSWA";

const stats = [
  { value: "15+", title: "Specialised Formulations" },
  { value: "100%", title: "GMP Certified" },
  { value: "2", title: "Core Demographics" },
];

const products = [
  {
    name: "Vajiandro Leha",
    indications:
      "Erectile Dysfunction, Premature Ejaculation, Low Libido, Male Infertility, Generalised Weakness, Stress-related Fatigue, Low Testosterone",
    ingredients:
      "Kaunch Beej, Safed Musli, Gokhru, Kharjura, Ashwagandha, Shilajit, Swarna Bhasma, Rajat Bhasma",
    dosage: "5–10 gm at bedtime with warm milk or water",
  },
  {
    name: "Vajiandro Powder",
    indications:
      "Boosts sperm production & quality, improves libido and stamina, reduces fatigue, improves digestion and sleep",
    ingredients:
      "Shuddha Shilajit, Loha Bhasma, Trivang Bhasma, Vang Bhasma, Shatavari, Safed Musli, Kaunch Beej, Makhana",
    dosage: "½ to 1 tsp thrice daily with warm milk or water",
  },
  {
    name: "Vajiandro Capsule",
    indications:
      "Improves libido, stamina, blood circulation, erectile strength; natural aphrodisiac & adaptogen",
    ingredients:
      "Horny Goat Weed Extract, Maca Root, Tongkat Ali, L-Arginine, Panax Ginseng, Yohimbine",
    dosage: "1 capsule at bedtime",
  },
];

export default function MyProducts() {
  return (
    <section id="products" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white p-4 rounded-full shadow-md border">
            <img
              src={brandLogo}
              alt="VajiAndro Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            VajiAndro Product Portfolio
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-5 text-gray-600 md:text-lg max-w-3xl mx-auto">
            Evidence-based Ayurvedic formulations combining traditional herbal
            wisdom with modern nutritional science for long-term wellness.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border bg-indigo-50 px-6 py-8 text-center"
            >
              <h3 className="text-4xl font-bold text-indigo-600">
                {item.value}
              </h3>
              <p className="mt-2 font-semibold text-gray-900">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Products */}
        <div className="mt-20 space-y-10">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                {product.name}
              </h3>

              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Indications
                  </p>
                  <p>{product.indications}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Key Ingredients
                  </p>
                  <p>{product.ingredients}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Dosage</p>
                  <p>{product.dosage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

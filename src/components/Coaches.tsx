import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteConfig } from "@/config";

export const Coaches = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="coaches" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Наши тренеры
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
          {siteConfig.coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{coach.name}</CardTitle>
                  <CardDescription className="text-base font-medium">
                    {coach.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{coach.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


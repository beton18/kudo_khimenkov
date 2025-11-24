import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config";

export const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="schedule" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Расписание занятий
        </motion.h2>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left">День недели</th>
                <th className="px-6 py-4 text-left">Время</th>
                <th className="px-6 py-4 text-left">Группа</th>
                <th className="px-6 py-4 text-left">Тренер</th>
              </tr>
            </thead>
            <tbody>
              {siteConfig.schedule.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">{item.day}</td>
                  <td className="px-6 py-4 font-medium">{item.time}</td>
                  <td className="px-6 py-4">{item.group}</td>
                  <td className="px-6 py-4">{item.coach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};


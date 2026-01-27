import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Users, Stethoscope, Rocket } from "lucide-react";

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const audiences = [
    {
      icon: MessageSquare,
      title: "Empresas que vendem pelo WhatsApp",
      description: "Automatize atendimento e vendas no canal mais usado do Brasil.",
    },
    {
      icon: Users,
      title: "Times comerciais e pré-vendas",
      description: "Qualifique leads antes de chegar ao seu time de vendas.",
    },
    {
      icon: Stethoscope,
      title: "Clínicas e prestadores de serviço",
      description: "Agende consultas e atenda pacientes automaticamente.",
    },
    {
      icon: Rocket,
      title: "Negócios que querem escala",
      description: "Cresça sem aumentar proporcionalmente sua equipe.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Para quem é a <span className="text-gradient">Conversio AI</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Ideal para empresas que querem converter mais sem aumentar complexidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                <audience.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

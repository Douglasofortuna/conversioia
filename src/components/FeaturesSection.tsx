import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  Brain,
  Calendar,
  Link2,
  HeartHandshake,
  BarChart3,
} from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Clock,
      title: "Atendimento automático 24/7",
      description: "Nunca perca uma oportunidade, mesmo fora do horário comercial.",
    },
    {
      icon: Brain,
      title: "Qualificação inteligente de leads",
      description: "Perguntas estratégicas que identificam os melhores prospects.",
    },
    {
      icon: Calendar,
      title: "Agendamento e follow-ups",
      description: "Automatize reuniões e acompanhamentos sem esforço.",
    },
    {
      icon: Link2,
      title: "Integração com CRM e sistemas",
      description: "Conecte com as ferramentas que você já usa.",
    },
    {
      icon: HeartHandshake,
      title: "Pós-venda e retenção",
      description: "Mantenha clientes engajados após a conversão.",
    },
    {
      icon: BarChart3,
      title: "Métricas claras de conversão",
      description: "Dashboard completo para acompanhar resultados.",
    },
  ];

  return (
    <section id="recursos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Recursos
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que a <span className="text-gradient">Conversio AI</span> faz
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Tudo que você precisa para transformar conversas em resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl shadow-card border border-border p-6 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

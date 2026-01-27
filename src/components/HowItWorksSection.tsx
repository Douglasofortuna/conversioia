import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Bot, Brain, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "O lead inicia a conversa",
      description: "WhatsApp, Instagram ou site.",
      color: "bg-primary",
    },
    {
      number: "2",
      icon: Bot,
      title: "A IA assume o atendimento",
      description: "Responde em segundos, sem filas ou atrasos.",
      color: "bg-primary",
    },
    {
      number: "3",
      icon: Brain,
      title: "Qualificação inteligente",
      description: "Perguntas estratégicas, contexto e intenção.",
      color: "bg-primary",
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Conversão ou encaminhamento",
      description: "Venda, agendamento ou atendimento humano.",
      color: "bg-green-500",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            4 passos simples
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como funciona
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Da primeira mensagem à conversão em poucos passos automatizados.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-primary opacity-20" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  {/* Step card */}
                  <div className="bg-card rounded-2xl shadow-card border border-border p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    {/* Number badge */}
                    <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-primary-foreground font-bold text-xl mb-4`}>
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>

                  {/* Arrow connector (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 z-10">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-primary rotate-45" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

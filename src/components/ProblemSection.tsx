import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, Clock, MessageSquareOff, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Clock,
      text: "Leads entram em contato e não recebem resposta rápida",
    },
    {
      icon: XCircle,
      text: "Atendimento humano sobrecarregado",
    },
    {
      icon: MessageSquareOff,
      text: "Conversas sem estratégia, sem follow-up e sem conversão",
    },
    {
      icon: TrendingDown,
      text: "Oportunidades perdidas todos os dias",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-conversio-dark text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Toda empresa conversa muito…
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
            Mas converte pouco.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-lg text-white/80">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl lg:text-2xl text-white/60 mb-2">
            Conversar não é suficiente.
          </p>
          <p className="text-2xl lg:text-3xl font-bold text-gradient">
            É preciso converter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

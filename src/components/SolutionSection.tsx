import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, MessageSquare, Zap, Target } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MessageSquare,
      title: "Entende",
      subtitle: "Contexto e intenção",
      delay: 0.2,
    },
    {
      icon: Zap,
      title: "Responde",
      subtitle: "Em segundos",
      delay: 0.3,
    },
    {
      icon: Target,
      title: "Qualifica",
      subtitle: "Leads com precisão",
      delay: 0.4,
    },
    {
      icon: Sparkles,
      title: "Converte",
      subtitle: "Em resultados",
      delay: 0.5,
      isAccent: true,
    },
  ];

  return (
    <section id="solucao" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Solução
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A <span className="text-gradient">Conversio AI</span> é a inteligência
            <br /> por trás das suas conversas.
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ela entende, responde, qualifica e conduz cada conversa com um objetivo claro: 
            <span className="font-semibold text-foreground"> gerar resultado.</span>
          </p>
        </motion.div>

        {/* Visual representation */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Central circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow"
            >
              <div className="text-center text-primary-foreground">
                <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-1 lg:mb-2" />
                <span className="font-bold text-sm lg:text-lg">Conversio AI</span>
              </div>
            </motion.div>

            {/* Connecting lines - desktop only */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              <svg className="w-full h-[400px] max-w-[600px] mx-auto" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
                {/* Lines from center to features */}
                <line x1="300" y1="80" x2="200" y2="200" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                <line x1="300" y1="80" x2="400" y2="200" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                <line x1="300" y1="80" x2="200" y2="320" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                <line x1="300" y1="80" x2="400" y2="320" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(213, 68%, 48%)" />
                    <stop offset="100%" stopColor="hsl(195, 90%, 50%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Feature cards - 2x2 grid centered below circle */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12 w-full max-w-lg relative z-20">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.25, 
                    delay: feature.delay, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className="flex justify-center"
                >
                  <div className="bg-[#F9FAFB] dark:bg-card rounded-xl shadow-sm border border-border/50 p-4 lg:p-5 w-full transition-shadow duration-200 ease-in-out hover:shadow-md">
                    <div className={`w-10 h-10 rounded-lg ${feature.isAccent ? 'bg-accent/20' : 'bg-[#3B82F6]/10'} flex items-center justify-center mb-3`}>
                      <feature.icon className={`w-5 h-5 ${feature.isAccent ? 'text-accent' : 'text-[#3B82F6]'}`} />
                    </div>
                    <h3 className="font-semibold text-sm lg:text-base text-foreground">{feature.title}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground mt-0.5">{feature.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

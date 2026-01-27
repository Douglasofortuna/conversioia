import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, MessageSquare, Zap, Target } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          transition={{ duration: 0.6 }}
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Central circle */}
            <div className="relative z-10 w-40 h-40 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <div className="text-center text-primary-foreground">
                <Sparkles className="w-10 h-10 mx-auto mb-2" />
                <span className="font-bold text-lg">Conversio AI</span>
              </div>
            </div>

            {/* Connecting lines and features */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full max-w-[600px] max-h-[400px]" viewBox="0 0 600 400">
                {/* Lines from center to features */}
                <line x1="300" y1="200" x2="100" y2="100" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <line x1="300" y1="200" x2="500" y2="100" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <line x1="300" y1="200" x2="100" y2="300" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <line x1="300" y1="200" x2="500" y2="300" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(213, 68%, 48%)" />
                    <stop offset="100%" stopColor="hsl(195, 90%, 50%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-8 mt-[-60px] relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex justify-end"
              >
                <div className="bg-card rounded-xl shadow-card border border-border p-5 max-w-[200px]">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">Entende</p>
                  <p className="text-xs text-muted-foreground">Contexto e intenção</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-card rounded-xl shadow-card border border-border p-5 max-w-[200px]">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">Responde</p>
                  <p className="text-xs text-muted-foreground">Em segundos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex justify-end mt-8"
              >
                <div className="bg-card rounded-xl shadow-card border border-border p-5 max-w-[200px]">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">Qualifica</p>
                  <p className="text-xs text-muted-foreground">Leads com precisão</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <div className="bg-card rounded-xl shadow-card border border-border p-5 max-w-[200px]">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <p className="font-semibold text-sm">Converte</p>
                  <p className="text-xs text-muted-foreground">Em resultados</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

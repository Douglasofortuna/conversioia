import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const features = [
    { icon: MessageSquare, text: "Atenda clientes 24/7 sem perder oportunidades" },
    { icon: Users, text: "Qualifique e converta leads automaticamente" },
    { icon: TrendingUp, text: "Reduza custos operacionais e aumente ROI" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              IA para Atendimento e Vendas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Transforme conversas em <span className="text-gradient">conversões</span> com IA.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              A Conversio AI automatiza atendimento, qualifica leads e agenda mais consultas, tudo em um único fluxo
              inteligente de conversação.
            </motion.p>

            {/* Feature bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/80">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="cta" size="xl" className="group" asChild>
                <a
                  href="https://wa.me/5548991902606?text=Olá, vim do site e gostaria de saber mais sobre a ConversioAI."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👉 Testar a Conversio AI
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Chat mockup */}
              <div className="bg-card rounded-2xl shadow-xl border border-border p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Conversio AI</p>
                    <p className="text-xs text-muted-foreground">Online agora</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Bot message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                      <p className="text-sm">Olá! 👋 Bem-vinda à Clínica Belezza. Como posso ajudar?</p>
                    </div>
                  </motion.div>

                  {/* User message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-gradient-primary text-primary-foreground rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]">
                      <p className="text-sm">Oi! Quero agendar um preenchimento labial 💋</p>
                    </div>
                  </motion.div>

                  {/* Bot response */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                      <p className="text-sm">
                        Ótima escolha! ✨ Temos horários disponíveis amanhã às 14h ou 16h. Qual prefere?
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex items-center gap-2 mt-4 pt-4 border-t border-border"
                >
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-primary rounded-full animate-bounce opacity-50"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-primary rounded-full animate-bounce opacity-50"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-primary rounded-full animate-bounce opacity-50"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                  <span className="text-xs text-muted-foreground">Qualificando lead...</span>
                </motion.div>
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+47%</p>
                    <p className="text-xs text-muted-foreground">Conversões</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">24/7</p>
                    <p className="text-xs text-muted-foreground">Atendimento</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

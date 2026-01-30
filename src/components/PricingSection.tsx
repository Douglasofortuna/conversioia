import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Start",
      tagline: "Automatize seu atendimento em minutos.",
      description: "O plano ideal para começar a usar IA no atendimento sem complicação.",
      color: "border-green-500",
      tagColor: "bg-green-500",
      features: [
        "Conversio Assist",
        "1 canal de atendimento",
        "Até 1.000 conversas/mês",
        "Respostas automáticas e FAQ",
        "Encaminhamento para humano",
        "Dashboard básico",
      ],
      value: "Atenda melhor. Sem aumentar equipe.",
      cta: "Começar com Start",
      popular: false,
    },
    {
      name: "Pro",
      tagline: "Converse com leads. Converta em vendas.",
      description: "IA completa para atendimento e pré-vendas.",
      color: "border-primary",
      tagColor: "bg-primary",
      features: [
        "Conversio Assist + Conversio Sales",
        "Até 3 canais de atendimento",
        "Até 5.000 conversas/mês",
        "Qualificação inteligente de leads",
        "Agendamento automático",
        "Follow-ups inteligentes",
        "Integrações básicas",
        "Dashboard completo",
      ],
      value: "Cada conversa com um objetivo claro: vender.",
      cta: "Escolher plano Pro",
      popular: true,
    },
    {
      name: "Scale",
      tagline: "Escala, performance e inteligência total.",
      description: "Para empresas que tratam atendimento como estratégia de crescimento.",
      color: "border-violet-500",
      tagColor: "bg-violet-500",
      features: [
        "Conversio Assist + Sales + Support",
        "Canais ilimitados",
        "Conversas ilimitadas (fair use)",
        "IA treinada para o seu negócio",
        "Fluxos avançados e condicionais",
        "Pós-venda e retenção automatizados",
        "Integrações avançadas (CRM, ERP, API)",
        "Relatórios avançados",
        "Onboarding e suporte dedicado",
      ],
      value: "Atendimento inteligente no ritmo do seu crescimento.",
      cta: "Falar com especialista",
      popular: false,
    },
  ];

  return (
    <section id="planos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Planos
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Escolha o plano ideal
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Comece pequeno e escale conforme cresce.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative bg-card rounded-2xl shadow-card border-2 ${plan.popular ? 'border-primary shadow-glow' : 'border-border'} p-6 lg:p-8 flex flex-col`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Mais vendido
                  </div>
                </div>
              )}

              {/* Plan name badge */}
              <div className={`inline-flex w-fit px-3 py-1 rounded-full ${plan.tagColor} text-primary-foreground text-sm font-semibold mb-4`}>
                {plan.name}
              </div>

              <h3 className="text-xl font-bold mb-2">{plan.tagline}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Value proposition */}
              <p className="text-sm font-medium text-primary mb-6 pb-6 border-t border-border pt-6">
                "{plan.value}"
              </p>

              {/* CTA */}
              <Button
                variant={plan.popular ? "cta" : "heroOutline"}
                size="lg"
                className="w-full group"
                asChild
              >
                <a 
                  href={`https://wa.me/5548991902606?text=${encodeURIComponent(
                    plan.name === "Start" 
                      ? "Olá, vim do site e gostaria de saber mais sobre o plano Start."
                      : plan.name === "Pro"
                      ? "Olá, vim do site e gostaria de saber mais sobre o plano Pro."
                      : "Olá, vim do site e gostaria de saber mais sobre o plano Scale."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👉 {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

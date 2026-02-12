import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoConversio from "@/assets/logo-conversio.png";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoConversio} alt="Conversio AI" className="h-10 w-auto" />
            <span className="text-xl font-bold">
              Conversio <span className="text-gradient">AI</span>
            </span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Termos de Serviço</h1>
        <p className="text-muted-foreground mb-10">Última atualização: 12 de fevereiro de 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar os serviços da Conversio AI, você concorda com estes Termos de Serviço. Caso não concorde com algum dos termos aqui descritos, solicitamos que não utilize nossos serviços.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Descrição do Serviço</h2>
            <p>A Conversio AI é uma plataforma de atendimento inteligente que utiliza inteligência artificial para automatizar e otimizar a comunicação entre empresas e seus clientes através de canais como WhatsApp, Instagram e outros meios digitais.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Cadastro e Conta</h2>
            <p>Para utilizar nossos serviços, é necessário criar uma conta fornecendo informações verdadeiras e atualizadas. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Uso Adequado</h2>
            <p className="mb-3">Ao utilizar nossos serviços, você se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Não utilizar a plataforma para fins ilegais ou não autorizados.</li>
              <li>Não enviar mensagens de spam ou conteúdo abusivo através dos canais integrados.</li>
              <li>Respeitar a legislação vigente, incluindo o Código de Defesa do Consumidor e a LGPD.</li>
              <li>Não tentar acessar dados de outros usuários sem autorização.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Propriedade Intelectual</h2>
            <p>Todo o conteúdo, tecnologia, marca, design e algoritmos da Conversio AI são de propriedade exclusiva da empresa e protegidos por leis de propriedade intelectual. É proibida a reprodução, modificação ou distribuição sem autorização prévia por escrito.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Planos e Pagamentos</h2>
            <p>Os serviços são oferecidos em diferentes planos com funcionalidades e preços específicos. O pagamento deve ser realizado conforme as condições do plano contratado. A Conversio AI se reserva o direito de alterar preços mediante aviso prévio de 30 dias.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Cancelamento</h2>
            <p>Você pode cancelar sua assinatura a qualquer momento. Após o cancelamento, o acesso aos serviços será mantido até o final do período já pago. Não há reembolso proporcional para períodos parciais de uso.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Limitação de Responsabilidade</h2>
            <p>A Conversio AI não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso ou impossibilidade de uso dos serviços. Nossa responsabilidade total está limitada ao valor pago pelo usuário nos últimos 12 meses.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Disponibilidade do Serviço</h2>
            <p>Nos esforçamos para manter nossos serviços disponíveis 24/7, porém não garantimos disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência sempre que possível.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Alterações nos Termos</h2>
            <p>Reservamo-nos o direito de atualizar estes Termos de Serviço periodicamente. Alterações significativas serão comunicadas por e-mail ou através da plataforma. O uso continuado dos serviços após as alterações constitui aceitação dos novos termos.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Contato</h2>
            <p>Para dúvidas sobre estes Termos de Serviço, entre em contato pelo e-mail: <a href="mailto:contato@conversioai.com.br" className="text-primary hover:underline">contato@conversioai.com.br</a></p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoConversio from "@/assets/logo-conversio.png";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-10">Última atualização: 12 de fevereiro de 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introdução</h2>
            <p>A Conversio AI ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações ao utilizar nossos serviços e plataforma.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Dados Coletados</h2>
            <p className="mb-3">Podemos coletar os seguintes tipos de dados:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Dados de identificação:</strong> nome, e-mail, telefone e dados da empresa.</li>
              <li><strong className="text-foreground">Dados de uso:</strong> informações sobre como você interage com nossa plataforma, incluindo páginas visitadas, funcionalidades utilizadas e tempo de sessão.</li>
              <li><strong className="text-foreground">Dados de comunicação:</strong> mensagens trocadas através dos canais de atendimento integrados (WhatsApp, Instagram, etc.).</li>
              <li><strong className="text-foreground">Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional e informações de dispositivo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Uso dos Dados</h2>
            <p className="mb-3">Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer e melhorar nossos serviços de atendimento com inteligência artificial.</li>
              <li>Personalizar a experiência do usuário na plataforma.</li>
              <li>Enviar comunicações relevantes sobre atualizações, novidades e suporte.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>Analisar métricas de desempenho e melhorar nossos algoritmos de IA.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Armazenamento e Segurança</h2>
            <p>Seus dados são armazenados em servidores seguros com criptografia de ponta a ponta. Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou destruição. Os dados são retidos apenas pelo tempo necessário para cumprir as finalidades descritas nesta política.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Seus Direitos (LGPD)</h2>
            <p className="mb-3">De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento de seus dados pessoais.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Compartilhamento de Dados</h2>
            <p>Não vendemos seus dados pessoais. Podemos compartilhar informações com parceiros de confiança apenas quando necessário para a prestação dos serviços, sempre em conformidade com esta política e com a legislação aplicável.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contato</h2>
            <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: <a href="mailto:contato@conversioai.com.br" className="text-primary hover:underline">contato@conversioai.com.br</a></p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

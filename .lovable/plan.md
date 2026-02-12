
# Plano: Criar Páginas de Política de Privacidade e Termos de Serviço

## O que será feito

Criar duas novas páginas legais para o site ConversioAI e atualizar os links no Footer para direcionarem corretamente.

## Páginas a criar

### 1. Política de Privacidade (`/politica-de-privacidade`)
- Página completa com conteúdo sobre coleta de dados, uso, armazenamento, cookies, direitos do usuário (LGPD), e contato
- Header com logo e botão de voltar para a home
- Layout limpo e legível com tipografia clara

### 2. Termos de Serviço (`/termos-de-servico`)
- Página completa com conteúdo sobre condições de uso, responsabilidades, propriedade intelectual, limitações e cancelamento
- Mesmo layout e estrutura da página de Privacidade

## Alterações Técnicas

### Novos arquivos
- `src/pages/PrivacyPolicy.tsx` -- página de Política de Privacidade
- `src/pages/TermsOfService.tsx` -- página de Termos de Serviço

### Arquivos modificados
- `src/App.tsx` -- adicionar as duas novas rotas (`/politica-de-privacidade` e `/termos-de-servico`)
- `src/components/Footer.tsx` -- atualizar os links "Privacidade" e "Termos de Uso" de `#` para as novas rotas usando `Link` do React Router

## Estilo das páginas
- Fundo branco, texto escuro com bom contraste
- Header simples com logo ConversioAI e link para voltar
- Conteúdo organizado em seções com H2 para cada tópico
- Footer reutilizado da página principal
- Design responsivo (mobile e desktop)

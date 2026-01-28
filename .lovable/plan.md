
# Plano: Corrigir Layout da Seção Solução no Mobile e desktop

## Problema Identificado

A seção "Solução" tem um design com um círculo central e 4 cards ao redor. No mobile, esse layout está quebrado porque:

1. O círculo central está sobrepondo os cards
2. O `margin-top: -60px` nos cards está causando colisão visual
3. O layout de grid 2 colunas não funciona bem com o círculo centralizado no mobile

## Solução Proposta

Criar um layout **responsivo** que:
- **Desktop**: Mantém o design atual com o círculo central e os 4 cards ao redor
- **Mobile**: Reorganiza para um layout vertical simples (círculo em cima, cards em lista abaixo)

## Alterações Técnicas

### Arquivo: `src/components/SolutionSection.tsx`

1. **Esconder SVG de linhas conectoras no mobile**
   - Adicionar classes `hidden lg:flex` no container do SVG

2. **Ajustar o margin-top negativo**
   - Mudar de `mt-[-60px]` para `mt-8 lg:mt-[-60px]`
   - Isso evita a sobreposição no mobile

3. **Reorganizar o grid de cards para mobile**
   - Adicionar `gap-4 lg:gap-8` para reduzir espaçamento no mobile
   - Ajustar posicionamento dos cards para ficarem centralizados no mobile

4. **Ajustar z-index e posicionamento**
   - Garantir que o círculo central e os cards não se sobreponham no mobile

## Resultado Esperado

- No **mobile**: Layout vertical limpo com círculo em cima e cards em coluna abaixo
- No **desktop**: Mantém o layout visual atual com linhas conectoras e cards distribuídos

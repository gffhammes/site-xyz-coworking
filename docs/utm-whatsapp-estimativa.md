# Estimativa de esforço: mensagens de WhatsApp por `utm_source`

## Objetivo

Implementar a leitura de um parâmetro configurável na URL para adaptar o texto das chamadas para WhatsApp conforme a origem da visita, com persistência da origem durante a navegação da mesma sessão.

Exemplos esperados:

- `utm_source=googleAds` -> mensagem voltada para Google Ads.
- `utm_source=instagram` -> mensagem voltada para Instagram.
- Outras origens podem receber um texto padrão de fallback.

Observação importante:

- O nome do parâmetro da URL deve ficar fácil de alterar depois, sem espalhar essa decisão pela base.
- A implementação deve ser organizada por cidade, permitindo definir mensagens e regras específicas por localidade.

## Recomendação de estrutura

Para facilitar manutenção futura, a solução deve seguir uma tabela única de definição, em vez de espalhar `if/else` por vários componentes.

Estrutura sugerida:

- Um arquivo central de definição do parâmetro da URL e das regras por cidade.
- Uma função única para resolver a mensagem com base no valor do parâmetro e na cidade.
- Persistência do valor capturado durante a sessão do usuário.
- Fallback para mensagem padrão quando a origem ou a cidade não forem mapeadas.

Isso permite adicionar novas origens sem alterar a lógica dos botões ou das páginas.

## Níveis de complexidade

### Nível 1: base simples

Escopo:

- Ler o parâmetro configurável da URL.
- Salvar a origem durante a sessão.
- Aplicar mensagem específica para até 2 ou 3 origens conhecidas.
- Usar fallback padrão para qualquer outra origem.

Complexidade: baixa.

Estimativa: 4 a 6 horas.

### Nível 2: estrutura organizada para manutenção

Escopo:

- Ler o parâmetro configurável da URL.
- Persistir a origem durante a navegação da sessão.
- Centralizar as definições em um arquivo único de configuração por cidade.
- Resolver mensagem por chave, com suporte a múltiplas origens e cidades.
- Aplicar a mesma regra aos principais CTAs de WhatsApp do site.

Complexidade: média.

Estimativa: 8 a 12 horas.

### Nível 3: solução mais completa

Escopo:

- Tudo do nível 2.
- Cobertura mais ampla dos pontos que geram WhatsApp no projeto.
- Padronização de fallback por página, cidade ou contexto de campanha.
- Validação de comportamento em desktop e mobile.
- Ajustes adicionais para evitar duplicação de regras.

Complexidade: média-alta.

Estimativa: 12 a 16 horas.

## Proposta recomendada para este projeto

Considerando a necessidade de aplicar a regra em todos os botões de WhatsApp e garantir estabilidade em desktop e mobile, a proposta mais adequada é o **Nível 3**.

| Atividade                                                                 | Horas estimadas |
| ------------------------------------------------------------------------- | --------------: |
| Definição da estrutura central do parâmetro e das regras por cidade       |             2 h |
| Leitura do parâmetro na URL e persistência durante a sessão               |             2 h |
| Implementação da regra única de resolução de mensagem por cidade          |             2 h |
| Adaptação de todos os botões/CTAs de WhatsApp para consumir a mesma regra |             3 h |
| Aplicação da regra no botão flutuante e demais pontos do site             |             2 h |
| Testes funcionais de navegação, fallback e persistência                   |             3 h |
| Ajustes finais de consistência e validação de comportamento               |             1 h |

| **Total estimado** | **15 h** |

Essa estimativa considera que a solução deve funcionar de forma consistente em todos os pontos de contato com WhatsApp, sem duplicar lógica e sem falhas de navegação entre páginas.

## Critério de manutenção futura

Para manter a solução simples de evoluir, a regra recomendada é:

1. Toda nova origem ou cidade entra apenas no arquivo central de definições.
2. A lógica de leitura da URL e persistência não deve ficar duplicada em componentes.
3. Mensagens novas devem ser adicionadas como entrada de configuração, não como regra espalhada na UI.

## Observação técnica

Se a intenção for rastrear apenas a origem da sessão atual, `sessionStorage` é suficiente e mais aderente ao comportamento esperado.
Se existir necessidade de persistir além da sessão do navegador, aí a solução deve migrar para `localStorage` ou outro mecanismo explícito, o que aumenta o escopo.

## Plano de ação sugerido

1. Definir um objeto central com o nome do parâmetro da URL e as regras por cidade.
2. Reaproveitar a captura e persistência da origem na sessão, sem duplicar leitura em componentes.
3. Criar uma função única que resolva a mensagem do WhatsApp com base na cidade e na origem capturada.
4. Aplicar essa função nos principais CTAs e no botão flutuante.
5. Validar os fluxos das cidades que terão regra específica e um fallback para as demais.

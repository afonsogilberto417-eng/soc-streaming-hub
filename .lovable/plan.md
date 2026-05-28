## Troca de posição: Seção de Teste e Seção de Preços

### Contexto
O componente `TesteSocialFlixSection` existe no projeto mas **não está sendo renderizado** na página principal (`Index.tsx`). A ordem atual é:

`Hero → Jornada → Acesso → Planos → Garantia → ...`

### O que será feito
1. Adicionar o import lazy de `TesteSocialFlixSection` em `src/pages/Index.tsx`
2. Inserir `<TesteSocialFlixSection />` na posição atual de `PlanosSection` (após `AcessoSection`)
3. Manter `PlanosSection` logo após `TesteSocialFlixSection`

### Nova ordem
`Hero → Jornada → Acesso → TesteSocialFlixSection → PlanosSection → Garantia → Compatibilidade → Avaliações → Vídeos → FAQ → Contato → Footer`

### Arquivo alterado
- `src/pages/Index.tsx`
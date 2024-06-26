---
title: "A melhor maneira de criar seus commits: Guia do Conventional Commits"
date: 2024-06-26
tags:
  - commit
  - guia
  - conventional-commits
  - DesenvolvimentoWeb
  - DicasDeProgramação
  - git
---
<img src="../Images/guia-conventional-commits.png" alt="" />

Fazer bons _commits_ em um projeto de desenvolvimento de software é crucial por várias razões. Eles ajudam a manter um histórico de mudanças claro e organizado, facilitando a navegação pelo histórico do projeto. Em equipes de desenvolvimento, _commits_ bem feitos facilitam a colaboração, permitindo que outros membros da equipe entendam rapidamente o propósito de uma mudança e como ela se integra ao restante do projeto. Bons _commits_ também permitem reverter mudanças específicas sem afetar o restante do projeto, o que é particularmente útil para identificar e corrigir _bugs_.

_Commits_ bem descritos funcionam como uma forma de documentação, registrando o raciocínio por trás de mudanças e decisões de design, o que é valioso para desenvolvedores futuros que possam precisar compreender o contexto das alterações. Além de uma mensagem clara e descritiva, um bom _commit_ precisa ter um título conciso com um resumo curto que descreva a mudança de maneira clara e precisa. Também é importante considerar o escopo e o tamanho de cada _commit_; cada _commit_ deve ter um escopo limitado e focado em uma única tarefa ou objetivo, facilitando a revisão e a reversão de mudanças, se necessário. Eles devem ser pequenos o suficiente para que a revisão aconteça de forma fácil, mas ao mesmo tempo, grandes o suficiente para serem significativos.

O <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">Conventional Commits</a> é uma convenção para escrever mensagens de _commit_ que ajuda a criar um histórico de _commits_ claro, consistente e estruturado. Essa convenção especifica um formato simples para as mensagens de _commit_, o que traz vários benefícios, como **padronização**, **automatização** e **clareza**. Alguns benefícios específicos incluem **histórico mais legível**, **geração automática de changelogs**, **versão semântica automatizada** (podemos usar as mensagens dos _commits_ para determinar automaticamente a nova versão do software - _major_, _minor_, _patch_) e **integração com ferramentas de CI/CD**.

Abaixo você confere o guia do Conventional Commits que preparei.

### 1. **Estrutura básica de um commit**

Um commit na convenção Conventional Commits possui a seguinte estrutura:

```
<type>(<scope>): <message>
```

- **type (tipo)**: Define a natureza da mudança (obrigatório).
- **scope (escopo)**: Indica a área do projeto afetada pela mudança (opcional).
- **message (mensagem)**: Descreve a mudança realizada de forma concisa e clara (obrigatório).

### 2. **Tipos de commits**

Os tipos mais comuns de commits incluem:

- **feat**: Uma nova funcionalidade ou recurso.
- **fix**: Correção de bugs.
- **chore**: Atualizações de tarefas de build, configurações ou outras tarefas de manutenção.
- **docs**: Alterações na documentação.
- **style**: Ajustes de formatação, semântica ou estilo de código.
- **refactor**: Refatoração do código existente, sem adição de funcionalidades ou correção de bugs.
- **test**: Adição ou modificação de testes.

### 3. **Exemplos de commit**

- `feat(auth): adiciona autenticação via token JWT`
- `fix(button): corrige erro de posicionamento em botões`
- `docs(readme): atualiza documentação com exemplos`
- `chore(deps): atualiza bibliotecas para as versões mais recentes`
- `style(header): ajusta estilos do cabeçalho`
- `refactor(api): simplifica lógica de roteamento`
- `test(login): adiciona testes para o sistema de login`

### 4. **Escopo (Scope)**

O escopo ajuda a identificar a área específica do projeto afetada pela mudança. Pode ser uma funcionalidade, um módulo, um componente, etc.

### 5. **Mensagem do commit**

- Use linguagem clara e concisa.
- Comece com uma letra maiúscula.
- Não termine a mensagem com ponto final.
- Se necessário, forneça detalhes adicionais no corpo da mensagem.

### 6. **Convenções adicionais**

- **Breaking Changes**: Se houver alterações incompatíveis, adicione uma seção de "Breaking Changes" após a mensagem do commit para indicar as mudanças que podem impactar os usuários.

### 7. **Exemplo de commit com BREAKING CHANGES**

```
feat(api): adiciona endpoint de busca

Adiciona um novo endpoint de busca na API.

BREAKING CHANGE: Altera a estrutura de resposta da busca.
```

<br>

Não esqueça de consultar a <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">documentação oficial do Conventional Commits</a> para saber mais.
<br>
Até a próxima! 🙂
<br>

---
<div style="display: flex; align-items: center; gap: 0.5rem;">
	<img src="https://github.com/jonathafernandes.png" style="border: 1px solid #514796; border-radius: 50%; width: 60px;" />
	<p>
		<strong>Jonatha Fernandes</strong>
		<br />
		<span style="opacity: 0.8;">Desenvolvedor Web</span>
	</p>
</div>

🔗 Saiba mais [[sobre mim]]


---
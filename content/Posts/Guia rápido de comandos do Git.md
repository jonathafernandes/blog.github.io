---
title: Guia rápido de comandos do Git
date: 2024-04-03
tags:
  - "#guia"
  - "#git"
  - "#github"
---
<img src="../Images/guia-rapido-git.png" alt="" />

Git é um sistema de controle de versão distribuído utilizado principalmente para rastrear e gerenciar mudanças no código-fonte durante o desenvolvimento de software. Ele permite que vários desenvolvedores trabalhem simultaneamente em um projeto, mantendo um histórico completo das alterações feitas ao longo do tempo. Com o Git, os usuários podem criar branches (ramificações) para desenvolver recursos ou corrigir bugs sem afetar a versão principal do código e, posteriormente, mesclar essas branches de volta à versão principal (normalmente conhecida como branch `master` ou `main`).

Usar o Git desde o início dos estudos em desenvolvimento web é fundamental por diversas razões. O Git oferece controle de versão, permitindo rastrear e gerenciar mudanças no código ao longo do tempo. Facilita a colaboração entre desenvolvedores, possibilitando que trabalhem simultaneamente em um projeto através do uso de branches. Além disso, aprender a usar o Git é uma habilidade prática essencial para qualquer desenvolvedor, promovendo uma abordagem estruturada e organizada ao desenvolvimento de software. Utilizar o Git também incentiva a adoção de melhores práticas de desenvolvimento, como commits frequentes e revisão de código.

Algo que me ajuda durante o trabalho e os estudos é ter sempre por perto um guia de comandos do Git para consultar, pois são muitos comandos.

## Configuração inicial

- `git config --global user.name "Seu Nome"`: Define o nome de usuário global para os commits.
- `git config --global user.email "seuemail@example.com"`: Define o e-mail global para os commits.
- `git init`: Inicializa um repositório Git em um diretório local.

## Criar e clonar repositórios

- `git clone <URL>`: Clona um repositório existente para o diretório atual.
- `git init`: Inicializa um novo repositório Git localmente.

## Trabalhando com commits

- `git add <arquivo(s)>`: Adiciona arquivos para o próximo commit.
- `git commit -m "Mensagem do commit"`: Cria um novo commit com os arquivos adicionados.
- `git commit --amend`: Modifica o commit mais recente.
- `git reset HEAD <arquivo(s)>`: Remove arquivos do próximo commit (mas mantém as modificações locais).
- `git add` + `git stash`: Commit temporário
- `git stash pop`: Recupera o código do commit temporário

## Ramificações e merging

- `git branch`: Lista todas as ramificações locais.
- `git branch <nome>`: Cria uma nova ramificação.
- `git checkout <nome>`: Muda para a ramificação especificada.
- `git merge <nome>`: Mescla uma ramificação com a ramificação atual.
- `git branch -d <nome>`: Deleta uma branch local.

## Visualizando mudanças

- `git status`: Exibe o status atual do repositório.
- `git diff`: Exibe as diferenças entre o diretório de trabalho e a área de stage.
- `git log`: Mostra o histórico de commits.

## Remoto

- `git remote add origin <URL>`: Adiciona um repositório remoto.
- `git push -u origin <branch>`: Envia os commits locais para o repositório remoto.
- `git pull`: Obtém e mescla as alterações do repositório remoto.

## Desfazendo alterações

- `git reset --hard`: Desfaz todas as alterações locais, redefinindo para a última versão commitada.
- `git revert <commit>`: Cria um novo commit que desfaz as alterações de um commit específico.

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
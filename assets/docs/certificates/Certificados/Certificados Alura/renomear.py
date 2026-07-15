import os
import shutil

# Caminho da pasta
pasta = r"D:\OneDrive\1.CienciasSociais\1. Academia\3. Cursos e Certificados\Certificados Alura"

# Mudar para a pasta
os.chdir(pasta)

# Lista de renomeamentos
renomeamentos = [
    ("Gustavo Paccelli da Costa - Curso UX Research_ entrevistas com usuários - Alura.pdf", "2022 - UX Research: entrevistas com usuários - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Research_ entrevistas com equipes internas - Alura.pdf", "2022 - UX Research: entrevistas com equipes internas - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso Data Analysis_ Google Sheets - Alura.pdf", "2022 - Data Analysis: Google Sheets - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Research_ pesquisa etnográfica - Alura.pdf", "2022 - UX Research: pesquisa etnográfica - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Research_ otimização de sites - Alura.pdf", "2022 - UX Research: otimização de sites - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Research_ análise de concorrentes - Alura.pdf", "2022 - UX Research: análise de concorrentes - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Research_ análise de sites com Google Analytics - Alura.pdf", "2022 - UX Research: análise de sites com Google Analytics - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Produto_ monitore, mensure e teste o seu projeto - Alura.pdf", "2022 - UX Produto: monitore, mensure e teste o seu projeto - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso Teste de usabilidade parte 2_ mensurando e entregando resultados - Alura.pdf", "2022 - Teste de usabilidade parte 2: mensurando e entregando resultados - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso Teste de usabilidade parte 1_ seu produto é fácil de usar_ - Alura.pdf", "2022 - Teste de usabilidade parte 1: seu produto é fácil de usar - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso Power BI_ explorando recursos visuais - Alura.pdf", "2022 - Power BI: explorando recursos visuais - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso Data Analysis_ previsões com Google Sheets - Alura.pdf", "2022 - Data Analysis: previsões com Google Sheets - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Research_ avaliação heurística - Alura.pdf", "2022 - UX Research: avaliação heurística - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Writing_ escrevendo textos para usuários - Alura.pdf", "2022 - UX Writing: escrevendo textos para usuários - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Design_ criando dashboard com Data Studio - Alura.pdf", "2022 - UX Design: criando dashboard com Data Studio - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Acessível_ projetando interfaces inclusivas - Alura.pdf", "2022 - UX Acessível: projetando interfaces inclusivas - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX Research_ mapeando a jornada do usuário - Alura.pdf", "2022 - UX Research: mapeando a jornada do usuário - Alura.pdf"),
    ("Gustavo Paccelli da Costa - Curso UX_ entenda a experiência de usuário - Alura.pdf", "2022 - UX: entenda a experiência de usuário - Alura.pdf"),
    ("Certificado - Data Analysis_ estatística com Google Sheets.pdf", "2022 - Data Analysis: estatística com Google Sheets - Alura.pdf"),
    ("certificate-analise-de-conteudo-61c334bcae1f2b5014378317.pdf", "2022 - Análise de Conteúdo - IBPAD.pdf"),
    ("certificate-transcricoes-semiautomatizadas-de-videos-e-entrevistas-61d58fdfeecca2643d2114a8.pdf", "2022 - Transcrições (semi)Automatizadas de Vídeos e Entrevistas - IBPAD.pdf"),
]

print("\n" + "="*80)
print("RENOMEANDO CERTIFICADOS")
print("="*80 + "\n")

sucesso = 0
erro = 0

for antigo, novo in renomeamentos:
    try:
        if os.path.exists(antigo):
            os.rename(antigo, novo)
            print(f"✓ {novo}")
            sucesso += 1
        else:
            print(f"✗ Não encontrado: {antigo}")
            erro += 1
    except Exception as e:
        print(f"✗ Erro: {antigo} - {str(e)}")
        erro += 1

print("\n" + "="*80)
print(f"RESULTADO: {sucesso} renomeados | {erro} erros")
print("="*80 + "\n")

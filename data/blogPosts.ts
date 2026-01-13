export interface BlogPostData {
  id: string;
  title: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content: string;
}

export const blogPosts: BlogPostData[] = [
  {
    id: '1',
    title: 'Atendimentos por ansiedade aumentam significativamente no SUS',
    date: '28 de abr. de 2025',
    readTime: '5 min read',
    imageUrl: '/images/ansiedade-opt.jpg',
    content: `Nos últimos anos, o Sistema Único de Saúde (SUS) registrou um crescimento expressivo nos atendimentos e internações relacionados a transtornos de ansiedade. Crianças e adolescentes estão entre os grupos que mais têm buscado acompanhamento, mostrando que o tema tem se tornado cada vez mais presente na vida das famílias.

O aumento dos casos está ligado a mudanças no cotidiano da população, como maior tempo em frente a telas, redes sociais e atividades digitais, além da redução da prática de exercícios físicos e da convivência social. Esses fatores têm sido associados ao aumento do sofrimento emocional entre jovens.

Segundo os dados do SUS, os atendimentos por ansiedade refletem uma tendência de maior procura por cuidados de saúde mental em todas as faixas etárias, reforçando a importância de atenção contínua e políticas públicas voltadas para prevenção, acolhimento e suporte.

O cenário mostra que a ansiedade se tornou uma questão relevante no país e que a população tem buscado cada vez mais apoio nos serviços de saúde.`
  },
  {
    id: '2',
    title: 'O luto além da perda: uma perspectiva psicanalítica',
    date: '12 de abr. de 2025',
    readTime: '6 min read',
    imageUrl: '/images/luto-opt.jpg',
    content: `Na psicanálise, o luto é compreendido como um processo natural diante da perda de algo ou alguém significativo. Freud, em seu ensaio Luto e Melancolia (1917), explica que o luto permite que a pessoa gradualmente se desligue do objeto perdido e reorganize sua vida emocional.

Quando perdemos um objetivo, um projeto ou algo que atribuíamos valor, também podemos experimentar luto. Esse processo não é uma doença nem algo que precise ser "curado" de imediato. Trata-se de um período em que a mente trabalha para integrar a perda, ajustar expectativas e buscar novos significados.

Freud diferencia o luto da melancolia: no luto, o objeto perdido é gradualmente abandonado do investimento emocional; na melancolia, ocorre uma identificação inconsciente com a perda, e a pessoa pode apresentar sofrimento intenso e sintomas clínicos.

Reconhecer o luto como um processo natural ajuda a respeitar o tempo emocional necessário para assimilar perdas, sejam elas pessoas, projetos ou objetivos que tiveram significado em nossa vida.`
  },
  {
    id: '3',
    title: 'O impacto emocional do fim de um relacionamento',
    date: '6 de abr. de 2025',
    readTime: '4 min read',
    imageUrl: '/images/relacionamento.jpg',
    content: `O fim de um relacionamento amoroso pode gerar um sofrimento intenso, muitas vezes subestimado socialmente. Diferente do luto pela morte, em que a perda é reconhecida de forma mais clara, o término envolve uma dor ligada à ferida narcisista: a sensação de que nosso valor pessoal depende do afeto do outro.

Quando o vínculo se rompe, é comum sentir que "não valemos mais" ou que algo essencial foi perdido em nós mesmos. Essa experiência evidencia como parte do sofrimento não está apenas na ausência do outro, mas na forma como nos percebemos diante dessa ausência.

Refletir sobre esse processo é fundamental: como podemos reconhecer nossa própria singularidade e valor sem depender do reconhecimento ou do amor do outro? O desafio do término é, também, uma oportunidade de reencontro consigo mesmo.`
  }
];

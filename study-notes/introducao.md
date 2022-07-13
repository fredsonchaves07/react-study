# Introdução

## O que é React?
- Uma biblioteca para criar interfaces de usuário
- Muito utilizado no desenvolvimento de SPA (Single Page Aplication)
- Next.js e Remix são exemplos de Frameworks que utilizam React

## SPA e SSR
- São formas de renderização de conteúdo
- O SPA é quando o browser se comunica com o backend e ele retorna os dados necessário para o cliente renderizar a página
- É usado o JSON para a comunicação entre o back e o front
- SSR é quando o browser se comunica diretamente com o servidor, retornando a página pronta (HTML, CSS, JS)

## Bundlers e Compilers
- São utilizado no processo de compilação e transpiração do código javascript para funcionar em diversos navegadores
- Existem diversos tipos de bundlers e compilers
- Neste projeto está sendo utilizado o `vite`

## Criando o primeiro projeto
- Necessário ter o Node instalado
- O comando baaixo cria um projeto usando vite

```shell
    npm create vite@latest
```

## Componentes
- São "pedaços" da aplicação que podem ser repetíveis não
- É uma função que retorna HTML + XML. A extenção do arquivo é `.jsx`
- Retorna um paragrafo de post

```react
    export function Post() {
    return <p>post</p>
}
```

- Renderiza o componente na aplicação

```react
    export function App() {
        return (
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
```

## Propriedades
- São informações que podem ser fornecidas aos componentes
- Reaproveitamento de elementos, estilização etc.
- São características que diferenciam um componente de outro
- É o mesmo componente, porém apresentam informações diferentes.

```react
    export function App() {
        return (
            <div>
                <Post author="Fredson Chaves" content="loren"/>
                <Post author="Ana Luiza" content="Novo post"/>
            </div>
        )
    }
```

- No componenente `Post` passamos o objeto `props` como parâmetro

```react
    export function Post(props) {
        return (
            <div>
                <strong>{props.author}</strong>
                <p>{props.content}</p>
            </div>
        )
    }
```
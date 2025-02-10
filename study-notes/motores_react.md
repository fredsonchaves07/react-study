# Motores do React

## JSX

- Podemos programar utilizando javascript dentro do html deixando a página mais dinâmica
- Usar o método map nas iterações de array é a forma mais recomendado JSX
- Forma correta de utilizar o map durante iteração para exibir o valor 

```javascript
array.map(item => <p>{item}</p>)
```

- Forma correta de adicionar um novo item em uma estrutura de array

```javascript
setItems(state ⇒ […state, novoItem])
```

## Declarativa

- É a forma que, na maioria das vezes, vamos programar as programações React
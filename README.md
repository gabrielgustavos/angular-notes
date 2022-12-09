# Angular

## Componentes

- Todo componente é uma classe TypeScript que deve ter um construtor, sendo este o primeiro método a ser executado.
- Cada componente é um diretório dentro de `src/components/` - Cada estágio de um componente é chamado de lifecycle.
- Cada lifecycle é um arquivo dentro do diretório do componente que pode ser reutilizado.
- Lifecycles:
- `ngOnInit()`: Executado quando o componente é inicializado e é o primeiro método a ser executado.
- `ngOnChanges()`: Executado quando uma propriedade do componente é alterada \* Obs: O método `ngOnChanges()` funciona apenas com propriedades do tipo `@Input()`

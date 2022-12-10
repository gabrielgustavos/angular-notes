# Angular Guia de Estudos

## Componentes

- Todo componente é uma classe TypeScript que deve ter um construtor, sendo este o primeiro método a ser executado.
- Cada componente é um diretório dentro de `src/components/` - Cada estágio de um componente é chamado de lifecycle.
- Cada lifecycle é um arquivo dentro do diretório do componente que pode ser reutilizado.

### Lifecycles:

- `ngOnInit()`: Executado quando o componente é inicializado e é o primeiro método a ser executado.
- `ngOnChanges()`: Executado quando uma propriedade do componente é alterada através de um binding (input).
- `ngDoCheck()`: Executado a cada ciclo de detecção de mudanças.
- `ngAfterContentInit()`: Executado após o conteúdo do componente ser inicializado.
- `ngAfterContentChecked()`: Executado a cada ciclo de detecção de mudanças do conteúdo do componente.
- `ngAfterViewInit()`: Executado após a view do componente ser inicializada.
- `ngAfterViewChecked()`: Executado a cada ciclo de detecção de mudanças da view do componente.
- `ngOnDestroy()`: Executado quando o componente é destruído.

<hr>

## Template Data Binding

### Interpolação

- `{{variavel}}` - Interpolação de variáveis.

### Property Binding

- `[propriedade]="value"`

### Event Binding

- `(evento)="funcao()"`

### Two-way Data Binding

- `[(ngModel)]="variavel"`

<hr>

## Diretivas

### Diretivas Estruturais

- `*ngIf="condicao"` - Mostra o elemento se a condição for verdadeira.

- `*ngIf="condicao; else elseBlock"` - Mostra o elemento se a condição for verdadeira, caso contrário mostra o bloco else.

- `*ngIf="condicao; then thenBlock else elseBlock"` - Mostra o bloco then se a condição for verdadeira, caso contrário mostra o bloco else.

- `*ngFor="let item of items"` - Repete o elemento para cada item da lista.

- `*ngFor="let item of items; index as i"` - Repete o elemento para cada item da lista e atribui o índice do item a variável i.

- `*ngFor="let item of items; trackBy: trackByFn"` - Repete o elemento para cada item da lista e atribui o índice do item a variável i.

- `*ngSwitch="variavel"` - Switch case para mostrar elementos.

- `*ngSwitchCase="valor"` - Mostra o elemento se a variável for igual ao valor do case.

- `*ngSwitchDefault` - Mostra o elemento se a variável não for igual a nenhum valor do case.

### Diretivas de Atributo

- `[ngClass]="{ 'classe': condicao }"` - Adiciona a classe se a condição for verdadeira.

- `[ngStyle]="{ 'propriedade': valor }"` - Adiciona a propriedade se a condição for verdadeira.

- `[NgModel]="variavel"` - Atualiza a variável com o valor do input.

<hr>

### Pipes

- Um pipe é uma função que recebe um valor e retorna um valor transformado.

- `{{variavel | pipe}}` - Aplica o pipe na variável.

<hr>

## Input e Output

- `@Input()` - Recebe um valor do componente pai.

- `@Output()` - Emite um valor para o componente pai.

export const CONSTANTS = {
  LESSONS: [
    {
      lesson: 1,
      question: 'What is SPA? Explain in your own words',
      answer: 'SPA(Single Page Application) - одностраничное приложение, особенностью которого является то, что для ' +
        'работы приложения используется единственный HTML и все необходимые елементы находятся на одной странице, а ' +
        'при взяимодействии пользователя с приложеннием все HTML, CSS, JS подгруужаются динамически без перезагрузки ' +
        'страницы.'
    },
    {
      lesson: 1,
      question: 'What is the difference between framework and library?',
      answer: 'Фреймворк отличается от библиотеки тем, что Фреймворк этоо уже готовая сборка из плагиновв или модулей ' +
        'которые необходдимы для созддания полноценного приложения, а в библиотеке программист самм подключает модули ' +
        'котрые он хочет использовать. Так же Фреймворк накладывает опреденный стиль программирования, его элементы ' +
        'сильнее связаны между собой.'
    },
    {
      lesson: 1,
      question: 'Name a few advantages of angular',
      answer: [
        'Высокое качество разрабатываеммых приложений.',
        'Эффективная кросплатформенная разработка. С помощью ангуляр можно разрабатывать приложения которые будут ' +
        'работать в современных браузерах.',
        'Скорость работы - приложение работает в разы быстрее, за счет того что при взаимодействии с пользователем ' +
        'страница не перезагружается, а обновляются только измененные модули.',
        'Скорость разработки. С помощью уже собраной базы модулей, CLI и готвой структуры проэкта можно легкоо и быстро ' +
        'создавать приложения.',
        'Подключенная библиоотека Material Design с заранее готовыми стилями и скриптами, наиболее используемых элементов ' +
        'страницы сайта попапы, тултипы, аккордионы, меню, элементы форм и прочее...'
      ]
    },
    {
      lesson: 1,
      question: 'Why do we need CLI in Angular?',
      answer: 'Это интерфейс командной строки который позволяет использовать специальные команды для инициализации ' +
        'базовой структуры приложения, быстрого создания компонентов, модулей, пайпов, сервисов необходимых для ' +
        'разработки приложения на Ангуляре.'
    },
    {
      lesson: 1,
      question: 'Name CLI command to create a component',
      answer: 'ng g c -(name-of-component)- or full version ng generate component -(name-of-component)-'
    },
    {
      lesson: 1,
      question: 'What do you understand by DRY?',
      answer: 'DRY(Don\'t repeat yourself) - означает то, что необходимо(рекомендуется) разрабатывать код не дублируя ' +
        'его в разных участках, а использовать модульную систему и переиспользовать уже готовые функции, компоненты ' +
        'импортируя их в разрабатываемые компоненты для повторного использования.'
    },
    {
      lesson: 2,
      question: 'Explain everything you can see in the package.json and what it is the purpose of the file.',
      answer: [
        '<b>name</b> - название проекта. Необходимо для приддания уникальности проэкта при публикации',
        '<b>version</b> - версия проекта. Так же как и имя необходимо для приддания уникальности проэкта при публикации',
        '<b>scripts</b> - команды ддля запуска скриптов (билд проекта, запуск тестов, запуск проэкта в режиме лайфэдит и прочее)',
        '<b>private</b> - ключ для предотвращения публикации частных репозиториев (если будет true то npm откажется публиковать его)',
        '<b>dependencies|devDependencies</b> - зависимости (плагинны) необходимые для разработки и работы проекта. Они ' +
        'не пушатся на репозиторий, но устанавлоиваются командой npm install после принятия проекта из репозитория. ' +
        'devDependencies служат только для разработки и не попадают  в бандлс при билде  проекта.'
      ]
    },
    {
      lesson: 2,
      question: 'What is npm and how do we use that?',
      answer: 'Инструмент командной строки входящий в состав Node.js используется для взаимодействия с браузерами и ' +
        'серверами, установки пакетов(плагинов) необходимых для работы и разработки приложения командой npm install ' +
        '(название пакета)'
    },
    {
      lesson: 2,
      question: 'What is the purpose of the assets folder, main.ts, angular.json, index.html',
      answer: [
        '<b>app</b> - содержит файлы компонентов, в которых определены логика и данные приложения.',
        '<b>assets</b> - содержит изображения и другие файлы ресурсов, которые можно скопировать «как есть» при сборке ' +
        'приложения.',
        '<b>main.ts</b> - Основная точка входа для приложения. Компилирует приложение с помощью JIT-компилятора ' +
        'и загружает корневой модуль приложения (AppModule) для запуска в браузере. Также можно использовать ' +
        'компилятор AOT без изменения кода, добавив флаг --aot к командам сборки и обслуживания CLI.',
        '<b>angular.json</b> - Параметры конфигурации CLI по умолчанию для всех проектов в рабочей области, ' +
        'включая параметры конфигурации для инструментов сборки, обслуживания и тестирования.',
        '<b>index.html</b> - Основная HTML-страница, которая отображается, когда кто-то посещает ваш сайт. Интерфейс ' +
        'командной строки автоматически добавляет все файлы JavaScript и CSS при создании приложения, поэтому обычно ' +
        'не требуется добавлять здесь теги "script" или "link" вручную.'
      ]
    },
    {
      lesson: 2,
      question: 'Give an example of smart and dumb components',
      answer: 'Умные и глупые компоненты. Глупые компоненты не содержат никакоой логики для работы компонента, а ' +
        'содержат только HTML его отображения. Умные компоненты содержат логику работы, функции. Они знают как ' +
        'работать с сервисами, обрабатывать данные, отслеживать состояния компонента и заботятся о том как приложение ' +
        'работает вцелом.'
    },
    {
      lesson: 3,
      question: 'What is the difference between structural and attributive directives?',
      answer: 'Структурные директивы изменяют структуру DOM-дерева. К ним относятся такие встроенные директивы *ngIf, ' +
        '*ngFor, *ngSwitch и другие которые обозначаются "*". Атрибуты изменяют внешний вид или поведение по ' +
        'умолчанию элемента DOM-дерева. К наиболее используемым директивам атрибутам относятся [ngStyle] и [ngClass].'
    },
    {
      lesson: 3,
      question: 'What is trackByFn?',
      answer: 'trackByFn это опция для функции trackBy при использовании перебора массива ддирективой *ngFor. При ' +
        'обновлении массива Angular повторно обновляет все DOM-дерево. А если использовать trackBy Angular будет ' +
        'изменять DOM только для этого конкретного элемента.'
    },
    {
      lesson: 3,
      question: 'What is the difference between ngIf and display: none?',
      answer: 'При использовании директивы ngIf элемент полностью удаляеться со страницы и DOM-дерева, если не ' +
        'выполняется прописанное условие. При использовании display: none элемент скрывается со страницы но не ' +
        'удаляется из DOM'
    },
    {
      lesson: 3,
      question: 'Explain decimal pipe',
      answer: 'Decimal pipe используется ддля форматирования числа. В качестве параметра принимает формат числа в ' +
        'виде шаблона: <br> - digitsInfo: строка в формате "minIntegerDigits.minFractionDigits-maxFractionDigits", ' +
        'где minIntegerDigits - минимальное количество цифр в целой части minFractionDigits - минимальное количество ' +
        'цифр в дробной части maxFractionDigits - максимальное количество цифр в дробной части <br> - locale: код ' +
        'применяемой культуры'
    },
    {
      lesson: 4,
      question: 'Why should we use getter and setter instead of just setting the variable in the service?',
      answer: ''
    },
    {
      lesson: 4,
      question: 'How to set a default value for @Input() property?',
      answer: ''
    },
    {
      lesson: 4,
      question: 'What is the difference between @ViewChild() і @ContentChild()?',
      answer: ''
    },
    {
      lesson: 4,
      question: 'Why do we add providedIn: ‘root’?',
      answer: ''
    }
  ]
}

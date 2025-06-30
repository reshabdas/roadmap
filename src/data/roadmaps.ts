import { Category, Roadmap } from "../types";

export const categories: Category[] = [
  {
    id: "core",
    name: "Core",
    description: "CS Fundamentals",
    icon: "Book",
    color: "from-gray-500 to-gray-600",
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Web user interfaces",
    icon: "Code",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backend",
    name: "Backend",
    description: "Server-side logic & APIs",
    icon: "Database",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "full-stack",
    name: "Full Stack",
    description: "Both frontend and backend",
    icon: "Layers",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "mobile",
    name: "Mobile",
    description: "iOS and Android apps",
    icon: "Smartphone",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "ai-data",
    name: "AI & Data",
    description: "AI, ML, and Data Science",
    icon: "BrainCircuit",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "devops",
    name: "DevOps",
    description: "CI/CD and infrastructure",
    icon: "GitMerge",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "architecture",
    name: "Architecture",
    description: "System & software design",
    icon: "Network",
    color: "from-sky-500 to-blue-700",
  },
  {
    id: "product",
    name: "Product",
    description: "Management and strategy",
    icon: "Package",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "community",
    name: "Community",
    description: "DevRel and writing",
    icon: "Users",
    color: "from-cyan-400 to-teal-500",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    description: "Web3 and smart contracts",
    icon: "Link",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "qa",
    name: "QA",
    description: "Testing and automation",
    icon: "TestTube2",
    color: "from-lime-500 to-green-600",
  },
  {
    id: "design",
    name: "Design",
    description: "UI/UX and product design",
    icon: "Palette",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "gamedev",
    name: "Game Dev",
    description: "Game development",
    icon: "Gamepad2",
    color: "from-red-500 to-orange-600",
  },
];

export const roadmaps: Roadmap[] = [
  {
    id: "computer-science",
    title: "Computer Science",
    description:
      "A comprehensive roadmap covering the fundamental concepts of Computer Science, essential for any tech role.",
    category: "core",
    difficulty: "beginner",
    estimatedDuration: "6-9 months",
    icon: "Book",
    color: "from-gray-500 to-gray-600",
    tags: [
      "CS",
      "Fundamentals",
      "Algorithms",
      "Data Structures",
      "Systems",
      "Theory",
    ],
    nodes: [
      {
        id: "cs-1",
        title: "🧠 Programming Basics",
        description:
          "Variables | Data Types | Loops | Conditionals | Functions",
        type: "milestone",
      },
      {
        id: "cs-2",
        title: "🧮 Data Structures",
        description:
          "Arrays | Linked Lists | Stacks | Queues | Trees | Graphs | HashMaps",
        type: "skill",
      },
      {
        id: "cs-3",
        title: "🧠 Algorithms",
        description:
          "Sorting | Searching | Recursion | Dynamic Programming | Greedy | Backtracking",
        type: "skill",
      },
      {
        id: "cs-4",
        title: "⚙️ Systems Programming",
        description:
          "Memory Management | Pointers | Compilers | Interpreters | C/C++",
        type: "advanced",
      },
      {
        id: "cs-5",
        title: "🌐 Networking",
        description:
          "HTTP/HTTPS | DNS | TCP/IP | Routing | Protocols | Sockets",
        type: "skill",
      },
      {
        id: "cs-6",
        title: "🧱 Operating Systems",
        description:
          "Processes | Threads | Scheduling | File Systems | Virtual Memory",
        type: "skill",
      },
      {
        id: "cs-7",
        title: "🗃️ Databases",
        description:
          "RDBMS vs NoSQL | Indexing | Normalization | ACID | Transactions",
        type: "skill",
      },
      {
        id: "cs-8",
        title: "📐 System Design",
        description:
          "Latency | Scalability | Availability | CAP | Load Balancing | Caching",
        type: "advanced",
      },
      {
        id: "cs-9",
        title: "🔐 Security",
        description:
          "Hashing | Encryption | Authentication | Authorization | XSS/SQLi",
        type: "advanced",
      },
      {
        id: "cs-10",
        title: "🎯 Goal: Solid CS Foundation for Any Tech Role",
        description:
          "Achieve a robust understanding of computer science principles.",
        type: "project",
      },
    ],
  },
  {
    id: "cplusplus-developer",
    title: "C++",
    description:
      "A complete guide to becoming a high-performance C++ developer, covering core concepts, memory management, and application domains.",
    category: "core",
    difficulty: "expert",
    estimatedDuration: "9-15 months",
    icon: "Code",
    color: "from-blue-600 to-indigo-700",
    tags: ["C++", "Systems Programming", "Performance", "GameDev", "Embedded"],
    nodes: [
      {
        id: "cpp-1",
        title: "🧠 Core C++",
        description:
          "Variables | Pointers | References | Functions | Loops | Classes | OOP",
        type: "milestone",
      },
      {
        id: "cpp-2",
        title: "🧮 Advanced Concepts",
        description:
          "Templates | STL | Smart Pointers | Lambda | RAII | Exceptions",
        type: "skill",
      },
      {
        id: "cpp-3",
        title: "🔧 Memory & Performance",
        description:
          "Stack vs Heap | Manual Memory | new/delete | Valgrind | Caching",
        type: "advanced",
      },
      {
        id: "cpp-4",
        title: "📦 Compilation & Linking",
        description: "Preprocessor | Header Files | Makefiles | CMake | g++",
        type: "skill",
      },
      {
        id: "cpp-5",
        title: "📜 File I/O & System Programming",
        description: "File Streams | fstream | Threads | Sockets | Signals",
        type: "advanced",
      },
      {
        id: "cpp-6",
        title: "🎮 Application Domains",
        description:
          "Game Dev | Embedded Systems | High-Perf Trading | Simulations",
        type: "skill",
      },
      {
        id: "cpp-7",
        title: "🧪 Testing & Debugging",
        description: "gdb | Catch2 | GoogleTest | Sanitizers | Profiling Tools",
        type: "advanced",
      },
      {
        id: "cpp-8",
        title: "🛠️ Libraries & Frameworks",
        description: "Boost | Qt | OpenGL | SDL | SFML",
        type: "skill",
      },
      {
        id: "cpp-9",
        title: "🎯 Goal: High-Performance C++ Developer / Systems Programmer",
        description: "Build a significant performance-critical application.",
        type: "project",
      },
    ],
  },
  // Frontend Roadmap
  {
    id: "frontend-developer",
    title: "Frontend",
    description:
      "A comprehensive guide to becoming a modern Frontend Developer, covering everything from the basics to advanced frameworks.",
    category: "frontend",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Code",
    color: "from-blue-500 to-cyan-500",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Web Performance",
      "Accessibility",
    ],
    nodes: [
      {
        id: "fe-1",
        title: "🌐 Web Fundamentals",
        description: "HTML5 | CSS3 | JavaScript (ES6+)",
        type: "milestone",
      },
      {
        id: "fe-2",
        title: "🎨 Styling & Layout",
        description: "Flexbox | Grid | Responsive Design | SASS",
        type: "skill",
      },
      {
        id: "fe-3",
        title: "💻 JavaScript Deep Dive",
        description: "DOM | Events | Async (Promises, await) | APIs",
        type: "skill",
      },
      {
        id: "fe-4",
        title: "⚛️ Pick a Framework",
        description: "React | Vue | Svelte | Angular",
        type: "skill",
      },
      {
        id: "fe-5",
        title: "📦 Package Managers",
        description: "npm | yarn | pnpm",
        type: "skill",
      },
      {
        id: "fe-6",
        title: "🛠️ Build Tools & Bundlers",
        description: "Vite | Webpack | Babel | ESLint",
        type: "advanced",
      },
      {
        id: "fe-7",
        title: "✅ Testing",
        description: "Jest | Vitest | React Testing Library | Cypress",
        type: "advanced",
      },
      {
        id: "fe-8",
        title: "🚀 Performance & SEO",
        description: "Lighthouse | Core Web Vitals | Lazy Loading",
        type: "advanced",
      },
      {
        id: "fe-9",
        title: "♿ Accessibility (a11y)",
        description: "WCAG | ARIA | Screen Readers",
        type: "skill",
      },
      {
        id: "fe-10",
        title: "🎯 Goal: Frontend Professional",
        description:
          "Build a complex, responsive, and performant web application",
        type: "project",
      },
    ],
  },
  // JavaScript Roadmap
  {
    id: "javascript-expert",
    title: "JavaScript",
    description:
      "A comprehensive guide to mastering JavaScript, from fundamental concepts to advanced patterns, suitable for both frontend and backend development.",
    category: "frontend",
    difficulty: "intermediate",
    estimatedDuration: "3-5 months",
    icon: "Braces",
    color: "from-yellow-400 to-amber-500",
    tags: ["JavaScript", "ES6+", "Async", "DOM", "Node.js", "Testing"],
    nodes: [
      {
        id: "js-1",
        title: "🔤 JS Basics",
        description: "Variables | Data Types | Operators | Functions | Loops",
        type: "milestone",
      },
      {
        id: "js-2",
        title: "📚 Advanced JS",
        description:
          "Closures | Hoisting | Scope | Prototypes | Event Loop | this",
        type: "skill",
      },
      {
        id: "js-3",
        title: "💻 DOM & BOM",
        description:
          "Selectors | Events | Manipulation | Timers | Navigator & Window APIs",
        type: "skill",
      },
      {
        id: "js-4",
        title: "🔧 Modern JS",
        description:
          "ES6+ | let/const | Arrow Functions | Destructuring | Spread | Rest",
        type: "skill",
      },
      {
        id: "js-5",
        title: "🧠 Asynchronous JS",
        description:
          "Callbacks | Promises | async/await | Fetch API | Error Handling",
        type: "advanced",
      },
      {
        id: "js-6",
        title: "📦 Modules & Tooling",
        description: "ES Modules | CommonJS | Babel | Webpack | Vite | NPM",
        type: "advanced",
      },
      {
        id: "js-7",
        title: "🧪 Testing",
        description: "Jest | Mocha | Chai | Testing Frameworks for JS Apps",
        type: "advanced",
      },
      {
        id: "js-8",
        title: "🌍 APIs & JSON",
        description: "REST | JSON | Fetch | API Integration | CRUD Operations",
        type: "skill",
      },
      {
        id: "js-9",
        title: "📦 Patterns & Best Practices",
        description: "Functional Programming | OOP | DRY | KISS | Composition",
        type: "advanced",
      },
      {
        id: "js-10",
        title: "🎯 Goal: JavaScript Expert / Frontend or Backend Developer",
        description:
          "Build a complex project showcasing mastery of JavaScript.",
        type: "project",
      },
    ],
  },
  // TypeScript Roadmap
  {
    id: "typescript-mastery",
    title: "TypeScript",
    description:
      "An ultimate guide to TypeScript, from fundamentals to advanced types and its application in both frontend and backend development.",
    category: "frontend",
    difficulty: "intermediate",
    estimatedDuration: "2-4 months",
    icon: "Braces",
    color: "from-blue-500 to-sky-600",
    tags: [
      "TypeScript",
      "JavaScript",
      "Frontend",
      "Backend",
      "Types",
      "Full Stack",
    ],
    nodes: [
      {
        id: "ts-1",
        title: "🔤 TypeScript Fundamentals",
        description:
          "Types | Interfaces | Type Aliases | Enums | Tuples | Unions",
        type: "milestone",
      },
      {
        id: "ts-2",
        title: "📚 Advanced Types",
        description:
          "Generics | keyof | typeof | Infer | Conditional Types | Utility Types",
        type: "skill",
      },
      {
        id: "ts-3",
        title: "🧱 TypeScript + JavaScript",
        description:
          "Transpilation | Configuration (tsconfig) | Integration with JS Code",
        type: "skill",
      },
      {
        id: "ts-4",
        title: "🔧 Tooling",
        description:
          "TSC CLI | Linting (ESLint) | Type Checking | ts-node | Vite/Webpack",
        type: "skill",
      },
      {
        id: "ts-5",
        title: "🌐 TypeScript in Frontend",
        description:
          "React + TS | Vue + TS | Angular + TS | Props & State Typing",
        type: "advanced",
      },
      {
        id: "ts-6",
        title: "🛠️ TypeScript in Backend",
        description: "Node.js + TS | Express Typings | REST APIs | NestJS",
        type: "advanced",
      },
      {
        id: "ts-7",
        title: "🧪 Testing with TS",
        description:
          "Jest + TS | Typing Mocks | ts-jest | Type-safe Test Suites",
        type: "advanced",
      },
      {
        id: "ts-8",
        title: "📦 Packages & Declaration Files",
        description: "DefinitelyTyped | d.ts Files | Module Augmentation",
        type: "skill",
      },
      {
        id: "ts-9",
        title: "🎯 Goal: TypeScript Mastery for Full Stack Development",
        description: "Build a fully type-safe, full-stack application.",
        type: "project",
      },
    ],
  },
  // React Roadmap
  {
    id: "react-developer",
    title: "React",
    description:
      "The ultimate guide to becoming a professional React Developer, from fundamentals to advanced concepts and tooling.",
    category: "frontend",
    difficulty: "intermediate",
    estimatedDuration: "4-6 months",
    icon: "React",
    color: "from-cyan-400 to-blue-500",
    tags: [
      "React.js",
      "Frontend",
      "JavaScript",
      "State Management",
      "Testing",
      "Vite",
    ],
    nodes: [
      {
        id: "react-1",
        title: "⚛️ React Fundamentals",
        description: "JSX | Components | Props | State | Event Handling",
        type: "milestone",
      },
      {
        id: "react-2",
        title: "🧠 Hooks & State",
        description:
          "useState | useEffect | useContext | useReducer | Custom Hooks",
        type: "skill",
      },
      {
        id: "react-3",
        title: "🌐 Routing",
        description:
          "React Router | Nested Routes | Dynamic Params | Navigation",
        type: "skill",
      },
      {
        id: "react-4",
        title: "📦 State Management",
        description: "Redux Toolkit | Context API | Zustand | Jotai | Recoil",
        type: "skill",
      },
      {
        id: "react-5",
        title: "🎨 Styling",
        description: "CSS Modules | Styled-Components | Tailwind CSS | Emotion",
        type: "skill",
      },
      {
        id: "react-6",
        title: "📊 Forms & Validation",
        description:
          "Controlled Inputs | Formik | React Hook Form | Yup Validation",
        type: "skill",
      },
      {
        id: "react-7",
        title: "🔌 API Integration",
        description: "Axios | Fetch | SWR | React Query | Error Boundaries",
        type: "skill",
      },
      {
        id: "react-8",
        title: "🧪 Testing",
        description: "Jest | React Testing Library | Enzyme | E2E with Cypress",
        type: "advanced",
      },
      {
        id: "react-9",
        title: "📦 Build Tools",
        description: "Vite | Webpack | Babel | ESLint | Prettier",
        type: "advanced",
      },
      {
        id: "react-10",
        title: "🚀 Advanced",
        description:
          "SSR | CSR | SSG | Lazy Loading | Code Splitting | Suspense | HOCs",
        type: "advanced",
      },
      {
        id: "react-11",
        title: "🎯 Goal: Frontend Developer / React Specialist",
        description:
          "Build and deploy a feature-rich, scalable web application.",
        type: "project",
      },
    ],
  },
  // Vue Roadmap
  {
    id: "vue-developer",
    title: "Vue.js",
    description:
      "An ultimate guide to becoming a professional Vue Developer, covering everything from core concepts to the ecosystem.",
    category: "frontend",
    difficulty: "intermediate",
    estimatedDuration: "3-5 months",
    icon: "Vue",
    color: "from-green-400 to-emerald-500",
    tags: ["Vue.js", "Frontend", "JavaScript", "Pinia", "Nuxt.js", "Vite"],
    nodes: [
      {
        id: "vue-1",
        title: "🟢 Vue Core",
        description:
          "Template Syntax | Directives | Data Binding | Events | Lifecycle Hooks",
        type: "milestone",
      },
      {
        id: "vue-2",
        title: "🧩 Components",
        description: "Props | Events | Slots | Single File Components (SFC)",
        type: "skill",
      },
      {
        id: "vue-3",
        title: "📦 State Management",
        description: "Vuex (Vue 2) | Pinia (Vue 3) | Modules | Reactive State",
        type: "skill",
      },
      {
        id: "vue-4",
        title: "🛣️ Routing",
        description: "Vue Router | Dynamic Routing | Guards | Nested Routes",
        type: "skill",
      },
      {
        id: "vue-5",
        title: "🔧 Composition API",
        description:
          "ref() | reactive() | computed() | watch() | setup() function",
        type: "advanced",
      },
      {
        id: "vue-6",
        title: "🎨 Styling",
        description: "Scoped CSS | CSS Modules | Tailwind CSS | Pre-processors",
        type: "skill",
      },
      {
        id: "vue-7",
        title: "🔌 API & Async",
        description:
          "Fetch | Axios | async/await | Error Handling | Retry Logic",
        type: "skill",
      },
      {
        id: "vue-8",
        title: "🧪 Testing",
        description: "Vue Test Utils | Jest | Cypress | Playwright",
        type: "advanced",
      },
      {
        id: "vue-9",
        title: "🚀 Ecosystem",
        description: "Vite | Nuxt.js | Vue DevTools | ESLint | Prettier",
        type: "advanced",
      },
      {
        id: "vue-10",
        title: "🎯 Goal: Vue Developer / Frontend Specialist",
        description:
          "Build and deploy a complex, reactive Single Page Application.",
        type: "project",
      },
    ],
  },
  // Angular Roadmap
  {
    id: "angular-developer",
    title: "Angular",
    description:
      "An ultimate guide to becoming a professional Angular Developer, perfect for enterprise-level applications.",
    category: "frontend",
    difficulty: "intermediate",
    estimatedDuration: "4-6 months",
    icon: "Angular",
    color: "from-red-500 to-rose-600",
    tags: ["Angular", "Frontend", "TypeScript", "RxJS", "NgRx", "Enterprise"],
    nodes: [
      {
        id: "ng-1",
        title: "🧱 Angular Fundamentals",
        description: "Components | Modules | Templates | Directives | Pipes",
        type: "milestone",
      },
      {
        id: "ng-2",
        title: "🔄 Data Binding",
        description:
          "One-way & Two-way | Event Binding | Property Binding | ngModel",
        type: "skill",
      },
      {
        id: "ng-3",
        title: "🏗️ Angular CLI & Tooling",
        description: "CLI Commands | Schematics | Environment Configs",
        type: "skill",
      },
      {
        id: "ng-4",
        title: "🔀 Routing & Navigation",
        description: "RouterModule | Lazy Loading | Guards | Route Params",
        type: "skill",
      },
      {
        id: "ng-5",
        title: "📦 Services & Dependency Injection",
        description: "Injectables | Providers | DI Tree | Singleton Services",
        type: "skill",
      },
      {
        id: "ng-6",
        title: "🧠 State Management",
        description: "RxJS | Observables | BehaviorSubject | NgRx | Akita",
        type: "advanced",
      },
      {
        id: "ng-7",
        title: "📊 Forms",
        description:
          "Template-driven | Reactive Forms | Validation | FormBuilder",
        type: "skill",
      },
      {
        id: "ng-8",
        title: "🔌 API Integration",
        description:
          "HttpClient | Interceptors | Error Handling | Auth Headers",
        type: "skill",
      },
      {
        id: "ng-9",
        title: "🧪 Testing",
        description:
          "Karma | Jasmine | Angular Testing Utilities | Mock Services",
        type: "advanced",
      },
      {
        id: "ng-10",
        title: "🎨 Styling & UI",
        description: "SCSS | Angular Material | Tailwind CSS | Animations",
        type: "skill",
      },
      {
        id: "ng-11",
        title: "🎯 Goal: Angular Developer / Enterprise Frontend Engineer",
        description:
          "Build a complex, scalable, and maintainable enterprise-grade application.",
        type: "project",
      },
    ],
  },
  // Backend Roadmap
  {
    id: "backend-developer",
    title: "Backend",
    description:
      "A comprehensive guide to becoming a modern Backend Developer, focusing on APIs, databases, and architecture.",
    category: "backend",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Database",
    color: "from-green-500 to-emerald-500",
    tags: ["Node.js", "Python", "Go", "Databases", "APIs", "System Design"],
    nodes: [
      {
        id: "be-1",
        title: "📜 Choose a Language",
        description: "Node.js | Python | Go | Java | Rust",
        type: "milestone",
      },
      {
        id: "be-2",
        title: "📦 Package Management",
        description: "npm | pip | go mod",
        type: "skill",
      },
      {
        id: "be-3",
        title: "🌐 API Development",
        description: "REST | gRPC | GraphQL | Authentication (JWT)",
        type: "skill",
      },
      {
        id: "be-4",
        title: "🗃️ Databases",
        description: "SQL (Postgres) | NoSQL (MongoDB) | Caching (Redis)",
        type: "skill",
      },
      {
        id: "be-5",
        title: "☁️ Cloud & Deployment",
        description: "Docker | CI/CD | AWS/GCP/Azure",
        type: "advanced",
      },
      {
        id: "be-6",
        title: "📐 System Architecture",
        description: "Microservices | Monoliths | Event-Driven",
        type: "advanced",
      },
      {
        id: "be-7",
        title: "🧪 Testing",
        description: "Unit | Integration | E2E Tests",
        type: "skill",
      },
      {
        id: "be-8",
        title: "🎯 Goal: Backend Professional",
        description: "Design, build, and deploy a scalable backend service.",
        type: "project",
      },
    ],
  },
  {
    id: "postgresql-expert",
    title: "PostgreSQL",
    description:
      "An ultimate guide to becoming a PostgreSQL expert, from fundamentals to advanced administration and performance tuning.",
    category: "backend",
    difficulty: "expert",
    estimatedDuration: "6-9 months",
    icon: "Database",
    color: "from-blue-500 to-indigo-600",
    tags: [
      "PostgreSQL",
      "SQL",
      "Databases",
      "DBA",
      "Performance",
      "Replication",
    ],
    nodes: [
      {
        id: "pg-1",
        title: "🐘 Core Concepts",
        description: "Installation | psql | Data Types | SQL Basics",
        type: "milestone",
      },
      {
        id: "pg-2",
        title: "🔍 Advanced SQL",
        description: "Window Functions | CTEs | JSONB | Full-Text Search",
        type: "skill",
      },
      {
        id: "pg-3",
        title: "📊 Data Modeling",
        description: "Normalization | Constraints | Indexing Strategies",
        type: "skill",
      },
      {
        id: "pg-4",
        title: "⚙️ Administration",
        description: "Users & Roles | Backup & Restore | VACUUM",
        type: "advanced",
      },
      {
        id: "pg-5",
        title: "🚀 Performance Tuning",
        description:
          "EXPLAIN ANALYZE | Query Optimization | Connection Pooling",
        type: "advanced",
      },
      {
        id: "pg-6",
        title: "🔗 Replication & High Availability",
        description: "Streaming Replication | Failover | Patroni",
        type: "expert",
      },
      {
        id: "pg-7",
        title: "🧩 Extensibility",
        description: "Extensions (PostGIS) | Foreign Data Wrappers",
        type: "expert",
      },
      {
        id: "pg-8",
        title: "📦 Ecosystem",
        description: "PgBouncer | TimescaleDB | Citus",
        type: "expert",
      },
      {
        id: "pg-9",
        title: "🎯 Goal: PostgreSQL Expert",
        description: "Become a PostgreSQL expert.",
        type: "project",
      },
    ],
  },
  {
    id: "sql-specialist",
    title: "SQL Specialist",
    description:
      "An ultimate guide to mastering SQL, from basics to advanced performance, security, and integration for Data Engineering and Analytics.",
    category: "backend",
    difficulty: "advanced",
    estimatedDuration: "4-6 months",
    icon: "Database",
    color: "from-blue-400 to-sky-600",
    tags: [
      "SQL",
      "Data Engineering",
      "Analytics",
      "PostgreSQL",
      "MySQL",
      "Performance",
      "ETL",
    ],
    nodes: [
      {
        id: "sql-1",
        title: "🗃️ SQL Basics",
        description: "SELECT | INSERT | UPDATE | DELETE | WHERE | ORDER BY",
        type: "milestone",
      },
      {
        id: "sql-2",
        title: "🔗 Relationships & Keys",
        description: "Primary Key | Foreign Key | Constraints | Normalization",
        type: "skill",
      },
      {
        id: "sql-3",
        title: "📊 Aggregation & Joins",
        description: "GROUP BY | COUNT() | AVG() | JOIN Types | Subqueries",
        type: "skill",
      },
      {
        id: "sql-4",
        title: "📈 Advanced SQL",
        description:
          "Window Functions | CTE | Views | Stored Procedures | Triggers",
        type: "advanced",
      },
      {
        id: "sql-5",
        title: "⚙️ Performance Optimization",
        description: "Indexes | Query Plan | EXPLAIN ANALYZE | Partitioning",
        type: "advanced",
      },
      {
        id: "sql-6",
        title: "🔐 Security & Access",
        description:
          "Roles | GRANT/REVOKE | SQL Injection | Parameterized Queries",
        type: "advanced",
      },
      {
        id: "sql-7",
        title: "🧰 Ecosystem & Tools",
        description:
          "PostgreSQL | MySQL | Snowflake | BigQuery | DBeaver | DataGrip",
        type: "skill",
      },
      {
        id: "sql-8",
        title: "📦 Integration",
        description: "ORMs (Prisma, SQLAlchemy) | BI Tools | ETL Jobs",
        type: "advanced",
      },
      {
        id: "sql-9",
        title: "🎯 Goal: SQL Specialist / Data Engineer / Analytics Developer",
        description:
          "Become a professional SQL Specialist, Data Engineer, or Analytics Developer.",
        type: "project",
      },
    ],
  },
  // Node.js Roadmap
  {
    id: "nodejs-developer",
    title: "Node.js",
    description:
      "An ultimate guide to becoming a Node.js Backend Developer, from core concepts and frameworks to production best practices.",
    category: "backend",
    difficulty: "intermediate",
    estimatedDuration: "4-6 months",
    icon: "Server",
    color: "from-green-500 to-lime-600",
    tags: [
      "Node.js",
      "Backend",
      "JavaScript",
      "Express.js",
      "API",
      "Databases",
    ],
    nodes: [
      {
        id: "node-1",
        title: "⚙️ Node.js Core",
        description:
          "Event Loop | Streams | Buffers | Process | File System | Global Objects",
        type: "milestone",
      },
      {
        id: "node-2",
        title: "📦 Package Management",
        description: "npm | yarn | pnpm | Semantic Versioning | package.json",
        type: "skill",
      },
      {
        id: "node-3",
        title: "🧱 Frameworks",
        description: "Express.js | Fastify | NestJS | Hapi | Koa",
        type: "skill",
      },
      {
        id: "node-4",
        title: "🧰 Middleware & Routing",
        description: "Routers | Custom Middleware | CORS | Body Parsers",
        type: "skill",
      },
      {
        id: "node-5",
        title: "🔌 API Development",
        description:
          "REST APIs | CRUD | Params & Query | Status Codes | Headers",
        type: "skill",
      },
      {
        id: "node-6",
        title: "🔐 Security",
        description: "JWT | OAuth2 | HTTPS | Helmet.js | Rate Limiting | CORS",
        type: "advanced",
      },
      {
        id: "node-7",
        title: "🗃️ Database Integration",
        description: "MongoDB | Mongoose | PostgreSQL | Sequelize | Knex.js",
        type: "skill",
      },
      {
        id: "node-8",
        title: "🧪 Testing",
        description: "Jest | Supertest | Mocha | Chai | Postman | Swagger",
        type: "advanced",
      },
      {
        id: "node-9",
        title: "🚀 Production & Performance",
        description: "PM2 | Clustering | Load Balancing | Logging | Monitoring",
        type: "advanced",
      },
      {
        id: "node-10",
        title: "🎯 Goal: Node.js Backend Developer / API Engineer",
        description: "Build and deploy a robust and scalable backend API.",
        type: "project",
      },
    ],
  },
  // Python Roadmap
  {
    id: "python-developer",
    title: "Python",
    description:
      "A comprehensive guide to becoming a versatile Python Developer, covering web, data, automation, and core concepts.",
    category: "backend",
    difficulty: "intermediate",
    estimatedDuration: "4-7 months",
    icon: "Python",
    color: "from-blue-400 to-yellow-400",
    tags: [
      "Python",
      "Backend",
      "Data Analysis",
      "Web Development",
      "Automation",
      "Scripting",
    ],
    nodes: [
      {
        id: "py-1",
        title: "🐍 Python Basics",
        description:
          "Variables | Data Types | Loops | Functions | Conditionals",
        type: "milestone",
      },
      {
        id: "py-2",
        title: "🧠 Core Concepts",
        description:
          "OOP | Exception Handling | Modules | File Handling | Decorators",
        type: "skill",
      },
      {
        id: "py-3",
        title: "📦 Python Libraries",
        description:
          "Standard Library | requests | datetime | os | math | json",
        type: "skill",
      },
      {
        id: "py-4",
        title: "🌐 Web Development",
        description: "Flask | Django | FastAPI | Jinja2 | REST APIs",
        type: "advanced",
      },
      {
        id: "py-5",
        title: "📊 Data Analysis",
        description: "NumPy | Pandas | Matplotlib | Seaborn",
        type: "advanced",
      },
      {
        id: "py-6",
        title: "💡 Scripting & Automation",
        description:
          "Regex | Web Scraping | os & shutil | Scheduling | CLI Tools",
        type: "skill",
      },
      {
        id: "py-7",
        title: "🧪 Testing",
        description: "unittest | pytest | Coverage | Mocking",
        type: "skill",
      },
      {
        id: "py-8",
        title: "⚙️ Dev Tools",
        description: "Virtualenv | pip | Poetry | linters | Black | MyPy",
        type: "skill",
      },
      {
        id: "py-9",
        title: "🎯 Goal: Python Developer / Automation / Web / Data Expert",
        description:
          "Build a significant project in your chosen specialization (Web, Data, or Automation).",
        type: "project",
      },
    ],
  },
  {
    id: "csharp-aspnet-developer",
    title: "C# / ASP.NET",
    description:
      "A complete guide to becoming a C# and ASP.NET developer for building robust, high-performance backend applications.",
    category: "backend",
    difficulty: "intermediate",
    estimatedDuration: "5-8 months",
    icon: "Code",
    color: "from-purple-500 to-indigo-600",
    tags: ["C#", ".NET", "ASP.NET", "Backend", "Microsoft", "Web API"],
    nodes: [
      {
        id: "csharp-1",
        title: "💻 C# Basics",
        description:
          "OOP | Collections | LINQ | Delegates | Async/Await | Exception Handling",
        type: "milestone",
      },
      {
        id: "csharp-2",
        title: "📦 ASP.NET Core Fundamentals",
        description:
          "Startup.cs | Middleware | Controllers | Razor Pages | Dependency Injection",
        type: "skill",
      },
      {
        id: "csharp-3",
        title: "🔧 API Development",
        description:
          "Routing | Model Binding | Filters | RESTful Services | Swagger",
        type: "skill",
      },
      {
        id: "csharp-4",
        title: "🛡️ Security",
        description:
          "Identity | JWT | OAuth2 | Roles & Policies | HTTPS | Anti-Forgery",
        type: "advanced",
      },
      {
        id: "csharp-5",
        title: "📄 Entity Framework Core",
        description:
          "DbContext | LINQ Queries | Migrations | Fluent API | Repositories",
        type: "skill",
      },
      {
        id: "csharp-6",
        title: "🧪 Testing",
        description: "xUnit | Moq | Integration Tests | In-Memory DB | Postman",
        type: "advanced",
      },
      {
        id: "csharp-7",
        title: "🧰 Tooling & Deployment",
        description: "Kestrel | IIS | Docker | CI/CD | Azure App Services",
        type: "advanced",
      },
      {
        id: "csharp-8",
        title: "🌐 Advanced",
        description:
          "SignalR | gRPC | Minimal APIs | Blazor | Clean Architecture",
        type: "expert",
      },
      {
        id: "csharp-9",
        title:
          "🎯 Goal: ASP.NET Backend Developer / Microsoft Stack Specialist",
        description:
          "Build and deploy a feature-complete ASP.NET Core web API.",
        type: "project",
      },
    ],
  },
  {
    id: "java-developer",
    title: "Java",
    description:
      "A comprehensive guide to becoming an enterprise-level Java developer, focusing on the core language, Spring ecosystem, and deployment.",
    category: "backend",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Coffee",
    color: "from-orange-500 to-red-500",
    tags: ["Java", "Spring Boot", "Backend", "Enterprise", "JVM", "Maven"],
    nodes: [
      {
        id: "java-1",
        title: "☕ Java Core",
        description:
          "Variables | OOP | Collections | Exceptions | Threads | Streams",
        type: "milestone",
      },
      {
        id: "java-2",
        title: "🔧 JVM Internals",
        description:
          "JIT | GC | Stack & Heap | Classloader | Performance Tuning",
        type: "advanced",
      },
      {
        id: "java-3",
        title: "🧱 Frameworks",
        description:
          "Spring Boot | Hibernate | JPA | JSP | Servlet | Jakarta EE",
        type: "skill",
      },
      {
        id: "java-4",
        title: "🌐 RESTful APIs",
        description:
          "Spring MVC | Controllers | Services | Validation | Exception Handling",
        type: "skill",
      },
      {
        id: "java-5",
        title: "🔐 Security",
        description: "Spring Security | JWT | OAuth2 | CSRF | HTTPS",
        type: "advanced",
      },
      {
        id: "java-6",
        title: "🧪 Testing",
        description:
          "JUnit 5 | Mockito | TestContainers | Integration & Unit Tests",
        type: "advanced",
      },
      {
        id: "java-7",
        title: "📦 Build & Tools",
        description: "Maven | Gradle | JARs | WARs | Lombok | CI/CD Pipelines",
        type: "skill",
      },
      {
        id: "java-8",
        title: "☁️ Deployment",
        description: "Docker | Kubernetes | Tomcat | AWS Elastic Beanstalk",
        type: "expert",
      },
      {
        id: "java-9",
        title: "🎯 Goal: Java Backend Developer / Enterprise Software Engineer",
        description:
          "Build and deploy a scalable, enterprise-grade Java application.",
        type: "project",
      },
    ],
  },
  {
    id: "spring-boot-developer",
    title: "Spring Boot",
    description:
      "A focused guide to mastering the Spring Boot framework for rapid, production-grade backend development.",
    category: "backend",
    difficulty: "intermediate",
    estimatedDuration: "4-6 months",
    icon: "Leaf",
    color: "from-lime-500 to-green-600",
    tags: [
      "Spring Boot",
      "Java",
      "Backend",
      "Microservices",
      "Spring Data",
      "Spring Security",
    ],
    nodes: [
      {
        id: "spring-1",
        title: "🌱 Spring Core",
        description:
          "Beans | Context | Dependency Injection | Configuration | Annotations",
        type: "milestone",
      },
      {
        id: "spring-2",
        title: "🚀 Spring Boot Basics",
        description:
          "Starters | Auto Configuration | Application.properties | Profiles",
        type: "skill",
      },
      {
        id: "spring-3",
        title: "🌐 Spring Web",
        description:
          "Controllers | REST APIs | MVC | Request Mapping | Validation",
        type: "skill",
      },
      {
        id: "spring-4",
        title: "🗃️ Spring Data JPA",
        description:
          "Repositories | CRUD | JPQL | Projections | Pagination | Specification",
        type: "skill",
      },
      {
        id: "spring-5",
        title: "🔐 Spring Security",
        description:
          "JWT | OAuth2 | Roles | Filters | CSRF | Session Management",
        type: "advanced",
      },
      {
        id: "spring-6",
        title: "🧪 Testing",
        description:
          "JUnit 5 | Mockito | Spring Test | TestContainers | RestAssured",
        type: "advanced",
      },
      {
        id: "spring-7",
        title: "📦 Build Tools & Packaging",
        description: "Maven | Gradle | Fat JARs | Devtools | Lombok",
        type: "skill",
      },
      {
        id: "spring-8",
        title: "☁️ Cloud & Deployment",
        description:
          "Spring Cloud | Docker | K8s | Config Server | Eureka | Gateway",
        type: "expert",
      },
      {
        id: "spring-9",
        title: "🎯 Goal: Backend Developer with Spring Boot Mastery",
        description:
          "Build and deploy a complete microservices-based application using Spring Boot.",
        type: "project",
      },
    ],
  },
  {
    id: "go-developer",
    title: "Go",
    description:
      "A complete guide to becoming a Go developer, focusing on concurrency, performance, and building robust backend services.",
    category: "backend",
    difficulty: "intermediate",
    estimatedDuration: "3-6 months",
    icon: "Server",
    color: "from-cyan-400 to-sky-500",
    tags: ["Go", "Golang", "Backend", "Concurrency", "API", "Performance"],
    nodes: [
      {
        id: "go-1",
        title: "🐹 Go Basics",
        description:
          "Variables | Functions | Structs | Pointers | Interfaces | Packages",
        type: "milestone",
      },
      {
        id: "go-2",
        title: "📦 Go Tooling",
        description: "go mod | go build | go test | go fmt | go vet | go run",
        type: "skill",
      },
      {
        id: "go-3",
        title: "🔄 Concurrency",
        description:
          "Goroutines | Channels | Mutex | WaitGroup | Context | Race Conditions",
        type: "advanced",
      },
      {
        id: "go-4",
        title: "📚 Standard Library",
        description: "net/http | fmt | errors | time | io/ioutil | log",
        type: "skill",
      },
      {
        id: "go-5",
        title: "🔌 Web Development",
        description: "Gin | Echo | Fiber | Gorilla Mux | REST APIs",
        type: "skill",
      },
      {
        id: "go-6",
        title: "🗃️ Database Integration",
        description: "GORM | sqlx | PostgreSQL | SQLite | MongoDB Drivers",
        type: "skill",
      },
      {
        id: "go-7",
        title: "🔐 Authentication",
        description: "JWT | OAuth2 | Middlewares | Secure Headers",
        type: "advanced",
      },
      {
        id: "go-8",
        title: "🧪 Testing",
        description: "testing pkg | testify | benchmarks | mocking",
        type: "advanced",
      },
      {
        id: "go-9",
        title: "🚀 Deployment",
        description: "Docker | Cross Compilation | CI/CD | Performance Tuning",
        type: "expert",
      },
      {
        id: "go-10",
        title: "🎯 Goal: Backend Developer with Go Expertise",
        description:
          "Build and deploy a high-performance, concurrent backend service in Go.",
        type: "project",
      },
    ],
  },
  {
    id: "rust-developer",
    title: "Rust",
    description:
      "A comprehensive guide to becoming a Rust developer, focusing on safety, performance, and systems-level programming.",
    category: "backend",
    difficulty: "expert",
    estimatedDuration: "6-10 months",
    icon: "Anchor",
    color: "from-orange-600 to-stone-800",
    tags: [
      "Rust",
      "Systems Programming",
      "Backend",
      "Performance",
      "Memory Safety",
      "WebAssembly",
    ],
    nodes: [
      {
        id: "rust-1",
        title: "🦀 Rust Basics",
        description:
          "Ownership | Borrowing | Lifetimes | Structs | Enums | Traits",
        type: "milestone",
      },
      {
        id: "rust-2",
        title: "🔐 Memory Safety",
        description:
          "RAII | Smart Pointers | No Nulls | Pattern Matching | Result/Option",
        type: "skill",
      },
      {
        id: "rust-3",
        title: "📦 Cargo & Crates",
        description:
          "cargo build | cargo run | cargo test | crates.io | Workspaces",
        type: "skill",
      },
      {
        id: "rust-4",
        title: "🔄 Async Rust",
        description: "async/await | tokio | Futures | Streams | Actix",
        type: "advanced",
      },
      {
        id: "rust-5",
        title: "🌐 Web Development",
        description: "Rocket | Actix-web | Axum | Warp | REST APIs",
        type: "advanced",
      },
      {
        id: "rust-6",
        title: "🗃️ Database Access",
        description: "sqlx | Diesel | PostgreSQL | SQLite | Migrations",
        type: "skill",
      },
      {
        id: "rust-7",
        title: "🧪 Testing",
        description:
          "cargo test | assert macros | Mocking | Integration Testing",
        type: "advanced",
      },
      {
        id: "rust-8",
        title: "📦 Deployment & Tooling",
        description:
          "Cross-compilation | Docker | Binary Size Optimization | CI",
        type: "expert",
      },
      {
        id: "rust-9",
        title: "🎯 Goal: Rust Systems/Backend Developer",
        description:
          "Build a high-performance, memory-safe application in Rust.",
        type: "project",
      },
    ],
  },
  {
    id: "full-stack-developer",
    title: "Full Stack",
    description:
      "A complete guide to becoming a Full Stack Developer, covering both frontend and backend technologies.",
    category: "full-stack",
    difficulty: "expert",
    estimatedDuration: "9-12 months",
    icon: "Layers",
    color: "from-purple-500 to-indigo-600",
    tags: [
      "Full Stack",
      "React",
      "Node.js",
      "System Design",
      "DevOps",
      "Databases",
    ],
    nodes: [
      {
        id: "fs-1",
        title: "🌐 Frontend Fundamentals",
        description: "HTML | CSS | JS | Responsive Design",
        type: "milestone",
      },
      {
        id: "fs-2",
        title: "🧠 Core CS Concepts",
        description: "Data Structures | Algorithms | Design Patterns",
        type: "skill",
      },
      {
        id: "fs-3",
        title: "⚛️ Frontend Framework",
        description: "React.js | Components | Hooks | Routing | State",
        type: "skill",
      },
      {
        id: "fs-4",
        title: "🔩 Backend Development",
        description: "Node.js/Express | Python/Django | Go",
        type: "skill",
      },
      {
        id: "fs-5",
        title: "🗃️ Database Mastery",
        description: "SQL (Postgres) | NoSQL (MongoDB) | ORMs",
        type: "skill",
      },
      {
        id: "fs-6",
        title: "🔒 APIs & Authentication",
        description: "REST | GraphQL | JWT | OAuth",
        type: "skill",
      },
      {
        id: "fs-7",
        title: "🚀 DevOps & CI/CD",
        description: "Docker | GitHub Actions | Nginx | Cloud (AWS/GCP)",
        type: "advanced",
      },
      {
        id: "fs-8",
        title: "📐 System Design & Architecture",
        description: "Scalability | Caching | Microservices | Monitoring",
        type: "expert",
      },
      {
        id: "fs-9",
        title: "🎯 Goal: Full Stack Professional",
        description: "Architect, build, and deploy a complete web application.",
        type: "project",
      },
    ],
  },
  // React Native Roadmap
  {
    id: "react-native-developer",
    title: "React Native",
    description:
      "A complete 2025 guide to becoming a React Native developer, covering everything from core concepts to deployment.",
    category: "mobile",
    difficulty: "intermediate",
    estimatedDuration: "4-6 months",
    icon: "Phone",
    color: "from-sky-500 to-blue-600",
    tags: [
      "React Native",
      "Mobile",
      "JavaScript",
      "Expo",
      "iOS",
      "Android",
      "State Management",
      "NativeWind",
    ],
    nodes: [
      {
        id: "rn-1",
        title: "🧭 Prerequisites",
        description: "HTML | CSS | JavaScript ES6+ | Git",
        type: "milestone",
      },
      {
        id: "rn-2",
        title: "⚛️ React Basics",
        description: "JSX | Components | Props | State | Hooks",
        type: "skill",
      },
      {
        id: "rn-3",
        title: "📱 React Native Core",
        description:
          "Views | Text | StyleSheet | Flexbox | Inputs | ScrollView | FlatList",
        type: "skill",
      },
      {
        id: "rn-4",
        title: "🧭 Navigation",
        description: "React Navigation | Stack | Tabs | Drawer | Params",
        type: "skill",
      },
      {
        id: "rn-5",
        title: "🗃️ State Management",
        description: "Context API | Redux Toolkit | Zustand",
        type: "advanced",
      },
      {
        id: "rn-6",
        title: "🔌 API Integration",
        description: "REST APIs | Axios | Fetch | AsyncStorage",
        type: "skill",
      },
      {
        id: "rn-7",
        title: "📲 Native Device Access",
        description:
          "Camera | Location | Notifications | Linking | Permissions",
        type: "skill",
      },
      {
        id: "rn-8",
        title: "🎨 UI & Styling",
        description:
          "StyleSheet | Tailwind CSS (NativeWind) | Animations (Reanimated, Lottie)",
        type: "skill",
      },
      {
        id: "rn-9",
        title: "🧪 Testing",
        description: "Jest | React Native Testing Library | Detox (E2E)",
        type: "advanced",
      },
      {
        id: "rn-10",
        title: "🚀 Build & Deployment",
        description: "Expo | EAS | Android & iOS Builds | OTA Updates",
        type: "advanced",
      },
      {
        id: "rn-11",
        title: "🎯 Goal: React Native Developer",
        description: "Become a job-ready React Native Developer.",
        type: "project",
      },
    ],
  },
  // Android Developer Roadmap
  {
    id: "android-developer",
    title: "Android",
    description:
      "The ultimate guide to becoming a professional Android Developer with Kotlin, from basics to advanced architecture.",
    category: "mobile",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Android",
    color: "from-green-400 to-teal-500",
    tags: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Coroutines",
      "Mobile",
    ],
    nodes: [
      {
        id: "android-1",
        title: "🔵 Kotlin Fundamentals",
        description:
          "Variables | Control Flow | Functions | Coroutines | Null Safety",
        type: "milestone",
      },
      {
        id: "android-2",
        title: "📱 UI with Jetpack Compose",
        description:
          "Composable Functions | State | Layouts | Modifiers | Navigation",
        type: "skill",
      },
      {
        id: "android-3",
        title: "🏛️ App Architecture",
        description: "MVVM | Repository Pattern | Dependency Injection (Hilt)",
        type: "skill",
      },
      {
        id: "android-4",
        title: "💾 Data Persistence",
        description: "Room DB | DataStore | Retrofit for Networking",
        type: "skill",
      },
      {
        id: "android-5",
        title: "🔄 Asynchronous Programming",
        description: "Kotlin Coroutines | Flow | LiveData",
        type: "advanced",
      },
      {
        id: "android-6",
        title: "🧪 Testing",
        description: "Unit Tests (JUnit) | UI Tests (Espresso) | Hilt Testing",
        type: "advanced",
      },
      {
        id: "android-7",
        title: "🚀 Advanced Jetpack",
        description: "WorkManager | Paging 3 | CameraX",
        type: "advanced",
      },
      {
        id: "android-8",
        title: "🎯 Goal: Android Professional",
        description:
          "Build a complex, offline-first, and feature-rich Android app.",
        type: "project",
      },
    ],
  },
  // iOS Developer Roadmap
  {
    id: "ios-developer",
    title: "iOS",
    description:
      "A comprehensive guide to becoming an iOS Developer using Swift and SwiftUI, from beginner to App Store deployment.",
    category: "mobile",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Apple",
    color: "from-gray-600 to-gray-800",
    tags: ["iOS", "Swift", "SwiftUI", "MVVM", "Combine", "Mobile"],
    nodes: [
      {
        id: "ios-1",
        title: "🐦 Swift Fundamentals",
        description:
          "Variables | Optionals | Control Flow | Functions | Structs & Classes",
        type: "milestone",
      },
      {
        id: "ios-2",
        title: "🎨 UI with SwiftUI",
        description:
          "Views & Modifiers | State & Bindings | Navigation | Forms",
        type: "skill",
      },
      {
        id: "ios-3",
        title: "🏛️ App Architecture",
        description: "MVVM | Dependency Injection | App Lifecycle",
        type: "skill",
      },
      {
        id: "ios-4",
        title: "💾 Data Management",
        description:
          "Codable | Core Data | SwiftData | Networking (URLSession)",
        type: "skill",
      },
      {
        id: "ios-5",
        title: "🔄 Asynchronous Swift",
        description: "Combine | async/await",
        type: "advanced",
      },
      {
        id: "ios-6",
        title: "🧪 Testing",
        description: "XCTest | UI Testing | Mocking",
        type: "advanced",
      },
      {
        id: "ios-7",
        title: "🚀 App Store Connect",
        description:
          "Provisioning Profiles | Certificates | TestFlight | Deployment",
        type: "advanced",
      },
      {
        id: "ios-8",
        title: "🎯 Goal: iOS Professional",
        description:
          "Develop and publish a complete, feature-rich app to the App Store.",
        type: "project",
      },
    ],
  },
  {
    id: "flutter-developer",
    title: "Flutter",
    description:
      "A complete guide to becoming an expert Flutter developer, covering Dart, state management, and deploying to mobile platforms.",
    category: "mobile",
    difficulty: "intermediate",
    estimatedDuration: "5-8 months",
    icon: "Feather",
    color: "from-sky-500 to-blue-600",
    tags: ["Flutter", "Dart", "Mobile", "iOS", "Android", "State Management"],
    nodes: [
      {
        id: "flutter-1",
        title: "📱 Dart Fundamentals",
        description:
          "Variables | Classes | Mixins | Futures | async/await | Null Safety",
        type: "milestone",
      },
      {
        id: "flutter-2",
        title: "🧱 Flutter Core",
        description:
          "Widgets | State | BuildContext | Hot Reload | Material/Cupertino",
        type: "skill",
      },
      {
        id: "flutter-3",
        title: "🧩 State Management",
        description: "Provider | Riverpod | BLoC | GetX | MobX",
        type: "skill",
      },
      {
        id: "flutter-4",
        title: "🎨 UI/UX Design",
        description:
          "Custom Widgets | Layouts | Animations | Responsive Design",
        type: "skill",
      },
      {
        id: "flutter-5",
        title: "🔌 Navigation & Routing",
        description: "Navigator 1.0/2.0 | Named Routes | Deep Links",
        type: "advanced",
      },
      {
        id: "flutter-6",
        title: "📦 Packages & Plugins",
        description: "pub.dev | Platform Channels | Firebase Integration",
        type: "skill",
      },
      {
        id: "flutter-7",
        title: "📲 Platform Interop",
        description: "Android/iOS Integration | Permissions | Native APIs",
        type: "advanced",
      },
      {
        id: "flutter-8",
        title: "🧪 Testing",
        description: "Widget Tests | Unit Tests | Integration Tests | Mocking",
        type: "advanced",
      },
      {
        id: "flutter-9",
        title: "🚀 Build & Deploy",
        description:
          "Build Flavors | Code Signing | CI/CD | Play Store / App Store",
        type: "expert",
      },
      {
        id: "flutter-10",
        title: "🎯 Goal: Mobile Developer with Flutter Expertise",
        description:
          "Build and deploy a complex, cross-platform mobile application.",
        type: "project",
      },
    ],
  },
  {
    id: "ai-data-scientist",
    title: "AI & Data Scientist",
    description:
      "An ultimate guide to becoming an AI & Data Scientist, from Python programming to advanced deep learning models.",
    category: "ai-data",
    difficulty: "expert",
    estimatedDuration: "9-15 months",
    icon: "BrainCircuit",
    color: "from-rose-500 to-pink-600",
    tags: [
      "AI",
      "Data Science",
      "Python",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
    ],
    nodes: [
      {
        id: "ai-1",
        title: "🐍 Python for Data Science",
        description: "NumPy | Pandas | Matplotlib | Seaborn",
        type: "milestone",
      },
      {
        id: "ai-2",
        title: "🧮 Mathematics Foundation",
        description: "Linear Algebra | Calculus | Statistics | Probability",
        type: "milestone",
      },
      {
        id: "ai-3",
        title: "🤖 Machine Learning Core",
        description:
          "Supervised (Regression, Classification) | Unsupervised (Clustering)",
        type: "skill",
      },
      {
        id: "ai-4",
        title: "📊 Data Wrangling & EDA",
        description:
          "Cleaning | Feature Engineering | Visualization | Storytelling",
        type: "skill",
      },
      {
        id: "ai-5",
        title: "🧠 Deep Learning",
        description: "Neural Networks | TensorFlow/PyTorch | CNNs | RNNs",
        type: "advanced",
      },
      {
        id: "ai-6",
        title: "🗣️ Natural Language Processing (NLP)",
        description:
          "Text Preprocessing | Embeddings | Transformers (BERT, GPT)",
        type: "advanced",
      },
      {
        id: "ai-7",
        title: "👁️ Computer Vision (CV)",
        description: "Image Processing | Object Detection | Segmentation",
        type: "advanced",
      },
      {
        id: "ai-8",
        title: "🚀 MLOps",
        description: "Model Deployment | Monitoring | CI/CD for ML | Docker",
        type: "expert",
      },
      {
        id: "ai-9",
        title: "🎯 Goal: AI/Data Scientist",
        description: "Build and deploy an end-to-end AI project.",
        type: "project",
      },
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description:
      "A complete guide to becoming a Data Analyst, focusing on SQL, data visualization, and statistical analysis.",
    category: "ai-data",
    difficulty: "intermediate",
    estimatedDuration: "4-6 months",
    icon: "BarChart3",
    color: "from-sky-500 to-cyan-500",
    tags: [
      "Data Analysis",
      "SQL",
      "Tableau",
      "Power BI",
      "Python",
      "Statistics",
    ],
    nodes: [
      {
        id: "da-1",
        title: "📊 Spreadsheet Proficiency",
        description: "Excel | Google Sheets | Pivot Tables | Formulas",
        type: "milestone",
      },
      {
        id: "da-2",
        title: "🗃️ SQL Mastery",
        description: "Queries | Joins | Aggregations | Window Functions",
        type: "skill",
      },
      {
        id: "da-3",
        title: "📈 Data Visualization",
        description: "Tableau | Power BI | Storytelling with Data",
        type: "skill",
      },
      {
        id: "da-4",
        title: "🐍 Python for Analysis",
        description: "Pandas | NumPy | Matplotlib | Seaborn",
        type: "skill",
      },
      {
        id: "da-5",
        title: "🧮 Statistical Foundations",
        description: "Descriptive & Inferential Stats | A/B Testing",
        type: "advanced",
      },
      {
        id: "da-6",
        title: "📋 Business Acumen",
        description: "KPIs | Metrics | Domain Knowledge",
        type: "skill",
      },
      {
        id: "da-7",
        title: "🎯 Goal: Data Analyst",
        description:
          "Complete an end-to-end data analysis project with a compelling report.",
        type: "project",
      },
    ],
  },
  {
    id: "mlops-engineer",
    title: "MLOps Engineer",
    description:
      "The ultimate guide to MLOps, covering the entire lifecycle from data ingestion and model training to deployment and monitoring.",
    category: "ai-data",
    difficulty: "expert",
    estimatedDuration: "6-9 months",
    icon: "GitMerge",
    color: "from-rose-400 to-red-500",
    tags: [
      "MLOps",
      "DevOps",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Cloud",
      "Monitoring",
    ],
    nodes: [
      {
        id: "mlo-1",
        title: " Foundations",
        description: "DevOps Principles | Python | Linux | Git",
        type: "milestone",
      },
      {
        id: "mlo-2",
        title: " CI/CD for ML",
        description: "GitHub Actions | Jenkins | DVC | CML",
        type: "skill",
      },
      {
        id: "mlo-3",
        title: " Containerization & Orchestration",
        description: "Docker | Kubernetes | Kubeflow",
        type: "skill",
      },
      {
        id: "mlo-4",
        title: " Cloud Platforms",
        description: "AWS SageMaker | GCP Vertex AI | Azure ML",
        type: "advanced",
      },
      {
        id: "mlo-5",
        title: " Model Serving & Deployment",
        description: "REST APIs (FastAPI) | NVIDIA Triton | BentoML",
        type: "advanced",
      },
      {
        id: "mlo-6",
        title: " Monitoring & Observability",
        description: "Prometheus | Grafana | Evidently AI",
        type: "expert",
      },
      {
        id: "mlo-7",
        title: " Feature Stores",
        description: "Feast | Tecton",
        type: "expert",
      },
      {
        id: "mlo-8",
        title: "🎯 Goal: MLOps Professional",
        description:
          "Build a scalable, automated ML pipeline from development to production.",
        type: "project",
      },
    ],
  },
  {
    id: "generative-ai-expert",
    title: "Generative AI",
    description:
      "An expert-level guide to Generative AI, from theoretical foundations and foundation models to fine-tuning, deployment, and ethics.",
    category: "ai-data",
    difficulty: "expert",
    estimatedDuration: "12-18 months",
    icon: "Sparkles",
    color: "from-fuchsia-500 to-purple-600",
    tags: [
      "Generative AI",
      "LLM",
      "Transformers",
      "Fine-Tuning",
      "RAG",
      "Prompt Engineering",
    ],
    nodes: [
      {
        id: "genai-1",
        title: "🧠 Math & Theoretical Foundations",
        description:
          "Linear Algebra | Probability | Statistics | Calculus | Information Theory",
        type: "milestone",
      },
      {
        id: "genai-2",
        title: "💻 Essential Programming",
        description:
          "Python | NumPy | PyTorch | TensorFlow | Jupyter | Git | Shell Scripting",
        type: "skill",
      },
      {
        id: "genai-3",
        title: "🧠 ML & DL Core",
        description:
          "Supervised & Unsupervised Learning | Backpropagation | Optimizers | CNNs | RNNs",
        type: "skill",
      },
      {
        id: "genai-4",
        title: "🔮 Foundation Models",
        description:
          "Transformers | BERT | GPT | LLaMA | Mistral | ViT | SAM | Diffusion Models",
        type: "advanced",
      },
      {
        id: "genai-5",
        title: "🧠 LLM Ecosystem",
        description:
          "HuggingFace | OpenAI API | LangChain | Transformers Library | Model Fine-Tuning",
        type: "skill",
      },
      {
        id: "genai-6",
        title: "💡 Prompt Engineering",
        description:
          "Prompt Design | Chain-of-Thought | Retrieval-Augmented Generation (RAG)",
        type: "skill",
      },
      {
        id: "genai-7",
        title: "📦 Fine-Tuning Techniques",
        description: "LoRA | QLoRA | PEFT | Parameter-efficient Tuning | RLHF",
        type: "advanced",
      },
      {
        id: "genai-8",
        title: "🗃️ Data Curation",
        description:
          "Tokenization | Dataset Preprocessing | Labeling | Open Datasets (C4, Pile, LAION)",
        type: "skill",
      },
      {
        id: "genai-9",
        title: "📈 Evaluation & Metrics",
        description:
          "BLEU | ROUGE | Perplexity | Toxicity | Hallucination Detection",
        type: "advanced",
      },
      {
        id: "genai-10",
        title: "🎨 GenAI Applications",
        description:
          "Text Gen | Image Gen (Stable Diffusion) | Code Gen (CodeLlama) | Music & Audio | Video Gen",
        type: "skill",
      },
      {
        id: "genai-11",
        title: "🧪 Tooling & Experiment Tracking",
        description: "WandB | MLflow | TensorBoard | DVC | Weights & Biases",
        type: "advanced",
      },
      {
        id: "genai-12",
        title: "⚙️ Infrastructure & Serving",
        description:
          "ONNX | Triton Inference | vLLM | Text Generation Inference | Gradio | FastAPI | Streamlit",
        type: "expert",
      },
      {
        id: "genai-13",
        title: "📦 Deployment & Scaling",
        description:
          "Quantization | Model Pruning | A/B Testing | GPU vs CPU vs TPU | Docker | Kubernetes",
        type: "expert",
      },
      {
        id: "genai-14",
        title: "🔐 Ethical AI & Safety",
        description:
          "Bias | Toxicity | Adversarial Attacks | Hallucination | Red Teaming | Fairness",
        type: "expert",
      },
      {
        id: "genai-15",
        title:
          "🎯 Goal: Expert in Generative AI / LLM Systems / Applied AI Architect",
        description:
          "Build, fine-tune, and deploy a state-of-the-art Generative AI system.",
        type: "project",
      },
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps",
    description:
      "A complete guide to becoming a DevOps Engineer, covering CI/CD, infrastructure as code, and cloud platforms.",
    category: "devops",
    difficulty: "expert",
    estimatedDuration: "6-9 months",
    icon: "GitMerge",
    color: "from-orange-500 to-red-600",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Terraform", "AWS"],
    nodes: [
      {
        id: "do-1",
        title: "🐧 Linux & Scripting",
        description: "Shell (Bash) | Python/Go",
        type: "milestone",
      },
      {
        id: "do-2",
        title: "☁️ Cloud Provider",
        description: "AWS | GCP | Azure",
        type: "skill",
      },
      {
        id: "do-3",
        title: "📦 Containerization",
        description: "Docker | Containerd",
        type: "skill",
      },
      {
        id: "do-4",
        title: "⚙️ Orchestration",
        description: "Kubernetes | Helm",
        type: "advanced",
      },
      {
        id: "do-5",
        title: "🏗️ Infrastructure as Code (IaC)",
        description: "Terraform | Ansible",
        type: "advanced",
      },
      {
        id: "do-6",
        title: "🚀 CI/CD Pipelines",
        description: "GitHub Actions | GitLab CI",
        type: "skill",
      },
      {
        id: "do-7",
        title: "👁️ Monitoring & Logging",
        description: "Prometheus | Grafana | ELK Stack",
        type: "expert",
      },
      {
        id: "do-8",
        title: "🎯 Goal: DevOps Professional",
        description:
          "Automate the deployment and scaling of a complex application.",
        type: "project",
      },
    ],
  },
  {
    id: "software-architect",
    title: "Software Architect",
    description:
      "An expert-level guide to becoming a Software Architect, focusing on system design, patterns, and leadership.",
    category: "architecture",
    difficulty: "expert",
    estimatedDuration: "12-18 months",
    icon: "Network",
    color: "from-sky-500 to-blue-700",
    tags: [
      "System Design",
      "Architecture Patterns",
      "Microservices",
      "Scalability",
      "Leadership",
    ],
    nodes: [
      {
        id: "sa-1",
        title: " Foundations",
        description: "SOLID | DRY | KISS | Design Patterns",
        type: "milestone",
      },
      {
        id: "sa-2",
        title: " Architectural Patterns",
        description: "Monolith | Microservices | Event-Driven | SOA",
        type: "skill",
      },
      {
        id: "sa-3",
        title: " System Design Fundamentals",
        description: "Scalability | Availability | Performance | CAP Theorem",
        type: "skill",
      },
      {
        id: "sa-4",
        title: " Infrastructure & Cloud",
        description: "Cloud Native | Service Mesh | API Gateways",
        type: "advanced",
      },
      {
        id: "sa-5",
        title: " Data-Intensive Applications",
        description: "Data Modeling | Caching Strategies | Data Replication",
        type: "advanced",
      },
      {
        id: "sa-6",
        title: " Security & Compliance",
        description: "Threat Modeling | Secure by Design | GDPR/HIPAA",
        type: "expert",
      },
      {
        id: "sa-7",
        title: " Communication & Leadership",
        description: "ADRs | C4 Model | Stakeholder Management",
        type: "expert",
      },
      {
        id: "sa-8",
        title: "🎯 Goal: Software Architect",
        description:
          "Design a comprehensive architecture for a large-scale system.",
        type: "project",
      },
    ],
  },
  {
    id: "system-design-mastery",
    title: "System Design",
    description:
      "A comprehensive guide to System Design for building high-scale, resilient, and performant distributed systems.",
    category: "architecture",
    difficulty: "expert",
    estimatedDuration: "6-12 months",
    icon: "Network",
    color: "from-blue-600 to-sky-700",
    tags: [
      "System Design",
      "Scalability",
      "Architecture",
      "Distributed Systems",
      "High Availability",
    ],
    nodes: [
      {
        id: "sd-1",
        title: "📐 Design Fundamentals",
        description:
          "Latency | Throughput | Availability | Consistency | CAP Theorem",
        type: "milestone",
      },
      {
        id: "sd-2",
        title: "🧱 Building Blocks",
        description:
          "Load Balancers | Caches | DBs | Queues | CDN | Object Storage",
        type: "skill",
      },
      {
        id: "sd-3",
        title: "📊 Scalability Techniques",
        description:
          "Horizontal vs Vertical | Sharding | Replication | Partitioning",
        type: "skill",
      },
      {
        id: "sd-4",
        title: "💾 Storage & Databases",
        description:
          "SQL vs NoSQL | RDBMS | Document Stores | Key-Value | Time Series",
        type: "skill",
      },
      {
        id: "sd-5",
        title: "🧠 Caching",
        description:
          "Redis | Memcached | CDN | Cache Invalidation | Write-Through/Back",
        type: "advanced",
      },
      {
        id: "sd-6",
        title: "🛡️ Security",
        description:
          "OAuth2 | JWT | SSL | Rate Limiting | DDOS Protection | RBAC",
        type: "advanced",
      },
      {
        id: "sd-7",
        title: "🔌 API Design",
        description: "REST | GraphQL | Versioning | Pagination | Throttling",
        type: "skill",
      },
      {
        id: "sd-8",
        title: "🧪 Design Patterns",
        description:
          "CQRS | Event Sourcing | Saga | Circuit Breaker | Backpressure",
        type: "expert",
      },
      {
        id: "sd-9",
        title: "📦 Case Studies",
        description:
          "URL Shortener | Chat App | File Storage | Feed System | Netflix",
        type: "project",
      },
      {
        id: "sd-10",
        title: "🎯 Goal: System Design Mastery for High-Scale Systems",
        description:
          "Ace system design interviews and build robust architectures.",
        type: "project",
      },
    ],
  },
  {
    id: "api-design-engineer",
    title: "API Design",
    description:
      "A complete guide to designing high-quality, robust, and well-documented APIs using REST and GraphQL.",
    category: "architecture",
    difficulty: "advanced",
    estimatedDuration: "3-5 months",
    icon: "Share2",
    color: "from-indigo-400 to-purple-500",
    tags: [
      "API Design",
      "REST",
      "GraphQL",
      "Security",
      "Documentation",
      "Best Practices",
    ],
    nodes: [
      {
        id: "api-1",
        title: "🌐 API Basics",
        description:
          "HTTP Methods | Status Codes | Headers | URL Structures | REST",
        type: "milestone",
      },
      {
        id: "api-2",
        title: "📦 RESTful Best Practices",
        description:
          "CRUD Naming | Versioning | Statelessness | HATEOAS | Pagination",
        type: "skill",
      },
      {
        id: "api-3",
        title: "🧩 GraphQL Fundamentals",
        description: "Schema | Queries | Mutations | Subscriptions | Resolvers",
        type: "skill",
      },
      {
        id: "api-4",
        title: "🔐 Authentication",
        description: "OAuth2 | JWT | API Keys | Sessions | Scopes",
        type: "advanced",
      },
      {
        id: "api-5",
        title: "📄 API Documentation",
        description:
          "OpenAPI/Swagger | Postman | Insomnia | Redoc | API Blueprints",
        type: "skill",
      },
      {
        id: "api-6",
        title: "🔄 Rate Limiting & Caching",
        description: "Throttling | Redis Caching | CDN | Conditional Requests",
        type: "advanced",
      },
      {
        id: "api-7",
        title: "🧪 Testing APIs",
        description: "Postman | REST Assured | Supertest | Contract Testing",
        type: "advanced",
      },
      {
        id: "api-8",
        title: "📦 Monitoring & Logging",
        description: "APM | Prometheus | API Gateway Logs | Error Reporting",
        type: "expert",
      },
      {
        id: "api-9",
        title: "🎯 Goal: High-Quality API Engineer / Backend Architect",
        description: "Design, document, and build a production-quality API.",
        type: "project",
      },
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description:
      "A comprehensive guide for Product Managers, covering strategy, execution, and user-centric design.",
    category: "product",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Package",
    color: "from-yellow-500 to-amber-600",
    tags: [
      "Product Management",
      "Agile",
      "Strategy",
      "UX",
      "Roadmapping",
      "Analytics",
    ],
    nodes: [
      {
        id: "pm-1",
        title: " Fundamentals",
        description: "Product Lifecycle | Agile & Scrum | User Personas",
        type: "milestone",
      },
      {
        id: "pm-2",
        title: " Discovery & Strategy",
        description: "Market Research | Competitive Analysis | Product Vision",
        type: "skill",
      },
      {
        id: "pm-3",
        title: " Prioritization & Roadmapping",
        description: "RICE | MoSCoW | Kano Model | Product Roadmap",
        type: "skill",
      },
      {
        id: "pm-4",
        title: " Execution & Delivery",
        description:
          "PRDs | User Stories | Sprint Planning | Stakeholder Comms",
        type: "skill",
      },
      {
        id: "pm-5",
        title: " User-Centric Design",
        description: "UX Principles | Wireframing | Prototyping | A/B Testing",
        type: "skill",
      },
      {
        id: "pm-6",
        title: " Data & Analytics",
        description:
          "Key Metrics (HEART, AARRR) | SQL Basics | Analytics Tools",
        type: "advanced",
      },
      {
        id: "pm-7",
        title: "🎯 Goal: Product Manager",
        description:
          "Develop a product strategy, roadmap, and PRD for a new feature.",
        type: "project",
      },
    ],
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    description:
      "A leadership roadmap for Engineering Managers focusing on people, process, and technical oversight.",
    category: "product",
    difficulty: "expert",
    estimatedDuration: "9-12 months",
    icon: "Users",
    color: "from-amber-500 to-orange-600",
    tags: [
      "Leadership",
      "Management",
      "Agile",
      "System Design",
      "Hiring",
      "Mentorship",
    ],
    nodes: [
      {
        id: "em-1",
        title: " People Management",
        description: "1-on-1s | Feedback | Career Growth | Conflict Resolution",
        type: "milestone",
      },
      {
        id: "em-2",
        title: " Project & Process Management",
        description: "Agile/Scrum | Roadmapping | Project Planning | Metrics",
        type: "skill",
      },
      {
        id: "em-3",
        title: " Hiring & Team Building",
        description: "Interviewing | Onboarding | Building Team Culture",
        type: "skill",
      },
      {
        id: "em-4",
        title: "🛠️ Tech Stack Awareness",
        description: "Frontend + Backend + DevOps | Scaling | CI/CD",
        type: "skill",
      },
      {
        id: "em-5",
        title: " System Design & Architecture",
        description: "Architectural Review | Technical Debt Management",
        type: "advanced",
      },
      {
        id: "em-6",
        title: " Cross-Functional Leadership",
        description:
          "Stakeholder Alignment | Product Collaboration | Budgeting",
        type: "expert",
      },
      {
        id: "em-7",
        title: "🎯 Goal: Engineering Manager",
        description:
          "Lead a team to successfully deliver a complex project on time.",
        type: "project",
      },
    ],
  },
  {
    id: "developer-relations",
    title: "Developer Relations",
    description:
      "A guide to becoming a Developer Advocate, focusing on community, content, and code.",
    category: "community",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Megaphone",
    color: "from-cyan-400 to-teal-500",
    tags: [
      "DevRel",
      "Community",
      "Content Creation",
      "Public Speaking",
      "Technical Writing",
    ],
    nodes: [
      {
        id: "dr-1",
        title: " Foundations",
        description: "Public Speaking | Technical Writing | Empathy",
        type: "milestone",
      },
      {
        id: "dr-2",
        title: " Content Creation",
        description:
          "Blog Posts | Video Tutorials | Live Streams | Sample Apps",
        type: "skill",
      },
      {
        id: "dr-3",
        title: " Community Management",
        description: "Forum/Discord Engagement | Feedback Collection | Events",
        type: "skill",
      },
      {
        id: "dr-4",
        title: " Technical Acumen",
        description: "Deeply understand your product | APIs | SDKs",
        type: "skill",
      },
      {
        id: "dr-5",
        title: " Strategy & Metrics",
        description: "Community Growth | Content Reach | Product Adoption",
        type: "advanced",
      },
      {
        id: "dr-6",
        title: "🎯 Goal: Developer Advocate",
        description:
          "Create a content portfolio and community engagement plan for a product.",
        type: "project",
      },
    ],
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    description:
      "A complete guide to becoming a Technical Writer, focusing on clear documentation, tools, and developer experience.",
    category: "community",
    difficulty: "intermediate",
    estimatedDuration: "4-6 months",
    icon: "FileText",
    color: "from-sky-400 to-cyan-500",
    tags: [
      "Technical Writing",
      "Documentation",
      "Docs-as-Code",
      "API Docs",
      "Markdown",
    ],
    nodes: [
      {
        id: "tw-1",
        title: " Writing Fundamentals",
        description: "Clarity | Conciseness | Audience Analysis | Grammar",
        type: "milestone",
      },
      {
        id: "tw-2",
        title: " Documentation Types",
        description:
          "Tutorials | How-To Guides | Reference Docs | Conceptual Docs",
        type: "skill",
      },
      {
        id: "tw-3",
        title: " Docs-as-Code",
        description:
          "Markdown | Git | Static Site Generators (Docusaurus, MkDocs)",
        type: "skill",
      },
      {
        id: "tw-4",
        title: " API Documentation",
        description: "REST APIs | OpenAPI/Swagger | Code Comments",
        type: "advanced",
      },
      {
        id: "tw-5",
        title: " Tools of the Trade",
        description: "Grammarly | Vale | Style Guides (Google, Microsoft)",
        type: "skill",
      },
      {
        id: "tw-6",
        title: "🎯 Goal: Technical Writer",
        description:
          "Create a complete documentation site for a sample application.",
        type: "project",
      },
    ],
  },
  {
    id: "blockchain-developer",
    title: "Blockchain",
    description:
      "An ultimate guide to becoming a Blockchain Developer, covering everything from core concepts to building and deploying dApps.",
    category: "blockchain",
    difficulty: "expert",
    estimatedDuration: "9-12 months",
    icon: "Link",
    color: "from-amber-400 to-orange-500",
    tags: [
      "Blockchain",
      "Web3",
      "Solidity",
      "Ethereum",
      "Smart Contracts",
      "DeFi",
    ],
    nodes: [
      {
        id: "bc-1",
        title: "⛓️ Blockchain Fundamentals",
        description: "Decentralization | Consensus (PoW, PoS) | Cryptography",
        type: "milestone",
      },
      {
        id: "bc-2",
        title: "🤖 Smart Contracts (Solidity)",
        description: "Data Types | Functions | Inheritance | Events | EVM",
        type: "skill",
      },
      {
        id: "bc-3",
        title: "🛠️ Development Environment",
        description: "Hardhat | Foundry | Remix | Ethers.js | Web3.js",
        type: "skill",
      },
      {
        id: "bc-4",
        title: "🔐 Security & Auditing",
        description: "Reentrancy | Access Control | SWC Registry | Slither",
        type: "advanced",
      },
      {
        id: "bc-5",
        title: "🏗️ dApp Frontend",
        description:
          "Connecting to Wallets | Reading Contract Data | Sending Transactions",
        type: "skill",
      },
      {
        id: "bc-6",
        title: "📦 Token Standards",
        description: "ERC-20 (Fungible) | ERC-721 (NFT) | ERC-1155",
        type: "advanced",
      },
      {
        id: "bc-7",
        title: "🌐 Scaling & Layer 2",
        description: "Optimistic Rollups | ZK-Rollups | Sidechains",
        type: "expert",
      },
      {
        id: "bc-8",
        title: "🎯 Goal: Blockchain Developer",
        description:
          "Build, test, and deploy a complete decentralized application (dApp).",
        type: "project",
      },
    ],
  },
  {
    id: "qa-automation-engineer",
    title: "QA / Automation",
    description:
      "A complete guide to becoming a QA Automation Engineer, from manual testing principles to advanced test frameworks.",
    category: "qa",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "TestTube2",
    color: "from-lime-500 to-green-600",
    tags: ["QA", "Automation", "Cypress", "Selenium", "Playwright", "Testing"],
    nodes: [
      {
        id: "qa-1",
        title: "🧪 QA Fundamentals",
        description:
          "Testing Pyramid | Test Cases | Bug Reports | Agile Testing",
        type: "milestone",
      },
      {
        id: "qa-2",
        title: "🌐 Web Automation",
        description: "Cypress | Selenium | Playwright",
        type: "skill",
      },
      {
        id: "qa-3",
        title: "📱 Mobile Automation",
        description: "Appium | Native Frameworks (Espresso, XCUITest)",
        type: "skill",
      },
      {
        id: "qa-4",
        title: "🔌 API Testing",
        description: "Postman | REST-assured | Pytest",
        type: "skill",
      },
      {
        id: "qa-5",
        title: "🚀 Performance Testing",
        description: "JMeter | k6 | LoadRunner",
        type: "advanced",
      },
      {
        id: "qa-6",
        title: "🔄 CI/CD Integration",
        description: "Running tests in pipelines (GitHub Actions, Jenkins)",
        type: "advanced",
      },
      {
        id: "qa-7",
        title: "🎯 Goal: QA Automation Engineer",
        description:
          "Build a comprehensive, multi-layered test suite for a web application.",
        type: "project",
      },
    ],
  },
  {
    id: "cyber-security-specialist",
    title: "Cyber Security",
    description:
      "A comprehensive guide to becoming a Cyber Security Specialist, from core principles to advanced ethical hacking.",
    category: "cyber-security",
    difficulty: "expert",
    estimatedDuration: "12-18 months",
    icon: "Shield",
    color: "from-red-500 to-rose-600",
    tags: [
      "Cyber Security",
      "Ethical Hacking",
      "Pentesting",
      "Networking",
      "Cryptography",
    ],
    nodes: [
      {
        id: "cs-1",
        title: "🔒 Security Fundamentals",
        description: "CIA Triad | Networking | Operating Systems",
        type: "milestone",
      },
      {
        id: "cs-2",
        title: "🌐 Web App Pentesting",
        description: "OWASP Top 10 | Burp Suite | SQLi | XSS",
        type: "skill",
      },
      {
        id: "cs-3",
        title: "💻 Network Security",
        description: "Firewalls | IDS/IPS | Wireshark | Nmap",
        type: "skill",
      },
      {
        id: "cs-4",
        title: "🕵️ Ethical Hacking & PenTesting",
        description: "Metasploit | Reconnaissance | Exploitation",
        type: "advanced",
      },
      {
        id: "cs-5",
        title: "🔍 Digital Forensics",
        description:
          "Incident Response | Memory Analysis | File System Analysis",
        type: "advanced",
      },
      {
        id: "cs-6",
        title: "🛡️ Defensive Security",
        description: "SIEM | Hardening | Threat Intelligence",
        type: "expert",
      },
      {
        id: "cs-7",
        title: "📜 Certifications & Compliance",
        description: "CompTIA Security+ | OSCP | CISSP | ISO 27001",
        type: "expert",
      },
      {
        id: "cs-8",
        title: "🎯 Goal: Cyber Security Specialist",
        description:
          "Perform a full penetration test on a target system and write a report.",
        type: "project",
      },
    ],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description:
      "An ultimate guide to becoming a UX Designer, covering the entire design process from research to high-fidelity prototypes.",
    category: "design",
    difficulty: "intermediate",
    estimatedDuration: "6-9 months",
    icon: "Palette",
    color: "from-violet-500 to-purple-600",
    tags: [
      "UX Design",
      "UI Design",
      "User Research",
      "Figma",
      "Prototyping",
      "Usability Testing",
    ],
    nodes: [
      {
        id: "ux-1",
        title: "🎨 Design Fundamentals",
        description: "Color Theory | Typography | Layout | Hick's Law",
        type: "milestone",
      },
      {
        id: "ux-2",
        title: "🧐 User Research",
        description: "User Interviews | Surveys | Personas | Journey Mapping",
        type: "skill",
      },
      {
        id: "ux-3",
        title: "🏗️ Information Architecture",
        description: "Sitemaps | Card Sorting | User Flows",
        type: "skill",
      },
      {
        id: "ux-4",
        title: "✍️ Wireframing & Prototyping",
        description: "Low-Fidelity | High-Fidelity | Interactive Prototypes",
        type: "skill",
      },
      {
        id: "ux-5",
        title: "🖌️ UI & Visual Design",
        description:
          "Design Systems | Grids | Iconography | Accessibility (WCAG)",
        type: "skill",
      },
      {
        id: "ux-6",
        title: "🔬 Usability Testing",
        description:
          "Test Planning | Moderated & Unmoderated Testing | Analysis",
        type: "advanced",
      },
      {
        id: "ux-7",
        title: "🛠️ Tools of the Trade",
        description: "Figma | Sketch | Adobe XD | Maze",
        type: "skill",
      },
      {
        id: "ux-8",
        title: "🎯 Goal: UX Designer",
        description:
          "Design a complete mobile or web application from research to a high-fidelity prototype.",
        type: "project",
      },
    ],
  },
  {
    id: "game-developer",
    title: "Game Developer",
    description:
      "An ultimate guide to becoming a Game Developer, from core programming and math to game engines and deployment.",
    category: "gamedev",
    difficulty: "expert",
    estimatedDuration: "12-18 months",
    icon: "Gamepad2",
    color: "from-red-500 to-orange-600",
    tags: [
      "GameDev",
      "Unity",
      "Unreal Engine",
      "C++",
      "C#",
      "Game Design",
      "3D Math",
    ],
    nodes: [
      {
        id: "gd-1",
        title: "🕹️ Game Dev Foundations",
        description:
          "Programming (C++/C#) | 3D Math (Vectors, Matrices) | Game Loops",
        type: "milestone",
      },
      {
        id: "gd-2",
        title: "引擎 Game Engine",
        description: "Unity or Unreal Engine",
        type: "skill",
      },
      {
        id: "gd-3",
        title: "🎮 Gameplay Programming",
        description:
          "Input Handling | Physics | Character Controllers | AI (Pathfinding)",
        type: "skill",
      },
      {
        id: "gd-4",
        title: "🎨 Art & Asset Pipeline",
        description: "3D Modeling (Blender) | Texturing | Shaders | Animation",
        type: "advanced",
      },
      {
        id: "gd-5",
        title: "🔊 Audio Integration",
        description: "Sound Effects | Background Music | Spatial Audio",
        type: "skill",
      },
      {
        id: "gd-6",
        title: "🖥️ UI/UX for Games",
        description: "Menus | HUDs | Game State Feedback",
        type: "skill",
      },
      {
        id: "gd-7",
        title: "🚀 Optimization & Performance",
        description: "Profiling | Memory Management | Draw Calls",
        type: "expert",
      },
      {
        id: "gd-8",
        title: "📦 Publishing & Deployment",
        description: "Building for PC/Console/Mobile | Store Listings",
        type: "expert",
      },
      {
        id: "gd-9",
        title: "🎯 Goal: Game Developer",
        description: "Create and publish a complete game from scratch.",
        type: "project",
      },
    ],
  },
];

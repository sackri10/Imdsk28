export const profile = {
  name: 'Datta Sai Krishna Somesula',
  shortName: 'Datta Sai Krishna',
  roles: ['.NET Full Stack Engineer', 'Agentic AI Engineer'],
  years: '11+ Years',
  location: 'Hyderabad, India',
  email: 'sackri10@gmail.com',
  phone: '+91 94914 07399',
  tagline:
    '11 years across Wells Fargo, Deloitte, and Infosys — .NET full stack at the core, now building production agentic AI systems on top of it.',
  links: {
    github: 'https://github.com/sackri10',
    substack: 'https://imdsk28.substack.com',
    csharpcorner: 'https://www.c-sharpcorner.com/members/dattasai-krishna',
    linkedin: 'https://www.linkedin.com/in/imdsk28'
  }
}

export const highlights = [
  {
    title: 'Text-to-SQL Multi-Agent System',
    metric: 'Hours → ~2 min',
    metricLabel: 'analyst query turnaround',
    body:
      'Architected a production multi-agent system at Wells Fargo — LangGraph supervisor + SQL sub-agents, VectorDB-backed schema context, async result streaming, and LangFuse observability & evals.'
  },
  {
    title: 'Config-Driven Report Framework',
    metric: 'Days → Hours',
    metricLabel: 'new report development',
    body:
      'Report name, template, and stored procedure live in a definition table; a batch job executes and exports to Excel. Adding a report = one row insert — no UI, API, or framework change.'
  },
  {
    title: 'MCP Protocol Internals',
    metric: 'From scratch',
    metricLabel: 'no SDK shortcuts',
    body:
      'Implemented the MCP low-level protocol — JSON-RPC transport, capability handshake, tool schema negotiation — with OAuth 2.0 flows for secure agent-to-tool identity. Deployed on AWS Bedrock AgentCore.'
  },
  {
    title: 'Automation That Sticks',
    metric: '~22 hrs/month',
    metricLabel: 'handed back to the team',
    body:
      'Turned a daily 1-hour manual SQL grind into a scheduled PowerShell pipeline, and cut 3 hours of manual release prep per sprint to under 15 minutes with a TFS deployment verification tool.'
  }
]

export const experience = [
  {
    company: 'Wells Fargo India Solutions',
    role: 'Senior Software Engineer',
    period: 'Jan 2022 – Present',
    location: 'Hyderabad',
    project: 'Trust Asset Services — Regulatory Reporting Portal',
    stack: [
      'ASP.NET Core', 'C#', 'Web API', 'Angular', 'RxJS', 'Python FastAPI',
      'LangGraph', 'VectorDB', 'LangFuse', 'SSIS', 'IBM DB2',
      'Jenkins', 'Harness CD', 'Cloud Foundry', 'OpenShift'
    ],
    bullets: [
      'Sole engineer on a Text-to-SQL Multi-Agent System: LangGraph supervisor dispatches to SQL sub-agents, VectorDB feeds schema context, Corrective-RAG catches low-confidence answers, and streaming keeps analysts from staring at a spinner — query wait dropped from hours to ~2 minutes.',
      'Implemented Corrective-RAG + Claude Extended Thinking for ambiguous schemas — retrieval grading, web-search fallback, query rewriting before SQL generation; hallucinated column names dropped significantly.',
      'Designed and own a config-driven Report Generation Framework — zero code changes to add a new report; what took days of dev, QA, and release now takes one row insert and a template drop.',
      'Built a reusable Angular CRUD grid component — the next 3 screens took ~40% less time to wire up.',
      'Migrated CI/CD from Jenkins to Harness CD with GitHub Actions targeting Kubernetes/OpenShift — deployment lead time down ~35%.',
      'Wired Splunk into the .NET Core Web API — hours of log-grepping became ~15-minute diagnoses.',
      'Shipped role-based read-only access for 2 user tiers to meet a regulatory requirement — no post-release defects.',
      'Packaged a PCF batch app on Autosys — the nightly reconciliation someone used to kick off by hand now just runs.'
    ]
  },
  {
    company: 'Deloitte Consulting',
    role: 'Senior Consultant',
    period: 'Jun 2018 – Jan 2022',
    location: 'Hyderabad',
    project: 'Integrated Eligibility — Worker Portal (US State Govt. SaaS)',
    stack: [
      'ASP.NET Core', 'C#', 'Web API', 'Angular', 'SQL Server',
      'Azure Functions', 'Redis', 'NUnit', 'Bootstrap', 'TFS'
    ],
    bullets: [
      'Led 3 engineers inside a 10-dev program — 6 framework-level CRs, all on schedule, none blocking the wider team.',
      'Designed the Onion Architecture skeleton every other team member built their screens on top of.',
      'Replaced polling with Azure Function Apps + Redis pub/sub for real-time push notifications — polling traffic dropped ~60%.',
      'Turned 12 hardcoded eligibility rules into a SQL Server decision-table engine — new rules became a data change, not a code change.',
      'Plugged in LogRocket — QA could replay the exact session behind a bug; 90%+ reproducibility without developer involvement.',
      'Ran weekly code reviews — <5% defect escape rate across 4 major releases in a regulated government environment.'
    ]
  },
  {
    company: 'Infosys',
    role: 'Senior Systems Engineer',
    period: 'Sep 2014 – May 2018',
    location: 'Hyderabad',
    project: 'Molina Healthcare — 7 Web Portals + Mobile App · Microsoft — Cloud & Enterprise Security',
    stack: [
      'ASP.NET MVC', 'C#', 'SQL Server', 'Web API', 'Kendo UI',
      'SSRS', 'Xamarin', 'PowerShell', 'SCOM', 'WinForms'
    ],
    bullets: [
      'Wrote the custom Authorization layer locking down Web API endpoints across 7 Medicaid/Medicare patient portals — one codebase, one security model, 7 surfaces.',
      'Built a TFS deployment verification tool that validated check-ins and auto-generated delta deployment packages — ~3 hrs of manual release prep per sprint down to under 15 minutes.',
      'Wrote stored procedures handling eligibility data transforms across 3 DB schemas — conditional logic that would have been painful as application code.',
      'Built a WinForms DB-query automation tool used daily by the team — ~22 hrs/month of repetitive SQL work eliminated.',
      'Monitored 15+ live applications via SCOM — caught incidents early, kept SLAs intact.'
    ]
  }
]

export const projects = [
  {
    name: 'Langgraph Multi-Agents',
    url: 'https://github.com/sackri10/Langgraph-Multi-Agents',
    tags: ['LangGraph', 'Multi-Agent', 'Python'],
    description:
      'Supervisor + sub-agent orchestration in LangGraph — state graph, conditional routing, shared tools across agents. Built to understand what breaks at the edges of multi-agent coordination.'
  },
  {
    name: 'MCP_LowLevel',
    url: 'https://github.com/sackri10/MCP_LowLevel',
    tags: ['MCP', 'JSON-RPC', 'OAuth 2.0 + PKCE'],
    description:
      'MCP from scratch, no SDK shortcuts: JSON-RPC transport, capability handshake, tool-schema registration, and OAuth 2.0 Auth Code + PKCE wired in. The high-level abstractions were hiding things worth understanding.'
  },
  {
    name: 'text_to_sql_agent',
    url: 'https://github.com/sackri10/text_to_sql_agent',
    tags: ['AWS Bedrock', 'AgentCore', 'LangGraph'],
    description:
      'Text-to-SQL agent on AWS Bedrock AgentCore — LangGraph wrapped in the AgentCore entrypoint, MCP tools secured with OAuth, CloudWatch tracing on every invocation. Framework-agnostic serverless agent hosting, in practice.'
  },
  {
    name: 'Corrective-RAG',
    url: 'https://github.com/sackri10/Corrective-RAG',
    tags: ['CRAG', 'LangGraph', 'RAG'],
    description:
      'CRAG implementation — grades retrieved chunks, falls back to web search when they fail, rewrites the query before answering. The naive RAG version hallucinated; this one doesn\'t.'
  },
  {
    name: 'MCPWithAgent',
    url: 'https://github.com/sackri10/MCPWithAgent',
    tags: ['MCP', 'Agents', 'Tooling'],
    description:
      'LLM agent wired to an MCP server — tool schema, server-side execution, the full handshake. Built after reading the spec to see where the friction points actually are.'
  },
  {
    name: 'ExtendedThinking',
    url: 'https://github.com/sackri10/ExtendedThinking',
    tags: ['Claude', 'Extended Thinking', 'Evals'],
    description:
      'Claude\'s extended-thinking budget applied to multi-step reasoning — tested where the extra token spend actually changes answer quality, and where it doesn\'t.'
  }
]

export const skills = [
  {
    group: 'Agentic AI',
    items: [
      'LangGraph', 'LangChain', 'Google ADK', 'MCP', 'Autogen', 'RAG',
      'Corrective-RAG', 'LLM Evals (LangFuse)', 'Extended Thinking', 'Streamlit'
    ]
  },
  {
    group: 'Backend',
    items: [
      'C#', 'ASP.NET Core', 'Web API', 'Entity Framework', 'Python',
      'Microservices (CQRS, Outbox)', 'Azure Functions', 'Redis',
      'SQL Server', 'MongoDB', 'VectorDB'
    ]
  },
  {
    group: 'Frontend',
    items: [
      'Angular (v2–17)', 'React', 'TypeScript', 'JavaScript', 'RxJS',
      'HTML5', 'CSS3', 'Bootstrap', 'Jasmine', 'Karma'
    ]
  },
  {
    group: 'Cloud & DevOps',
    items: [
      'Azure (AZ-204)', 'Docker', 'Kubernetes', 'OpenShift', 'Cloud Foundry',
      'GitHub Actions', 'Jenkins', 'Harness CD', 'Splunk', 'AppDynamics'
    ]
  },
  {
    group: 'Data & Integration',
    items: ['SSIS', 'SSRS', 'IBM DB2', 'Stored Procedures', 'LangFuse Observability']
  },
  {
    group: 'Tools',
    items: ['Visual Studio', 'VS Code', 'Postman', 'Git/TFS', 'PowerShell', 'Checkmarx']
  }
]

export const certifications = [
  {
    name: 'AZ-204 — Azure Developer Associate',
    issuer: 'Microsoft Certified',
    note: 'Renewed till 2027'
  },
  {
    name: 'AI-900 — Azure AI Fundamentals',
    issuer: 'Microsoft Certified',
    note: ''
  },
  {
    name: '.NET Aspire',
    issuer: 'Microsoft Applied Skills',
    note: ''
  },
  {
    name: 'Generative AI with Azure OpenAI',
    issuer: 'Microsoft Applied Skills',
    note: ''
  }
]

export const education = {
  degree: 'B.Tech — Computer Science Engineering',
  school: 'G. Pulla Reddy Engineering College, AP',
  period: '2010 – 2014',
  score: 'CGPA 8.18 / 10'
}

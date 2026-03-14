export interface ArticleSection {
  heading: string
  paragraphs: string[]
}

export interface Article {
  id: number
  slug: string
  title: string
  description: string
  mediumUrl: string
  date: string
  tags: string[]
  platform: string
  author: string
  readingTime: string
  keywords: string[]
  content: ArticleSection[]
}

export const articles: Article[] = [
  {
    id: 2,
    slug: 'types-of-ai-as-a-service',
    title: 'Types or Components of AI as a Service',
    description: 'A breakdown of the three core components of AI as a Service — Data, Model, and Insight — and how they work together to bring unproductionised AI use cases to market.',
    mediumUrl: 'https://medium.com/@h.chegini/types-or-components-of-ai-as-a-service',
    date: '2026-03-14',
    tags: ['AI', 'AIaaS', 'Data', 'Machine Learning'],
    platform: 'Medium',
    author: 'Hossein Chegini',
    readingTime: '2 min read',
    keywords: ['AI as a Service', 'AIaaS', 'Data Pipeline', 'AI Model', 'Machine Learning', 'AI Insight', 'AI Components'],
    content: [
      {
        heading: 'Unproductionised AI Use Cases',
        paragraphs: [
          'In terms of AI services, there are still discussions about how to define, develop, and productionise use cases that are not yet in production. When talking about unproductionised use cases, this means business use cases that still have not had the opportunity to come to the market.',
          'For these to be developed, we work on different aspects of a software system, especially its AI components, to see how it could be developed to serve its clients well.',
        ]
      },
      {
        heading: 'AI as a Service: Data',
        paragraphs: [
          'Data is the first step of any software pipeline, and it will determine the nature and the structure of an AI project and address how its structure could look. Imagine we have a second-hand market where dresses still do not have a barcode or a tag to be identified. This would be a great opportunity, since second-hand dresses are becoming highly demanded in the market due to values such as their environmentally friendly aspect.',
        ]
      },
      {
        heading: 'AI as a Service: Model',
        paragraphs: [
          'This is the most important component of a software pipeline, which shows the type of an AI service (whether it is prediction, generation, or moderation), and it is the core component. Any AI software would not work without proper modelling. Any model requires training, which again is the most important stage of any AI software.',
        ]
      },
      {
        heading: 'AI as a Service: Insight',
        paragraphs: [
          'There might be cases where we have good data generation and a good model but are not sure how to present it to customers. This is the point where we need to think of a good solution for it, either through good reporting or a web application. This part is not as complicated as modelling, but it still needs special attention.',
        ]
      },
    ]
  },
  {
    id: 1,
    slug: 'ai-as-a-service',
    title: 'AI as a Service (AIaaS): What It Really Means',
    description: 'Exploring the true meaning of AI-as-a-Service — what it is, why it matters, and how it powers real-world solutions for businesses.',
    mediumUrl: 'https://medium.com/@h.chegini/ai-as-a-service-aiaas-what-it-really-means-335d17745e9b',
    date: '2026-02-20',
    tags: ['AI', 'AIaaS', 'Machine Learning'],
    platform: 'Medium',
    author: 'Hossein Chegini',
    readingTime: '8 min read',
    keywords: ['AI as a Service', 'AIaaS', 'Machine Learning', 'Artificial Intelligence', 'SaaS', 'PaaS', 'IaaS', 'Cloud AI'],
    content: [
      {
        heading: 'The Rise of Cloud Service Models',
        paragraphs: [
          'It has been a long time since people in computer science and software development have been familiar with phrases such as: SaaS, PaaS, IaaS, HaaS, etc. These terms came with their own definitions and business models across different areas of software, but they became more prominent after hardware systems and platforms were shifted from local environments to global ones known as clouds.',
          'After networks became mature, cloud systems became essential, as they claimed to provide various capabilities throughout the software lifecycle, such as installation, runtime, and testing. The clouds were initially set up as hardware infrastructures in data centers, with security features designed to ensure that customers would not need to worry about their data after it had been transferred to the cloud.',
        ]
      },
      {
        heading: 'Networks, Risks, and Platform Choices',
        paragraphs: [
          'From that point on, and if we do not call it an issue, networks became the major risk factor for services that depended on them, such as PaaS and IaaS. The former is typically tied to a platform (mainly an operating system), while the latter provides broader facilities, including more flexible runtime environments.',
          'The major advantages of PaaS, IaaS, and SaaS were the large-scale infrastructure provided by companies such as Microsoft and Google to host software in cloud environments rather than local ones, which often suffer from limitations such as hardware capacity and operating system constraints.',
        ]
      },
      {
        heading: 'The Need for AIaaS',
        paragraphs: [
          'Sometimes there can be conflicts in deciding which service to adopt, especially between SaaS and IaaS. It is not always clear whether we need software components from a cloud provider or more control over hardware-level resources. As computational demand increases daily, we must ensure that cloud providers can deliver sufficient resources to prevent software crashes during runtime. This reliability is especially critical for AI modules and applications.',
          'There is no doubt that modern AI systems require massive computational power and dedicated hardware, particularly GPUs. Therefore, AIaaS (AI as a Service) is a critical factor to consider before making any platform decision — and AIaaS is the concept that this article will focus on and elaborate on.',
        ]
      },
      {
        heading: 'The Three Categories of AIaaS',
        paragraphs: [
          'A simple AIaaS architecture classifies the AI component into three major parts: prediction, moderation, and generation.',
          'An AI service for prediction aims to estimate how future factors may impact a variable, such as mortgage rates, traffic in major areas, or power outages. An AI service for moderation focuses on models and modules designed to ensure content is safe and appropriate — for example, moderating text for users under 18 years old. Generation is one of the most common AI services today, with GPT models being a primary example, capable of generating various types of content, including text, images, and videos.',
        ]
      },
      {
        heading: 'Deploying AIaaS',
        paragraphs: [
          'There are many parameters that must be considered, studied, and configured before deploying any AI component to a host and activating AIaaS. In short, AIaaS aims to encapsulate all the software, hardware, and networking resources required to host an AI model or module in either a staging or production environment.',
          'One of the major phases of any AI pipeline is training, which requires both hardware and software to adjust and optimize the parameters of an AI model. By "best," we refer to the tuning and optimization phase that improves the model\'s performance.',
        ]
      },
      {
        heading: 'The Golden Definition',
        paragraphs: [
          'AIaaS is an advanced service provided by traditional cloud providers, offering dedicated GPUs and clustering capabilities (if required) to support the computational demands of AI models — particularly during the training phase, but also during inference.',
        ]
      },
    ]
  }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return articles.map(a => a.slug)
}

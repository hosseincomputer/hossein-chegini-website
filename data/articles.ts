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
    id: 4,
    slug: 'complex-scenarios-structuring-dbt-models',
    title: 'Complex Scenarios: Structuring Your Data Build Tool (DBT) Models',
    description: 'How to apply modular programming principles to SQL using DBT — with a practical shopping example covering staging, intermediate, and final model layers.',
    mediumUrl: 'https://medium.com/@h.chegini/complex-scenarios-structuring-your-data-build-tool-dbt-models',
    date: '2024-02-11',
    tags: ['DBT', 'SQL', 'Data Engineering', 'Analytics'],
    platform: 'Medium',
    author: 'Hossein Chegini',
    readingTime: '5 min read',
    keywords: ['DBT', 'Data Build Tool', 'SQL modular programming', 'data engineering', 'staging models', 'intermediate models', 'data pipeline', 'analytics engineering'],
    content: [
      {
        heading: 'Introduction',
        paragraphs: [
          'We all know of a metaphor called spaghetti programming and how it imposes a huge panic for us for maintenance and testing. Imagine there is a bug in your code and you have spent hours and days and still not sure how to fix it. With spaghetti thinking you should just go through the whole code and try all the streams to see which one is the cause. And after finding the source of error, your panic has just begun. You should fix it by changing a lot of code because your software has been designed in a spaghetti form. And it does not allow us to think clearly and simply for software design.',
          'Clarity and simplicity are two essential key factors of design and development in any sector of production, particularly in software engineering. This has been achieved in software programming but NOT in database design since years ago. In software, we can think of a complex problem as various sub-problems or smaller problems. This would be the first stage in systematic thinking where we can walk through our clarity and simplicity direction.',
          'After knowing the sub-problems, the next stage would be how to design a software component to resolve each of the problems. A huge work and research have been conducted in the last decades in this direction to achieve this methodology which is called modular programming or procedural programming. This has resulted in a much better way in design and coding irrespective of the syntax or compile, it could be JAVA, C, C++, Python, PERL, etc. All these programming languages have invested a lot in functions and methods. BUT what about SQL?',
        ]
      },
      {
        heading: 'Methodology',
        paragraphs: [
          'The modularity in all the mentioned compilers is simple: just detect the strings of input-output inside a problem and define a function for it. This works best and is the basis of procedural programming. So how can we achieve this in a database programming language such as SQL?',
          'Answer: Think as atomic as you can and try to define integrations as the JOIN operations we use in SQL. There are three layers in DBT design: Staging (to prepare data from a single table), Intermediate models (as a transformation layer for joins), and Final models (integration of the previous layers for final output).',
          'In a shopping example, the staging layer prepares raw data from individual tables: orders, order items, products, customers, product reviews, and suppliers — each with its own dedicated staging model (stg_orders.sql, stg_order_items.sql, stg_products.sql, stg_customer.sql, stg_product_review.sql, stg_suppliers.sql).',
        ]
      },
      {
        heading: 'Intermediate and Final Layers',
        paragraphs: [
          'Once we have all the data ready from the staging layer, we can now transform them together with SQL operations to make it closer to the final result. Filtering, grouping, summing, averaging, and conditional statements are the SQL operations used in this layer. Key intermediate models include: int_order_details.sql (combines orders and order items for detailed insights) and int_sales.sql (creates a sales fact table aggregating sales data), and int_product_reviews.sql (aggregates product review scores).',
          'In the final integration stage, we integrate the intermediate and staging models as designed to provide data close to the final output — for example, fin_customer_analytics, which integrates staging and intermediate models to produce the final results.',
          'In more complex cases, we need to think about how to break down the situation into more models. We might need to define more staging models, perform additional transformations, integrate more DBT models — but we should never try to cope with complexity using a single complex SQL query.',
        ]
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'DBT is indeed a key technology in bringing modularity and reusability to SQL programming. The DBT platform allows for the definition and design of models and modules that are atomic and can be reused in many use cases. The join operation serves as the main connection point of DBT models and is better utilized in the intermediate or final stages. A DBT diagram provides another view of how different DBT models collaborate for a single result, which is a beneficial aspect of database engineering.',
        ]
      },
    ]
  },
  {
    id: 3,
    slug: 'is-gpt5-better-at-code-generation-and-debugging',
    title: 'Is GPT-5 Better at Code Generation and Debugging? Not Really',
    description: 'A hands-on experiment comparing GPT-5 and GPT-4.5 Turbo for SQL debugging — and why GPT-5 may have hit the S-curve ceiling of LLM performance.',
    mediumUrl: 'https://medium.com/@h.chegini/is-gpt-5-better-at-code-generation-and-debugging-not-really-6ab94d422fa6',
    date: '2025-08-15',
    tags: ['GPT-5', 'LLM', 'AI', 'Debugging', 'Code Generation'],
    platform: 'Medium',
    author: 'Hossein Chegini',
    readingTime: '5 min read',
    keywords: ['GPT-5', 'GPT-4.5', 'code generation', 'AI debugging', 'LLM performance', 'SQL debugging', 'ChatGPT', 'overfitting', 'S-curve'],
    content: [
      {
        heading: 'The Motivation',
        paragraphs: [
          'The motivation for writing this story comes from an experiment I ran last week: debugging one of my SQL queries and seeing how the new GPT model helped me resolve the error quickly. I already saw clear improvements after the new model\'s release when I compared it with previous versions. It was great to see how GPT-4o improved on its predecessor, GPT-3.5, and how o3 did the same compared to GPT-4o.',
          'After a long wait, OpenAI released its most advanced and sophisticated model, GPT-5, last week. It comes in two modes: Auto, Fast and Thinking. The Fast mode is designed to answer straightforward questions quickly, while the Thinking mode provides Chain-of-Thought (CoT) capability, which was attached to the previous model, starting from o1 leading to o3. And by auto the model can switch to either fast or thinking from the question.',
          'This means you\'ll lose access to the previous models like o3, GPT-4 Turbo, and GPT-4.5 Turbo. The reasoning is that GPT-5 includes the Thinking capability, so it can handle most o3-style tasks. However, based on my first debugging experiment, I came to the conclusion that GPT-5 is weaker than GPT-4.5 Turbo at coding and debugging.',
        ]
      },
      {
        heading: 'A SQL Use Case',
        paragraphs: [
          'After encountering an SQL error, I tried debugging it with GPT-5. After a few iterations, I felt it had deficiencies in identifying the source of the bug, providing clear reasoning, and fixing it. I concluded that it struggled at three stages of code debugging: pinpointing the root cause, explaining the reasoning to the user, and implementing and verifying a working fix.',
          'My test for unique rows failed, and the code wasn\'t even that big. After the first prompt, it added about 50 lines with two CTEs, and the problem was still there. In my second prompt, after testing, I asked it to take a closer look and fix the duplicates, but it produced another 40 lines of SELECT subquery code with the same error. In my third prompt, I asked it to just fix the existing code, but it couldn\'t — what I got was more text and explanations about the code it had generated.',
          'So, a bit bored, I switched to my traditional way of debugging — Googling the error, finding the relevant Stack Overflow pages, understanding the solution, trying it out, and testing — and after a few minutes the answer was simply to add DISTINCT before my SELECT. Can you believe it? I added DISTINCT, the duplicates disappeared, and the error was fixed. My original code was about 70 lines, but after my prompts it ballooned to around 170 — with the error still there — even though the smart answer was just one word: DISTINCT.',
        ]
      },
      {
        heading: 'GPT-5 More Talkative and Less to the Point',
        paragraphs: [
          'Comparing my GPT-4.5 vs GPT-5 debugging experiments, the following were obvious: GPT-5 is more talkative unless you limit its tokens in the prompt. It hallucinates a bit more than its ancestors (o3 and GPT-4.5). It needs more prompting from the user to finish tasks. It\'s less sharp at error detection than GPT-4.5.',
          'An error that GPT-4.5 solved in ~1,000 tokens took GPT-5 at least ~2,000 tokens. Why? And why does GPT-5 have some serious deficiencies compared with its ancestors? Maybe the answer involves the S-model — what is it?',
        ]
      },
      {
        heading: 'The S Model',
        paragraphs: [
          'Whether you\'ve started learning chess, taken up golf as your favorite sport, or begun a martial art, you probably noticed rapid progress in the first few years — and far subtler gains later. You can keep increasing your expertise in any field, but there\'s a ceiling: early improvements are big; later improvements get smaller even as you practice more. This doesn\'t mean you\'re lazy or not putting in effort — it\'s simply how learning tends to work.',
          'For example, in chess you might reach ~1900 after two years, ~2000 after three, and — ten years in — top out around ~2150. The increments shrink as you approach your current limit. This is the classic S-curve of learning: fast growth at the start, then a long plateau.',
          'The first model in the family, GPT-1, aimed to converse more naturally. GPT-3.5 was a major achievement for answering questions and coding. With GPT-4o and GPT-4.5, performance improved further — better at detecting errors, solving more complex problems, and providing suggestions. GPT-o3 introduced chain-of-thought (CoT) reasoning. GPT-5, however, seems to sit at the peak of the S-curve.',
        ]
      },
      {
        heading: 'The GPTs and the Problem of Overfitting',
        paragraphs: [
          'In ML we have a classic problem called overfitting: strong performance on the training set doesn\'t necessarily mean the model will perform well on new data. To improve a model we might add more iterations, layers/neurons, or tune learning parameters, but there\'s a point where adding more can make the model worse — for GPT-style systems, that can mean lower accuracy on questions, weaker bug-fixing, and poorer performance on novel problems that weren\'t in the internet-scale training data.',
          'Overfitting (and diminishing returns) in GPTs can arise when teams scale up GPUs and Transformers — vertically (deeper) and horizontally (wider) — to make models larger and more powerful. But there\'s a ceiling: more hardware or bigger models alone may not help, and further gains likely require better data, objectives, and techniques. If these are real limits of current LLMs, then the idea of a technological singularity may still be some distance away.',
        ]
      },
    ]
  },
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

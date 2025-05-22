export type Comment = {
  id: string;
  articleId: string;
  author: string;
  content: string;
  createdAt: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
};

// Sample data - In a real app, this would come from an API
export const articles: Article[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-and-typescript',
    excerpt: 'Learn how to set up and use TypeScript with React for type-safe development.',
    content: `
      <p>TypeScript has become an essential tool for many React developers. It provides static type checking, which can catch errors during development rather than at runtime.</p>
      
      <h2>Why TypeScript?</h2>
      
      <p>TypeScript offers several benefits for React development:</p>
      
      <ul>
        <li>Better autocomplete and IntelliSense in code editors</li>
        <li>Catch errors during compilation rather than at runtime</li>
        <li>Make refactoring easier and safer</li>
        <li>Improve code documentation through type definitions</li>
      </ul>
      
      <h2>Setting Up a New Project</h2>
      
      <p>The easiest way to create a new React + TypeScript project is to use Create React App with the TypeScript template:</p>
      
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>Or with Vite:</p>
      
      <pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>
      
      <h2>Basic TypeScript in React</h2>
      
      <p>Here's a simple example of a typed React component:</p>
      
      <pre><code>
type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  color = 'primary' 
}) => {
  return (
    <button
      className={color === 'primary' ? 'bg-blue-500' : 'bg-gray-500'}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
      </code></pre>
      
      <h2>Conclusion</h2>
      
      <p>TypeScript might have a learning curve, but the benefits it brings to React development are significant. It helps create more robust applications and improves the developer experience.</p>
    `,
    author: 'Jane Doe',
    createdAt: '2023-05-15T10:00:00Z',
    updatedAt: '2023-05-15T10:00:00Z',
    tags: ['React', 'TypeScript', 'Web Development'],
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'The Power of Tailwind CSS',
    slug: 'the-power-of-tailwind-css',
    excerpt: 'Discover how Tailwind CSS can streamline your development workflow.',
    content: `
      <p>Tailwind CSS has gained tremendous popularity in recent years. It's a utility-first CSS framework that allows for rapid UI development without leaving your HTML.</p>
      
      <h2>What Makes Tailwind Different?</h2>
      
      <p>Unlike traditional CSS frameworks like Bootstrap or Foundation, Tailwind doesn't provide pre-designed components. Instead, it gives you utility classes that you can combine to create custom designs without writing CSS.</p>
      
      <p>For example, instead of defining a "button" class and styling it with CSS, you would do:</p>
      
      <pre><code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  Click me
&lt;/button&gt;</code></pre>
      
      <h2>Benefits of Tailwind</h2>
      
      <ul>
        <li>No need to think of class names</li>
        <li>No context switching between HTML and CSS files</li>
        <li>Consistent spacing, colors, and design tokens</li>
        <li>Highly customizable through configuration</li>
      </ul>
      
      <h2>Setting Up Tailwind</h2>
      
      <p>Getting started with Tailwind is straightforward:</p>
      
      <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>Then configure your content paths in tailwind.config.js:</p>
      
      <pre><code>module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Tailwind CSS provides a different approach to styling web applications. While it might seem verbose at first, many developers find that it speeds up their workflow and helps create consistent interfaces.</p>
    `,
    author: 'John Smith',
    createdAt: '2023-06-22T14:30:00Z',
    updatedAt: '2023-06-22T14:30:00Z',
    tags: ['CSS', 'Tailwind', 'Web Development'],
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Building Accessible Web Applications',
    slug: 'building-accessible-web-applications',
    excerpt: 'Learn why accessibility matters and how to implement it in your web apps.',
    content: `
      <p>Web accessibility ensures that people with disabilities can use websites and web applications. It's not just a nice-to-have feature—it's essential for creating inclusive products.</p>
      
      <h2>Why Accessibility Matters</h2>
      
      <p>Accessibility benefits everyone, not just users with permanent disabilities:</p>
      
      <ul>
        <li>It makes websites usable for people with disabilities</li>
        <li>It improves usability for all users</li>
        <li>It's often a legal requirement in many countries</li>
        <li>It can improve SEO and reach a wider audience</li>
      </ul>
      
      <h2>Key Accessibility Practices</h2>
      
      <h3>Semantic HTML</h3>
      
      <p>Using the right HTML elements for their intended purpose is the foundation of accessibility:</p>
      
      <pre><code>/* Poor accessibility */
&lt;div onclick="navigate()"&gt;Click me&lt;/div&gt;

/* Better accessibility */
&lt;button onclick="navigate()"&gt;Click me&lt;/button&gt;</code></pre>
      
      <h3>Keyboard Navigation</h3>
      
      <p>Ensure all interactive elements can be accessed and operated using only a keyboard.</p>
      
      <h3>ARIA Attributes</h3>
      
      <p>ARIA (Accessible Rich Internet Applications) attributes can enhance accessibility when HTML alone isn't enough:</p>
      
      <pre><code>&lt;div role="alert" aria-live="assertive"&gt;
  Form submitted successfully!
&lt;/div&gt;</code></pre>
      
      <h3>Color Contrast</h3>
      
      <p>Ensure sufficient contrast between text and background colors. The Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1 for normal text.</p>
      
      <h2>Testing Accessibility</h2>
      
      <p>Use tools like:</p>
      
      <ul>
        <li>Lighthouse in Chrome DevTools</li>
        <li>WAVE (Web Accessibility Evaluation Tool)</li>
        <li>axe by Deque Systems</li>
        <li>Screen readers like NVDA, VoiceOver, or JAWS</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Building accessible web applications is not just about compliance—it's about creating better experiences for all users. By incorporating accessibility from the start of your projects, you can ensure your applications are inclusive and reach the widest possible audience.</p>
    `,
    author: 'Alex Johnson',
    createdAt: '2023-07-10T09:15:00Z',
    updatedAt: '2023-07-10T09:15:00Z',
    tags: ['Accessibility', 'Web Development', 'UX'],
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const comments: Comment[] = [
  {
    id: '1',
    articleId: '1',
    author: 'Michael Brown',
    content: 'Great article! I\'ve been using TypeScript with React for a year now and can\'t imagine going back to plain JavaScript.',
    createdAt: '2023-05-15T14:30:00Z',
  },
  {
    id: '2',
    articleId: '1',
    author: 'Sarah Wilson',
    content: 'Do you have any recommendations for TypeScript learning resources for someone who\'s already familiar with React?',
    createdAt: '2023-05-15T16:45:00Z',
  },
  {
    id: '3',
    articleId: '2',
    author: 'David Lee',
    content: 'I was skeptical about Tailwind at first, but after using it for a few projects, I\'m a convert. The workflow speed improvement is real!',
    createdAt: '2023-06-22T18:20:00Z',
  },
  {
    id: '4',
    articleId: '3',
    author: 'Emily Clark',
    content: 'Accessibility is so important and often overlooked. Thanks for highlighting these practices!',
    createdAt: '2023-07-10T11:05:00Z',
  },
  {
    id: '5',
    articleId: '3',
    author: 'Robert Taylor',
    content: 'I\'ve been trying to make my applications more accessible. Do you recommend any specific screen readers for testing during development?',
    createdAt: '2023-07-10T13:30:00Z',
  },
];

// Helper functions to interact with the data
export const getArticles = () => {
  return [...articles].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured);
};

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id) || null;
};

export const getArticleBySlug = (slug: string) => {
  return articles.find(article => article.slug === slug) || null;
};

export const getArticleComments = (articleId: string) => {
  return comments
    .filter(comment => comment.articleId === articleId)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
};

export const addComment = (articleId: string, author: string, content: string) => {
  const newComment: Comment = {
    id: Date.now().toString(),
    articleId,
    author,
    content,
    createdAt: new Date().toISOString(),
  };
  
  comments.push(newComment);
  return newComment;
};

export const addArticle = (article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
  const now = new Date().toISOString();
  const newArticle: Article = {
    ...article,
    id: Date.now().toString(),
    createdAt: now,
    updatedAt: now,
  };
  
  articles.push(newArticle);
  return newArticle;
};

export const updateArticle = (id: string, updates: Partial<Omit<Article, 'id' | 'createdAt'>>) => {
  const index = articles.findIndex(article => article.id === id);
  if (index === -1) return null;
  
  articles[index] = {
    ...articles[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  return articles[index];
};

export const deleteArticle = (id: string) => {
  const index = articles.findIndex(article => article.id === id);
  if (index === -1) return false;
  
  articles.splice(index, 1);
  return true;
};
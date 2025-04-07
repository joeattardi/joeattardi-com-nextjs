export interface Article {
    title: string;
    date: string;
    description: string;
    source: string;
    url: string;
}

export const articles: Article[] = [
    {
        title: 'How and when to use JavaScript arrow functions',
        date: '2025-02-17',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/javascript-arrow-functions/',
        description:
            'Arrow functions have a simpler syntax than standard functions, and there are some important differences in how they behave.'
    },
    {
        title: 'Working with URLs in JavaScript',
        date: '2024-12-19',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/working-urls-javascript/',
        description:
            'Break down the parts of a URL and explore APIs for working with them in JavaScript, parsing them, building query strings, checking their validity, etc.'
    },
    {
        title: 'How to Build Your First Web Component',
        date: '2023-10-19',
        source: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/news/build-your-first-web-component/',
        description:
            "In 2023, browser support for web components (also known as custom elements) is really good. There's never been a better time to start building your own custom elements."
    },
    {
        title: 'How to Center Text Vertically with CSS',
        date: '2023-10-23',
        source: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/news/how-to-center-text-vertically-with-css/',
        description:
            "In this article, you'll learn a couple of ways to vertically center your text inside a div or other element."
    },
    {
        title: 'Patterns for efficient DOM manipulation with vanilla JavaScript',
        date: '2024-10-02',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/patterns-efficient-dom-manipulation-vanilla-javascript/',
        description:
            'Explore DOM manipulation patterns in JavaScript, such as choosing the right querySelector, caching elements, improving event handling, and more.'
    },
    {
        title: 'How JavaScript Promises Work – Handbook for Beginners',
        date: '2024-02-13',
        source: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/news/the-javascript-promises-handbook/',
        description:
            "Many operations, such as network requests, are asynchronous in nature. One of the most useful and powerful tools for working with asynchronous code is the Promise. In this handbook, you'll learn all about JavaScript Promises and how to use them."
    },
    {
        title: 'Using the ScrollTimeline API for scroll-linked animations',
        date: '2023-12-27',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/scrolltimeline-api-scroll-linked-animations/',
        description:
            'CSS scrollTimeline introduces a new way to add scroll-linked animations to your webpage. Use and compare it to the Web Animations API here.'
    },
    {
        title: 'Top 5 Web APIs for performance-based analysis (and how to use them)',
        date: '2022-12-23',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/top-5-web-apis-performance-based-analysis/',
        description:
            'Learn about five web performance APIs, which have full browser support and offer many ways for you to measure your apps’ performance.'
    },
    {
        title: 'Understanding TypeScript’s benefits and pitfalls',
        date: '2022-10-04',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/understanding-typescripts-benefits-pitfalls/',
        description:
            'If you haven’t taken up TypeScript yet, now’s the time! Start here by learning how TypeScript can benefit your project, and what to be wary of.'
    },
    {
        title: '12 essential ESLint rules for React',
        date: '2022-08-16',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/12-essential-eslint-rules-react/',
        description:
            'There are many ESLint rules for React out there — learn which ones are most useful in this post, which covers the twelve most essential ones.'
    },
    {
        title: 'When and how to choose HTML for form validation',
        date: '2022-05-30',
        source: 'LogRocket',
        url: 'https://blog.logrocket.com/when-how-to-choose-html-form-validation',
        description:
            'Client-side form validation such as HTML5 gives users near-immediate feedback about whether or not their input data is valid.'
    }
];

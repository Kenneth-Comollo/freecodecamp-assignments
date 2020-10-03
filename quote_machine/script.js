const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const quotesArr = [
    {
        author: "Dmitry Baranovskiy",
        quote: "JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with surfaces when you do."
    },
    {
        author: "Robert Duchnik",
        quote: "A good standalone plugin can also make you a fair amount of money. Many developers make a decent living by simply maintaining and updating one or two crucial plugins that are far better than anything available for free."
    },
    {
        author: "Jeremy Keith",
        quote: "Java is to JavaScript as ham is to hamster."
    },
    {
        author: "Chris Heilmann",
        quote: "Java is to JavaScript what Car is to Carpet."
    },
    {
        author: "Robert Duchnik",
        quote: "In my experience, requirements change quite often, or new situations will arise that weren’t anticipated at the start of the project. If the situation can be addressed with a plugin, I just whip open the standalone plugin page, make the updates and pop the new plugin back in. Because the plugin is self-contained, it’s easy to recreate the problem, fix it, and get it back into the codebase."
    },
    {
        author: "Robert Duchnik",
        quote: "jQuery is by far the most widely used library for JavaScript. It is used on more than 50% of websites. Many frameworks, such as Backbone and Twitter’s Bootstrap, are built on top of jQuery. Being able to extend and write plugins for jQuery can not only save lots of time, but also makes code much cleaner and easier to maintain."
    },
    {
        author: "Robert Duchnik",
        quote: "Ultimately, I try to think of my application’s main codebase as just stringing together various components and code from many sources. It just controls logic and flow. The real nitty-gritty is handled behind the scenes. This is why frameworks like Backbone are so important — they hide a lot of the details in the background and allow you to just focus on the flow and control of your application."
    },
    {
        author: "Marijn Haverbeke",
        quote: "You’re building your own maze, in a way, and you might just get lost in it."
    },
    {
        author: "Marijn Haverbeke",
        quote: "You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them—two variables can refer to the same value."
    },
    {
        author: "Amit Kalantri",
        quote: "Software testing is a sport like hunting, it's bughunting."
    },
    {
        author: "Douglas Crockford",
        quote: "We see a lot of feature-driven product design in which the cost of features is not properly accounted. Features can have a negative value to customers because they make the products more difficult to understand and use. We are finding that people like products that just work. It turns out that designs that just work are much harder to produce that designs that assemble long lists of features."
    },
    {
        author: "Friedrich Nietzsche",
        quote: "That which does not kill us makes us stronger."
    },
    {
        author: "Bernard M. Baruch",
        quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind."
    },
    {
        author: "Milton Berle",
        quote: "If opportunity doesn’t knock, build a door."
    },
    {
        author: "Roy M. Goodman",
        quote: "Remember that happiness is a way of travel, not a destination."
    },
    
]


const quoteBtn = document.querySelector('.quoteBtn');
const bodyBcg = document.querySelector('body');

const author = document.querySelector('#author');
const quote = document.querySelector('#quote')

function displayQuote () {
    let number = Math.floor(Math.random()*quotesArr.length);
    quote.innerHTML = quotesArr[number].quote;
    author.innerHTML = quotesArr[number].author;
}

function getHex () {
    let hexCol = '#';

    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol +=hexNumbers[random];
    }
    bodyBcg.style.backgroundColor = hexCol;
    quoteBtn.style.backgroundColor = hexCol;
    bodyBcg.style.color = hexCol;
}

displayQuote();
getHex();

quoteBtn.addEventListener('click',getHex);
quoteBtn.addEventListener('click', displayQuote);






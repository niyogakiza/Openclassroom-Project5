'use strict';

//Creating  Quotes store for different types of quotes.

const quoteStore = new QuoteStore();

const dreamsQuote = new QuoteSamples('dreams',
    [

        " You are never too old ",
        " The future belongs ",
        " Dream and give yourself ",
        " A room without",
        " Be the change"
    ],

    [
        " to those who believe ",
        " to set another goal ",
        " permission to envision ",
        " books is like a ",
        " that you wish to"
    ],
    [
        " or to dream a new dream ",
        " a you that you choose to be.",
        " in the beauty of their dreams! ",
        " body without a soul",
        " see in the world"
    ]);

const successQuote = new QuoteSamples('success',
    [
        " The journey ",
        " You can't beat ",
        " The only man ",
        " If you tell ",
        " To be your self in the world that"

    ],

    [
        " of a thousand miles ",
        " the person who ",
        " who never makes mistakes ",
        " the truth you",
        " is constantly trying to make you something else"
    ],

    [
        " begins with a single step.",
        " never gives up!  ",
        " is the man who never does anything ",
        " don't have to remember anything",
        " is the greatest accomplishment"

    ]);

// Add Dreams and Success Quotes to Quote Store
quoteStore.add(dreamsQuote);
quoteStore.add(successQuote);

const generator = new QuoteGenerator('wrapperId', quoteStore);
generator.generateThemeList();
generator.displayQuotes();


'use strict';

//Creating array as const classes and use new keyword to link to the QuoteGenerator

const quoteStore = new QuoteStore();

const dreamsQuote = new QuoteSamples('dreams',
    [

        " You are never too old ",
        " The future belongs ",
        " Dream and give yourself "
    ],

    [
        " to those who believe ",
        " to set another goal ",
        " permission to envision "
    ],
    [
        " or to dream a new dream ",
        " a you that you choose to be.",
        " in the beauty of their dreams! "
    ]);

const successQuote = new QuoteSamples('success',
    [
        " The journey ",
        " You can't beat ",
        " The only man "
    ],

    [
        " of a thousand miles ",
        " the person who ",
        " who never makes mistakes "
    ],

    [
        " begins with a single step. \n - Chinese proverb",
        " never gives up! \n - Babe Ruth ",
        " is the man who never does anything \n - Theodore Roosevelt "

    ]);

// Add Dreams and Success Quotes to Quote Sample Store Quote
quoteStore.add(dreamsQuote);
quoteStore.add(successQuote);

const generator = new QuoteGenerator('wrapperId', quoteStore);
generator.generateThemeList();
generator.displayQuotes();


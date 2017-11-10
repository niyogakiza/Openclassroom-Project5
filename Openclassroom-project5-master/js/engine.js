'use strict';

//Create an Object and Prototypes to link the Quote Generator.
// Used underscore to functions to pick arguments from objects.


const QuoteGenerator = function (wrapperID, quoteStore) {
    this._selectors = {
        'startButton': '.start',
        'resultWrapper': '.generatorOutPut',
        'quoteAmount': '.number',
        'quoteTitle': '.subject'
    };

    this.quoteStore = quoteStore;
    this.wrapper = document.getElementById(wrapperID);
    this.startButton = this.wrapper.querySelector(this._selectors.startButton);
    this.displayArea = this.wrapper.querySelector(this._selectors.resultWrapper);
    this.quoteSubjectList = this.wrapper.querySelector(this._selectors.quoteTitle);
};

QuoteGenerator.prototype.updateValues = function() {
    this.quoteAmount = this.wrapper.querySelector(this._selectors.quoteAmount).value;
    this.quoteTitleID = this.wrapper.querySelector(this._selectors.quoteTitle).value;
};

QuoteGenerator.prototype.generateThemeList = function() {
    let i = 0;

    while (this.quoteStore.quoteList.length > i) {
        const newTitleOption = document.createElement('option');
        newTitleOption.text = this.quoteStore.quoteList[i].name;
        newTitleOption.value = i;

        this.quoteSubjectList.add(newTitleOption);

        i++;
    }
};

QuoteGenerator.prototype.randomNumber = function() {
    return Math.floor(Math.random() * 3);
};

QuoteGenerator.prototype.cleanText = function() {
    this.displayArea.innerHTML = '';
};

QuoteGenerator.prototype.generateQuote = function() {
    const beginningQuoteIndex = this.randomNumber();
    const middleQuoteIndex = this.randomNumber();
    const endQuoteIndex = this.randomNumber();

    const beginning = this.quoteStore.get(this.quoteTitleID).beginnings[beginningQuoteIndex];
    const middle = this.quoteStore.get(this.quoteTitleID).middles[middleQuoteIndex];
    const end = this.quoteStore.get(this.quoteTitleID).ends[endQuoteIndex];

    return new Quote(beginning, middle, end);
};
QuoteGenerator.prototype.displayQuotes = function() {
    this.startButton.addEventListener('click', function () {
        this.cleanText();
        this.updateValues();

        let i = 1;

        while (this.quoteAmount >= i) {
            const newQuote = this.generateQuote();

            this.displayArea.innerHTML = this.displayArea.innerHTML + '<p>' + newQuote.beginning + newQuote.middle + newQuote.end + '</p>';

            i++;
        }
    }.bind(this))
};
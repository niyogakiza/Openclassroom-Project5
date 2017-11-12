'use strict';
//Creating work flow for Quotes
const Quote = function (beginning, middle, end) {
    this.beginning = beginning;
    this.middle = middle;
    this.end = end;
};
//Creating work flow for Quotes samples
const QuoteSamples = function (name, beginnings, middles, ends) {
    this.name = name;
    this.beginnings = beginnings;
    this.middles = middles;
    this.ends = ends;
};

const QuoteStore = function () {
    this.quoteList = [];
};

QuoteStore.prototype.add = function(quoteSamples) {
    this.quoteList.push(quoteSamples);
};

QuoteStore.prototype.get = function(quoteSamplesID) {
    return this.quoteList[quoteSamplesID];
};

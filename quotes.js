//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
        'author': ' Winston Churchill',
        'quote': 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.'
    },
    {
        'author': 'Will Rogers',
        'quote': 'Don’t Let Yesterday Take Up Too Much Of Today.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Rob Siltanen',
        'quote': 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;

}

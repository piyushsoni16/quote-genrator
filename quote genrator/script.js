


const Quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "-Bhavik Sarkhedi",
  },

  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "-Arundhati Roy",
  },

  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "-Sarat Chandra",
  },

  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "-Amrita Pritam",
  },

  {
    quote: "The purpose of life is not to be honorable,to be compassionate.",
    author: "-R.K. Narayan",
  },

  {
    quote: "You miss 100% of the shots you don't take.",
    author: "-Aravind Adiga",
  },

  {
    quote:
      "Success is not final, failure is It is the courage to continue that counts.",
    author: "-Shashi Tharoor",
  },

  {
    quote: "Believe you can and you're halfway there..",
    author: "-Khushwant Singh",
  },
];

let fetchQuotes = JSON.parse(localStorage.getItem("Quotes"));
console.log(fetchQuotes);

function generateQuote() {
  fetchQuotes = JSON.parse(localStorage.getItem("Quotes"));

  const randomIndex = Math.floor(Math.random() * fetchQuotes.length )

  document.getElementById("quote").textContent = fetchQuotes[randomIndex].quote;
  document.getElementById("author-name").textContent =fetchQuotes[randomIndex].author;
}

function addquote() {
  const quote = document.getElementById("new-quotes").value;
  const authorName = document.getElementById("name-1").value;



  fetchQuotes.push({
    quote: quote,
    author: authorName,
  });

  localStorage.setItem("Quotes", JSON.stringify(fetchQuotes));

  document.getElementById("new-quotes").value = "";
  document.getElementById("name-1").value = "";
}




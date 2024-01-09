const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]

const STOP_WORDS = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'i',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'were',
  'will',
  'with',
]

function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      process.exit(1)
    }
    // TODO: write code to count the words in the file
    
      const words = data.toLowerCase().split(/\W+/);
      const wordFrequency = new Map();
      for (let word of words) {
        if (word === '') continue;
        if (STOP_WORDS.includes(word)) continue;
        // if (word = STOP_WORDS) continue;
        if (wordFrequency.has(word)) {
              wordFrequency.set(word, wordFrequency.get(word) + 1)
        } else {
          wordFrequency.set(word, 1)
        }
      }
    
    
    console.log('Initial data read from file: ', data)
    callback(wordFrequency)
  });
}

printWordFreq(filePath, (wordCount) => {
  console.log('The results from your word counts:', wordCount)
});

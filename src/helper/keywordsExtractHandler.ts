const stopWords = [
  'a',
  'able',
  'about',
  'above',
  'lead',
  'leads',
  'scale',
  'while',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'very',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
  'twenty-six',
  'twenty-seven',
  'twenty-eight',
  'twenty-nine',
  'thirty',
  'thirty-one',
  'thirty-two',
  'thirty-three',
  'thirty-four',
  'thirty-five',
  'thirty-six',
  'thirty-seven',
  'thirty-eight',
  'thirty-nine',
  'forty',
  'forty-one',
  'forty-two',
  'forty-three',
  'forty-four',
  'forty-five',
  'forty-six',
  'forty-seven',
  'forty-eight',
  'forty-nine',
  'fifty',
  'fifty-one',
  'fifty-two',
  'fifty-three',
  'fifty-four',
  'fifty-five',
  'fifty-six',
  'fifty-seven',
  'fifty-eight',
  'fifty-nine',
  'sixty',
  'sixty-one',
  'sixty-two',
  'sixty-three',
  'sixty-four',
  'sixty-five',
  'sixty-six',
  'sixty-seven',
  'sixty-eight',
  'sixty-nine',
  'seventy',
  'seventy-one',
  'seventy-two',
  'seventy-three',
  'seventy-four',
  'seventy-five',
  'seventy-six',
  'seventy-seven',
  'seventy-eight',
  'seventy-nine',
  'eighty',
  'eighty-one',
  'eighty-two',
  'eighty-three',
  'eighty-four',
  'eighty-five',
  'eighty-six',
  'eighty-seven',
  'eighty-eight',
  'eighty-nine',
  'ninety',
  'ninety-one',
  'ninety-two',
  'ninety-three',
  'ninety-four',
  'ninety-five',
  'ninety-six',
  'ninety-seven',
  'ninety-eight',
  'ninety-nine',
  'one hundred',
  'according',
  'accordingly',
  'across',
  'actually',
  'adj',
  'after',
  'afterwards',
  'again',
  'against',
  'aint',
  'all',
  'allow',
  'allows',
  'almost',
  'alone',
  'along',
  'already',
  'also',
  'although',
  'always',
  'am',
  'among',
  'amongst',
  'an',
  'and',
  'another',
  'any',
  'anybody',
  'anyhow',
  'anyone',
  'anything',
  'anyway',
  'anyways',
  'anywhere',
  'apart',
  'appear',
  'appreciate',
  'appropriate',
  'are',
  'arent',
  'around',
  'as',
  'aside',
  'ask',
  'asking',
  'associated',
  'at',
  'available',
  'away',
  'awfully',
  'b',
  'back',
  'be',
  'became',
  'because',
  'become',
  'becomes',
  'becoming',
  'been',
  'before',
  'beforehand',
  'behind',
  'being',
  'believe',
  'below',
  'beside',
  'besides',
  'best',
  'better',
  'between',
  'beyond',
  'both',
  'brief',
  'but',
  'by',
  'c',
  'cmon',
  'cs',
  'came',
  'can',
  'cannot',
  'cant',
  'cause',
  'causes',
  'certain',
  'certainly',
  'changes',
  'clearly',
  'co',
  'com',
  'come',
  'comes',
  'concerning',
  'consequently',
  'consider',
  'considering',
  'contain',
  'containing',
  'contains',
  'corresponding',
  'could',
  'couldnt',
  'course',
  'currently',
  'd',
  'definitely',
  'described',
  'despite',
  'did',
  'didnt',
  'different',
  'do',
  'does',
  'doesnt',
  'doing',
  'dont',
  'done',
  'down',
  'downwards',
  'during',
  'e',
  'each',
  'edu',
  'eg',
  'eight',
  'either',
  'else',
  'elsewhere',
  'enough',
  'entirely',
  'especially',
  'et',
  'etc',
  'even',
  'ever',
  'every',
  'everybody',
  'everyone',
  'everything',
  'everywhere',
  'ex',
  'exactly',
  'example',
  'except',
  'f',
  'far',
  'few',
  'fifth',
  'first',
  'five',
  'followed',
  'following',
  'follows',
  'for',
  'former',
  'formerly',
  'forth',
  'four',
  'from',
  'further',
  'furthermore',
  'g',
  'get',
  'gets',
  'getting',
  'given',
  'gives',
  'go',

  'an',
  'the',
  'and',
  'but',
  'or',
  'in',
  'on',
  'at',
  'for',
  'by',
  'of',
  'to',
  'with',
  'is',
  'are',
  'was',
  'were',
  'will',
  'would',
  'should',
  'could',
  'can',
  'cannot',
  'not',
  'John',
  'Jane',
  'Michael',
  'David',
  'Jessica',
  'Sarah',
  'Emily',
  'Chris',
  'Jack',
  'Karen',
  'Tom',
  'Lucy',
  'Julia',
  'Steve',
  'Kevin',
  'Maggie',
  'Olivia',
  'Emma',
  'Sophie',
  'Liam',
  'William',
  'Isabella',
  'Jacob',
  'Noah',
  'Ethan',
  'Ava',
  'Mia',
  'Madison',
  'Chloe',
  'Benjamin',
  'James',
  'Luke',
  'Anna',
  'Zoe',
  'Lucas',
  'Samuel',
  'Alexander',
  'Grace',
  'Elizabeth',
  'Natalie',
  'Aiden',
  'Avery',
  'Hannah',
  'Daniel',
  'Joshua',
  'Ryan',
  'Caleb',
  'Gabriel',
  'Dylan',
  'Connor',
  'Elijah',
  'Cole',
  'Hunter',
  'Isaac',
  'Leah',
  'Abigail',
  'Audrey',
  'Katherine',
  'Mason',
  'Nathan',
  'Matthew',
  'Andrew',
  'Aaron',
  'Nicholas',
  'Eric',
  'Evelyn',
  'Harper',
  'Victoria',
  'Madeline',
  'Penelope',
  'Scarlett',
  'Stella',
  'Xavier',
  'Jack',
  'Sarah',
  'David',
  'Emily',
  'John',
  'Olivia',
  'James',
  'Lucy',
  'Michael',
  'Emma',
  'Tom',
  'Jessica',
  'William',
  'Grace',
  'Chris',
  'Sophie',
  'Peter',
  'Rachel',
  'Alex',
  'Maggie',
  'Sam',
  'Lauren',
  'Adam',
  'Julia',
  'Luke',
  'Lily',
  'Daniel',
  'Chloe',
  'Ben',
  'Hannah',
  'Kevin',
  'Amanda',
  'Mark',
  'Rebecca',
  'Eric',
  'Carrie',
  'Ryan',
  'Melanie',
  'Nick',
  'Charlotte',
  'Rob',
  'Ella',
  'Josh',
  'Maria',
  'Tim',
  'Kim',
  'Scott',
  'Karen',
  'Steven',
  'Linda',
  'Patrick',
  'Amy',
  'Derek',
  'Allison',
  'George',
  'Jenny',
  'Robert',
  'Madison',
  'Charlie',
  'Victoria',
  'Harry',
  'Zoe',
  'Jerry',
  'Leah',
  'Frank',
  'Anna',
  'Max',
  'Natalie',
  'Leo',
  'Samantha',
  'Ray',
  'Tiffany',
  'Kyle',
  'Katie',
  'Edward',
  'Jasmine',
  'Vincent',
  'Ruby',
  'Erica',
  'Faith',
  'Jesse',
  'Avery',
  'Marcus',
  'Bailey',
  'John',

  'a',
  'about',
  'above',
  'across',
  'after',
  'afterwards',
  'again',
  'against',
  'all',
  'almost',
  'alone',
  'along',
  'already',
  'also',
  'although',
  'always',
  'am',
  'among',
  'amongst',
  'amoungst',
  'amount',
  'an',
  'and',
  'another',
  'any',
  'anyhow',
  'anyone',
  'anything',
  'anyway',
  'anywhere',
  'are',
  'around',
  'as',
  'at',
  'back',
  'be',
  'became',
  'because',
  'become',
  'becomes',
  'becoming',
  'been',
  'before',
  'beforehand',
  'behind',
  'being',
  'below',
  'beside',
  'besides',
  'between',
  'beyond',
  'bill',
  'both',
  'bottom',
  'but',
  'by',
  'call',
  'can',
  'cannot',
  'cant',
  'co',
  'computer',
  'con',
  'could',
  'couldnt',
  'cry',
  'de',
  'describe',
  'detail',
  'did',
  'do',
  'done',
  'down',
  'due',
  'during',
  'each',
  'eg',
  'eight',
  'either',
  'eleven',
  'else',
  'elsewhere',
  'empty',
  'enough',
  'etc',
  'even',
  'ever',
  'every',
  'everyone',
  'everything',
  'everywhere',
  'except',
  'few',
  'fifteen',
  'fify',
  'fill',
  'find',
  'fire',
  'first',
  'five',
  'for',
  'former',
  'formerly',
  'forty',
  'found',
  'four',
  'from',
  'front',
  'full',
  'further',
  'get',
  'give',
  'go',
  'had',
  'has',
  'hasnt',
  'have',
  'he',
  'hence',
  'her',
  'here',
  'hereafter',
  'hereby',
  'herein',
  'hereupon',
  'hers',
  'herself',
  'him',
  'himself',
  'his',
  'how',
  'however',
  'hundred',
  'i',
  'ie',
  'if',
  'in',
  'inc',
  'indeed',
  'interest',
  'into',
  'is',
  'it',
  'its',
  'itself',
  'keep',
  'kg',
  'km',
  'last',
  'latter',
  'latterly',
  'least',
  'less',
  'ltd',
  'made',
  'many',
  'may',
  'me',
  'meanwhile',
  'might',
  'mill',
  'mine',
  'more',
  'moreover',
  'most',
  'mostly',
  'move',
  'much',
  'must',
  'my',
  'myself',
  'name',
  'namely',
  'neither',
  'never',
  'nevertheless',
  'next',
  'nine',
  'no',
  'nobody',
  'none',
  'noone',
  'nor',
  'not',
  'nothing',
  'now',
  'nowhere',
  'of',
  'off',
  'often',
  'on',
  'once',
  'one',
  'only',
  'onto',
  'or',
  'other',
  'others',
  'otherwise',
  'our',
  'ours',
  'ourselves',
  'out',
  'over',
  'own',
  'part',
  'per',
  'perhaps',
  'please',
  'put',
  'rather',
  're',
  'same',
  'see',
  'seem',
  'seemed',
  'seeming',
  'seems',
  'serious',
  'several',

  'a',
  'about',
  'above',
  'across',
  'after',
  'afterwards',
  'again',
  'against',
  'all',
  'almost',
  'alone',
  'along',
  'already',
  'also',
  'although',
  'always',
  'am',
  'among',

  'a',
  'about',
  'above',
  'across',
  'after',
  'afterwards',
  'again',
  'against',
  'all',
  'almost',
  'alone',

  'Mary',
  'Sarah',
  'David',
  'Michael',
  'Jennifer',
  'Jessica',
  'Daniel',
  'James',
  'Emily',
  'Anna',
  'Rachel',
  'Alex',
  'Kate',
  'Tom',
  'Chris',
  'Nick',
  'Luke',
  'Matt',
  'Lucy',
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Mia',
  'Liam',
  'Noah',
  'William',
  'James',
  'Oliver',
  'Benjamin',
  'Lucas',
  'Henry',
  'Ethan',
  'Alexander',
  'Jacob',
  'Michael',
  'Daniel',
  'Logan',
  'Samuel',
  'Matthew',
  'Joseph',
  'David',

  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
  'Twenty',
  'Twenty-One',
  'Twenty-Two',
  'Twenty-Three',
  'Twenty-Four',
  'Twenty-Five',
  'Twenty-Six',
  'Twenty-Seven',
  'Twenty-Eight',
  'Twenty-Nine',
  'Thirty',
  'Thirty-One',
  'Thirty-Two',
  'Thirty-Three',
  'Thirty-Four',
  'Thirty-Five',
  'Thirty-Six',
  'Thirty-Seven',
  'Thirty-Eight',
  'Thirty-Nine',
  'Forty',
  'Forty-One',
  'Forty-Two',
  'Forty-Three',
  'Forty-Four',
  'Forty-Five',
  'Forty-Six',
  'Forty-Seven',
  'Forty-Eight',
  'Forty-Nine',
  'Fifty',
  'Fifty-One',
  'Fifty-Two',
  'Fifty-Three',
  'Fifty-Four',
  'Fifty-Five',
  'Fifty-Six',
  'Fifty-Seven',
  'Fifty-Eight',
  'Fifty-Nine',
  'Sixty',
  'Sixty-One',
  'Sixty-Two',
  'Sixty-Three',
  'Sixty-Four',
  'Sixty-Five',
  'Sixty-Six',
  'Sixty-Seven',
  'Sixty-Eight',
  'Sixty-Nine',
  'Seventy',
  'Seventy-One',
  'Seventy-Two',
  'Seventy-Three',
  'Seventy-Four',
  'Seventy-Five',
  'Seventy-Six',
  'Seventy-Seven',
  'Seventy-Eight',
  'Seventy-Nine',
  'Eighty',
  'Eighty-One',
  'Eighty-Two',
  'Eighty-Three',
  'Eighty-Four',
  'Eighty-Five',
  'Eighty-Six',
  'Eighty-Seven',
  'Eighty-Eight',
  'Eighty-Nine',
  'Ninety',
  'Ninety-One',
  'Ninety-Two',
  'Ninety-Three',
  'Ninety-Four',
  'Ninety-Five',
  'Ninety-Six',
  'Ninety-Seven',
  'Ninety-Eight',
  'Ninety-Nine',
  'One Hundred',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'although',
  'always',
  'among',
  'an',
  'and',
  'another',
  'any',
  'anybody',
  'anyone',
  'anything',
  'anywhere',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'before',
  'being',
  'between',
  'both',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'did',
  'do',
  'does',
  'doing',
  'down',
  'during',
  'each',
  'either',
  'else',
  'elsewhere',
  'enough',
  'etc',
  'even',
  'ever',
  'every',
  'everyone',
  'everything',
  'everywhere',
  'except',
  'few',
  'for',
  'from',
  'further',
  'get',
  'go',
  'had',
  'has',
  'have',
  'he',
  'hence',
  'her',
  'here',
  'hereafter',
  'hereby',
  'herein',
  'hereupon',
  'hers',
  'herself',
  'him',
  'himself',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'indeed',
  'into',
  'is',
  'it',
  'its',
  'itself',
  'just',
  'keep',
  'kind',
  'last',
  'less',
  'many',
  'may',
  'me',
  'meanwhile',
  'might',
  'mine',
  'more',
  'moreover',
  'most',
  'mostly',
  'much',
  'must',
  'my',
  'myself',
  'name',
  'namely',
  'neither',
  'never',
  'nevertheless',
  'next',
  'no',
  'nobody',
  'none',
  'noone',
  'nor',
  'not',
  'nothing',
  'now',
  'nowhere',
  'of',
  'off',
  'often',
  'on',
  'once',
  'one',
  'only',
  'onto',
  'or',
  'other',
  'others',
  'otherwise',
  'our',
  'ours',
  'ourselves',
  'out',
  'over',
  'own',
  'part',
  'per',
  'perhaps',
  'please',
  'put',
  'rather',
  're',
  'really',
  'regarding',
  'same',
  'say',
  'see',
  'seem',
  'seemed',
  'seeming',
  'seems',
  'several',
  'she',
  'should',
  'show',
  'since',
  'so',
  'some',
  'somehow',
  'someone',
  'something',
  'sometime',
  'sometimes',
  'somewhere',
  'still',
  'such',
  'take',
  'than',
  'that',
  'the',
  'their',
  'theirs',
  'them',
  'themselves',
  'then',
  'thence',
  'there',
  'thereafter',
  'thereby',
  'therefore',
  'therein',
  'thereupon',
  'these',
  'they',
  'this',
  'those',
  'though',
  'through',
  'throughout',
  'thru',
  'thus',
  'to',
  'together',
  'too',
  'toward',
  'towards',
  'under',
  'until',
  'up',
  'upon',
  'us',
  'very',
  'via',
  'was',
  'we',
  'well',
  'were',
  'what',
  'whatever',
  'when',
  'whence',
  'whenever',
  'where',
  'whereafter',
  'whereas',
  'whereby',
  'wherein',
  'whereupon',
  'wherever',
  'whether',
  'which',
  'while',
  'who',
  'whoever',
  'whom',
  'whose',
  'why',
  'girl',
  'body',
  'receive',
  'receives',
  'received',
  'choice',
  'choices',
  'falls',
  'year',
  'years',
  'old',
  'new',
  'joel',
  'ellie',
  'starts',
  'start',
  'started',
  'starter',
  'small',
  'big',
  'smaller',
  'smallest',
  'biggest',
  'bigger',
  'price',
  'head',
  'headed',
  'heads',
  'increase',
  'increases',
  'increased',
  'increasing',
  'face',
  'faced',
  'faces',
  'high',
  'low',
  'lowest',
  'highest',
  'earn',
  'earned',
  'earns',
  'earning',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const stopWordsNoDuplicates = new Set(stopWords);

export default function keywordsExtractHandler(overview: string) {
  // Split the overview into an array of words
  const words = overview.split(/\W+/);

  const keywords = words.filter(
    (word) =>
      !stopWordsNoDuplicates.has(word.toLowerCase()) &&
      !/\d/.test(word) &&
      /[a-z]/i.test(word)
  );

  return keywords;
}

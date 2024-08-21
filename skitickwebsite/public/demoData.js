const demoCardList = [
    {
      "id": "board001",
      "album": "album001",
      "numOfQuestions": 10,
      "questions": ["question001", "question002"],
      "level": 1,
      "type": "quiz",
      "MinScore": 50,
      "numOfTries": 3,
      "status": "active",
      "backgroundImage": "math_background.jpg",
      "title": "Math Quiz",
      "description": "A basic math quiz covering addition and subtraction.",
      "index": 1,
      "numberOfStickers": 5
    },
    {
      "id": "board002",
      "album": "album002",
      "numOfQuestions": 15,
      "questions": ["question003", "question004"],
      "level": 2,
      "type": "quiz",
      "MinScore": 70,
      "numOfTries": 2,
      "status": "inactive",
      "backgroundImage": "history_background.jpg",
      "title": "History Quiz",
      "description": "A quiz on ancient civilizations and historical events.",
      "index": 2,
      "numberOfStickers": 10
    },
    {
      "id": "board003",
      "album": "album003",
      "numOfQuestions": 20,
      "questions": ["question005", "question006", "question007"],
      "level": 3,
      "type": "challenge",
      "MinScore": 80,
      "numOfTries": 1,
      "status": "active",
      "backgroundImage": "science_background.jpg",
      "title": "Science Challenge",
      "description": "Advanced science questions focusing on physics and chemistry.",
      "index": 3,
      "numberOfStickers": 15
    },
    {
      "id": "board004",
      "album": "album004",
      "numOfQuestions": 5,
      "questions": ["question008", "question009"],
      "level": 1,
      "type": "quiz",
      "MinScore": 60,
      "numOfTries": 3,
      "status": "active",
      "backgroundImage": "geography_background.jpg",
      "title": "Geography Quiz",
      "description": "Test your knowledge of world geography.",
      "index": 4,
      "numberOfStickers": 7
    }
  ]

const questions = [
  {
    "id": "question003",
    "type": "multiple_choice",
    "level": 2,
    "content": ["Who was the first emperor of Rome?"],
    "answer": ["Julius Caesar", "Augustus", "Nero", "Tiberius"],
    "correctAnswer": "Augustus",
    "numFail": 0,
    "hints": "He was Julius Caesar's adopted son."
  },
  {
    "id": "question004",
    "type": "true_false",
    "level": 2,
    "content": ["The Great Wall of China was built during the Ming dynasty."],
    "answer": ["true", "false"],
    "correctAnswer": "true",
    "numFail": 0,
    "hints": "It was a major defense project."
  },
  {
    "id": "question005",
    "type": "fill_in_the_blank",
    "level": 3,
    "content": ["The chemical symbol for water is ____."],
    "answer": [],
    "correctAnswer": "H2O",
    "numFail": 1,
    "hints": "It consists of hydrogen and oxygen."
  },
  {
    "id": "question006",
    "type": "multiple_choice",
    "level": 3,
    "content": ["What is the speed of light in vacuum?"],
    "answer": ["299,792 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
    "correctAnswer": "299,792 km/s",
    "numFail": 2,
    "hints": "It's just under 300,000 km/s."
  },
  {
    "id": "question007",
    "type": "multiple_choice",
    "level": 3,
    "content": ["What is the first element on the periodic table?"],
    "answer": ["Hydrogen", "Helium", "Lithium", "Oxygen"],
    "correctAnswer": "Hydrogen",
    "numFail": 1,
    "hints": "It is the lightest element."
  },
  {
    "id": "question008",
    "type": "multiple_choice",
    "level": 1,
    "content": ["Which continent is the Sahara Desert located on?"],
    "answer": ["Asia", "Africa", "Australia", "Europe"],
    "correctAnswer": "Africa",
    "numFail": 0,
    "hints": "It's the second largest continent."
  },
  {
    "id": "question009",
    "type": "true_false",
    "level": 1,
    "content": ["Mount Everest is the highest mountain in the world."],
    "answer": ["true", "false"],
    "correctAnswer": "true",
    "numFail": 0,
    "hints": "It's part of the Himalayas."
  }
]

const album = [
  {
    "id": "album001",
    "title": "Math Album",
    "stickers": ["sticker001", "sticker002"],
    "description": "A collection of math-related stickers.",
    "closed_img": "math_closed.png",
    "open_img": "math_open.png",
    "numberOfStickers": 10,
    "status": "active"
  }
]

export {demoCardList, questions, album};
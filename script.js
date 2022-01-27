// FAQs
// Variables
var more_less = 0;
var questions = 0;

// Background Functions

function main_menu() {
  $(".wrapper").append(
    '<div class="main box"><div class="text"><div class="main-text">Have any questions 🙋‍♂️</div><ul><div class="line"></div><li><button style="text-align: left" onclick="start_FAQs()">See a list of FAQs</button></li><div class="line"></div><li><button style="cursor: context-menu">Or</button></li><div class="line"></div><li><button onclick="input_focus()">Type a question</button></li><div class="line"></div><div class="margin"></div></ul></div></div><br />'
  );
}

function faqs() {
  if (more_less < 0) {
    more_less = 0;
  }
  if (more_less > 1) {
    more_less = 1;
  }
  // FAQs
  if (more_less === 0) {
    $(".wrapper").append(
      '<div class="main box"><div class="text"><div class="main-text">Some FAQs</div><ul><div class="line"></div><li><button onclick="what_is_e_waste()">What is E-Waste?</button></li><div class="line"></div><li><button>Question 2</button></li><div class="line"></div><li><button>Question 3</button></li><div class="line"></div><li><button>Question 4</button></li><div class="line"></div><li><button onclick="more()">More questions...</button></li><div class="line"></div><div class="margin">x</div></ul></div></div><br />'
    );
  } else {
    $(".wrapper").append(
      '<div class="main box"><div class="text"><div class="main-text">FAQs</div><ul><div class="line"></div><li><button onclick="what_is_e_waste()">What is E-Waste?</button></li><div class="line"></div><li><button>Question 2</button></li><div class="line"></div><li><button>Question 3</button></li><div class="line"></div><li><button>Question 4</button></li><div class="line"></div><li><button>Question 5</button></li><div class="line"></div><li><button>Question 6</button></li><div class="line"></div><li><button>Question 7</button></li><div class="line"></div><li><button>Question 8</button></li><div class="line"></div><li><button>Question 9</button></li><div class="line"></div><li><button>Question 10</button></li><div class="line"></div><li><button onclick="less()">Less questions...</button></li><div class="line"></div><div class="margin">x</div></ul></div></div><br />'
    );
  }
}
function answer(ans) {
  // Answer
  $(".wrapper").append(
    '<div class="box"><div class="text"><div class="main-text">' +
      ans +
      "</div></div></div></br>"
  );
}
function user_question(ques) {
  //   User Question
  $(".wrapper").append(
    '<div class="box-user"><div class="text"><div class="main-text" id=>' +
      ques +
      "</div></div></div><br />"
  );
}

// Functions For Questions

function start_FAQs() {
  user_question("See a list of FAQs");
  $(".wrapper").append(
    '<div class="main box"><div class="text"><div class="main-text">Some FAQs</div><ul><div class="line"></div><li><button onclick="what_is_e_waste()">What is E-Waste?</button></li><div class="line"></div><li><button>Question 2</button></li><div class="line"></div><li><button>Question 3</button></li><div class="line"></div><li><button>Question 4</button></li><div class="line"></div><li><button onclick="more()">More questions...</button></li><div class="line"></div><div class="margin">x</div></ul></div></div><br />'
  );
}

function input_focus() {
  document.getElementById("input_question").focus();
}

function keyboard() {
  var question = document.getElementById("input_question").value;
  document.getElementById("input_question").value = "";
  user_question(question);
  question_query = question.toLowerCase();
  question_query = question_query.replace("?", "").replace(".", "");
  const query = question_query.split(" ");
  console.log(query);

  // Lots of ifs
  if (
    query.includes("faq") ||
    query.includes("faqs") ||
    query.includes("question") ||
    query.includes("questions")
  ) {
    faqs();
  } else if (
    query.includes("thank") ||
    query.includes("thanks") ||
    query.includes("thx")
  ) {
    answer("You are welcome!");
  } else if (query.includes("menu")) {
    main_menu();
  } else if (
    query.includes("what") &&
    (query.includes("waste") ||
      query.includes("ewaste") ||
      query.includes("e-waste"))
  ) {
    answer(
      "E-waste is the discarded electronic appliances such as mobile phones, computers, and televisions."
    );
  } else if (query.includes("hi") || query.includes("hello")) {
    answer("Hi 👋");
  } else if (query.includes("what") && query.includes("name")) {
    answer("I am earth 🌎");
  } else {
    answer(
      "I am unable to answer this query at the moment. You can contact +919354640239 for this query."
    );
    main_menu();
  }
}

// Q1
function what_is_e_waste() {
  user_question("What is E-Waste?");
  answer(
    "E-waste is the discarded electronic appliances such as mobile phones, computers, and televisions."
  );
  main_menu();
}

// Last Qs
function more() {
  user_question("More questions...");
  more_less = more_less + 1;
  faqs();
}
function less() {
  user_question("Less questions...");
  more_less = more_less - 1;
  faqs();
}

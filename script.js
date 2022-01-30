// FAQs
// Variables
var more_less = 0;
var questions = 0;

// Background Functions

function main_menu() {
  $(".wrapper").append(
    '<div class="main box"><div class="text"><div class="main-text">Have any questions 🙋‍♂️</div><ul><div class="line"></div><li><button style="text-align: left" onclick="start_FAQs()">See a list of FAQs</button></li><div class="line"></div><li><button onclick="input_focus()">Type a question</button></li><div class="line"></div><div class="margin"></div></ul></div></div><br />'
  );
}

function faqs() {
  $(".wrapper").append(
    '<div class="main box"><div class="text"><div class="main-text">FAQs</div><ul><div class="line"></div><li><button onclick="what_is_e_waste()">What is E-waste?</button></li><div class="line"></div><li><button onclick="quantity_e_waste()">What is the quantity of E-waste generated in the world?</button></li><div class="line"></div><li><button onclick="health_hazards()">What are the health hazards caused by E-waste?</button></li><div class="line"></div><li><button onclick="hazardous_chemicals()">What are the hazardous chemicals found in E-waste?</button></li><div class="line"></div><li><button onclick="why_dispose()">Why do you need to dispose of your E-waste in a proper manner?</button></li><div class="line"></div><li><button onclick="what_should()">What you should do?</button></li><div class="line"></div><div class="margin">x</div></ul></div></div><br />'
  );
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
  faqs();
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
  } else if (
    query.includes("hazard") ||
    query.includes("hazards") ||
    query.includes("health") ||
    query.includes("chemicals")
  ) {
    answer(
      "E-waste can be hazardous, when it is disposed and treated in environmentally unsound manner. Direct contact of the harmful materials such as lead, cadmium, chromium, brominated flame retardants or polychlorinated biphenyls (PCBs) and exposure to toxic fumes may cause serious health hazards."
    );
    answer(
      "The hazardous constituents in E-waste are heavy metals like lead, cadmium and mercury, polychlorinated-bi-phenyl (PCB), brominated flame retardants (BFRs) and chromium (VI)."
    );
  } else if (
    query.includes("why") &&
    (query.includes("dispose") || query.includes("remove"))
  ) {
    answer(
      "We should dispose of our e-waste in proper manner so that it reaches to the authorised recycler for recovery of precious metals and protection of the environment and health from toxic substances contained in e-waste. This will help us to create a system for circular economy."
    );
  } else if (
    (query.includes("how") || query.includes("what")) &&
    query.includes("do")
  ) {
    answer(
      "Reduce, reuse, and recycle. REDUCE your generation of e-waste through smart procurement and good maintenance. REUSE still-functioning electronic equipment by donating or selling it to someone. RECYCLE those components that cannot be repaired. Most electronic devices contain a variety of materials, including metals, that can be recycled."
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

// Questions
function what_is_e_waste() {
  user_question("What is E-Waste?");
  answer(
    "E-waste is the discarded electronic appliances such as mobile phones, computers, and televisions."
  );
  main_menu();
}

function quantity_e_waste() {
  user_question("What is the quantity of E-waste generated in the world?");
  answer(
    "In 2019, the world generated 53.6 million metric tons (Mt), and only 17.4% of this was officially documented as properly collected and recycled. It grew with 1.8 Mt since 2014, but the total e-waste generation increased by 9.2 Mt"
  );
  main_menu();
}

function health_hazards() {
  user_question("What are the health hazards caused by E-waste?");
  answer(
    "E-waste can be hazardous, when it is disposed and treated in environmentally unsound manner. Direct contact of the harmful materials such as lead, cadmium, chromium, brominated flame retardants or polychlorinated biphenyls (PCBs) and exposure to toxic fumes may cause serious health hazards."
  );
  main_menu();
}

function hazardous_chemicals() {
  user_question("What are the hazardous chemical found in E-waste");
  answer(
    "The hazardous constituents in E-waste are heavy metals like lead, cadmium and mercury, polychlorinated-bi-phenyl (PCB), brominated flame retardants (BFRs) and chromium (VI)."
  );
  main_menu();
}

function why_dispose() {
  user_question(
    "Why do you need to dispose of your E-waste in a proper manner?"
  );
  answer(
    "We should dispose of our e-waste in proper manner so that it reaches to the authorised recycler for recovery of precious metals and protection of the environment and health from toxic substances contained in e-waste. This will help us to create a system for circular economy."
  );
  main_menu();
}

function what_should() {
  user_question("What you should do?");
  answer(
    "Reduce, reuse, and recycle. REDUCE your generation of e-waste through smart procurement and good maintenance.<br> REUSE still-functioning electronic equipment by donating or selling it to someone.<br> RECYCLE those components that cannot be repaired. Most electronic devices contain a variety of materials, including metals, that can be recycled."
  );
  main_menu();
}

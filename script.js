// Used Functions
function faqs() {
  // Some FAQs
  $(".wrapper").append(
    '<div class="main box"><div class="text"><div class="main-text">Some FAQs</div><ul><div class="line"></div><li><button onclick="what_is_e_waste()">What is E-Waste?</button></li><div class="line"></div><li><button>Question 2</button></li><div class="line"></div><li><button>Question 3</button></li><div class="line"></div><li><button>Question 4</button></li><div class="line"></div><li><button>More questions...</button></li><div class="line"></div><div class="margin">x</div></ul></div></div><br />'
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
    '<div class="box-user"><div class="text"><div class="main-text">' +
      ques +
      "</div></div></div><br />"
  );
}
// Question Functions
function what_is_e_waste() {
  user_question("What is E-Waste?");
  answer(
    "E-waste is the discarded electronic appliances such as mobile phones, computers, and televisions."
  );
  faqs();
}

// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Superficial velocity is the?",
            "a": [
                {"option": "velocity through the voids in packed bed",      "correct": false},
                {"option": "empty tower velocity in packed bed",     "correct": true},
                {"option": "velocity above the minimum fluidization velocity",      "correct": false}
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:empty tower velocity in packed bed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:empty tower velocity in packed bed</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pressure drop across the packed bed is calculated using?",
            "a": [
                {"option": "Ergun equation",               "correct": true},
                {"option": "Newtons law",   "correct": false},
                {"option": "Bernoullis principle",               "correct": false}
               // {"option": "0.2", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Ergun equation</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Ergun equation</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Ergun equation is valid for",
            "a": [
                {"option": "only laminar flow",           "correct": false},
                {"option": "only turbulent flow.",                  "correct": false},
                {"option": "for all types of flow",  "correct": true}		
               // {"option": "5",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:for all types of flow</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:for all types of flow</p>" // no comma here
        },
        { // Question 4
            "q": "The value of sphericity  for spherical particles is",
            "a": [
                {"option": "0",    "correct": false},
                {"option": "1",     "correct": true},
		 {"option": "0.3",     "correct": false}
		 //{"option": "	inversely propotional to the flow rate",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:1</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:1</p>"  // no comma here
        },
       { // Question 5
            "q": " Pressure drop across the packed bed is a -------------- function of superficial velocity  when NRep>1000",
            "a": [
                {"option": "linear",    "correct": false},
                {"option": "nonlinear",     "correct": true},
		 {"option": "may be linear or nonlinear depending on the velocity",  "correct": false}

               // {"option": "none of the foregoing.",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:nonlinear</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:nonlinear</p>"  // no comma here
        } // no comma here
    ]
};

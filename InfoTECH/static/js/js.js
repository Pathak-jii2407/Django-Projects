
window.onload = function() {
    var targetDiv = document.getElementById('section1');
    targetDiv.scrollIntoView();
};

var languages = ['JavaScript', 'Python', 'Java', 'C', 'C++', 'C#', 'TypeScript', 'PHP', 'Swift', 'Kotlin', 'SQL'];
var currentIndex = 0;
var timer;

function showDescription(language) {
    currentIndex = languages.indexOf(language);
    updateDescription();
}

function updateDescription() {
    clearInterval(timer);
    let language = languages[currentIndex];
    let description = getDescription(language);
    document.getElementById("languageDescription").innerHTML = description;
    document.getElementById("languageDescriptionContainer").style.display = "block";
    var links = document.querySelectorAll('.navbar a');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
      if (links[i].innerHTML === language) {
        links[i].classList.add('active');
      }
    }
    timer = setInterval(cycleLanguages, 5000);
}

function getDescription(language) {
    let description = "";
    switch(language) {
      case 'JavaScript':
        description = "JavaScript is a versatile and dynamic programming language that is primarily used for creating interactive and dynamic content on websites. Initially developed by Brendan Eich in 1995, JavaScript has since become one of the most widely used languages in web development...";
        break;
      case 'Python':
        description = "Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability. Guido van Rossum created Python in the late 1980s, and its design philosophy emphasizes code readability, simplicity, and expressiveness...";
        break;
      case 'Java':
        description = "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale web applications, mobile applications (especially Android apps), and large-scale software systems...";
        break;
      case 'C':
        description = "C is a general-purpose, procedural programming language developed by Dennis Ritchie in the early 1970s at Bell Labs. It is one of the oldest and most widely used programming languages, with applications ranging from system programming and embedded systems to application software...";
        break;
      case 'C++':
        description = "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It is known for its efficiency, flexibility, and performance, and it is used in a wide range of applications, including systems software, application software, device drivers, and video games...";
        break;
      case 'C#':
        description = "C# (pronounced 'C sharp') is a general-purpose, object-oriented programming language developed by Microsoft as part of its .NET initiative. It is designed for building a variety of applications, including desktop, web, and mobile apps, as well as games using Unity game engine...";
        break;
      case 'TypeScript':
        description = "TypeScript is a superset of JavaScript that adds static typing and other features to the language. It is developed and maintained by Microsoft, and it aims to make JavaScript development more scalable and maintainable by providing tools for large-scale application development...";
        break;
      case 'PHP':
        description = "PHP (Hypertext Preprocessor) is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language. It was created by Danish-Canadian programmer Rasmus Lerdorf in 1994 and has since become one of the most widely used languages for web development...";
        break;
      case 'Swift':
        description = "Swift is a general-purpose, multi-paradigm programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, and Linux. Swift is designed to work seamlessly with Apple's Cocoa and Cocoa Touch frameworks and is the successor to Objective-C...";
        break;
      case 'Kotlin':
        description = "Kotlin is a statically typed programming language that runs on the Java Virtual Machine (JVM). It was developed by JetBrains in 2011 and is designed to be fully interoperable with Java. Kotlin is known for its concise syntax, null safety, and functional programming features...";
        break;
      case 'SQL':
        
        description = "SQL (Structured Query Language) is a domain-specific language used in programming and managing relational databases. SQL is widely used for tasks such as retrieving data from databases, updating data in databases, and creating and modifying database schemas...";
        break;
    }
    return description;
}

function cycleLanguages() {
    currentIndex = (currentIndex + 1) % languages.length;
    updateDescription();
}

updateDescription();
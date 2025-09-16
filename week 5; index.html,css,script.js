<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Fundamentals Assignment</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>

</head>
<body>
  <h1>Mastering JavaScript Fundamentals</h1>

  
  <section>
    <h2>Part 1: Basics</h2>
    <input type="number" id="ageInput" placeholder="Enter your age">
    <button onclick="checkAge()">Check Age</button>
    <p id="ageResult"></p>
  </section>


  <section>
    <h2>Part 2: Functions</h2>
    <input type="number" id="num1" placeholder="Number 1">
    <input type="number" id="num2" placeholder="Number 2">
    <button onclick="showTotal()">Calculate Total</button>
    <p id="totalResult"></p>
  </section>

  
  <section>
    <h2>Part 3: Loops</h2>
    <button onclick="countdown()">Start Countdown</button>
    <ul id="countdownList"></ul>

    <button onclick="listFruits()">Show Fruits</button>
    <ul id="fruitList"></ul>
  </section>

 
  <section>
    <h2>Part 4: DOM Interactions</h2>
    <button onclick="toggleColor()">Toggle Background</button>
    <button onclick="changeText()">Change Heading Text</button>
    <button onclick="addItem()">Add New List Item</button>
    <ul id="dynamicList">
      <li>Sample Item</li>
    </ul>
  </section>

  
</body>
</html>

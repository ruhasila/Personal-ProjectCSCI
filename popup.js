console.log('This is a popup!');
document.getElementById("generatePassword").addEventListener("click", function() {
    var length = 10; // Default length
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Default character set
    var password = "";
    var passwordLength = parseInt(prompt("Enter password length:", "10"));
    if (!isNaN(passwordLength) && passwordLength > 0) {
      length = passwordLength;
    }
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById("generatedPassword").value = password;
  });
  
  document.getElementById("savePassword").addEventListener("click", function() {
    var website = document.getElementById("website").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Store the password securely (e.g., using Chrome storage APIs)
    // Example: chrome.storage.sync.set({website: {username: username, password: password}});
  });

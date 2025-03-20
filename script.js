document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    // Add fade-out effect
    document.getElementById("preloader").classList.add("hidden");

    // Wait for fade-out before hiding preloader and showing content
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 1000); // Wait for fade-out animation
  }, 2500); // Preloader lasts for 2.5 seconds
});

document.addEventListener("DOMContentLoaded", function () {
  const text =
    "The ANAN Experience website is launching soon! Sign up with your email to get exclusive updates and be the first to explore everything we have in store.";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 50); // Adjust speed (milliseconds per letter)
    }
  }

  typeText(); // Start typing effect
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("waitlist-form");
  const emailInput = document.getElementById("email");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = emailInput.value;
    const waitlistId = 26356; // Replace with your actual waitlist ID
    const apiEndpoint = "https://api.getwaitlist.com/api/v1/signup";

    // Construct request body based on the API docs
    const requestBody = {
      email: email,
      waitlist_id: waitlistId,
      referral_link: "", // Optional, leave empty if not used
      metadata: {}, // Optional metadata
      answers: [], // Optional, if you have survey questions
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData); // Debugging

      if (response.ok) {
        successMessage.style.display = "block"; // Show success message
        errorMessage.style.display = "none"; // Hide error message
        emailInput.value = ""; // Clear input field
      } else {
        throw new Error(responseData.message || "Failed to submit email.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      successMessage.style.display = "none";
      errorMessage.style.display = "block"; // Show error message
    }
  });
});

// Auto-update footer year
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});

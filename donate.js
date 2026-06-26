/* ============================================================
   International Rescue Ministry — donate.js
   Handles: frequency tabs, preset amount selection, custom input
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* --- FREQUENCY TABS --- */
  const freqBtns = document.querySelectorAll(".freq-btn");
  freqBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      freqBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });
  });

  /* --- PRESET AMOUNT BUTTONS --- */
  const matrixBtns = document.querySelectorAll(".matrix-btn");
  const customInput = document.getElementById("custom-amount");

  matrixBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Remove selected state from all
      matrixBtns.forEach(function (b) {
        b.classList.remove("selected");
        b.style.borderColor = "";
        b.style.background = "";
        b.style.color = "";
      });

      // Highlight selected button
      btn.classList.add("selected");
      btn.style.borderColor = "#0072ff";
      btn.style.background = "rgba(0, 114, 255, 0.15)";
      btn.style.color = "#4facfe";

      // Update custom input with selected value
      if (customInput) {
        const value = btn.textContent.replace("$", "").trim();
        customInput.value = value;
      }
    });
  });

  /* --- CUSTOM INPUT clears preset selection --- */
  if (customInput) {
    customInput.addEventListener("input", function () {
      matrixBtns.forEach(function (b) {
        b.classList.remove("selected");
        b.style.borderColor = "";
        b.style.background = "";
        b.style.color = "";
      });
    });
  }

  /* --- NEXT SECTION BUTTON --- */
  const nextBtn = document.querySelector(".submit-form-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      const amount = customInput ? customInput.value : "";
      const freqActive = document.querySelector(".freq-btn.active");
      const freq = freqActive ? freqActive.textContent.trim() : "One-time";
      const designation = document.getElementById("designation");
      const desigValue = designation ? designation.value : "";

      if (!amount || parseFloat(amount) <= 0) {
        alert("Please enter or select a giving amount before continuing.");
        return;
      }

      if (!desigValue) {
        alert("Please choose a designation (giving track) before continuing.");
        return;
      }

      // Confirmation message
      const confirmMsg = `Thank you for your generosity!\n\nGiving Summary:\n• Amount: $${parseFloat(amount).toFixed(2)}\n• Frequency: ${freq}\n• Designation: ${designation.options[designation.selectedIndex].text}\n\nYou will now be directed to complete your payment.`;
      alert(confirmMsg);
    });
  }

});

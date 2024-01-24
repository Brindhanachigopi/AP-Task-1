document.addEventListener("DOMContentLoaded", function () {
  const countdownDisplay = document.querySelector("#countdown");
  const independenceDayDisplay = document.querySelector("#independenceDay");

  // Countdown from 10 to 1 using callback hell
  setTimeout(function () {
    countdownDisplay.textContent = "10";

    setTimeout(function () {
      countdownDisplay.textContent = "9";

      setTimeout(function () {
        countdownDisplay.textContent = "8";

        setTimeout(function () {
          countdownDisplay.textContent = "7";

          setTimeout(function () {
            countdownDisplay.textContent = "6";

            setTimeout(function () {
              countdownDisplay.textContent = "5";

              setTimeout(function () {
                countdownDisplay.textContent = "4";

                setTimeout(function () {
                  countdownDisplay.textContent = "3";

                  setTimeout(function () {
                    countdownDisplay.textContent = "2";

                    setTimeout(function () {
                      countdownDisplay.textContent = "1";
                      
                      setTimeout(function () {
                        countdownDisplay.textContent = "";

                        // Display "Happy Independence Day" after countdown
                        setTimeout(function () {
                          independenceDayDisplay.textContent =
                            "Happy Independence Day!";
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
});


        const counterDisplay = document.getElementById("counter_display");
        const decrease = document.getElementById("decrease");
        const increase = document.getElementById("increase");

        var counter = 0; 
        increase.addEventListener("click", () => {
            if (counter <= 49){
                counter +=1;
                counterDisplay.innerHTML = counter;
            }
        });
        decrease.addEventListener("click", () => {
            if (counter >= 1){
                counter -=1;
                counterDisplay.innerHTML = counter;
            }
        });


    
document.addEventListener("DOMContentLoaded", function() {
    var hoverButton = document.getElementById("selectDate");
    var hoverDiv = document.getElementById("Calendar");

    hoverDiv.style.display = "none";
    hoverButton.addEventListener("mouseover", function() {
        hoverDiv.style.display = "block";
    });
    hoverDiv.addEventListener("mouseover", function() {
        hoverDiv.style.display = "block";
    });
    hoverButton.addEventListener("mouseout", function() {
        hoverDiv.style.display = "none";
    });
    hoverDiv.addEventListener("mouseout", function() {
        hoverDiv.style.display = "none";
    });


    var listItems = document.querySelectorAll("#days li");
    var selectDate = document.getElementById("selectDate");
    var currentDate = document.getElementById("currentDate");
    var subject1 = document.getElementById("subject1");
    var subject2 = document.getElementById("subject2");
    var subject3 = document.getElementById("subject3");
    var subject4 = document.getElementById("subject4");
    var title = document.getElementById("title");

    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            currentDate.textContent = item.textContent + "/02/2024";

            switch(item.textContent) {
                case "19":
                subject1.textContent = "OOPS Lab";
                subject2.textContent = "Maths";
                subject3.textContent = "CWS";
                subject4.textContent = "English";
                title.textContent = "Today's Schedule";
                break;
                case "20":
                subject1.textContent = "CWS Lab";
                subject2.textContent = "Maths";
                subject3.textContent = "OOPS";
                subject4.textContent = "Chemistry";
                title.textContent = "Schedule for "+currentDate.textContent;
                break;
                case "21":
                subject1.textContent = "Maths Lab";
                subject2.textContent = "Chemistry";
                subject3.textContent = "English";
                subject4.textContent = "CWS";
                title.textContent = "Schedule for "+currentDate.textContent;
                break;
                case "22":
                subject1.textContent = "English Lab";
                subject2.textContent = "CWS";
                subject3.textContent = "Physics";
                subject4.textContent = "OOPS";
                title.textContent = "Schedule for "+currentDate.textContent;
                break;
                case "23":
                subject1.textContent = "Physics Lab";
                subject2.textContent = "Maths";
                subject3.textContent = "Physics";
                subject4.textContent = "OOPS";
                title.textContent = "Schedule for "+currentDate.textContent;
                break;
                case "24":
                subject1.textContent = "Chemistry Lab";
                subject2.textContent = "English";
                subject3.textContent = "Maths";
                subject4.textContent = "Physics";
                title.textContent = "Schedule for "+currentDate.textContent;
                break;
                case "25":
                alert("Holiday!!");
                break;
                default:
                alert("No data available to display");
            }
        });
    });
});
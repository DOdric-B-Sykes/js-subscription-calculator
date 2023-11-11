var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e){
    subType = (e.target.value);

    updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e){
    subDuration = Number(e.target.value);

    updateSubscriptionDiv();
});

var updateSubscriptionDiv = function (){
    var monthlyCost = 5;

    if (subType == "standard"){
        console.log(monthlyCost = 7);
    } 
    if (subType == "premium"){
        console.log(monthlyCost = 10);
    }

    var total = (subDuration * monthlyCost);

    result.innerText = `You've chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
class UI {
    constructor() {
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseAmount = document.getElementById("expense-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemID = 0;
    }
    displayBudget(){
    //     const value = this.budgetInput.value;
    //     if (value === "" || value < 0){
    //        this.budgetFeedback.classList.add("showItem");
    //        this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;

    //     }else{
    //         this.budgetAmount.textContent=value;


    //     }
    // }
    console.log("are you working?")
}
function eventListeners(){
    const budgetForm = document.getElementById("budget-form");

    // create new instance of UI
    const ui = new UI();
    // budget form submit
    budgetForm.addEventListener("submit",function(event){
        event.preventDefault();
        ui.displayBudget();
    });
}
document.addEventListener('DOMContentLoaded',function(){
    eventListeners();
})
class UI {
    constructor() {
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.getElementById("budget-form").reset();
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseAmount = document.getElementById("expense-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.expenseForm = document.getElementById("expense-form").reset();
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemID = 0;
    }
    displayBudget(){
        const value = this.budgetInput.value;
        if (value === "" || value < 0){
           this.budgetFeedback.classList.add("showItem");
           this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;

        }else{
            this.budgetAmount.textContent=value;


        }
        // console.log("are you working?")
    }
    calculateExpense(){
        const expeInput = this.amountInput.value;
        if (expeInput === "" || expeInput < 0){
            this.expenseFeedback.classList.add("showItem");
            this.expenseFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;

        }else{
            this.expenseAmount.textContent = expeInput;
        }

    }
    calculateTotal(){
       const total = this.budgetAmount.textContent - this.expenseAmount.textContent;
       return this.balanceAmount.textContent= total;
    }
}
function eventListeners(){
    const budgetForm = document.getElementById("budget-form");
    const expenseForm = document.getElementById("expense-form")
    // create new instance of UI
    const ui = new UI();
    // budget form ff
    budgetForm.addEventListener("submit",function(event){
        event.preventDefault();
        ui.displayBudget();
    });
    expenseForm.addEventListener("submit", function(event){
        event.preventDefault();
        ui.calculateExpense();
    })
    expenseForm.addEventListener("click",function(){
        ui.calculateTotal()
    })
}
document.addEventListener('DOMContentLoaded',function(){
    eventListeners();
})
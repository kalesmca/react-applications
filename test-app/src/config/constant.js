export default class Constants {
    entryTypes = [{ id: 1, type: "Credit" }, { id: 2, type: "Debit" }, { id: 3, type: "Deposit" }, { id: 4, type: "Transfer" }]
    bankList = [{ id: 1, name: "TMB" }, { id: 2, name: "SBI" }, { id: 3, name: "ICICI" }, { id: 4, name: "Canara" }, { id: 5, name: "HDFC" }]
    purchaseTableColumns = [{ id: 1, name: "Sno" }, { id: 2, name: "Product" }, { id: 3, name: "Price" }, { id: 4, name: "Quantity" }, { id: 5, name: "Amount" }, { id: 6, name: "" }]
    blankRow = [{ id: 1, name: "sno", value: "" }, { id: 2, name: "prod", value: "" }, { id: 3, name: "price", value: "" }, { id: 4, name: "qty", value: "" }, { id: 5, name: "amt", value: "" }, { id: 6, name: "action", value: "" },]

    backEndUrl = {
        saveEntryUrl: "http://localhost:8080/budget/save"
    }
}
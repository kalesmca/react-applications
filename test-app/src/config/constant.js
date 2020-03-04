export default class Constants {
    entryTypes = [{ id: 1, type: "Credit" }, { id: 2, type: "Debit" }, { id: 3, type: "Deposit" }, { id: 4, type: "Transfer" }]
    bankList = [{ id: 1, name: "TMB" }, { id: 2, name: "SBI" }, { id: 3, name: "ICICI" }, { id: 4, name: "Canara" }, { id: 5, name: "HDFC" }, { id: 6, name: "On Hand" }]
    purchaseTableColumns = [{ id: 1, name: "Sno" }, { id: 2, name: "Product" }, { id: 3, name: "Price" }, { id: 4, name: "Quantity" }, { id: 5, name: "GST" }, { id: 6, name: "Amount" }, { id: 7, name: "" }]
    blankRow = [{ id: 1, name: "sno", value: "", type: 'number' }, { id: 2, name: "prod", value: "", type: 'text' }, { id: 3, type: 'number', name: "price", value: 0 }, { id: 4, type: 'number', name: "qty", value: 0 }, { id: 5, type: 'number', name: "gst", value: 0 }, { id: 6, name: "amt", type: 'number', value: 0 }, { id: 7, name: "action", value: "" },]
    entryListColumns = [{ id: 1, name: "Sno" }, { id: 2, name: "Date" }, { id: 3, name: "Type" }, { id: 4, name: "Amount" }, { id: 5, name: "Reason" }]
    backEndUrl = {
        saveEntryUrl: "http://localhost:8080/budget/save",
        getAllEntryUrl: "http://localhost:8080/budget/getAll"
    }
}
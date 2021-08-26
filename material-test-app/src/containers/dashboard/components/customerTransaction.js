import React, { useEffect, useState } from "react";
import AccordionComponent from "../../../shared/components/accordion";
import { DefaultTable } from "../../../shared/components/table";
import { useSelector, useDispatch } from "react-redux";
const initTransactionType = [
  {
    id: 1,
    transactionType: "EQUITIES",
    label: "Equities",
    isDisabled: false,
    isOpen: true,
    component: DefaultTable,
  },
  {
    id: 2,
    transactionType: "BONDS",
    label: "Bonds",
    isDisabled: false,
    isOpen: false,
    component: DefaultTable,
  },
  {
    id: 3,
    transactionType: "MUTUALFUNDS",
    label: "Mutual funds",
    isDisabled: false,
    isOpen: false,
    component: DefaultTable,
  },
  {
    id: 4,
    transactionType: "STRUCTUREDDEPOSITS",
    label: "Structured Notes",
    isDisabled: false,
    isOpen: false,
    component: DefaultTable,
  },
  {
    id: 5,
    transactionType: "PCI",
    label: "PCI",
    isDisabled: false,
    isOpen: false,
    component: DefaultTable,
  },
  {
    id: 6,
    transactionType: "PORTFOLIOINVESMENT",
    label: "Portfolio Investments",
    isDisabled: false,
    isOpen: false,
    component: DefaultTable,
  },
  {
    id: 7,
    transactionType: "ALTERNATIVEINVESMENTS",
    label: "Alternative Investments",
    isDisabled: false,
    isOpen: false,
    component: DefaultTable,
  },
];

const CustomerTransactionComponent = (props) => {
  const applicationState = useSelector((state) => state);
  console.log("trans State:", applicationState);
  const [transactionList, setTransactionList] = useState(applicationState.transactions.transactionList)
  const [transactionTypes, setTransactionTypes] = useState(initTransactionType)
  const setRowData = (transactions) => {
    
    let tempDataList = transactions;
    tempDataList.map((transaction) => {
      const tmpList = transactionList.filter(
        (item) => item.transactionType === transaction.transactionType
      );
      console.log("sepList:", tmpList);
      transaction.data = tmpList;
    });
    return tempDataList;
  };
 

  useEffect(() => {
    const newData  = setRowData(transactionTypes);
    console.log("after update :", newData);
    setTransactionTypes(newData)
  });
  return (
    <div>
      {transactionTypes.data && transactionTypes.data.length ? (
        <AccordionComponent accordionList={transactionTypes} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomerTransactionComponent;

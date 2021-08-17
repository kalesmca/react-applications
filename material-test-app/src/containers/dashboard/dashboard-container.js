import React from "react";
import TabsComponent from "../../shared/components/tabs";
import CustomerListComponent from "./components/customerList";
import CustomerNetworthComponent from "./components/customerNetworth";
import AdoptionComponent from "./components/adoption";
import CustomerTransactionComponent from "./components/customerTransaction";

const DashboardContainer = (props) => {
  const tabItems = [
    { id: 1, label: "Total Customers", component: CustomerListComponent },
    { id: 2, label: "Adoption", component: AdoptionComponent },
    { id: 3, label: "Customer Networth", component: CustomerNetworthComponent },
    {
      id: 4,
      label: "Customer Transaction",
      component: CustomerTransactionComponent,
    },
  ];
  return (
    <div>
      <div>DashboardContainer</div>
      <div>
        <TabsComponent 
            tabItems={tabItems}
        />
      </div>
    </div>
  );
};

export default DashboardContainer;

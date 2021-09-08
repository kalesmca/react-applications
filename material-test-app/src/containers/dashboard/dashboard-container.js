import React,{useEffect, useState} from "react";
import TabsComponent from "../../shared/components/tabs";
import CustomerListComponent from "./components/customerList";
import CustomerNetworthComponent from "./components/customerNetworth";
import AdoptionComponent from "./components/adoption";
import CustomerTransactionComponent from "./components/customerTransaction";
import CardListComponent from "./components/card-list";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const DashboardContainer = (props) => {
  const [parentArr, setParentArr] = useState([1,2]);
  const [flag, setFlag] = useState(true);
  
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

  const handleDragEnd = (result) => {
    if(!result.destination) return;

    if(flag) {
      setParentArr([2,1])
      setFlag(false);
    } else {
      setParentArr([1,2])
      setFlag(true);
    }
  }
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
   
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
        {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
        {
          parentArr.map((parent, parentIndex) => {
            return (
              <Draggable
                key={parentIndex}
                draggableId={parentIndex.toString()}
                index={parentIndex}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {parent === 1 ? (
                      <div>
                      <span {...provided.dragHandleProps}>&&&</span>
                      <TabsComponent tabItems={tabItems} />
                      </div>
                    ) : (
                      <div>
                      <span {...provided.dragHandleProps}>&&&</span>

                      <CardListComponent />
                      </div>
                      
                    )}
                  </div>
                )}
              </Draggable>
            );
          })
        }
          
        
        
     
      </div>
        )}
        </Droppable>
        </DragDropContext>
    </div>
  );
};

export default DashboardContainer;

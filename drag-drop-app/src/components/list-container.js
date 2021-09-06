import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../App.css";

const dataList = [
  {
    id: 1,
    name: "kaleeswaran",
    age: 20,
  },
  {
    id: 2,
    name: "Sundari",
    age: 22,
  },
  {
    id: 3,
    name: "Sahana",
    age: 2,
  },
  {
    id: 4,
    name: "ArjunRam",
    age: 3,
  },
  {
    id: 5,
    name: "KaleesSundari",
    age: 28,
  },
];

const ListContainer = () => {
  const [cardList, updateCardList] = useState(dataList);
  const handleOnDragEnd = (result) =>{
    console.log('result ::', result)
    if (!result.destination) return;

    const items = Array.from(cardList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCardList(items);
  }
  return (
    <div>
      List container
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="sas">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cardList.map((card, cardIndex) => {
                return (
                  <Draggable key={card.id} draggableId={card.id.toString()} index={cardIndex}>
                  {
                      (provided) => (
                        <div className="card-container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <span>{card.name} --</span>
                      <span>{card.age}</span>
                    </div>
                      )
                  }
                    
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ListContainer;

import React, { useState } from "react";
import CardComponent from "./card";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../App.css";

const CustomContainer = () => {
  const arr = [1, 2];
  const list1 = [
    {
      id: 111,
      name: "kaleeswaran",
      age: 20,
    },
    {
      id: 112,
      name: "Sundari",
      age: 22,
    },
    {
      id: 113,
      name: "Sahana",
      age: 2,
    },
    {
      id: 114,
      name: "ArjunRam",
      age: 3,
    },
    {
      id: 115,
      name: "KaleesSundari",
      age: 28,
    },
  ];

  const [dataList, setDataList] = useState(list1);
  const [parentArr, setParentArr] = useState(arr);
  const [flag, setFlag] = useState(true);

  const handleOnDragEnd = (result) => {
    console.log("result ::", result);

    if (!result.destination) return;
    if (result.type === "child") {
      const items = Array.from(dataList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setDataList(items);
    } else {
      if (flag) {
        setParentArr([2, 1]);
        setFlag(false);
      } else {
        setParentArr([1, 2]);
        setFlag(true);
      }
    }
  };

  return (
    <div>
      Customer Containers
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable" type="parent">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {parentArr.map((parent, parentIndex) => {
                return (
                  <Draggable
                    draggableId={parentIndex.toString()}
                    index={parentIndex}
                    key={parentIndex}
                  >
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        {parent === 1 ? (
                          <div className="parent-div">
                            Component 1
                            <span {...provided.dragHandleProps}> xxxx</span>
                          </div>
                        ) : (
                          <div className="parent-div">
                            <span {...provided.dragHandleProps}> xxxx</span>
                            <Droppable
                              droppableId={`droppable${parent}`}
                              type="child"
                            >
                              {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                  {dataList.map((child, childIndex) => {
                                    return (
                                      <Draggable
                                        draggableId={child.id.toString()}
                                        index={childIndex}
                                        key={child.id}
                                      >
                                        {(provided, snapshot) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                          >
                                            <span>{child.name}</span>
                                            <span {...provided.dragHandleProps}>
                                              {" "}
                                              *****
                                            </span>
                                          </div>
                                        )}
                                      </Draggable>
                                    );
                                  })}
                                </div>
                              )}
                            </Droppable>
                          </div>
                        )}
                      </div>
                    )}
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

export default CustomContainer;

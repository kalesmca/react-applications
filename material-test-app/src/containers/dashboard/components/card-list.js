import React,{useState} from 'react';
import '../../../assets/css/dashboard.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CardComponent from '../../../shared/components/card';

const initCards = [
    {
      header:{
        title:"Workflow and approval"
      },content:{
        desc:""
      },
      id:111
    },
    {
      header:{
        title:"Academy"
      },content:{
        desc:""
      },
      id:112
    },{
      header:{
        title:"Highlights of the day"
      },content:{
        desc:""
      },
      id:113
    },{
      header:{
        title:"Investments Ideas"
      },
      content:{
        desc:""
      },
      id:114
    }
  ]

  const CardListComponent = () => {
    const [cards, setCards] = useState(initCards);
    const handleDragEnd = (result) =>{

      console.log('result: ', result)
    if (!result.destination) return;
    
      const items = Array.from(cards);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setCards(items);
    

    }
    const grid = 8;
    const getListStyle = isDraggingOver => ({
      display: 'flex',
      
    });

    const getItemStyle = (isDragging, draggableStyle) => ({
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',
      padding: grid * 2,
      margin: `0 ${grid}px 0 0`,
    
      // change background colour if dragging
      background: isDragging ? 'lightgreen' : 'grey',
    
      // styles we need to apply on draggables
      ...draggableStyle,
    });


    return(
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >

          {
            cards.map((card, cardIndex) => {
              return (

                <Draggable key={card.id} draggableId={card.id.toString()} index={cardIndex}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      
                      className="card-container"
                    >
                    <span {...provided.dragHandleProps}>***</span>
                      <CardComponent data={card} />
                    </div>
                  )}
                </Draggable>
              )

            })
          }
          </div>
          )}
          </Droppable>
          </DragDropContext>
       
    )
  }

  export default CardListComponent;
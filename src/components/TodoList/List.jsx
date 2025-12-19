import styles from "./List.module.css";
import ListFooter from "./ListFooter";
import { useIsMobile } from "../../hooks/useIsMobile";
import Filter from "./Filter";
import { closestCenter, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableTodo from "./SortableTodo";
import Todo from "./Todo";
import { useState } from "react";

const List = ({ todos, onCheckClick, onDeleteClick, onClearCompleted, leftItemsCount, filter, onFilterChange, onReorder }) => {
  const isMobile = useIsMobile();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    }),
    useSensor(KeyboardSensor, {
      sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event) => {
    onReorder(event);
  }

  const [activeTodo, setActiveTodo] = useState(null);

  const handleDragStart = ({active}) => {
    const draggingTodo = todos.find(todo => todo.id === active.id);
    setActiveTodo(draggingTodo);
  }

  return (
    <>

      <section className={styles.listContainer}>
        <ul className={styles.list}>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
          >
            <SortableContext
              items={todos}
              strategy={verticalListSortingStrategy}
            >
              {
                todos.map(
                  (todo) =>
                  <SortableTodo 
                    key={todo.id}
                    id={todo.id}
                    todoText={todo.todoText}
                    isDone={todo.isDone}
                    onCheckClick={onCheckClick}
                    onDeleteClick={onDeleteClick}
                  />
                )
              }
            </SortableContext>
            <DragOverlay>
              <Todo
                {...activeTodo}
                style={{borderRadius: "var(--std-border-radius)"}}
              />
            </DragOverlay>
          </DndContext>
        
        </ul>

        {
          isMobile
            ? <ListFooter onClearCompleted={onClearCompleted} leftItemsCount={leftItemsCount} />
            : <ListFooter onClearCompleted={onClearCompleted} leftItemsCount={leftItemsCount}>
                <Filter filter={filter} onFilterChange={onFilterChange} />
              </ListFooter>
        }

      </section>

      {
        isMobile
          ? <Filter filter={filter} onFilterChange={onFilterChange} />
          : ""
      }

    </>
  )
}

export default List;
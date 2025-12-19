import Todo from "./Todo";
import styles from "./List.module.css";
import ListFooter from "./ListFooter";
import { useIsMobile } from "../../hooks/useIsMobile";
import Filter from "./Filter";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";

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

  return (
    <>

      <section className={styles.listContainer}>
        <ul className={styles.list}>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={todos}
              strategy={verticalListSortingStrategy}
            >
              {
                todos.map(
                  (todo) =>
                  <Todo 
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
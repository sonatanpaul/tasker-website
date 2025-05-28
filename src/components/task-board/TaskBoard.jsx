import { useState } from "react";
import AddTaskModal from "../add-task-modal/AddTaskModal";
import SearchTask from "../search-task/SearchTask";
import TaskActions from "../task-actions/TaskActions";
import TaskList from "../task-list/TaskList";

export default function TaskBoard() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
    tags: ["web", "react", "javascript"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (event, newTask) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);

    setShowModal(false);
  };

  return (
    <>
      {showModal && <AddTaskModal onSave={handleAddTask} />}
      <section className="mb-20 flex justify-center" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddClick={() => setShowModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}

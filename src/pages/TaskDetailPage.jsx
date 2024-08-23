import React, { useEffect, useState } from "react";
import { getTaskById, getAllTasks } from "../services/apiClientService";
import { useParams } from "react-router-dom";

const TaskDetailPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTaskById(id);
        setTask(data);
        console.log(`Fetched task for id ${id}`, data);

      } catch (error) {
        console.error("Failed to fetch task:", error);
      }
    };

    fetchTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      {/* Add more detailed task information */}
    </div>
  );
};

export default TaskDetailPage;

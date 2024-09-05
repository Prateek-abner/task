'use client'
import { useState, useEffect } from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { db } from '../../config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskCollection = collection(db, 'tasks');
      const taskSnapshot = await getDocs(taskCollection);
      const taskList = taskSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTasks(taskList);
    };

    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    const taskCollection = collection(db, 'tasks');
    await addDoc(taskCollection, newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

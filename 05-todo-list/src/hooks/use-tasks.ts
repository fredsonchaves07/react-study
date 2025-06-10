import useLocalStorage from "use-local-storage";
import { Task, TASK_KEY } from "../models/task";


export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASK_KEY, [])

    return {
        tasks,
        taskCount: tasks.length,
        concludedTaskCount: tasks.filter((task) => task.concluded).length
    }
}
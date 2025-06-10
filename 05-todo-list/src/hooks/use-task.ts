import useLocalStorage from "use-local-storage";
import { TASK_KEY, TaskState, type Task } from "../models/task";


export default function useTask() {
    const [task, setTask] = useLocalStorage<Task[]>(TASK_KEY, [])
    
    function prepareTask() {
        setTask([...task, {id: Math.random().toString(36).substring(2, 9), title:"", state: TaskState.Creating}])
    }

    return {
        prepareTask
    }
}
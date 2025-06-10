import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputChecbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import React from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
    task: Task
}

export default function TaskItem({task}: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating)

    const [taskTitle, setTaskTitle] = React.useState("")

    function handleEditTask() {
        setIsEditing(true)
    }

    function handleExitEditTask() {
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    return (
        <form>
        <Card size="md" className="flex items-center gap-4">
        {!isEditing ? <>
            <InputChecbox value={task?.concluded?.toString()} checked={task?.concluded}/>
        <Text className={cx("flex 1", {
            'line-through': task?.concluded,
        })}>{task?.title}</Text>
        <div className="flex gap-1">
            <ButtonIcon type="button" icon={TrashIcon} variant="tertiary"/>
            <ButtonIcon type="button" icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
        </div>
        </>
        : <>
            <InputText className="flex-1" onChange={handleChangeTaskTitle} required autoFocus/>
            <div className="flex gap-1">
            <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitEditTask}/>
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary"/>
            </div>
        </>
        }
        
    </Card>
    </form>
    )
}
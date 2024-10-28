import { Task } from "../Task/Task";
import { ITask } from "../../App";
interface TasksProps {
    arr: ITask[],
    handleDelete: Function,
    handleEdit: Function,
    handleToggle: Function,
    handleCheckBox: Function,
}

export function Tasks({ arr, handleDelete, handleEdit, handleToggle, handleCheckBox }: TasksProps) {

    return (
        <ul>
            {arr.map(el => {
                return (
                    <Task
                        key={el.id}
                        id={el.id}
                        text={el.text}
                        isEdit={el.isEdit}
                        isChecked={el.isChecked}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleToggle={handleToggle}
                        handleCheckBox={handleCheckBox}
                    />
                )
            })}
        </ul>
    );
}
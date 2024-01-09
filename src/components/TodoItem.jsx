import { faCancel, faL, faPen, faPenAlt, faPenFancy, faPenToSquare, faSave, faStoreSlash, faTeeth, faTrash, faTrashAlt, faTrashArrowUp, faTrashCan, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function TodoItem(props) {
    const { job ,hdlDel, hdlUpdate, hdlStatus } = props;
    const [edit, setEdit] = useState(true);
    const [editValue, setEditedValue] = useState(job.todo);

    const handleInputChange = (e) => {
        setEditedValue(e.target.value);
    };

    const clikeSave = (id, completed) => {
        setEdit(true)
        hdlUpdate(id, completed, editValue)
    }

    const hdlCancel = (todo) => {
        setEditedValue(todo)
        setEdit(true)
    }

    const hdlEdit = () => {
        setEdit(false)
    }

    return (
        <div className="flex justify-between h-[60px] max-sm:h-10 rounded-md border-[3px] shadow-light border-white p-2 max-sm:p-1 bg-pink-c my-2 max-sm:my-1 gap-3 hover:scale-105 transition delay-75">
            <input className={`w-full px-4 max-sm:px-2 rounded-md focus:outline-0 active:outline-2 text-ellipsis ${edit ? 'hover:cursor-pointer' : 'hover:cursor-text'} ${job.completed && edit === true ? 'under ' : 'nounder'}`} 
            onClick={ () => !edit ? '' : hdlStatus(job.id, editValue, job.completed)}
            value={editValue} readOnly={edit}
            onChange={handleInputChange}/>
            <div className="flex gap-2">
                {edit ? (
                    <>
                        <button
                            className="grow p-2 px-3 flex place-items-center max-sm:px-2 max-sm:py-2 bg-yellow-l rounded-full transition delay-75 hover:bg-brown-text hover:text-yellow-l active:scale-95 active:outline-none active:ring-2 active:ring-brown-text active:ring-offset-2"
                            onClick={() => hdlEdit()}
                        ><FontAwesomeIcon icon={faPenToSquare}/></button>
                        <button
                            className="grow p-2 px-3 flex place-items-center max-sm:px-2 max-sm:py-2 bg-yellow-l rounded-full transition delay-75 hover:bg-brown-text hover:text-yellow-l active:scale-95 active:outline-none active:ring-2 active:ring-brown-text active:ring-offset-2"
                            onClick={() => hdlDel(job.id)}
                        ><FontAwesomeIcon icon={faTrashCan}/></button>
                    </>
                ) : (
                    <>
                        <button
                            className="grow p-2 px-3 flex place-items-center max-sm:px-2 max-sm:py-2 bg-yellow-l rounded-full transition delay-75 hover:bg-brown-text hover:text-yellow-l active:scale-95 active:outline-none active:ring-2 active:ring-brown-text active:ring-offset-2"
                            onClick={() => clikeSave(job.id, job.completed)}
                        ><FontAwesomeIcon icon={faSave}/></button>
                        <button
                            className="grow p-2 px-3 flex place-items-center max-sm:px-2 max-sm:py-2 bg-yellow-l rounded-full transition delay-75 hover:bg-brown-text hover:text-yellow-l active:scale-95 active:outline-none active:ring-2 active:ring-brown-text active:ring-offset-2"
                            onClick={() => hdlCancel(job.todo)}
                        ><FontAwesomeIcon icon={faCancel}/></button>
                    </>
                )}
            </div>
        </div>
    );
}

export default TodoItem;

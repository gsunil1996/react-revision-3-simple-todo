import styles from "./TodoItem.module.css";
function TodoItem({title, id, status, handleToggle, handleDelete})
{
    
    return (
        <>
            
              <div className={styles.title}>
                <div className={status ? styles.toggling : null}>{title}</div>
                </div>
                
            <button onClick={() => handleToggle(id)}>Toggle</button>
            <button onClick={() => handleDelete(id)}>Delete</button>

            <br/>
            </>
    )
}

export default TodoItem;
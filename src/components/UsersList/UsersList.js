import UserItem from '../UserItem/UserItem'

export default function UsersList({list, deleteItem, editItem}) {
    return (
        <table className='list_block'>
            <thead className='table_head'>
                <tr>
                    <td>Name</td>
                    <td>E-mail</td>
                    <td>Phone_number</td>
                    <td>Eidt/Delete Button</td>                      
                </tr>
            </thead>
            <tbody className='input_blocks'>
                {list.map((users) => (                    
                    <UserItem
                        key={users.id}
                        item={users}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                ))}  
            </tbody>
        </table>
    )
}


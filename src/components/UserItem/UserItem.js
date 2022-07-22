import React from 'react'

export default function UserItem({item, deleteItem, editItem}) {
    function onDeleteBtnClick(e) {
        e.stopPropagation();

        deleteItem(item.id);
    }
    
    function onEditBtnClick() {
        editItem(item.id);
    }

    return (
        <>
            <tr className='list_elements'>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>
                    <button className='edit-btn' onClick={onEditBtnClick}>Edit</button>
                    <button className='delete-btn' onClick={onDeleteBtnClick}>Delete User</button>
                </td>
            </tr> 
        </>
    )
}

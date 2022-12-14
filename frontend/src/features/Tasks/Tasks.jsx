import React from 'react';

import SideBar from '../SideBar/SideBar';
import {useSelector, useDispatch } from 'react-redux'
import AddModalWindow  from '../ModalWindow/AddModalWindow';
import DelModalWindow from '../ModalWindow/DelModalWindow';
import { delTask } from './tasksSlice';
import EditModalWindow from '../ModalWindow/EditModalWindow';



function Tasks() {
  const { addModalIsOpen } = useSelector(state => state.modal)
  const { delModalIsOpen } = useSelector(state => state.modal)
  const { editModalIsOpen } = useSelector(state => state.modal)
  return (
    <div>
 <SideBar/>
{ addModalIsOpen ? <AddModalWindow/> : null}
{ delModalIsOpen ? <DelModalWindow/> : null }
{editModalIsOpen ? <EditModalWindow/> : null}
    </div>
  );
}

export default Tasks;

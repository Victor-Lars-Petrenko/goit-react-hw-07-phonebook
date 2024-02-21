import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/operations';
import { Item, Button } from './ContactListItem.styled';

export const ContactListItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button id={id} type="button" onClick={handleClick}>
        Delete
      </Button>
    </Item>
  );
};

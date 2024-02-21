import { useSelector } from 'react-redux';

import { List } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';
import { getFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const items = useSelector(getFilteredContacts);

  return (
    <List>
      {items.map(item => {
        return <ContactListItem key={item.id} item={item} />;
      })}
    </List>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Div, Heading } from './App.styled';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { getError, getIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    console.log(6666);
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <Heading>Phonebook</Heading>
      <ContactForm />

      <Heading>Contacts</Heading>
      <Filter />
      {isLoading && <h2>Loading</h2>}
      {error && <h2>Error</h2>}
      <ContactList />
    </Div>
  );
};

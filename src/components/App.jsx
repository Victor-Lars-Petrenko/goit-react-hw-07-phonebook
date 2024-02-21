import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Div, Heading, LoaderWrapper } from './App.styled';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import { Bars } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <Heading>Phonebook</Heading>
      <ContactForm />

      <Heading>Contacts</Heading>
      <Filter />
      {loading && (
        <LoaderWrapper>
          <Bars color="MidnightBlue" height="40" width="40" />
        </LoaderWrapper>
      )}
      {error && <p>`${error}`</p>}
      <ContactList />
    </Div>
  );
};

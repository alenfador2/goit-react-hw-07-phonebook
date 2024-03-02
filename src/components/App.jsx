import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React from 'react';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      {isLoading && <Loader />}
      <div className="main-div">
        {error && <Error />}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
export default App;

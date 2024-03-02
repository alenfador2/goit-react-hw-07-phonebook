import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterStatus } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterStatus) || '';

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    //eslint-disable-next-line
  }, []);

  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(filteredContact => {
          return (
            <ContactItem
              key={filteredContact.id}
              id={filteredContact.id}
              name={filteredContact.name}
              number={filteredContact.phone}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;

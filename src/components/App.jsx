import styles from './App.module.css';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import React from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';

const App = () => {
  const { appWrapper } = styles;

  const contactsList = useSelector(state => state.contacts);
 

  return (
    <div className={appWrapper}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contactsList.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="Your phonebook is empty" />
        )}
      </Section>
    </div>
  );
};

export default App;

import styles from './App.module.css';
import { Section } from './Section/Section.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import React from 'react';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Notification } from './Notification/Notification.jsx';
import { useSelector } from 'react-redux';

export const App = () => {
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


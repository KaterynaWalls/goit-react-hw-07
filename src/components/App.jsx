import ContactList from "./ContactList/ContactList.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
      <ContactList />
    </div>
  );
};

export default App;

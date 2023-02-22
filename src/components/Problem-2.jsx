import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);

  let API = "https://contact.mediusware.com/api/contacts/?page=1";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  let contact = contacts.results;

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-lg btn-outline-primary" type="button">
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
        </div>
      </div>

      <div id="contacts">
        {contact.map((ev) => {
          return (
            <div key={Math.random()}>
              <h5>{ev.phone}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Problem2;

import React, {useState, useEffect } from "react";
import Contact from "./Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import "./styles.css";
import { NavLink } from "react-router-dom";
import { contacts } from "../constants.js";

function Contacts() {
    const [search, setSearch] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const [genderChecklist, setGenderChecklist] = useState({
        male: true,
        female: true,
        genderless: true,
    });

    const handleGenderChecklistUpdate = (genderToToggle) => {
        setGenderChecklist({
            ...genderChecklist,
            [genderToToggle]: !genderChecklist[genderToToggle],
        });
    }

    useEffect(() => {
        const result = contacts.filter(({ lastName, firstName, phone, gender }) => {
            const searchValue = search.toLowerCase();

            return (
                lastName.toLowerCase().includes(searchValue) ||
                firstName.toLowerCase().includes(searchValue) ||
                phone.includes(search)
             ) && genderChecklist[gender ?? 'genderless'];
        });

        setFilteredContacts(result);
    }, [search, genderChecklist]);

    const handleSearchChange = (e) => setSearch(e.target.value);

    return(
        <div className="contacts-phone">
            <div className="contacts-header">
                <p className="contacts-groups">Groups</p>
                <p className="contacts-heading">Contacts</p>
                < FontAwesomeIcon icon={faPlus} color="grey"/>
            </div>

            <input
                className="search-input"
                type="text"
                placeholder="Search" 
                value={search}
                onChange={handleSearchChange}
            ></input>

            <label>
                <input 
                    type="checkbox"
                    name="male"
                    checked={genderChecklist['male']}
                    onChange={() => handleGenderChecklistUpdate('male')}
                    ></input>
                male
            </label>

            <label>
                <input 
                    type="checkbox"
                    name="female"
                    checked={genderChecklist['female']}
                    onChange={() => handleGenderChecklistUpdate('female')}
                ></input>
                female
            </label>

            <label>
                <input
                    type="checkbox"
                    name="genderless"
                    checked={genderChecklist['genderless']}
                    onChange={() => handleGenderChecklistUpdate('genderless')}
                ></input>
                genderless
            </label>

            <ul className="contacts-list">
                {filteredContacts.map((contact, index) => (
                    <NavLink to={`/contact-profile/${index}`}>
                        <Contact {...contact} />
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Contacts;
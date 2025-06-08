import React, { useState } from 'react';
import data from './data';
import List from './List';

const BirthdayReminder = () => {
    const [people, SetPeople] = useState(data);

    return (
        <main>
            <section className="container">
                <h3>{people.length}</h3>
                <List people={people} />
                <button onClick={() => SetPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default BirthdayReminder;
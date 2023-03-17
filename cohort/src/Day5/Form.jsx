import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [Range, setRange] = useState('');
    const [Date, setDate] = useState('');
    const [Male, setMale] = useState('');
    const [Female, setFemale] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleRangeChange = (e) => {
        setRange(e.target.value);
    };
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    const handleMaleChange = (e) => {
        setMale(e.target.value);
    };
    const handleFemaleChange = (e) => {
        setFemale(e.target.value);
    };

    return (
        <form>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
                <span>{name}</span>
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
                <span>{email}</span>
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" value={phone} onChange={handlePhoneChange} />
                <span>{phone}</span>
            </label>
            <br />
            <label>
                Range:
                <input type="range" value={Range} onChange={handleRangeChange} />
                <span>{Range}</span>
            </label>
            <br />
            <p>Please select your Gender:</p>
            <input type="radio" id="Male" name="gender" value={Male} onChange={handleMaleChange} />
            <label for="Male">Male</label><br />
            <span>{Male}</span>

            <input type="radio" id="Female" name="Gender" value={Female} onChange={handleFemaleChange} />
            <label for="Female">Female</label><br />
            <span>{Female}</span>

            <br />
            <p>Please select your DOB:</p>
            <label>
                Date:
                <input type="date" value={Date} onChange={handleDateChange} />
                <span>{Date}</span>
            </label>
        </form>
    );
};

export default Form;
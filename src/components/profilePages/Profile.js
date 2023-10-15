import React, { useState } from 'react';
import './MedicalProfile.css';

function MedicalProfile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodType: '',
    allergies: '',
    medications: '',
    conditions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the profile data to a backend or perform other actions.
    console.log('Medical profile submitted:', profile);
  };

  return (
    <div className="medical-profile">
      <h1>Medical Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={profile.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Blood Type</label>
          <input
            type="text"
            name="bloodType"
            value={profile.bloodType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Allergies</label>
          <textarea
            name="allergies"
            value={profile.allergies}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Medications</label>
          <textarea
            name="medications"
            value={profile.medications}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Medical Conditions</label>
          <textarea
            name="conditions"
            value={profile.conditions}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default MedicalProfile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodtype, setBloodtype] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [gsis, setGsis] = useState('');
    const [pagIbigNo, setPagIbigNo] = useState('');
    const [philhealth, setPhilhealth] = useState('');
    const [sss, setSss] = useState('');
    const [tin, setTin] = useState('');
    const [agencyEmployeeNo, setAgencyEmployeeNo] = useState('');
    const [occupation, setOccupation] = useState('');
    const [employeeBusiness, setEmployeeBusiness] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setPermanentAddress(item.permanent_address);
            setZipCode(item.zip_code);
            setEmail(item.email);
            setPhone(item.phone);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setCivilStatus(item.civil_status);
            setSex(item.sex);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodtype(item.bloodtype);
            setCitizenship(item.citizenship);
            setGsis(item.gsis);
            setPagIbigNo(item.pag_ibig_no);
            setPhilhealth(item.philhealth);
            setSss(item.sss);
            setTin(item.tin);
            setAgencyEmployeeNo(item.agency_employee_no);
            setOccupation(item.occupation);
            setEmployeeBusiness(item.employee_business);
            setBusinessAddress(item.business_address);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address,
            permanent_address: permanentAddress,
            zip_code: zipCode,
            email,
            phone,
            date_of_birth: dateOfBirth,
            place_of_birth: placeOfBirth,
            civil_status: civilStatus,
            sex,
            height,
            weight,
            bloodtype,
            citizenship,
            gsis,
            pag_ibig_no: pagIbigNo,
            philhealth,
            sss,
            tin,
            agency_employee_no: agencyEmployeeNo,
            occupation,
            employee_business: employeeBusiness,
            business_address: businessAddress,};
        
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
            <label>Middle Name</label>
            <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
            <label>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
            <label>Permanent Address</label>
            <input type="text" value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} />
        </div>
        <div>
            <label>Zip Code</label>
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </div>
        <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
            <label>Date of Birth</label>
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </div>
        <div>
            <label>Place of Birth</label>
            <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
        </div>
        <div>
            <label>Civil Status</label>
            <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
        </div>
        <div>
            <label>Sex</label>
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="">Select...</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
        </div>
        <div>
            <label>Height</label>
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div>
            <label>Weight</label>
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
            <label>Blood Type</label>
            <input type="text" value={bloodtype} onChange={(e) => setBloodtype(e.target.value)} />
        </div>
        <div>
            <label>Citizenship</label>
            <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
        </div>
        <div>
            <label>GSIS</label>
            <input type="text" value={gsis} onChange={(e) => setGsis(e.target.value)} />
        </div>
        <div>
            <label>Pag-Ibig No</label>
            <input type="text" value={pagIbigNo} onChange={(e) => setPagIbigNo(e.target.value)} />
        </div>
        <div>
            <label>PhilHealth</label>
            <input type="text" value={philhealth} onChange={(e) => setPhilhealth(e.target.value)} />
        </div>
        <div>
            <label>SSS</label>
            <input type="text" value={sss} onChange={(e) => setSss(e.target.value)} />
        </div>
        <div>
            <label>TIN</label>
            <input type="text" value={tin} onChange={(e) => setTin(e.target.value)} />
        </div>
        <div>
            <label>Agency Employee No</label>
            <input type="text" value={agencyEmployeeNo} onChange={(e) => setAgencyEmployeeNo(e.target.value)} />
        </div>
        <div>
            <label>Occupation</label>
            <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </div>
        <div>
            <label>Employee Business</label>
            <input type="text" value={employeeBusiness} onChange={(e) => setEmployeeBusiness(e.target.value)} />
        </div>
        <div>
            <label>Business Address</label>
            <input type="text" value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
    </form>
);
};

export default ItemForm;

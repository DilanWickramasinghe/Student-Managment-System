import { useRef, useState } from 'react';
import '../Student/student.css'
import Button from 'react-bootstrap/Button';

export default function Student () {

    //using use States
    const [student, setStudent] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [sch, setSch] = useState('');
    const [helper, setHelper] = useState('');

    //used use Refs
    const nameRef = useRef();
    const ageRef = useRef();
    const addRef = useRef();
    const schRef = useRef();

    //adding the values using onChange
    const changeName = event => {
        setName(event.target.value);
    }

    const changeAddress = event => {
        setAddress(event.target.value);
    }

    const changeAge = event => {
        setAge(event.target.value);
    }

    const changeSchool = event => {
        setSch(event.target.value);
    }

    //Getting the Submit
    const submit = () => {
        if (!name || !address || !age || !sch){
            setHelper("Incorrect");
            return; // added return to stop execution
        } else {
            setHelper("");
        }

        const newStudent = {
            index: student.length + 1,
            fName: name,
            fAge: age,
            fAddress: address, // corrected key
            fSch: sch // corrected key
        }

        setStudent([...student, newStudent]);

        // No need to reset state variables as they are controlled inputs now

        console.log(student);
    }

    return (
        <>
            <div className="main">
                <div className="wrapper">
                    <form className='form'>

                        <h2>Student Manager System</h2>

                        <label htmlFor="name">Enter Student Name :</label>
                        <input onChange={changeName} ref={nameRef} type="text" />

                        <label htmlFor="">Enter Student Age :</label>
                        <input onChange={changeAge} ref={ageRef} type="number"/>

                        <label htmlFor="address">Enter Student Address :</label>
                        <input onChange={changeAddress} ref={addRef} type="text" />

                        <label htmlFor="school">Enter Student School :</label>
                        <input onChange={changeSchool} ref={schRef} type="text"/>

                        <Button onClick={submit} variant="success">Submit</Button>{' '}
                    </form>
                </div>
            </div>

            <div>
                <h2>Student List</h2>
                <ul className='wrap'>
                    {student.map((student) => (
                        <li key={student.index}>
                            <p>Name: {student.fName}</p>
                            <p>Age: {student.fAge}</p>
                            <p>Address: {student.fAddress}</p>
                            <p>School: {student.fSch}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

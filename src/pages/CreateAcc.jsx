import { useState, useEffect } from 'react';
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import Header from './../components/Topnav';


function CreateAcc() {
    const [signUpPrompt, setsignUpPrompt] = useState(false); // success
    const [signUpMsg, setsignUpMsg] = useState('');
    const [errorPrompt, setErrorPrompt] = useState(false); // errors
    const [errorMsg, setErrorMsg] = useState('');
    const [SideBar, setSideBar] = useState(false);
    const [programs, setPrograms] = useState('');
    const [values, setValues] = useState({
        applicantCategory: 'Regular/Irregular', // default value
        firstname: '',
        middlename: '',
        lastname: '',
        studentID: '',
        employeeID: '',
        email: '',
        contactnum: '',
        program: '',
        regIrreg: '',
        position: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/CreateAcc', values)
            .then((res) => {
                if (res.data.message === 'Sign up successful. Wait for your temporary account to be sent through your email.') {
                    setsignUpPrompt(true);
                    setsignUpMsg(res.data.message);
                    setValues({
                        applicantCategory: 'Regular/Irregular', // default value
                        firstname: '',
                        middlename: '',
                        lastname: '',
                        studentID: '',
                        employeeID: '',
                        email: '',
                        contactnum: '',
                        program: '',
                        regIrreg: '',
                        position: ''
                    });
                } else {
                    setsignUpPrompt(false);
                    setErrorPrompt(true);
                    setErrorMsg(res.data.message);
                }
            })
            .catch((err) => {
                alert('Error: ' + err);
            });
    };

    useEffect(() => {
        document.body.style.overflow = SideBar ? 'hidden' : 'auto';
    }, [SideBar]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/programs')
            .then(res => {
                setPrograms(res.data);
            })
            .catch(err => {
                setError('Error: ' + err);
            });
    }, []);

    const handleApplicantCategoryChange = (category) => {
        setValues({ ...values, applicantCategory: category });
    };

    return (
        <>
            <Header SideBar={SideBar} setSideBar={setSideBar} />

            {/* Parallax Section */}
            <div className="bg-cover bg-center h-96 flex justify-center items-center text-white" style={{ backgroundImage: "url('/src/assets/your-background.jpg')" }}>
                <h2 className="text-4xl font-bold">CAVITE STATE UNIVERSITY</h2>
                <h1 className="text-5xl font-semibold">DEPARTMENT OF COMPUTER STUDIES</h1>
            </div>

            {/* SIGN UP PROMPT */}
            {/* SUCCESS PROMPT */}
            {signUpPrompt && (
                <div data-aos="zoom-out" data-aos-duration="500" className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <button
                            className="absolute top-2 right-2 text-2xl"
                            onClick={() => setsignUpPrompt(false)}
                        >
                            &times;
                        </button>
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold">Success</h2>
                            <img src="/src/assets/checkmark.png" alt="Success Icon" className="w-12 mx-auto mt-4" />
                            <p className="mt-2 text-gray-700">{signUpMsg}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* ERROR PROMPT */}
            {errorPrompt && (
                <div data-aos="zoom-out" data-aos-duration="500" className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <button
                            className="absolute top-2 right-2 text-2xl"
                            onClick={() => setErrorPrompt(false)}
                        >
                            &times;
                        </button>
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold">Error</h2>
                            <img src="/src/assets/errormark.png" alt="Error Icon" className="w-12 mx-auto mt-4" />
                            <p className="mt-2 text-gray-700">{errorMsg}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Create Account Form */}
            <div data-aos="fade-up" className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Create Account</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Account Type */}
                    <div className="space-y-4">
                        <label className="block font-medium text-lg">Account Type <span className="text-red-500">*</span></label>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="applicantCategory"
                                    value="Regular/Irregular"
                                    checked={values.applicantCategory === 'Regular/Irregular'}
                                    onChange={() => handleApplicantCategoryChange('Regular/Irregular')}
                                    className="mr-2"
                                />
                                Regular/Irregular
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="applicantCategory"
                                    value="Society Officer"
                                    checked={values.applicantCategory === 'Society Officer'}
                                    onChange={() => handleApplicantCategoryChange('Society Officer')}
                                    className="mr-2"
                                />
                                Society Officer
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="applicantCategory"
                                    value="Employee"
                                    checked={values.applicantCategory === 'Employee'}
                                    onChange={() => handleApplicantCategoryChange('Employee')}
                                    className="mr-2"
                                />
                                Employee
                            </label>
                        </div>
                    </div>

                    {/* CONDITION FOR ACCOUNT TYPE */}
                    {values.applicantCategory === 'Regular/Irregular' && (
                        <div className="space-y-4">
                            <label className="block font-medium text-lg">Given Name <span className="text-red-500">*</span></label>
                            <input type="text" name="firstname" value={values.firstname} onChange={(e) => setValues({ ...values, firstname: e.target.value })} required className="w-full p-3 border border-gray-300 rounded-md" />

                            <label className="block font-medium text-lg">Middle Name</label>
                            <input type="text" placeholder="if applicable" name="middlename" value={values.middlename} onChange={(e) => setValues({ ...values, middlename: e.target.value })} className="w-full p-3 border border-gray-300 rounded-md" />

                            <label className="block font-medium text-lg">Last Name <span className="text-red-500">*</span></label>
                            <input type="text" name="lastname" value={values.lastname} onChange={(e) => setValues({ ...values, lastname: e.target.value })} required className="w-full p-3 border border-gray-300 rounded-md" />

                            <label className="block font-medium text-lg">Student ID <span className="text-red-500">*</span></label>
                            <input type="text" name="studentID" value={values.studentID} onChange={(e) => setValues({ ...values, studentID: e.target.value })} required className="w-full p-3 border border-gray-300 rounded-md" />

                            <label className="block font-medium text-lg">CvSU Email <span className="text-red-500">*</span></label>
                            <input type="email" name="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required className="w-full p-3 border border-gray-300 rounded-md" />

                            <label className="block font-medium text-lg">Phone Number <span className="text-red-500">*</span></label>
                            <input type="text" name="contactnum" value={values.contactnum} onChange={(e) => setValues({ ...values, contactnum: e.target.value })} required className="w-full p-3 border border-gray-300 rounded-md" />

                            <label className="block font-medium text-lg">Program <span className="text-red-500">*</span></label>
                            <select
                                name="program"
                                value={values.program}
                                onChange={(e) => setValues({ ...values, program: e.target.value })}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            >
                                <option value="">Select Program</option>
                                {programs &&
                                    programs.map((program) => (
                                        <option key={program.id} value={program.programname}>
                                            {program.programname}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )}

                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default CreateAcc;
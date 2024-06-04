import { Component, useState } from 'react';

export default function SignUpForm() {

    let iformdata = {firstName:"", lastName:"", email:"", dob:"", gender:"", country:"", likesPineapple:false, likesLiquorice:false};

    const [formData, setFormData] = useState(iformdata);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const changedValue = type === 'checkbox' ? checked : value;
        setFormData({...formData, [name]:changedValue});
    }

    return (
        <div className='container'>
            <h2> SignUpForm</h2><br/>
            <form onSubmit={handleSubmit}>

                <input placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} />
                <br/><br/>
                <input placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
                <br/><br/>
                <input placeholder='Email' type="email" name='email' value={formData.email} onChange={handleChange} />
                <br/><br/>
                <input placeholder='Date of Birth' type="date" name='dob' value={formData.dob} onChange={handleChange} />

                <br /><br/>

                <label>
                    <input type='radio' name='gender' value='male' checked={formData.gender === 'male'} onChange={handleChange}></input>
                      Male
                </label> &nbsp; &nbsp;

                <label>
                    <input type='radio' name='gender' value='female' checked={formData.gender === 'female'} onChange={handleChange}></input>
                      Female
                </label>

                <br /><br/>

                <select name='country' onChange={handleChange}>
                    <option value=''>Select Country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='MO'>Mexico</option>
                </select>

                <br /><br/>

                <label>
                    <input type='checkbox' name='likesPineapple' value='likesPineapple' checked={formData.likesPineapple} onChange={handleChange}/>
                    Likes Pineapple
                </label>  &nbsp; &nbsp;

                <label>
                    <input type='checkbox' name='likesLiquorice' value='likesLiquorice' checked={formData.likesLiquorice} onChange={handleChange}/>
                    Likes Liquorice
                </label>

                <br /><br/>
                
                <button>Submit</button> <br /><br/>
            </form>

            <div>
                <h2>Form Data Values:</h2>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    )
}

// class SignUpForm extends Component {

//     state = {

//     }

//     handleSubmit = (event) => {
//         event.preventDefault()

//         console.log(this.state)
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>

//                     <input placeholder='First Name' />

//                     <input placeholder='Last Name' />

//                     <input placeholder='Email' type="email" />

//                     <input placeholder='Date of Birth' type="date" />

//                     <br />

//                     <label>
//                         <input type='radio'></input>
//                         Male
//                     </label>

//                     <label>
//                         <input type='radio'></input>
//                         Female
//                     </label>

//                     <br />

//                     <select name='country'>
//                         <option value=''>Select Country</option>
//                         <option value='US'>United States</option>
//                         <option value='CA'>Canada</option>
//                         <option value='MO'>Mexico</option>
//                     </select>

//                     <br />

//                     <label>
//                         <input type='checkbox' />
//                         Likes Pineapple
//                     </label>

//                     <label>
//                         <input type='checkbox' />
//                         Likes Liquorice
//                     </label>

//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }


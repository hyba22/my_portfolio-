import "../css/contact.css"


const Contact=()=>{
    return(
        <div className="contact" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-form">
                <p>FirstName</p>
                <input/>
                <p>LastName</p>
                <input/>
                <p>Subject</p>
                <input/>
                <p>Email</p>
                <input/>
                <p>Description</p>
                <textarea>

                </textarea>
                <div>
                <button>Submit</button>
                <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Contact;
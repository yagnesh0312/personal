import { useState } from 'react';
import emailjs from 'emailjs-com';
function Connect() {
    const [name, setName] = useState('');
    const [massage, setMassage] = useState('');
    function onSubmit(e) {
        e.preventDefault();
        // public key : Hj3rY19LgfRTYzbY8
        // service id : service_54gkjrl
        // temp id : template_8erynom
        const PUBLIC_KEY = 'Hj3rY19LgfRTYzbY8';
        const SERVICE_ID = 'service_54gkjrl';
        const TEMPLATE_ID = 'template_8erynom';
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });
        e.target.reset()

    }
    return (
        <>
            <div className="main-body head">
                <div className="heading">Let's Connect</div>
                <div className="sub-heading">
                    Find out the phases of my educational experience in academia.
                </div>

                <div className="connect-main" >
                    <div className="">
                        <form className="form" onSubmit={(e) => onSubmit(e)}>
                            <h1 className="heading c">Let's Talk</h1>
                            <p className="sub-heading c">
                                The user is asked to provide their name, email, subject, and
                                message.
                            </p>
                            <div className="input-item">
                                <input
                                    className="input"
                                    onChange={(e) => setName(e.target.value)}
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="input-item">
                                <textarea
                                    className="input"
                                    name="message"
                                    onChange={(e) => setMassage(e.target.value)}
                                    rows="5"
                                    type="text"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="input-item">
                                <input type='submit' className="button" value={"SUBMIT"} />
                            </div>
                        </form>
                    </div>
                    <div className="">
                        
                        <div className="card connect-item" onClick={() => window.open("https://www.linkedin.com/in/yagnesh-jariwala-70273128b/", "_blank")}>
                            <div className="connect-item-center">
                                <div className="card-title connect-title">Linkedin</div>
                                <div className="card-content connect-sub-title">Yagnesh Jariwala</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div className="card connect-item" onClick={() => window.open("https://github.com/yagnesh0312", "_blank")}>
                            <div className="connect-item-center">
                                <div className="card-title connect-title">Github</div>
                                <div className="card-content connect-sub-title">yagnesh0312.github.io</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Connect
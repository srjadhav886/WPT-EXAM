
import './App.css';
import { useState } from 'react';

function Appl() {

    let [messages, setsmg] = useState("");
    const handlemessage = (e) => {
        const newmessage = e.target.value;
        setsmg(newmessage);
    }

    const [list, setlist] = useState("");
    const sendmsg = () => {
        const newlist = [messages, ...list];
        setlist(newlist);
        setsmg("");
    }

    return (
        <>
            <div>

                <div className='bg-secondary p-3 text-light '>
                    <h2>Whatsapp</h2>

                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <input className='form-control form-control-lg' type="text" value={messages} onChange={handlemessage} placeholder='lets chat here' />
                </div>
                <div>
                    <input className='btn-primary btn-lg' type="button" value="send" onClick={sendmsg} />
                </div>
                <div className=''>{messages}</div>
            </div>

            <div className=''>
                {list.map((item) => (
                    <div className='alert alert-primary mt-3'>{item}</div>
                ))}
            </div>

            {list.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </>
    );
}

export default Appl;

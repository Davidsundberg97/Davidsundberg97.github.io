import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ( { target: {name , value}}) => {
        setForm({...form, [name]: value})   
    }

    //service_mg1lk3u

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        try{
            await emailjs.send(
                'service_mg1lk3u',
                'template_4uqfwao',
                {
                    from_name: form.name,
                    to_name: 'David',
                    from_email: form.email,
                    to_email: 'davidsundberg97@gmail.com',
                    message: form.message,
                },
                '9y7Otym7UHfQNvle9'
            )
            setLoading(false)
            alert('Message sent successfully')

            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert('An error occured, Please try again')
        }

    }
  return (
    <section id="contact" className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
            <div className="contact-container">
                <h3 className="head-text"> Contact Me</h3>
                <p className="text-lg text-white-600 mt-3">
                    If you have any questions or would like to work together, feel free to contact me.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">
                            Name
                        </span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="John Doe"/>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">
                            Email
                        </span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="johndoe@gmail.com"/>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">
                            Your message
                        </span>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi! I'm interested in working..."/>
                    </label>
                    <button type="submit" className="field-btn" disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contacts
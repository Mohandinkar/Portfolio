import React, { useState } from 'react';
import { Github, Send } from 'lucide-react';  // Import the Send icon
import { cn } from '@/lib/utils';     // Assuming you use this for conditional classNames
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Twitch } from 'lucide-react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    //email js
    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_PUBLIC_KEY;

    const template_params = {
      from_name: name,
      from_email: email,
      to_name: 'Mohan',
      message: message,
    };

    emailjs.send(service_id, template_id, template_params, public_key)
    .then(()=>{
      toast.success('Message sent successfully');
      console.log('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    })
    .catch((error)=>{
      toast.error('Message not sent');
      console.log('Message not sent');
      setIsSubmitting(false);
    });

  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Have a question or just want to say hi? Feel free to drop me a message—I’m always happy to connect and collaborate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className='text-left'>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange= {(e) =>setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="abc "
                />
              </div>

              <div className='text-left'>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange= {(e) =>setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="abc@gmail.com"
                />
              </div>

              <div className='text-left'>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange= {(e) =>setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>

          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">
      
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="mailto:mohandinkar75@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mohandinkar75@gmail.com
                  </a>
                </div>
              </div>
            
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                   Pune, Maharastra, India
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/mohan-dinkar-1639b1272/" target="_blank">
                  <Linkedin className='hover:text-primary transition-colors' />
                </a>
                <a href="https://github.com/Mohandinkar" target="_blank">
                  <Github className='hover:text-primary transition-colors' />
                </a>
                <a href="https://x.com/Mohan_2502" target="_blank">
                  <Twitter className='hover:text-primary transition-colors' />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

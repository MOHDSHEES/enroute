import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast"; // Import Toast
import { contactFormFields, googleMapUrl } from "@/data/contactData";

interface ContactFormField {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const formFields = contactFormFields as ContactFormField[];
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    const loadingToast = toast.loading("Sending your message...");

    const formData = new FormData(formRef.current);

    // Ensure these keys match the {{variable}} in your EmailJS dashboard EXACTLY
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("number"),
      destination: formData.get("destination"),
      starting_date: formData.get("starting_date"),
      ending_date: formData.get("ending_date"),
      people: formData.get("people"),
      message: formData.get("message"),
    };

    // console.log("Data being sent to EmailJS:", templateParams);

    const SERVICE_ID = "service_f7oq8hl";
    const TEMPLATE_ID = "template_g3y3via";
    const PUBLIC_KEY = "q110XLZHHxdeJYu7t";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent! We'll contact you soon.", {
          id: loadingToast,
        });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.", {
          id: loadingToast,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <section className="contact-page section-space-bottom">
      {/* Toaster component provides the container for pop-ups */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container">
        <div className="row gutter-y-30">
          {/* Google Map Section */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="contact-page__map" style={{ height: "100%" }}>
              <div className="google-map" style={{ height: "100%" }}>
                <iframe
                  title="Map"
                  src={googleMapUrl}
                  className="map"
                  style={{ height: "100%" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
            <div className="contact-page__contact">
              <h2 className="contact-page__title">Ready to Get Started?</h2>
              <p className="contact-page__text">
                Provide your trip details below and our team will prepare a
                custom itinerary for you.
              </p>

              <form
                ref={formRef}
                className="comments-form__form form-one"
                onSubmit={sendEmail}
              >
                <div className="form-one__group">
                  {formFields.map((field, index) => (
                    <div
                      key={index}
                      className={`form-one__control ${
                        field.type === "textarea"
                          ? "form-one__control--full"
                          : ""
                      }`}
                    >
                      <label htmlFor={field.name}>{field.label}</label>
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          required
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          required
                        />
                      )}
                    </div>
                  ))}

                  <div className="form-one__control form-one__control--full">
                    <button
                      type="submit"
                      className="gotur-btn gotur-btn--base"
                      disabled={isSending}
                      style={{ opacity: isSending ? 0.7 : 1 }}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                      {!isSending && <i className="icon-arrow-right"></i>}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
// // ContactPage.tsx
// import React from "react";
// import { contactFormFields, googleMapUrl } from "@/data/contactData"; // Import the data

// interface ContactFormField {
//   name: string;
//   label: string;
//   placeholder: string;
//   type: "text" | "email" | "textarea";
// }
// const ContactPage: React.FC = () => {
//   const formFields = contactFormFields as ContactFormField[];
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const data: Record<string, string> = {};

//     formData.forEach((value, key) => {
//       data[key] = value.toString();
//     });

//     console.log("Form Submitted:", data);
//   };
//   return (
//     <section className='contact-page section-space-bottom'>
//       <div className='container'>
//         <div className='row gutter-y-30'>
//           {/* Google Map Section */}
//           <div
//             className='col-lg-6 wow fadeInLeft'
//             data-wow-duration='1500ms'
//             data-wow-delay='300ms'
//           >
//             <div className='contact-page__map'>
//               <div className='google-map'>
//                 <iframe
//                   title='template google map'
//                   src={googleMapUrl}
//                   className='map'
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div
//             className='col-lg-6 wow fadeInRight'
//             data-wow-duration='1500ms'
//             data-wow-delay='300ms'
//           >
//             <div className='contact-page__contact'>
//               <h2 className='contact-page__title'>Ready to Get Started?</h2>
//               <p className='contact-page__text'>
//                 Nullam varius, erat quis iaculis dictum, eros urna varius eros,
//                 ut blandit felis odio in turpis. Quisque rhoncus.
//               </p>
//               <form
//                 className='comments-form__form contact-form-validated form-one'
//                 onSubmit={handleSubmit}
//               >
//                 <div className='form-one__group'>
//                   {formFields.map((field, index) => (
//                     <div
//                       key={index}
//                       className={`form-one__control ${
//                         field.type === "textarea"
//                           ? "form-one__control--full"
//                           : ""
//                       }`}
//                     >
//                       <label htmlFor={field.name}>{field.label}</label>
//                       {field.type === "textarea" ? (
//                         <textarea
//                           name={field.name}
//                           id={field.name}
//                           placeholder={field.placeholder}
//                         ></textarea>
//                       ) : (
//                         <input
//                           type={field.type}
//                           name={field.name}
//                           id={field.name}
//                           placeholder={field.placeholder}
//                         />
//                       )}
//                     </div>
//                   ))}
//                   <div className='form-one__control form-one__control--full'>
//                     <button type='submit' className='gotur-btn gotur-btn--base'>
//                       Send Message <i className='icon-arrow-right'></i>
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;

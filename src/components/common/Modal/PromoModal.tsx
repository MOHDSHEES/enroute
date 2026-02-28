"use client";
import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import { supabase } from "@/lib/supabase";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

interface FormDataState {
  name: string;
  mobile: string;
  destination: string;
}

const PromoModal: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    mobile: "",
    destination: "",
  });

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenPromoModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => setShow(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("hasSeenPromoModal", "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    const loadingToast = toast.loading("Sending your inquiry...");

    // 1. Prepare Data for EmailJS
    // Ensure these keys match your EmailJS Template variables exactly
    const templateParams = {
      name: formData.name,
      number: formData.mobile,
      destination: formData.destination,
    };

    const SERVICE_ID = "service_f7oq8hl";
    const TEMPLATE_ID = "template_idjrr4m";
    const PUBLIC_KEY = "q110XLZHHxdeJYu7t";

    try {
      // 2. Save to Supabase
      // const { error: dbError } = await supabase.from("leads").insert([
      //   {
      //     full_name: formData.name,
      //     phone: formData.mobile,
      //     destination: formData.destination,
      //   },
      // ]);
      // if (dbError) throw dbError;

      // 3. Send via EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast.success("Inquiry sent successfully!", { id: loadingToast });
      setIsSubmitted(true);

      // Auto-close modal after success
      setTimeout(handleClose, 3000);
    } catch (err: any) {
      console.error("Error:", err);
      toast.error("Failed to send. Please try again.", { id: loadingToast });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal show={show} onHide={handleClose} centered className="promo-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            {isSubmitted ? "Success!" : "Plan Your Dream Trip"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isSubmitted ? (
            <div className="text-center py-4">
              <i
                className="fa fa-check-circle text-success mb-3"
                style={{ fontSize: "3rem" }}
              ></i>
              <p>Thank you! Our travel expert will contact you shortly.</p>
            </div>
          ) : (
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  name="destination"
                  placeholder="Where do you want to go?"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={isSending}
                className="w-100 gotur-btn mt-2"
              >
                {isSending ? "Sending..." : "Send Inquiry"}{" "}
                <i className="icon-paper-plane"></i>
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PromoModal;

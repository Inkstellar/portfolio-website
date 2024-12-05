import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import emailjs from "@emailjs/browser";

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: var(--text-color);
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  color: #4caf50;
  text-align: center;
  padding: 1rem;
  background-color: #e8f5e9;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  text-align: center;
  padding: 1rem;
  background-color: #ffebee;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 64px auto 0;
  padding: 2rem;
`;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID || "",
        process.env.REACT_APP_EMAIL_TEMPLATE_ID || "",
        {
          to_name: "Kousi",
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        }
      );

      setFormData({
        email: "",
        subject: "",
        message: "",
        name: "",
      });
      setStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      <ContactContainer>
        <Title>Get in Touch</Title>
        <Description>
          Have a question or want to work together? Feel free to reach out!
        </Description>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </SubmitButton>

          {status === "success" && (
            <SuccessMessage>
              Thank you for your message! I'll get back to you soon.
            </SuccessMessage>
          )}
          {status === "error" && (
            <ErrorMessage>
              Oops! Something went wrong. Please try again later.
            </ErrorMessage>
          )}
        </Form>
      </ContactContainer>
    </>
  );
};

export default Contact;

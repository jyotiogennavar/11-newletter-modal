import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const SvgShape = () => {
  return (
    <SVG
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 200 200"
      version="1.1"
    >
      <path
        fill="rgba(255, 255, 255, 0.13)"
        d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"
      ></path>
    </SVG>
  );
};

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic for submitting the form
    setIsSubscribed(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSubscribed(false);
  };

  return (
    <Container>
      <MainBtn onClick={() => setIsOpen(true)}>Open Modal</MainBtn>

      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isSubscribed={isSubscribed}
        closeModal={closeModal}
        handleSubscribe={handleSubscribe}
      />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  font-family: "Inter", sans-serif;
`;

const MainBtn = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: 0.3s;
  &:hover {
    background-color: #555;
    scale: 1.05;
  }
`;

const SpringModal = ({
  isOpen,
  setIsOpen,
  isSubscribed,
  closeModal,
  handleSubscribe,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <SvgShape />

            {isSubscribed ? (
              <>
                <h2>Thank you for joining us!</h2>
                <p>
                  Stay tuned for exciting updates delivered straight to your
                  inbox!
                </p>
              </>
            ) : (
              <>
                <h2>Don't Miss Out!</h2>
                <p>
                  Subscribe to our newsletter to receive the latest articles and
                  updates weekly!
                </p>

                <form onSubmit={handleSubscribe}>
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </form>
              </>
            )}
            <FiX
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
              onClick={closeModal}
            />
          </ModalContent>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

const ModalWrapper = styled(motion.div)`
  background-color: rgba(21, 28, 48, 0.2);
  backdrop-filter: blur(20px);
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  overflow-y: scroll;
  cursor: pointer;
`;

const ModalContent = styled(motion.div)`
  background-image: linear-gradient(to bottom right, #7f00ff, #4b0082);
  color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 32rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  cursor: default;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: "Lilita One", sans-serif;
    letter-spacing: 2px;
  }

  p {
    text-align: center;
    max-width: 20rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  form {
    margin-top: 2rem;
    display: flex;

    gap: 0.5rem;
    input {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.25rem;
      outline: none;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      outline: none;
      transition: 0.3s;
      &:hover {
        background-color: #555;
      }
    }
  }
`;

const SVG = styled.svg`
  position: absolute;
  top: -4rem;
  right: 12rem;
  z-index: 0;
  width: 100%;
`;

export default NewsletterModal;

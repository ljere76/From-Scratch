import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>1 Avenue du Général de Gaulle</p>
              <p>75015 Paris</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="01 23 45 67 89" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copie !")}
                >
                  01 23 45 67 89
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="fsagency@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copie !")}
                >
                  fsagency@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>From Scratch - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;

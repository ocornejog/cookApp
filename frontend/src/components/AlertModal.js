import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import C from '../constants/colors';
import "../styles/ConfirmationModal.css";

const AlertModal = ({ message, visible, textButton, onClickButton }) => {
  const navigate = useNavigate(); // Utilisez le hook useNavigate

  return (
    <>
    {visible ? 
    <div className="modal-overlay">
      <div className="modal">
        <div style={{ width: '100%', borderWidth: '1px', paddingHorizontal: '8px', 
        marginTop: '32px', borderRadius: '60px', alignSelf: 'center', alignItems: 'center', display: 'flex',
        flexDirection: 'column' }}>
            <div className='text1' style={{ color: C.white }}>
                {`${message}`}
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', width: '100%', marginTop: '32px', 
            alignContent: "center", justifyContent: "center" }}>
                <a dir="auto" style={{ textDecoration: 'none', width: '90%' }} 
                onClick={() => {
                  onClickButton();
                  if (message === "Utilisateur créé avec succès" || message === "Email existant, veuillez vous connecter") {
                    navigate("/");
                  }
                }}>
                    <div tabIndex="0" className="css-view-175oi2r" style={{ width: '95%', height: '60px', 
                    backgroundColor: C.white, borderRadius: '40px', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center' }}>
                        <div className='text2' style={{ color: C.green }}>
                            {`${textButton}`}
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
    :
    <div></div>
    }
    </>
  );
};

export default AlertModal;
//-------------------------------------------------------------------
// Default props for the component
AlertModal.defaultProps = {
    message: 'Voulez-vous supprimez la recette definitivement ?',
    visible: false,
    textButton: 'Ok', 
    onClickButton: () => {},
};

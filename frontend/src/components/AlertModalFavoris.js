import React from 'react';
import { useNavigate } from 'react-router-dom';
import C from '../constants/colors';
import "../styles/ConfirmationModal.css";

const AlertModalFavoris = ({ message, visible, textButton1, textButton2, onClickButton1, onClickButton2 }) => {
  const navigate = useNavigate();

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
            alignContent: "center", justifyContent: "space-between" }}>
                <a href="#" dir="auto" style={{ textDecoration: 'none', width: '45%' }} 
                onClick={onClickButton1}>
                    <div tabIndex="0" className="css-view-175oi2r" style={{ width: '100%', height: '60px', 
                    backgroundColor: C.white, borderRadius: '40px', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center' }}>
                        <div className='text2' style={{ color: C.green }}>
                            {`${textButton1}`}
                        </div>
                    </div>
                </a>
                <a href="#" dir="auto" style={{ textDecoration: 'none', width: '45%' }} 
                onClick={onClickButton2}>
                    <div tabIndex="0" className="css-view-175oi2r" style={{ width: '100%', height: '60px', 
                    backgroundColor: C.white, borderRadius: '40px', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center' }}>
                        <div className='text2' style={{ color: C.green }}>
                            {`${textButton2}`}
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

export default AlertModalFavoris;

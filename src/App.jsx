import { useState } from 'react';
import Hero from './components/Hero';
import SuccessCard from './components/SuccessCard';
import './App.css'

function App() {

      const [cardName, setCardName] = useState("");
      const [cardNo, setCardNo] = useState("");
      const [cardMonth, setCardMonth] = useState("");
      const [cardYear, setCardYear] = useState("");
      const [cardCvc, setCardCvc] = useState("");
      const [submit, setSubmit] = useState(false)
      const [touched, setTouched] = useState({
        cardName: false,
        cardNumber: false,
        mm: false,
        yy: false,
        cvc: false
      })
    
    function handleSubmit(){
      
      if(cardName && cardNo && cardMonth && cardYear && cardCvc){
          setSubmit(true);
      }
    }
    
    function handleBlur(field){
      setTouched(prev => ({
          ...prev,
          [field]: true
      }))
    }

    function handleContinue() {
      setSubmit(false);
      setCardName("");
      setCardNo("");
      setCardMonth("");
      setCardCvc("")
      setCardYear("")

      setTouched({
      cardName: false,
      cardNumber: false,
      mm: false,
      yy: false,
      cvc: false
    });
    }

    function handleCardNo(e){
      const rawValue = e.target.value.replace(/\s/g, '');

      const formattedValue = rawValue.replace(/(\d{4})/g, '$1 ').trim()
      setCardNo(formattedValue)
    }

  return(
    <div className="main-layout">
      <Hero
       userName={cardName}
       cardNo={cardNo}
       month={cardMonth}
       year={cardYear}
       cvc={cardCvc}
       />


        <div className="form-section">
          { !submit ? (
            <form className="card-details-form">
                <div>
                    <label htmlFor="cardName" className="user-info">CARDHOLDER NAME</label>
                    <input
                    id="cardName"
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    className={`user-input ${(cardName === '' && touched.cardName) ? 'error': ''}`}
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    onBlur = {() => handleBlur('cardName')}
                    />
                </div>
    
                <div>
                    <label htmlFor="cardNumber" className="user-info">CARD NUMBER</label>
                    <input
                    id="cardNumber"
                    type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    className={`user-input ${(cardNo === '' && touched.cardNumber) ? 'error': ''}`}
                    value={cardNo}
                    maxLength={19}
                    onChange={handleCardNo}
                    onBlur={() => handleBlur('cardNumber')}
                    />
                    {cardNo && isNaN(cardNo.replace(/\s/g, '')) && <span className="error-msg">Wrong format, numbers only</span> }
                </div>
    
                <div className="form-row">
                    <div className="exp-date-group">
                        <label className="user-info">EXP. DATE (MM/YY)</label>
    
                        <div className="date-inputs">
                            <input
                                type="text"
                                placeholder="MM"
                                className={`user-input small-input ${(cardMonth === '' && touched.mm) ? 'error': ''}`}
                                value={cardMonth}
                                maxLength={2}
                                onChange={(e) => setCardMonth(e.target.value)}
                                onBlur={() => handleBlur('mm')}
                            />
                            
    
                            <input
                                type="text"
                                placeholder="YY"
                                className={`user-input small-input ${(cardYear === '' && touched.yy) ? 'error': ''}`}
                                value={cardYear}
                                maxLength={2}
                                onChange={(e) => setCardYear(e.target.value)}
                                onBlur={() => handleBlur('yy')}
                            />
                        </div>
                    {((cardMonth === '' && touched.mm) || (cardYear === '' && touched.yy)) && <span className='error-msg'>Can't be blank</span>}
                </div>
                
    
                <div className="cvc-group">
                    <label htmlFor="cvc" className="user-info">CVC</label>
                    <input
                    id="cvc"
                    type="text"
                    placeholder="e.g. 123"
                    className={`user-input ${(cardCvc === '' && touched.cvc) ? 'error': ''}`}
                    value={cardCvc}
                    maxLength={3}
                    onChange={(e) => setCardCvc(e.target.value)}
                    onBlur={() => handleBlur('cvc')}
                    />
                  {(cardCvc === '' && touched.cvc) && <span className='error-msg'>Can't be blank</span>}
                </div>
                
                </div>
    
                <button type="button" onClick={handleSubmit}>Confirm</button>
            </form>) : (<SuccessCard continueBtn = {handleContinue} />)

          }
        </div>
      
  </div>
  )
}

export default App

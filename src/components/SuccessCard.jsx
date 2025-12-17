import iconComplete from '../assets/images/icon-complete.svg';

const SuccessCard = ({ continueBtn }) => {
  return (
    <div>
      <div className="success-card">
        <img src={iconComplete} alt="" />
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button onClick={continueBtn}>
            Countine
        </button>
      </div>
    </div>
  )
}

export default SuccessCard;

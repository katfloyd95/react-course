export default function FooterSection() {
  return (
    <div className="footer-section">
        <h1>SUBSCRIBE TO OUR EMAIL LIST</h1>
        <form>
          <input className='email-input' type='email' placeholder="What's your email?" />
          <input className='submit-btn' type='button' value='Submit' />
        </form>
    </div>
  )
}
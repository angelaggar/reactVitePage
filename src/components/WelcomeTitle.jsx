import ActionsPills from "./ActionsPills"
export default function WelcomeTitle() {
  return (
    <div className='main'>
      <h1 className='name'>Vite</h1>
      <p className='text'>Next Generation Frontend Tooling</p>
      <p className='tagline'>
        Get ready for a development enviroment that can finally catch upwith you
      </p>
      <ActionsPills />
    </div>
  )
}

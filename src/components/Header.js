import troll from '../images/troll-face.png';

function Header(){
  return(
    <nav className='header'>
      <img src = {troll} alt="troll-face" className="logo--img" />
      <h2 className='nav--title'>Meme Generator</h2>
      
    </nav>
  )
}

export default Header;
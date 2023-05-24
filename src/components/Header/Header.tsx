import * as S from './Header.styled'

const Header = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('logged')

    window.location.href = '/'
  }

  return (
    <S.Header>
      <S.HeaderLink to='/'>Inicio</S.HeaderLink>
      <S.HeaderLink to='/pix'>Pix</S.HeaderLink>
      <button onClick={handleLogout}>Logout</button>
    </S.Header>
  )
}

export default Header

import logo from '@assets/Group.svg'
export const Header = () => {
  return (
    <header className="bg-lightBg pt-16 px-6 text-center md:text-left md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
        <a href="/" aria-label="Tramicar home">
          <img src={logo} alt="Logo Tramicar" className="h-6 md:h-12" />
        </a>
      </div>
    </header>
  )
}

import headerBackground from "./header-background.gif"

const headerStyle = {
  backgroundImage: `url(${headerBackground.src})`,
  width: '100%',
  height: '100%'
}

export default function Header() {
  return (
    <header className="bg-white">
        <div className="h-screen">
            <div className="bg-cover bg-center bg-no-repeat" style={headerStyle}></div>
        </div>
    </header> 
  );
}
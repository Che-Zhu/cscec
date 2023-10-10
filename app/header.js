import headerBackground from "./header-background.gif"
import headerBackgroundImage from '/public/header_background.png'



const headerStyle = {
  backgroundImage: `url(${headerBackground.src})`,
  width: '100%',
  height: '100%'
}

const backgroundDivStyle = {
  backgroundImage: `url(${headerBackgroundImage.src})`,
  width: '100%',
  height: '100%',
}

export default function Header() {
  return (
    <header>
        <div className="h-3/4screen">
          <div className="bg-cover bg-center bg-no-repeat px-8 text-center" style={backgroundDivStyle}>
            <h1 className="pt-36">Building Dreams, <br/> One Project at a time.</h1>
            <p className="descriptive-text">With our expertise and commitment to quality, 
              we deliver exceptional construction projects that exceed expecations.</p>
          </div>

        </div>
    </header> 
  );
}
import headerBackgroundImage from '/public/header_background.png'


const backgroundDivStyle = {
  backgroundImage: `url(${headerBackgroundImage.src})`,
  width: '100%',
  height: '100%',
}

export default function Header() {
  return (
    <header>
        <div className="h-3/4screen relative md:static md:flex md:justify-evenly ">
          <div className='absolute md:static top-0 left-0 mx-12 md:basis-1/3 md:mx-12'>
              <h1 className="pt-36">Building Dreams, <br/> One Project at a time.</h1>
              <p className="descriptive-text">With our expertise and commitment to quality, 
                we deliver exceptional construction projects that exceed expecations.</p>
          </div>

          <div className="bg-cover bg-bottom md:bg-left-bottom bg-no-repeat px-8 text-center md:basis-2/3 md:rounded" style={backgroundDivStyle}>
          </div>

        </div>
    </header> 
  );
}
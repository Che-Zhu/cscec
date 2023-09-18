import headerBackground from "./header-background.gif"

const headerStyle = {
  backgroundImage: `url(${headerBackground.src})`,
  width: '100%',
  height: '100%'
}

export default function Header() {
  return (
    <header className="bg-white">
        <div className="h-3/4screen relative">
            <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
            <div className="z-10 absolute top-1/2 md:top-1/3 left-1/4 md:left-16 transform -translate-x-1/4 md:-translate-x-0 -translate-y-1/2 md:-translate-y-0 text-white">
              <h1 className="text-3xl font-bold mb-5">Building Dreams, One Project at a Time</h1>
              <p className="text-sm font-light mb-8">With our expertise and commitment to quality, we deliver exceptional construction projects that exceed expectations.</p>
              <div className="flex-row">
                <a className="border px-4 py-3 text-sm font-light border-black bg-black mr-5">Learn More</a>
                <a className="border px-4 py-3 text-sm font-light border-white">Contact Us</a>
              </div>
            </div>
            <div className="bg-cover bg-center bg-no-repeat" style={headerStyle}></div>
        </div>
    </header> 
  );
}
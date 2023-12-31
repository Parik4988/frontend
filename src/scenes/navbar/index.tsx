import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false); 
  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* Left Side */}
                <div className="flex items-center w-full">
                    <img className="h-12" src={Logo} alt="logo" />
                    <p className="text-xl">Connect Teams</p>
                </div>
                


                {/* Right Side */}
               {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-xl`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Startup tools" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Features" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Live support" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our Plans" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <ActionButton setSelectedPage={setSelectedPage}>Login</ActionButton>
                    </div>
                </div>):(
                    <div>
                        <button className="rounded-full bg-secondary-500 p-2"
                        onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>

                        </button>
                    </div>
                )
           }

            </div>

        </div>

    </div>

    {/* MObile Menu Modal */}
    
    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-500 drop-shadow-xl">
            {/* Close Icon*/}
            <div className="flex justify-end p-12">
                <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400"/>
                </button>
            </div>

            {/* Menu Items*/}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Startup tools" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Features" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Live support" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our Plans" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
        </div>
    )}

  </nav>;
}

export default Navbar
import Home_img from "@/assets/homeimg.jpeg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import Box from "@/shared/box";
import Box1 from "@/assets/box1.jpeg";
import Box2 from "@/assets/box2.jpeg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return <section id="home"
  className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">

    {/* Image and Main Header */}

    <div className="md:flex mx-auto w-5/6 items-center justify-center mt-10 md:h=5/6">
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* Headings */}
            <div className="flex-col space-y-4 md:-mt-20">
                <div className="w-[714px]">
                    <h2 className="text-6xl font-black font-montserrat">
                        Collaborate across the world
                    </h2>
                </div>
                <div>
                    <p className="text-2xl">A selective platform to connect great tallents around the globe, build yours now</p>
                </div>
                <div className="flex space-x-7">
                   <ActionButton setSelectedPage={setSelectedPage}>
                    Get Started Today
                   </ActionButton>
                   <ActionButton setSelectedPage={setSelectedPage}>
                    Our Plans
                   </ActionButton>
                </div>
            </div>

        </div>

        {/* Image */}
        <div>
            <img src={Home_img} alt="homeimage"  className="w-[700px]"/>
        </div>

    </div>

        {/* Box */}
        <div className="md:flex mx-auto w-5/6 items-center justify-between md:h=5/6">
        <Box boxImage = {Box1} boxColor="bg-gray-900" boxHeader="Community Insights" boxParg="All communications done through our platform is highly encrypted and fully secure, we care about privacy!" boxLink="Check the community" />
        <Box boxImage = {Box2} boxColor="bg-gray-800" boxHeader="Community Insights" boxParg="All communications done through our platform is highly encrypted and fully secure, we care about privacy!" boxLink="Check the community" />

        </div>






  </section>
}

export default Home;
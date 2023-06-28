import Instagram from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import Twitter from "@/assets/twitter.png";
import Github from "@/assets/github.png";
import Link from "../navbar/Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <footer>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween}  gap-3`}>
          <img src={Instagram} alt="instagram logo" className="h-7" />
          <img src={Facebook} alt="facebook logo" className="h-7"/>
          <img src={Twitter} alt="twitter logo" className="h-7"/>
          <img src={Github} alt="github logo" className="h-7 mr-4" />
          <Link
            page="Privacy"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Terms"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Other Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Help Center"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div>
             GetIllustrations.com-All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

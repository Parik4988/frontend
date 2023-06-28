type Props = {
  boxImage: string;
  boxColor: string;
  boxHeader: string;
  boxParg: string;
  boxLink: string;
};

const box = ({ boxImage, boxColor, boxHeader, boxParg, boxLink }: Props) => {
  return (
    <div className={`${boxColor} flex items-center justify-center space-x-6 p-8 w-[750px] mb-10 rounded-md border-2 border-black shadow-lg shadow-black`}>
      {/*Image part */}

      <div>
        <img src={boxImage} alt="box1 image"/>
      </div>

      {/* Text part */}

      <div>
        <h3 className="text-2xl">{boxHeader}</h3>
        <p className="text-lg">{boxParg}</p>
        <a href="#" className="text-base">{boxLink}</a>
      </div>
    </div>
  );
};

export default box;

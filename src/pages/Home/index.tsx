import { useState } from "react";
import { OrigamiBoat } from "../../components";
import { getTime } from "../../utils";

const frontImageSrc =
    "https://images.pexels.com/photos/13339565/pexels-photo-13339565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const backImageSrc =
    "https://images.pexels.com/photos/12233047/pexels-photo-12233047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Home = () => {
    const [time, setTime] = useState<string | null>(null);
    getTime("Europe", "Brussels")
        .then((response: any) => {
            const dateObj = JSON.parse(response);
            const dateTime = dateObj.datetime;
            setTime(dateTime.match(/(?<=T)(.*):(.*):/)[1]);
        })
        .catch((err) => {
            console.log(err);
        });
    return (
        <div id="home" className="border-b border-slate-400">
            <div className="flex flex-auto mt-20 flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 h-full flex flex-col min-h-[660px]">
                    <h3 className="text-lg font-light">§ Home</h3>
                    <h1 className="text-7xl font-semibold mt-10">Hey there!</h1>
                    <h2 className="text-2xl font-normal mt-5">
                        My name is hector
                    </h2>
                    <div className="text-xl font-light mt-30">
                        I am a developer passionate about typescript and the
                        web. I was born in Athens, Greece and based in Brussels,
                        Belgium
                        {time === null ? "." : `, the local time is ${time}.`}
                    </div>
                    <div className="mt-auto text-7xl">
                        <OrigamiBoat />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex relative min-h-[400px] md:min-h-[660px] mt-10 md:mt-0">
                    <img
                        src={backImageSrc}
                        alt="town lights"
                        className="origin-center -rotate-12 absolute insets-0 md:bottom-1/4 md:left-1/4 md:top-10 drop-shadow-xl w-[200px] md:w-[400px] translate-x-1/3 md:translate-x-0"
                    />
                    <img
                        src={frontImageSrc}
                        alt="nature"
                        className="origin-center rotate-6 absolute insets-0 md:left-1/4 drop-shadow-xl w-[200px] md:w-[400px] translate-x-1/3 md:translate-x-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
import { useState, useEffect } from "react";
import { OrigamiBoat } from "../../components";
import { getTime } from "../../utils";

const frontImageSrc = "/assets/lake.png";
const backImageSrc = "/assets/city.png";

const Home = () => {
	const [time, setTime] = useState<string | null>(null);
	useEffect(() => {
		getTime("Europe", "Athens")
			.then((response: any) => {
				const dateObj = JSON.parse(response);
				const dateTime = dateObj.datetime;
				setTime(dateTime.match(/(?<=T)(.*):(.*):/)[1]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div id="home" className="border-b border-slate-400">
			<div className="mt-20 flex flex-auto flex-col sm:flex-row">
				<div className="flex h-full min-h-[660px] w-full flex-col sm:w-1/2">
					<h3 className="text-lg font-light">§ Home</h3>
					<h1 className="mt-10 text-7xl font-semibold">Hey there!</h1>
					<h2 className="mt-5 text-2xl font-normal">
						My name is hector
					</h2>
					<div className="mt-30 text-xl font-light">
						I am a developer passionate about typescript and the
						web. I am based in Athens, Greece
						{time === null ? "." : `, the local time is ${time}.`}
					</div>
					<div className="mt-auto text-7xl">
						<OrigamiBoat />
					</div>
				</div>
				<div className="relative mt-10 flex min-h-[400px] w-full transition delay-75 ease-in-out hover:rotate-1 sm:w-1/2 md:mt-0 md:min-h-[660px]">
					<img
						src={backImageSrc}
						alt="city"
						className="insets-0 absolute w-[205px] origin-center translate-x-1/3 -rotate-12 drop-shadow-xl md:bottom-1/4 md:left-1/4 md:top-10 md:translate-x-0 lg:w-[307px] xl:w-[410px]"
					/>
					<img
						src={frontImageSrc}
						alt="nature"
						className="insets-0 absolute w-[200px] origin-center translate-x-1/3 rotate-6 drop-shadow-xl md:left-1/4 lg:w-[300px] lg:translate-x-0 xl:w-[400px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;

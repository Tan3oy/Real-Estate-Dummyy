import { FaAffiliatetheme } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <section className="mx-28">
        <div className="w-5/6 m-auto text-center py-10">
          <h4 className="text-4xl font-bold">Service You Need</h4>
          <h1 className=" text-xl text-gray-400 mt-[25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took.
          </h1>
        </div>
        <div className="card-containers  gap-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around cursor-pointer">
          <div className=" card-container-1  rounded-lg shadow-3xl  h-[338px] lg:h-full w-[330px] lg:w-full bg-green-500  hover:bg-gray-800 group transition duration-300 ease-in-out ">
            <div className=" cut-border flex flex-col items-center text-center justify-center pt-[25px] pr-[25px] pl-[25px] h-full">
              <div className=" flex justify-center items-center border border-green-500 rounded-full h-[70px] w-[70px]  group-hover:bg-gray-800">
                <FaAffiliatetheme className="text-green-500 group-hover:text-white text-3xl" />
              </div>
              <div className="pt-8">
                <h5 className="text-2xl font-bold">Perfect Tools</h5>
               </div>
               <div className="pt-6 text-wrap text-md text-gray-500">
               <p className="">
                  Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo
                  ei erant essent scaevola
                </p>
               </div>
            </div>
          </div>
          <div className=" card-container-2  rounded-lg shadow-3xl  h-[338px] lg:h-full w-[330px] lg:w-full bg-green-500 hover:bg-gray-800 group transition duration-300 ease-in-out">
            <div className="cut-border flex flex-col items-center text-center justify-center pt-[25px] pr-[25px] pl-[25px] h-full">
              <div className=" flex justify-center items-center border border-green-500 rounded-full h-[70px] w-[70px] group-hover:bg-gray-800">
              <FaAlignCenter className="text-green-500 group-hover:text-white text-3xl" />
              </div>
              <div className="pt-8">
                <h5 className="text-2xl font-bold">Search in Click</h5>
               </div>
               <div className="pt-6 text-wrap text-md text-gray-500">
               <p className="">
                  Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo
                  ei erant essent scaevola
                </p>
               </div>
            </div>
          </div>
          <div className=" card-container-3  rounded-lg shadow-3xl  h-[338px] lg:h-full w-[330px] lg:w-full bg-green-500 hover:bg-gray-800 group transition duration-300 ease-in-out">
            <div className="cut-border flex flex-col items-center text-center justify-center pt-[25px] pr-[25px] pl-[25px] h-full">
              <div className=" flex justify-center items-center border border-green-500 rounded-full h-[70px] w-[70px] group-hover:bg-gray-800">
              <FaGithub className="text-green-500 group-hover:text-white text-3xl" />
              </div>
              <div className="pt-8">
                <h5 className="text-2xl font-bold">User Control
                </h5>
               </div>
               <div className="pt-6 text-wrap text-md text-gray-500">
               <p className="">
                  Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo
                  ei erant essent scaevola
                </p>
               </div>
            </div>
          </div>
          <div className=" card-container-4  rounded-lg shadow-3xl  h-[338px] lg:h-full w-[330px] lg:w-full bg-green-500 hover:bg-gray-800 group transition duration-300 ease-in-out">
            <div className="cut-border flex flex-col items-center text-center justify-center pt-[25px] pr-[25px] pl-[25px] h-full">
              <div className=" flex justify-center items-center border border-green-500 rounded-full h-[70px] w-[70px] group-hover:bg-gray-800">
              <FaAmericanSignLanguageInterpreting className="text-green-500 group-hover:text-white text-3xl" />
              </div>
              <div className="pt-8">
                <h5 className="text-2xl font-bold">5 Star Support</h5>
               </div>
               <div className="pt-6 text-wrap text-md text-gray-500">
               <p className="">
                  Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo
                  ei erant essent scaevola
                </p>
               </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Services;

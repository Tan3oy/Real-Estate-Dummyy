
import { FaBirthdayCake } from "react-icons/fa";
import { FaAsymmetrik } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
const Ourproperties = () => {
  return (
    <section className="">
      <div className="">
        <div className="w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10">
          <h4 className="text-4xl font-bold">En Our Features</h4>
          <h1 className=" text-2xl text-gray-400 p-5">
            Lorem Ipsum is simply dummy text
          </h1>
        </div>
        <div className=" m-auto flex px-4 flex-col lg:flex-row gap-6 sm:w-[540px] md:w-[696px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] ">
          <div className="image-container w-[100%] lg:w-[50%]  ">
            <img
              src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731506636/Image_2024-11-13_at_19.11.37_9c9ee27f_s3l5g3.jpg"
              className=" object-cover h-full  w-full rounded-md"
              alt="Properties"
            />
          </div>
          <div className="card-container pl-1 duration-300  gap-8 w-[100%] lg:w-[50%]  flex-col">
            <div className="card-1-container bg-green-500 hover:bg-white pl-1 rounded-md">
              <div className="card-wrapper flex justify-between bg-white shadow-2xl rounded-md px-4 py-6 items-center gap-x-3">
                <div className="icon-cont flex gap-6 divide-x divide-green-300">
                  <FaBirthdayCake className="float-left w-[20%]  text-[60px] box-border text-green-500" />
                  <span className="w-[75%] float-left pl-[25px] ">
                    <h1 className="text-2xl font-medium capitalize">
                      Choose a Category
                    </h1>
                    <p className="mt-[13px] mb-0 box-border  text-gray-500">
                      Lorem ipsum dolor sit amet, qui assum oblique praesent te.
                      Quo ei erant essent scaevola, est ut clita dolorem, ei est
                      mazim fuisset scribentur
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-2-container bg-green-500 hover:bg-white pl-1 rounded-md">
              <div className="card-wrapper flex justify-between bg-white shadow-2xl rounded-md px-4 py-6 items-center gap-x-3  mt-6">
                <div className="icon-cont flex gap-6 divide-x divide-green-300">
                  <FaAsymmetrik className="float-left w-[20%] text-[60px] box-border text-green-500" />
                  <span className="w-[75%] float-left pl-[25px]">
                    <h1 className="text-2xl font-medium capitalize">
                      Find Location
                    </h1>
                    <p className="mt-[13px] mb-0 box-border m-0 p-0 text-gray-500">
                      Lorem ipsum dolor sit amet, qui assum oblique praesent te.
                      Quo ei erant essent scaevola, est ut clita dolorem, ei est
                      mazim fuisset scribentur
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-3-container bg-green-500 hover:bg-white pl-1 rounded-md">
              <div className="card-wrapper flex justify-between bg-white shadow-2xl rounded-md px-4 py-6 items-center gap-x-3  mt-6">
                <div className="icon-cont flex gap-6 divide-x divide-green-300">
                  <FaChartBar className="float-left w-[20%] text-[60px] box-border text-green-500" />
                  <span className="w-[75%] float-left pl-[25px]">
                    <h1 className="text-2xl font-medium capitalize">
                      Contact a Few Owners
                    </h1>
                    <p className="mt-[13px] mb-0 box-border m-0 p-0 text-gray-500">
                      Lorem ipsum dolor sit amet, qui assum oblique praesent te.
                      Quo ei erant essent scaevola, est ut clita dolorem, ei est
                      mazim fuisset scribentur
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourproperties;

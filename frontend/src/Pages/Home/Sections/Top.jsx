import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { BsBoundingBoxCircles } from "react-icons/bs";
const Top = () => {
  return (
    <div>
      <section className="mx-28">
        <div className="w-5/6 m-auto text-center py-10">
          <h4 className="text-4xl font-bold">Top Properties</h4>
          <h1 className=" text-xl text-gray-400 mt-[25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took.
          </h1>
        </div>
        <div className="card-container  gap-20 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-auto lg:m-auto justify-center items-center cursor-pointer ">
          <a
            href="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731085087/banner-2021-10-07-08-14-29-5678_e58vxf.jpg"
            className="card-container-1  h-[400px]   relative rounded-xl  overflow-hidden group  "
          >
            <img
              src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731085087/banner-2021-10-07-08-14-29-5678_e58vxf.jpg"
              className="   h-[100%]  w-[100%]  object-cover  group-hover:scale-110 transition-transform duration-300 ease-in-out  "
              alt=""
            />
            <div className="card-overlay absolute top-0 left-0 bg-[#0b2c3d80] rounded-md w-[90%] h-[93%] m-[5%]  flex flex-col gap-5 px-5">
              <div className="flex justify-center p-2">
                <FaMapMarkerAlt className="font-bold text-6xl text-[#27ae60] mt-10 " />
              </div>
              <h4 className="text-[20px] text-[#ffffff] font-bold text-center  ">
                3015 Grand Avenue,Cocowalk
              </h4>
              <div className="box-details flex justify-between mt-5 text-center ">
                <div className="box-text px-5">
                  <i>
                    <FaBed className="text-[25px] font-thin text-[#ffffff]" />
                  </i>
                  <span className="float-left text-white text-sm mt-1">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box-text px-5 ">
                  <i>
                    <FaShower className="text-[25px] text-[#ffffff] " />
                  </i>
                  <span className="text-white text-sm text-center mt-1">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box-text px-5">
                  <i>
                    <BsBoundingBoxCircles className="text-[25px] text-[#ffffff]" />
                  </i>
                  <span className="text-white text-center text-sm mt-1">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731744422/property-thumb-2021-10-18-09-34-39-5668_bdq78z.jpg"
            className="card-container-2 h-[400px]   relative rounded-xl overflow-hidden group "
          >
            <img
              src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731744422/property-thumb-2021-10-18-09-34-39-5668_bdq78z.jpg"
              className="   h-[100%]  w-[100%]  object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out  "
              alt=""
            />
            <div className="card-overlay absolute top-0 left-0 bg-[#0b2c3d80] rounded-md w-[90%] h-[93%] m-[5%]  flex flex-col gap-5 px-5">
              <div className="flex justify-center p-2">
                <FaMapMarkerAlt className="font-bold text-6xl text-[#27ae60] mt-10 " />
              </div>
              <h4 className="text-[20px] text-[#ffffff] font-bold text-wrap text-center ">
                Gorgeous Villa Bay View
              </h4>
              <div className="box details flex justify-between mt-10 text-center px-5 ">
                <div className="box text">
                  <i>
                    <FaBed className="text-[25px] text-[#ffffff]" />
                  </i>
                  <span className="float-left text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box text ">
                  <i>
                    <FaShower className="text-[25px] text-[#ffffff] " />
                  </i>
                  <span className="text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box text">
                  <i>
                    <BsBoundingBoxCircles className="text-[25px] text-[#ffffff]" />
                  </i>
                  <span className="text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731507401/home-page-banner-2023-12-14-04-21-19-3202_yxknz3.jpg"
            className="card-container-3 h-[400px]   relative rounded-xl overflow-hidden group "
          >
            <img
              src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731507401/home-page-banner-2023-12-14-04-21-19-3202_yxknz3.jpg"
              className="   h-[100%]  w-[100%]  object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out  "
              alt=""
            />
            <div className="card-overlay absolute top-0 left-0 bg-[#0b2c3d80] rounded-md w-[90%] h-[93%] m-[5%]  flex flex-col gap-5 px-5">
              <div className="flex justify-center p-2">
                <FaMapMarkerAlt className="font-bold text-6xl text-[#27ae60] mt-10 " />
              </div>
              <h4 className="text-[20px] text-[#ffffff] font-bold text-wrap text-center ">
                1475 T Street Southeast
              </h4>
              <div className="box details flex justify-between mt-10 text-center px-5 ">
                <div className="box text">
                  <i>
                    <FaBed className="text-[25px] text-[#ffffff]" />
                  </i>
                  <span className="float-left text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box text px-4">
                  <i>
                    <FaShower className="text-[25px] text-[#ffffff] " />
                  </i>
                  <span className="text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box text">
                  <i>
                    <BsBoundingBoxCircles className="text-[25px] text-[#ffffff]" />
                  </i>
                  <span className="text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731507047/property-thumb-2021-10-12-09-42-04-5671_kuokvt.jpg"
            className="card-container-4 h-[400px]   relative rounded-xl overflow-hidden group "
          >
            <img
              src="https://res.cloudinary.com/dx42ztqx9/image/upload/v1731507047/property-thumb-2021-10-12-09-42-04-5671_kuokvt.jpg"
              className="   h-[100%]  w-[100%]  object-cover  group-hover:scale-110 transition-transform duration-300 ease-in-out "
              alt=""
            />
            <div className="card-overlay absolute top-0 left-0 bg-[#0b2c3d80] rounded-md w-[90%] h-[93%] m-[5%]  flex flex-col gap-5 px-5">
              <div className="flex justify-center p-2">
                <FaMapMarkerAlt className="font-bold text-6xl text-[#27ae60] mt-10 " />
              </div>
              <h4 className="text-[20px] text-[#ffffff] font-bold text-wrap text-center ">
                8502 Melbourne Avenue
              </h4>
              <div className="box details flex justify-between mt-10 text-center px-5 ">
                <div className="box text">
                  <i>
                    <FaBed className="text-[25px] text-[#ffffff]" />
                  </i>
                  <span className="float-left text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box text px-4">
                  <i>
                    <FaShower className="text-[25px] text-[#ffffff] " />
                  </i>
                  <span className="text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
                <div className="box text">
                  <i>
                    <BsBoundingBoxCircles className="text-[25px] text-[#ffffff]" />
                  </i>
                  <span className="text-white text-center text-sm">
                    "18"
                    <br></br>
                    "bed"
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Top;

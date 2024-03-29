import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import SideCart from "./SideCart";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../../assets/InstaPass.png";
import { MdOutlineSearch } from "react-icons/md";
import { ApiMediaURL } from "../../setting/GlobleVariable";
import "./styles/navebar.css";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";
import { LogoutUserFunc } from "../../redux/actions/User";
import Logo from "../Logo/Logo";

const Navebar = () => {
  const [showmenu, setshowmenu] = useState(false);
  const cartData = useSelector((state) => state.cart.cartData);
  const user = useSelector((state) => state.user.user);
  const UserAvatar = ApiMediaURL + user?.Avatar;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSidebar, setSidebar] = useState(false);

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`header shadow-sm bg-color1 shadow-redColor px-[100px] py-1 text-color2 body-font border-b-[1px] border-b-color4   z-30`}
    >
      <div className=" sub_header mx-auto  flex justify-between place-items-center gap-6 p-5  ">
        <div className="logo  gap-3 w-[300px] relative">
          <Logo />
          <VscMenu
            className="text-[25px] cursor-pointer  hidden  menu_burger"
            onClick={() => setshowmenu(true)}
          />
        </div>
        <div className="flex justify-center xl:pl-[40px] place-items-center w-full">
          <div className="min-w-[600px]  2xl:min-w-[800px] !max-w-[800px] serachbar border-[2px] pl-6 overflow-hidden border-redColor rounded-[27px] flex justify-center place-items-center">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={searchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`tickets/${search}`);
                  setSearch("");
                }
              }}
              name=""
              id=""
              className="w-full  text-color2 py-2 bg-transparent   px-2
            outline-none
            "
            />
            <p className="w-[50px] bg-redColor px-2 py-[7px] border-[3px] border-redColor">
              <MdOutlineSearch className="text-[23px] cursor-pointer" />
            </p>
          </div>
        </div>
        <div className=" right_header flex justify-end place-items-center gap-1 w-[350px] ">
          {Object.keys(user).length === 0 ? (
            <NavLink to="/login">
              <button className=" w-[150px] items-center border-[1px] hover:text-color1 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                SignIn / SignUp
              </button>
              <VscMenu className="text-[23px] cursor-pointer  hidden " />
            </NavLink>
          ) : (
            <>
              {user && user?.Avatar ? (
                <>
                  <p className="mx-2 username">{user && user?.firstName}</p>
                  <NavLink to="/" className="!w-[40px] !h-[40px]">
                    {user?.firstName && user?.Avatar && (
                      <img
                        src={UserAvatar}
                        className="!w-[40px] !h-[40px] rounded-full border-[1px] border-redColor object-contain"
                        alt=""
                      />
                    )}
                  </NavLink>
                </>
              ) : (
                <>
                  <p className="mx-2 username">{user && user?.firstName}</p>
                  <NavLink
                    to="/"
                    className="border-[1px] uppercase border-redColor rounded-full p-3 h-[40px] w-[40px] flex justify-center place-items-center bg-color1 text-[white] font-bold"
                  >
                    {user?.firstName.slice(0, 1)}
                  </NavLink>
                </>
              )}
            </>
          )}
          <div
            class="cursor-pointer mr-2 2 mt-[-5px]"
            onClick={() => setSidebar(true)}
          >
            <div class="relative ">
              <div class="top-[-7px] absolute left-3">
                <p class="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  {cartData ? cartData?.length : 0}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="file: mt-4 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* ============= mobile header  */}
      <div
        className={`${
          showmenu ? "mobileHeader header_menus" : "header_menus"
        }  bg-color1 text-color2 py-2 px-2`}
      >
        <RxCross1
          className="cross_burger absolute top-5 right-5 text-[23px] cursor-pointer  hidden"
          onClick={() => setshowmenu(false)}
        />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to={"/"}
            className={`mr-5 hover:text-redColor active:text-[red]`}
            onClick={() => setshowmenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/tickets"}
            className={`mr-5 hover:text-redColor`}
            onClick={() => setshowmenu(false)}
          >
            All Events
          </NavLink>
        </nav>
        {/* =====  */}
        <div className=" hidden my-5  justify-start place-items-center gap-1 w-[100%] login_mobile ">
          {Object.keys(user).length === 0 ? (
            <NavLink to="/login" onClick={() => setshowmenu(false)}>
              <button className=" w-[150px] items-center border-[1px] hover:text-color1 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                SignIn / SignUp
              </button>
              <VscMenu className="text-[23px] cursor-pointer  hidden " />
            </NavLink>
          ) : (
            <>
              {user && user?.Avatar ? (
                <>
                  <NavLink
                    to="/"
                    onClick={() => setshowmenu(false)}
                    className="flex justify-start place-items-center text-color2"
                  >
                    <div className="!w-[60px] !h-[60px]">
                      {user?.firstName && user?.Avatar && (
                        <img
                          src={UserAvatar}
                          className="!w-[40px] !h-[40px] rounded-full border-[1px] border-redColor"
                          alt=""
                        />
                      )}
                    </div>
                    <h2 className="mx-2 !text-[20px] !text-color2">
                      {user?.firstName}
                    </h2>
                  </NavLink>
                </>
              ) : (
                <NavLink
                  to="/"
                  className=" flex justify-start place-items-center text-color2"
                >
                  <p
                    onClick={() => setshowmenu(false)}
                    className="border-[1px] uppercase border-redColor rounded-full p-3 h-[40px] w-[40px] flex justify-center place-items-center bg-color1 text-[white] font-bold"
                  >
                    {user?.firstName?.slice(0, 1)}
                  </p>
                  <h2 className="mx-2 !text-[20px] !text-color2">
                    {user?.firstName}
                  </h2>
                </NavLink>
              )}
            </>
          )}
          {user && user?.firstName && (
            <button
              className="my-4 py-2 px-3 border-[1px] w-full rounded-md"
              onClick={() => dispatch(LogoutUserFunc(navigate))}
            >
              Logout
            </button>
          )}
        </div>
      </div>
      {/* ==== sidebar  */}
      {showSidebar && <SideCart setOpen={setSidebar} open={showSidebar} />}
    </div>
  );
};

export default Navebar;

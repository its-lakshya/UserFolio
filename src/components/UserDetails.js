import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {UserDetailsShimmer} from "./Shimmer";

const UserDetails = (user) => {

    const NoImageFound = "https://xsgames.co/randomusers/avatar.php?g=male"
    const onImageError = (e) => {
        e.target.src = NoImageFound
    }

    if(!user.data){
        <UserDetailsShimmer/>
    }
    if(user.data)
    return (
        <div className=" bg-[rgb(225,243,255)] w-[25rem] text-[#828a92] h-[42rem] flex flex-col justify-center items-center rounded-[2rem] shadow-[#696969] shadow-2xl 
        py-12 px-6 gap-y-5 max-xs:w-full max-xs:px-3">
            <div className='flex bg-white w-full h-64 rounded-xl p-4 gap-x-3 
                hover:transition-transform hover:scale-[105%] duration-300  group max-xs:flex-col-reverse max-xs:h-auto'>
                <div className='w-[12rem]   flex flex-col gap-y-1 overflow-hidden max-xs:w-full'>
                    <span className="text-4xl font-semibold max-xs:text-3xl">{user.data.profile.firstName}  {user.data.profile.lastName}</span>
                    <div className="flex flex-col max-xs:flex-row max-xs:justify-start max-xs:items-center max-xs:gap-x-4">
                        <span className='text-xs '>Username</span>
                        <span className='font-semibold text-sm'>{user.data.profile.username}</span>
                    </div>
                    <div className="flex flex-col max-xs:flex-row max-xs:justify-start max-xs:items-start max-xs:gap-x-4">
                        <span className='text-xs'>Position</span>
                        <span className='font-semibold text-sm h-10 overflow-hidden max-xs:h-auto'>{user.data.jobTitle}</span>
                    </div>
                    <div className="flex flex-col max-xs:flex-row max-xs:justify-start max-xs:items-center max-xs:gap-x-4">
                        <span className='text-xs'>Experience</span>
                        <span className='font-semibold text-sm'>{user.data.id%10} Years</span>
                    </div>
                </div>
                <img src={user.data.avatar ? user.data.avatar : NoImageFound} alt="user img" onError={onImageError} 
                className='w-40 h-56 rounded-xl group-hover:shadow-lg group-hover:shadow-gray-700 group-hover:transition-transform 
                group-hover:-translate-y-12 group-hover:duration-300 duration-300 after:hover:-translate-y-12
                max-xs:w-28 max-xs:h-28 max-xs:rounded-full bg-gray-200'
                />
            </div>
            <div className="w-full h-24 bg-white rounded-xl p-4 flex flex-col item-center justify-start text-xs overflow-hidden
                            hover:transition-transform hover:scale-[105%] duration-300">
                <span className='font-semibold text-sm'>Bio</span>
                <span className='max-xs:h-12 overflow-hidden'>{user.data.Bio}{user.data.Bio}</span>
            </div>
            <div className="w-full h-24 bg-white rounded-xl p-4 flex flex-col item-center justify-center text-xs overflow-hidden 
                            hover:transition-transform hover:scale-[105%] duration-300 gap-y-2">
                <span className='font-semibold text-sm'>On the web</span>
                <div className='flex [&>*]:text-xl gap-x-2'>
                    <a href="https://www.linkedin.com/"  target="_blank" rel="noreferrer"><FaLinkedin/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare/></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitterSquare/></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
                </div>
            </div>
            <div className="w-full h-24 bg-white rounded-xl p-4 flex flex-col item-center justify-center text-xs overflow-hidden
                            hover:transition-transform hover:scale-[105%] duration-300 ">
                <div className='w-full flex justify-between items-center'>
                    <span className='font-semibold text-sm'>Email</span>
                    {user.data.profile.email}
                </div>
                <div className='w-full flex justify-between items-center'>
                    <span className='font-semibold text-sm'>Website</span>
                    {user.data.profile.email.slice(0,8)}.{user.data.profile.firstName}.com
                </div>
            </div>
        </div>
    )
}

export default UserDetails;
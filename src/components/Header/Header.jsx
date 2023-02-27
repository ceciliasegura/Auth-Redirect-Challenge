import bosque from '../../assets/banner.png'
export default function Header(){
    return(
        <>
        <img src={bosque} className="w-full h-[192px]" alt="imagen banner" />
        <div className="flex items-center justify-center">
        <div className="  w-[132px] h-[132px] bg-white border-4 rounded-full border-green-color absolute"></div>
        </div>
        </>
    )
}
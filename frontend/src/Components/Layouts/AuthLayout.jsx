
import coins2 from '../../assets//images/coins2.png'
import { FcBullish } from "react-icons/fc";
function AuthLayout({ children }) {
    return (
        <>
            <div className="md:flex h-screen">
                <div className="w-full md:w-1/2">
                    {children}
                </div>
                <div className="hidden md:block w-1/2 overflow-hidden relative">
                    <div className="border-[30px] w-52 h-52 rounded-3xl border-slate-300 absolute top-52 -right-16 -z-10"></div>

                    <div className="w-52 h-52 rounded-3xl bg-slate-200 absolute -top-16 right-96 -z-10"></div>

                    <div className="">
                        <StatsInfoCard
                            icons={<FcBullish size={30}/>}
                            value={458752}
                            color={"bg-indigo-200"}
                            label={"Track Your Expenses"}
                        />
                        <img src={coins2} className='z-10 h-[600px] w-[850px] border-[50px] rounded-3xl border-indigo-200 ' alt="" />
                    </div>
                    <div className="border-[30px] w-80 h-80 rounded-3xl border-indigo-300 absolute top-[500px] right-80 -z-10"></div>
                </div>

            </div>
        </>
    )
}
export default AuthLayout

 

const StatsInfoCard = ({ icons, label, value, color }) => {
    return (
        <div className={`rounded-lg absolute p-2 m-5 top-20 ${color} shadow-xl flex`}>
            <div className="p-2">
                <div className="bg-violet-200 rounded-full p-3 ">{icons}</div>
            </div>
            <div className="mt-2">
                <span className="text-slate-600 text-xl">{label}</span>
                <div className="text-slate-600 text-xl">
                    <span className='me-2'>$</span>
                    <span>{value}</span>
                </div>
            </div>
        </div>
    )

}


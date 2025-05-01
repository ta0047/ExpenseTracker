import chart from '../../assets/images/chart.jpg'
import coins from '../../assets/images/coins.jpg'
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

                    <div className="border-[30px] w-52 h-52 rounded-3xl border-teal-300 absolute -top-16 right-96 -z-10"></div>

                    <div className="">
                        <img src={coins2} className='z-10 h-[600px] w-[850px] ' alt="" />
                    </div>

                    <div className="border-[30px] w-80 h-80 rounded-3xl border-indigo-300 absolute top-[500px] right-80 -z-10"></div>
                </div>

            </div>
        </>
    )
}
export default AuthLayout

{/* <StatsInfoCard
                        icons={<FcBullish size={30} />}
                        label="Track you income and expenses"
                        value="2345578"
                        color="bg-white"
                    /> */}

const StatsInfoCard = ({ icons, label, value, color }) => {
    return (
        <div className={`rounded-lg absolute p-2 m-5 top-10 ${color} shadow-xl flex`}>
            <div className="p-2">
                <div className="bg-violet-200 rounded-full p-3 ">{icons}</div>
            </div>
            <div className="">
                <span className="text-slate-800 text-xl">{label}</span>
                <div className="text-slate-800 text-xl">
                    <span className='me-2'>$</span>
                    <span>{value}</span>
                </div>
            </div>
        </div>
    )

}


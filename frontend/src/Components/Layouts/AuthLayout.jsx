import chart from '../../assets/images/chart.jpg'
import coins from '../../assets/images/coins.jpg'
import coins2 from '../../assets/images/coins2.jpg'
import { FcBullish } from "react-icons/fc";
function AuthLayout({ children }) {
    return (
        <>
            <div className="sm:flex">
                <div className="w-1/2">
                    {children}
                </div>
                <div className="w-1/2">
                    <div className="border-[30px] w-52 h-52 rounded-3xl"></div>
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


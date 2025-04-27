import chart from '../../assets/images/chart.jpg'
import coins from '../../assets/images/coins.jpg'
import coins2 from '../../assets/images/coins2.jpg'
import { FcBullish } from "react-icons/fc";
function AuthLayout({ children }) {
    return (
        <>
            <div className="flex">
                <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 '>
                    <h2 className='text-xl  text-slate-800'>Expense Trackder</h2>
                    {children}
                </div>
                <div className="w-[40vw]  overflow-hidden">
                    <div className="w-48 h-48 rounded-br-3xl bg-violet-600 absolute"></div>

                    <div className="w-48 h-48 rounded-2xl border-8 border-violet-500 absolute top-[250px] left-[1320px]"></div>

                    <div className="w-48 h-48 rounded-tl-3xl rounded-br-3xl  bg-violet-400 absolute top-[510px] "></div>

                    <img src={coins2} alt="" 
                    className='rounded-xl z-[10] absolute top-72 w-[500px] h-80 left-[950px]' />

                    <StatsInfoCard
                        icons={<FcBullish size={30} />}
                        label="Track you income and expenses"
                        value="2345578"
                        color="bg-white"
                    />
                </div>
            </div>
        </>
    )
}
export default AuthLayout

const StatsInfoCard = ({ icons, label, value, color }) => {
    return (

        <div className={`rounded-lg w-96 absolute p-2 m-5 top-10 ${color} shadow-xl flex`}>
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


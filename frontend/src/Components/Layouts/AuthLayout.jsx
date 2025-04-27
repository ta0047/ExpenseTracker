import chart from '../../assets/images/chart.jpg'
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

                    <img src={chart} alt="" className='rounded-xl z-[10] absolute top-80 w-[500px] h-72 left-[950px]' />

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

        <div className={`rounded-lg w-96 absolute p-2 m-2 top-10 ${color} shadow-xl flex`}>
            <div className="">
                <div className="">{icons}</div>
            </div>
            <div className="">
                <div className="">{label}</div>
                <div className="">${value}</div>

            </div>
        </div>
    )

}


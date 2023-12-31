import Carousel from "@/app/components/Carousel";
import InOut from "@/app/components/InOut";
//import Carousel from "@/app/components/Carousel";
export default function Home() {
    return (
        <>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">
                <div className="snap-start w-screen h-screen flex items-center justify-center text-5xl">
                    <Carousel />
                </div>
                <div className="snap-start w-screen h-screen bg-[url('/parkingArea.png')] bg-contain backdrop-opacity-90">
                    <div className="flex flex-wrap h-screen justify-start items-center backdrop-brightness-50 backdrop-blur-[2px]">
                        <div className="ml-48 text-white">
                            <h1 className="text-5xl font-semibold">국내 최대 규모의 스마트 주차장</h1>
                            <h1 className="text-8xl font-semibold">Turu Parking</h1>
                            <h1 className="mt-4 text-5xl font-semibold">561개의 주차장 상세정보 보기</h1>
                            <a href="/near_parking">
                                <div className="bg-orange-500 text-3xl font-semibold p-5 mt-10 rounded-full w-1/2 text-center">주차장 검색</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="snap-start w-screen h-screen bg-slate-50 bg-contain backdrop-opacity-90">
                    <div className="flex flex-wrap h-screen justify-end items-center">
                        <div className="mr-48 text-slate-700">
                            <h1 className="text-5xl font-semibold">국내 최대 규모의 스마트 주차장</h1>
                            <h1 className="text-8xl font-semibold">Turu Parking</h1>
                            <h1 className="mt-4 text-5xl font-semibold">561개의 주차장 상세정보 보기</h1>
                            <a className="" href="/search">
                                <div className="bg-yellow-500 text-3xl font-semibold p-5 mt-10 rounded-full w-1/2 text-center text-white">주차장 검색</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="snap-start bg-amber-500 w-screen h-screen flex items-center justify-center text-5xl">
                    <InOut/>
                </div>
            </div>
        </>
    )
}

import Header from "@/components/Header";
import HomePage from "./Home/index";

export default function Home() {
    return (
        <div className="w-full">
            <Header />
            <div className=" flex items-center justify-center">
                <HomePage />
            </div>
        </div>
    );
}

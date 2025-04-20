import Sidebar from "@/components/Sidebar";

function Home() {
    return (
        <div className="w-full ">    
            <div className="grid grid-cols-4 gap-4 h-screen">
                <div className="col-span-1 bg-gray-200 p-4">
                    <Sidebar />
                </div>
                <div className="col-span-3 bg-white p-4">Content</div>
            </div>
        </div>
    );
}

export default Home;

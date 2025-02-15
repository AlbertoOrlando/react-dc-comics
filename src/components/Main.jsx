import Banner from "./Banner/Banner"
import PackageCard from "./Banner/Cards/PackageCard"

export default function Main() {

    return (
        <main>
            <div className="container_Top">
                <PackageCard />
            </div>
            <Banner />
        </main>
    )
}
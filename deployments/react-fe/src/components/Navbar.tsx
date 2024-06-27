import { Button } from "./Button"

export const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex  justify-between max-w-screen-xl mx-auto">
                <div className="text-2xl font-bold flex flex-col justify-center">
                    100xDevs
                </div>
                <div>
                    <Button onClick={() => {
                        window.location.href = "https://github.com/code100x"
                    }}>Open source</Button>
                    <Button onClick={() => {
                        window.location.href = "https://youtube.com/@harkirat1"
                    }}>Youtube</Button>
                </div>
            </div>
        </div>
    )
}
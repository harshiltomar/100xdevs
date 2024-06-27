export function Modal({onClose}: {onClose: () => void}) {
    return <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-400 bg-opacity-80 flex justify-center" onClick={() => {
        onClose();
    }}>
    <div className="relative p-4 w-full max-w-2xl max-h-full" onClick={(e) => {
        e.stopPropagation();
    }}>
        <div className="relative bg-white rounded-lg shadow">

            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                    Pre register
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal" onClick={onClose}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-4 space-y-4">
                <div className="text-md font-semibold">
                    Email
                </div>
                <input className={"w-full border p-2 rounded"} type={"text"} placeholder={"Email"} />
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button onClick={() => {
                    // send a request to the backend
                }} data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
            </div>
        </div>
    </div>
</div>
}
import { Link } from '@remix-run/react'

function Footer() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <div className="text-white text-3xl font-semibold mb-4">
                            <img src={'/Frame (1).png'} width={67} height={24} alt='logo' />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Website design & development that interacts & connects with your prospects and customers just like you would do if in your office & store.
                            Design & development that interacts & connects with your prospects and customers just like you would do if in your office & store.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h2 className="mb-6 text-lg font-semibold text-white">Important Links</h2>
                        <ul className="text-gray-400 space-y-4">
                            <li><Link to="/">Services</Link></li>
                            <li><Link to="/">Work</Link></li>
                            <li><Link to="/">Insights</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Get In Touch</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="mb-6 text-lg font-semibold text-white">Contact Us</h2>
                        <p className="text-gray-400">
                            Cxful, Subsidiary of<br />
                            Openthrive Service Pvt. Ltd.<br />
                            Sahakar Nagar, Bangalore<br />
                            India, 560092
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h2 className="mb-6 text-lg font-semibold text-white">Openthrive</h2>
                        <ul className="text-gray-400 space-y-4">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Insider</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center   pt-6">
                    <p className="text-gray-400 text-sm">
                        Copy Right 2023. Cxful & Openthrive
                    </p>
                    <div className="flex space-x-6">
                        <Link to="/" className="text-gray-400">Privacy Policy</Link>
                        <Link to="/" className="text-gray-400 ">Terms Of Services</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
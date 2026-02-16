import FrontendLayout from "@/layouts/frontend-layout";
import { Link, usePage, useForm } from "@inertiajs/react";
import { SharedData } from "@/types";

export default function Home() {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        email: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/subscribe');
    };
    return (
        <FrontendLayout>
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

                    .main_wrap {
                        font-family: 'Inter', sans-serif;
                        /* Added a subtle topographical pattern to the background */
                        background-color: #ffffff;
                        background-image: url("assets/images/Comingsoon2.svg");
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                    }

                    /* New Hero Background Image */
                    .hero-bg-overlay {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                        height: 100%;
                        /* background-image: url("Comingsoon2.svg"); */
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        z-index: -1;
                        filter: blur(80px);
                        opacity: 0.15;
                        z-index: -2;
                        border-radius: 50%;
                    }

                    .geometric-shape {
                        position: absolute;
                        opacity: 0.8;
                    }

                    .triangle {
                        width: 0;
                        height: 0;
                        border-left: 25px solid transparent;
                        border-right: 25px solid transparent;
                        border-bottom: 43px solid #10b981;
                    }

                    .circle {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }

                    .hexagon {
                        width: 50px;
                        height: 43px;
                        background: #e0e7ff;
                        position: relative;
                        opacity: 0.5;
                    }

                    .hexagon:before,
                    .hexagon:after {
                        content: "";
                        position: absolute;
                        width: 0;
                        border-left: 25px solid transparent;
                        border-right: 25px solid transparent;
                    }

                    .hexagon:before {
                        bottom: 100%;
                        border-bottom: 14px solid #e0e7ff;
                    }

                    .hexagon:after {
                        top: 100%;
                        border-top: 14px solid #e0e7ff;
                    }

                    .squiggle {
                        width: 60px;
                        height: 40px;
                    }

                    .avatar-ring {
                        border: 2px solid white;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    }

                    .illustration-container {
                        max-width: 600px;
                        margin: 0 auto;
                        position: relative;
                    }

                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-10px) rotate(5deg); }
                    }

                    .float-animation {
                        animation: float 3s ease-in-out infinite;
                    }
                `}} />
            <div className="relative pt-16 main_wrap min-h-screen">
                <header className="relative z-10">
                    <div className="container mx-auto flex justify-center">
                        <div>
                            <img src="assets/images/clothes.png" alt="" />
                        </div>
                    </div>
                </header>
                <main className="relative z-10 container mx-auto px-4 pt-4 sm:pt-8 md:pt-10">
                    <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                        <div className="inline-flex items-center border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-2" />
                            <span className="text-xs sm:text-sm text-gray-200">
                                Launch Incoming
                            </span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-inter font-medium text-center mb-6 leading-tight px-6 md:px-20 lg:px-72">
                        Sign Up To Our Email List To Get Notified When We Launch
                    </h1>
                    <p className="text-center text-white text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
                        An exclusive collection crafted for the bold. Experience the fusion of
                        modern aesthetics and timeless elegance.
                    </p>
                    <div className="max-w-2xl mx-auto mb-6 px-4">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="flex-1 px-6 py-4 text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                            />
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 transition duration-300 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none"
                            >
                                Join
                            </button>
                        </form>
                        {recentlySuccessful && (
                            <p className="text-center text-green-600 text-sm mt-2">Successfully subscribed!</p>
                        )}
                        {errors.email && (
                            <p className="text-center text-red-600 text-sm mt-2">{errors.email}</p>
                        )}
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex -space-x-2 mb-1">
                            <div className="w-10 h-10 rounded-full   overflow-hidden">
                                <img src="assets/images/Face 1.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-10 h-10 rounded-full   overflow-hidden">
                                <img src="assets/images/Face 2.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-10 h-10 rounded-full   overflow-hidden">
                                <img src="assets/images/Face 3.png" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-200">Join 39k other creatives</p>
                    </div>
                </main>
            </div>

        </FrontendLayout>
    );
}

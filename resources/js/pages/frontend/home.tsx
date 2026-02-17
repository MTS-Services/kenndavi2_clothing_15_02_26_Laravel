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
            <div className="min-h-screen bg-blush relative overflow-x-hidden before:fixed before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E')] before:pointer-events-none before:z-100 before:opacity-[0.35]">
                <main
                    className="relative min-h-screen flex flex-col items-center pt-10 pb-0 overflow-hidden"
                    style={{
                        backgroundImage: 'url("assets/images/background2.png")',
                        paddingTop: 50,
                        paddingBottom: 50,
                        backgroundPosition: "center bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundAttachment: "fixed"
                    }}
                >
                    {/* Logo */}
                    <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0s" }}>
                        <img src="assets/images/logonew.png" alt="Logo" className="w-full h-14" />
                    </div>
                    {/* Badge */}
                    <div className="animate-fade-in mt-8 relative z-10">
                        <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-ink/10 rounded-full px-4 py-1.5 text-sm font-body text-ink/80 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-accent-custom animate-pulse-dot" />
                            Launch Incoming
                        </span>
                    </div>
                    {/* Headline */}
                    <h1
                        className="animate-fade-up relative z-10 mt-7 text-center font-display font-medium leading-[1.05] text-ink px-6"
                        style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)", maxWidth: 880 }}
                    >
                        Sign Up To Our Email List To Get Notified When We Launch
                    </h1>
                    {/* Subheadline */}
                    <p
                        className="animate-fade-in relative z-10 mt-5 text-center font-body text-muted-custom text-base leading-relaxed px-6"
                        style={{ maxWidth: 520 }}
                    >
                        An exclusive collection crafted for the bold. Experience the fusion of
                        modern aesthetics and timeless elegance.
                    </p>
                    {/* Email Form */}
                    <div className="animate-fade-up relative z-10 mt-8 w-full px-6 flex justify-center">


                        <form onSubmit={handleSubmit} className="flex items-center  shadow-card rounded-xl overflow-hidden">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="flex-1 bg-white px-6 py-4 text-base font-body text-ink placeholder-ink/30 border-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-custom/25 focus:shadow-input"
                                style={{ minWidth: 0 }}
                            />
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 transition duration-300 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                    {recentlySuccessful && (
                        <p className="text-center text-green-600 text-sm mt-2">Successfully subscribed!</p>
                    )}
                    {errors.email && (
                        <p className="text-center text-red-600 text-sm mt-2">{errors.email}</p>
                    )}
                    {/* Social Proof */}
                    <div className="flex flex-col items-center justify-center gap-2 animate-fade-in p-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2.5 border-white shadow-[0_2px_8px_rgba(26,20,18,0.15)] bg-gray-900 flex items-center justify-center text-lg overflow-hidden">
                                <img
                                    src="assets/images/Face 1.png"
                                    alt="Face 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2.5 border-white shadow-[0_2px_8px_rgba(26,20,18,0.15)] bg-gray-900 flex items-center justify-center text-lg overflow-hidden">
                                <img
                                    src="assets/images/Face 2.png"
                                    alt="Face 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2.5 border-white shadow-[0_2px_8px_rgba(26,20,18,0.15)] bg-gray-900 flex items-center justify-center text-lg overflow-hidden">
                                <img
                                    src="assets/images/Face 3.png"
                                    alt="Face 3"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm font-medium">
                            <span className="font-bold text-gray-900">Join 39k other creatives</span>
                        </p>
                    </div>
                </main>

            </div>

        </FrontendLayout>
    );
}

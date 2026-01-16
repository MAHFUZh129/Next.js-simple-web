'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function LoginPage() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({email,password})
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            router.push('/');
            toast.success("Login successful!!")
            router.refresh()
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 pt-22">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login to Your Account
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="admin@jobportal"
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="••••••"
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>


            </div>
        </div>


    );
}

"use client";

import React from "react";
import { IconUser, IconMail, IconMessageDots } from "@tabler/icons-react";
import { Kalam } from "next/font/google";

const font_2 = Kalam({
    weight: ['400', '700'],
    subsets: ['latin']
})

// Utility for merging class names
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Input Component
const Input = React.forwardRef(({ className, ...props }, ref) => (
    <input
        ref={ref}
        className={cn(
            "w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 transition focus:outline-none",
            className
        )}
        {...props}
    />
));
Input.displayName = "Input";

// Textarea Component
const Textarea = React.forwardRef(({ className, ...props }, ref) => (
    <textarea
        ref={ref}
        className={cn(
            "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 transition focus:outline-none resize-none",
            className
        )}
        {...props}
    />
));
Textarea.displayName = "Textarea";

// Button Component
const Button = React.forwardRef(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "px-6 py-2 font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:brightness-110 transition duration-300",
            className
        )}
        {...props}
    />
));
Button.displayName = "Button";

// Contact Section
export function Contact() {
    return (
        <section className="lg:py-4 py-0 px-4 md:px-8">
            <h2 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center lg:mb-8 mb-4 ${font_2.className}`}>
                    Let's Connect
                </h2>
            <div className="max-w-3xl mx-auto backdrop-blur-xl border border-white/10 bg-white/5 p-8 rounded-3xl shadow-2xl relative">
                <h2 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8 ${font_2.className}`}>
                    {/* Let's Connect — I'd Love to Hear From You!
                    Diga Olá — Say Hello 👋 */}
                </h2>

                <h2 className={`text-center text-4xl text-gray-200 ${font_2.className} mb-8`}>
                    नमस्ते! — Hello there! — Olá, tudo bem? — 你好！— 안녕하세요!
                    <br />
                    <span className="text-base text-white/70 block mt-2 leading-relaxed">
                        No matter where you're from or what language you speak,<br />
                        this space is open — drop me a message and let’s make something amazing together! ✨
                    </span>
                </h2>


                <form className={`space-y-6 ${font_2.className}`}>

                    {/* Name */}
                    <div className="relative">
                        <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="🙋‍♂️ नाम / Name / Nome / 名字 / 이름"
                            className="pl-10 focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                            type="email"
                            placeholder="📧 ईमेल / Email / Correio / 电子邮件 / 이메일"
                            className="pl-10 focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <IconMessageDots className="absolute left-3 top-4 text-gray-400" />
                        <Textarea
                            placeholder="💬 सन्देश लिखें / Write a message / Escreva uma mensagem / 留言 / 메시지를 작성하세요"
                            rows={5}
                            className="pl-10 pt-3 focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>


                {/* Decoration */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
            </div>
        </section>
    );
}

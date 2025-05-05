import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
});


export function CardSpotlightDemo() {
  return (
    <div className="space-y-4 px-2 md:px-0 selection:bg-pink-700">

      {/* for university-lib-management system */}
      <CardSpotlight className="max-w-5xl mx-auto w-full rounded-xl">
        <p className={`text-xl sm:text-3xl font-bold relative z-20 mt-2 text-white ${kalam.className}`}>
          University Library Management System
        </p>

        <div className="text-neutral-200 mt-4 relative z-20 text-base sm:text-lg">
          Packed with essential features to simplify student and admin experience:
          <ul className="mt-4 space-y-3">
            <Step title="🧑‍🎓 Create & manage student accounts" delay="100" />
            <Step title="🔐 Identity verification system" delay="200" />
            <Step title="📚 Borrow books with real-time updates" delay="300" />
            <Step title="📧 Email alerts for due dates & activity" delay="400" />
            <Step title="🛠️ Admin dashboard with full control" delay="500" />
          </ul>
        </div>
        <p className="text-neutral-400 mt-3 relative z-20 text-sm sm:text-base">
          Your data privacy and account security are always our top priorities.
        </p>
        <a
          href="https://university-library-tan.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 px-4 py-2 text-neutral-200 font-semibold rounded-lg shadow-md transition relative z-20 border-b-2"
        >
          🌐 Visit Website
        </a>
        <div className="relative mt-4">
          {/* MacBook image */}
          <img src="/macbook 8.png" alt="macbook" className="" />

          {/* Overlay: Creams website on MacBook screen */}
          <img
            src="/creams2.png"
            alt="creams"
            className="absolute top-[2.7%] left-[11%] w-[78%] h-[90.5%] object-cover rounded-xl"
          />
        </div>
      </CardSpotlight>

      {/* for chat-pdf  */}
      <CardSpotlight className="max-w-5xl mx-auto w-full rounded-xl">
        <p
          className={`text-xl sm:text-3xl font-bold relative z-20 mt-2 text-white ${kalam.className} selection:bg-gray-700`}
        >
          Chat with PDF — AI Document Assistant
        </p>

        <div className="text-neutral-200 mt-4 relative z-20 text-base sm:text-lg">
          Smart, fast, and secure way to understand your documents:
          <ul className="mt-4 space-y-3">
            <Step title="📄 Upload any PDF and extract content" delay="100" />
            <Step title="🤖 Ask natural language questions" delay="200" />
            <Step title="🔍 Get context-aware answers instantly" delay="300" />
            <Step title="🧠 Embedding-based semantic search" delay="400" />
            <Step title="🔒 Secure processing & user privacy" delay="500" />
          </ul>
        </div>

        <p className="text-neutral-400 mt-3 relative z-20 text-sm sm:text-base">
          Built with LangChain and AI to give you superpowers with documents.
        </p>

        <div className="relative mt-4">
          {/* MacBook image */}
          <img src="/macbook 8.png" alt="macbook" className="" />

          {/* Overlay: Chat PDF UI preview */}
          <img
            src="/creams2.png"
            alt="Chat PDF preview"
            className="absolute top-[2.7%] left-[11%] w-[78%] h-[90.5%] object-cover rounded-xl"
          />
        </div>
      </CardSpotlight>

      {/* for the-bazaar e-commerce */}
      <CardSpotlight className="max-w-5xl mx-auto w-full rounded-xl">
        <p
          className={`text-xl sm:text-3xl font-bold relative z-20 mt-2 text-white ${kalam.className} selection:bg-yellow-700`}
        >
          🛍️ The Bazaar — Modern E-Commerce Platform
        </p>

        <div className="text-neutral-200 mt-4 relative z-20 text-base sm:text-lg">
          Complete e-commerce experience with advanced features:
          <ul className="mt-4 space-y-3">
            <Step title="🛒 Add & manage products easily" delay="100" />
            <Step title="📊 Admin dashboard with analytics" delay="200" />
            <Step title="👤 User login & authentication" delay="300" />
            <Step title="💳 Stripe payment integration" delay="400" />
            <Step title="📦 Track orders and inventory" delay="500" />
          </ul>
        </div>

        <p className="text-neutral-400 mt-3 relative z-20 text-sm sm:text-base">
          Designed to give both customers and admins a seamless experience from browsing to checkout.
        </p>

        <a
          href="https://the-bazaar-mocha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 px-4 py-2 text-neutral-200 font-semibold rounded-lg shadow-md transition relative z-20 border-b-2"
        >
          🛍️ Visit Bazaar Website
        </a>

        <div className="relative mt-4">
          {/* MacBook image */}
          <img src="/macbook 8.png" alt="macbook" className="" />

          {/* Overlay: Bazaar site preview */}
          <img
            src="/creams2.png"
            alt="bazaar-preview"
            className="absolute top-[2.7%] left-[11%] w-[78%] h-[90.5%] object-cover rounded-xl"
          />
        </div>
      </CardSpotlight>

    </div>
  );
}

const Step = ({
  title
}) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0" />
    </svg>
  );
};

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer data-theme="light" className="bg-black text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Left column - Logo and newsletter */}
          <div className="space-y-8">
            <div className="flex justify-between w-full text-2xl italic font-medium">
              INFINITE®
            </div>
            <div className="space-y-4">
              <p className="text-base">
                Subscribe to our newsletter
                <br />
                and stay in touch with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="info@infinite.com"
                  className="bg-black/30 border-gray-700 text-white"
                />
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-gray-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:ml-30 flex flex-col justify-center items-start text-left">
            <h3 className="text-sm text-gray-400">Sitemap</h3>
              <button className="text-left hover:text-gray-300 transition-colors">HOME</button>
              <button className="text-left hover:text-gray-300 transition-colors">ABOUT</button>
              <button className="text-left hover:text-gray-300 transition-colors">PROJECTS</button>
              <button className="text-left hover:text-gray-300 transition-colors">NEWS</button>
              <button className="text-left hover:text-gray-300 transition-colors">CAREERS</button>
              <button className="text-left hover:text-gray-300 transition-colors">CONTACT</button>
          </div>

          <div className="space-y-4  flex flex-col items-start text-left">
            <h3 className="text-sm text-gray-400">Social</h3>
              <button className="text-left hover:text-gray-300 transition-colors">INSTAGRAM</button>
              <button className="text-left hover:text-gray-300 transition-colors">LINKEDIN</button>
              <button className="text-left hover:text-gray-300 transition-colors">THREADS</button>
              <button className="text-left hover:text-gray-300 transition-colors">X.COM</button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm">
          <div className="text-gray-500">© Infinite 2025</div>
          <div className="flex flex-row items-center gap-4">
            <button className="text-gray-500 hover:text-gray-300 transition-colors">
              Terms & Conditions
            </button>
            <button className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacy policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

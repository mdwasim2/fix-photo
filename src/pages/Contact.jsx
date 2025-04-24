import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="container  py-12 px-4 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="text-gray-700 space-y-4">
          <p>
            Thank you for visiting FixThePhoto. It’s our main purpose to provide you with the best possible photo retouching services at affordable cost. Get personalized help with your photos and leave us your valuable feedback regarding your experience. We will respond to your inquiries ASAP.
          </p>
          <p>
            For the quickest answers to your questions, please be sure to check out our <a href="#" className="text-blue-600 underline">FAQ page</a>.
          </p>
          <p>
            You can also reach us anytime via our <a href="#" className="text-blue-600 underline">Facebook page</a> or Live chat.
          </p>
          <p>
            Contact email: <a href="mailto:fixthephotocom@gmail.com" className="text-blue-600 underline">fixthephotocom@gmail.com</a>
          </p>
        </div>

        {/* Right Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">First and Last Name*</label>
            <Input id="name" placeholder="Your Name" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
            <Input id="email" placeholder="Your Email" type="email" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message*</label>
            <Textarea id="message" placeholder="Your message..." rows={4} />
          </div>

          <Button type="submit" className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
            Get in Touch
          </Button>
        </form>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        Photo Editing Services &gt; Contact Us
      </div>
    </section>
  );}
export default Contact;

import Hero from "../src/templates/landing_page-business-1/Hero/";
import Features from "../src/templates/landing_page-business-1/Features/";
import Testimonials from "../src/templates/landing_page-business-1/Testimonials/";
import Footer from "../src/flat/Footer/";

const data = {"uvp":"Create your own app in seconds using the power of AI!","copy":{"hero":{"header":"Create your app!","subheader":"Just type your app idea and we will do the rest. With the help of AI and our user-friendly platform, you can create an application in seconds."},"features":{"title":"Features","description":"Our features make it simple to create an app that suits your needs. By the time you type your last line of idea, your app will be ready to use.","feature_items":[{"title":"App Building","description":"Our easy-to-use interface lets you craft the perfect app with no technical experience required."},{"title":"Easy Deployment","description":"Once you have created your app, our feature deployment allows to you distribute it quickly and efficiently."},{"title":"Analytics","description":"Our powerful analytics tools help you measure and make decisions about your app by providing detailed insights."},{"title":"AI Support System","description":"We provide an AI-enabled customer service that is available 24/7 and ensures all your support needs are addresses efficiently."}]},"testimonials":{"title":"Happy Clients","description":"See what others have to say about our products.","testimonial_items":[{"text":"I was able to create my app in just a few minutes! Thanks to their AI backed support system and easy-to-use platform, I'm able to fully utilize their features.","person":{"name":"John Smith","role":"App Developer"}},{"text":"This platform has completely changed the way I create apps. Their powerful analytics tools have helped me improve the performance of my app in no time.","person":{"name":"Jane Doe","role":"Entrepreneur"}},{"text":"The customer service here is amazing! The AI-powered support system was able to answer all my questions and solve all my issues within minutes.","person":{"name":"David Brown","role":"CEO"}},{"text":"The platform is incredibly easy to use. As soon as I knew what I wanted to create, I was able to put together an app in no time and deploy it immediately.","person":{"name":"Kate Johnson","role":"App Maker"}}]}},"tone":"Modern, Futuristic, and Simplistic","images":{"hero_prompt":"","features_prompt":""},"color_scheme":{"primary":"#007AFF","tertiary":"#FB9500","secondary":"#2A4154","background":"#E9ECEF","quaternary":"#203357","light_background":"#F8FAFC"}};

function GeneratedWebsite() {
  return (
    <>
      <Hero data={data} />
      <Features data={data} />
      <Testimonials data={data} />
      <Footer data={data} />
    </>
  );
}

export default GeneratedWebsite;
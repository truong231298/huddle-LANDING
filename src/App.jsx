import iconCommunity from "/images/icon-communities.svg"
import iconemail from "/images/icon-email.svg"
import iconmessages from "/images/icon-messages.svg"
import iconphone from "/images/icon-phone.svg"
import image1 from "/images/illustration-flowing-conversation.svg"
import image2 from "/images/illustration-grow-together.svg"
import image3 from "/images/illustration-your-users.svg"
import image0 from "/images/screen-mockups.svg"
import logo from "/images/logo.svg"
import bgFooter from "/images/bg-footer-top-desktop.svg"


export default function App() {
  // json body
  const inforBody = [
    { image: image1, title: "Grow Together", content: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. " },
    { image: image2, title: "Flowing Conversations", content: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow." },
    { image: image3, title: "Your Users", content: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately." },
  ]

  return (
    <main className="min-h-screen">
      <section className="flex flex-col gap-4">
        {/* header */}
        <article className="heading flex flex-col gap-4 p-8">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="" />
            <button className="border-2 px-4 rounded-full text-Pink border-Pink">Try it free</button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col text-center gap-4">
              <h1 className="font-semibold text-4xl">Build The Community Your Fans Will Love</h1>
              <span className="flex justify-center items-center">
                <p className="max-w-xl">Huddle re-imagines the way we build communities. You have a voice, but so does
                  your audience. Create connections with your users as you engage in genuine discussion. </p>
              </span>
              <span className="flex justify-center items-center">
                <button className="w-48 border-2 rounded-full py-2 px-2 text-white bg-Pink hover:bg-LightPink">Get Started For Free</button>
              </span>

            </div>
            <div className="mt-10">
              <img src={image0} alt="" />
            </div>

          </div>

        </article>
        {/* body */}
        <article className="body flex flex-col gap-10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col sm:flex-row mt-10 gap-10 sm:gap-96">
              <div className="flex flex-col gap-4">
                <img src={iconCommunity} alt="" className="w-12" />
                <h1 className="text-4xl font-semibold">1.4k+</h1>
                <p className="text-gray-400">Communities Formed</p>
              </div>
              <div className="flex flex-col gap-4">
                <img src={iconmessages} alt="" className="w-12" />
                <h1 className="text-4xl font-semibold">2.7m+</h1>
                <p className="text-gray-400">Messages Sent</p>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-8">
            {inforBody.map((infor, index) => (
              <div>
                <img src="/images/bg-section-top-desktop-1.svg" alt="" className="w-full" />
                <div key={index} className={`flex flex-col-reverse ${index == 1 ? "sm:flex-row-reverse" : "sm:flex-row"}  sm:justify-between text-center sm:text-justify items-center bg-VeryPaleBlue`}>
                  <span className="sm:w-1/2 flex flex-col gap-4 p-8">
                    <h1 className="text-xl font-medium">{infor.title}</h1>
                    <p className="sm:pr-8">{infor.content}</p>
                  </span>
                  <span className="sm:w-1/2">
                    <img src={infor.image} alt="" className="" />
                  </span>
                  <img src="/images/bg-section-bottom-desktop-1.svg" alt="" className="w-full" />
                </div>
              </div>


            ))}

          </div>
          <div className="flex flex-col justify-center items-center mb-4">
            <h1 className="text-2xl font-semibold">Ready To Build Your Community?</h1>
            <span className="flex justify-center items-center my-4">
              <button className="w-48 border-2 rounded-full py-2 px-2 text-white bg-Pink hover:bg-LightPink">Get Started For Free</button>
            </span>
          </div>
        </article>
        {/* footer */}

        <article className="footer">

          <img src={bgFooter} alt="" className="w-full" />

          <div className="flex flex-col-reverse sm:flex-row justify-between text-white  bg-VeryDarkCyan">
            <div className="sm:w-96 sm:ml-40 flex flex-col gap-4">
              <img src={logo} alt="" className="w-32 text-white" />
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
                vestibulum a, ultrices quis sem.</h2>
              <span className="flex flex-row gap-2">
                <img src={iconphone} alt="" />
                <h2>Phone: +1-543-123-4567</h2>
              </span>
              <span className="flex flex-row gap-2">
                <img src={iconemail} alt="" />
                <h2>example@huddle.com</h2>
              </span>
              <span>
                <img src="" alt="" />
              </span>
            </div>
            <div className="sm:w-96 flex flex-col gap-2 sm:mr-40">
              <h1 className="text-white uppercase text-xl font-semibold">Newsletter</h1>
              <h2>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
                send you spam or pass on your email address</h2>
              <span>
                <input type="text" className="px-2 py-1 rounded-sm mr-4" />
                <button className="px-2 py-1 rounded-sm text-white bg-Pink hover:bg-LightPink">Subscribe</button>
              </span>
            </div>
          </div>
        </article>

      </section>
    </main>
  )
}
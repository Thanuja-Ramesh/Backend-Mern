import home from "../assets/banner/home.jpg"

const Home = () => {
  return (
   <>
   <div className="my-40  mx-60">
    <img src={home} alt="Home" />
    
   </div>
   <div>
    <h2 className="text-5xl text-center">FESTIVAL OF LIGHT</h2>

    <p className="text-center my-5">Diwali (also known as Deepavali) is the annual multi-day festival of lights celebrated by millions of Hindus, Jains, Sikhs, and some Buddhists around the world. The name comes from the Sanskrit word dipavali, which means a "row of lighted lamps" (deepa meaning lamp and avali meaning row)</p>
   </div>
   </>
  )
}

export default Home

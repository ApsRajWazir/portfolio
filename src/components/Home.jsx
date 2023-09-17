
const Home = () => {
  return (
    <main id="home">
      <section className="homeContentBoxes">
        <img id="homeImageBox" src="/img/img1.jpg" alt="" /> 
      </section>

      <section className="homeContentBoxes" id="homeTextBox">
        <span>Hi, I am APS Raj</span>
        <span>Web Developer</span>

        <div id="LinkContainer">

          <div>
            <a href="https://github.com/ApsRajWazir">
              <img src="/img/github.png" alt="Github Link" height={60} width={60} />
            </a>
          </div>

          <div id="rightLink">
            <a href="https://www.instagram.com/apsrajofficial/">
              <img src="/img/insta.png" alt="Insta Link" height={60} width={60} />
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Home

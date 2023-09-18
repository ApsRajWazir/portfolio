
const Skills = () => {
  return (
    <main id="skills">
      <div id='skillContentBox'>
        {/* Row 1 */}
        <img className="skillImages" src="/img/skills/html.png"  alt="skills" />
        <img className="skillImages" src="/img/skills/css.png" alt="skills" />
        <img className="skillImages" src="/img/skills/js.png" alt="skills" />

        {/* Row 2 */}
        <img className="skillImages" src="/img/skills/react.png"  alt="skills" />

        {/* Row 3 */}
        <img className="skillImages" src="/img/skills/next.png"  alt="skills" />
        <img className="skillImages" src="/img/skills/bootstrap.png"  alt="skills" />
        <img className="skillImages" src="/img/skills/twcss.png" height={100} alt="skills" />
      </div>
    </main>
  )
}

export default Skills

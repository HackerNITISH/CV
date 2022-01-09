import React from 'react'

const Skill = () => {
    return (
        <>
<section id="skills" className="skills section-bg">
  <div className="container">

    <div className="section-title">
      <h2>Skills</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div className="row skills-content">

      <div className="col-lg-6" data-aos="fade-up">

        <div className="progress">
          <span className="skill">HTML <i className="val">100%</i></span>
          <div class="progress">
  <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          {/* <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="100%" aria-valuemin="0" aria-valuemax="100"></div>
          </div> */}
        </div>

        <div className="progress">
          <span className="skill">CSS <i className="val">90%</i></span>
          <div className="progress-bar-wrap">
  <div class="progress-bar w-90" role="progressbar" aria-valuenow="90" aria-valuemin="0%" aria-valuemax="100%" style={{width:"480px"}}></div>
</div>
        </div>

        <div className="progress">
          <span className="skill">JavaScript <i className="val">75%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="90"></div>
          </div>
        </div>

      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

        <div className="progress">
          <span className="skill">React js <i className="val">80%</i></span>
          <div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"400px"}}></div>
</div>
        </div>

        <div className="progress">
          <span className="skill">WordPress/CMS <i className="val">90%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar "  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"480px"}}></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">Photoshop <i className="val">55%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
 
        </>
    )
}

export default Skill

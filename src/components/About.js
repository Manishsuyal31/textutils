import React from 'react'

export default function About(props) {
  return (
    <div className='container my-5' id='abouthere'>
      <label htmlFor="abouthere" className='my-4' style={{ color: props.mode === 'light' ? 'black' : '#fff' }}>ABOUT OUR FUNCTIONS </label>
      <div className="accordion my-2" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
              UPPERCASE FUNCTION
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et soluta suscipit, qui architecto illum ducimus. Reprehenderit aliquid consectetur rem vero consequatur. Doloremque adipisci est iusto nam eaque laudantium? Sunt neque, adipisci nihil quas veniam similique porro, alias saepe sit molestias a perferendis impedit in ducimus? Voluptate natus cupiditate veniam optio velit dignissimos quisquam laudantium magnam.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
              LOWERCASE FUNCTION
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow. Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatum vero culpa totam. Ratione officiis beatae eveniet soluta et adipisci qui quo aperiam dolore veritatis, animi modi sit? Totam dicta doloremque accusamus, tempore neque sapiente dolores, quo reprehenderit aperiam, cupiditate aspernatur ut alias? Magni, asperiores nam consequuntur beatae fugit placeat quod commodi tempore? Saepe, porro!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
              OTHER FUNCTIONS
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magnam alias! Beatae earum possimus consequatur aliquam officiis facere aut excepturi nihil, est odit nisi quam laudantium doloribus reiciendis, ut enim eveniet! Architecto laboriosam ad molestiae eum assumenda iusto quos reprehenderit minima obcaecati porro? Consequuntur laborum rerum consequatur delectus quae eos fugit perspiciatis. Vitae, exercitationem obcaecati.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

function Card(props) {
    let data = props.data;
  return (
    <div className=" d-flex flex-column bd-highlight col-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{data.name}</h5>
                  <p class="card-text">
                    {data.description}
                  </p>
                  <p class="card-text">
                    <div>
<span>{data.mrp}</span><br/>
<span>{data.discountedPrice}</span>
                    </div>
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card
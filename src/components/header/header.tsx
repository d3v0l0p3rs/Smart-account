import React from 'react'
import { useGetActivePathName } from 'components/index'
import 'template'

const HeaderComponent: React.FC = (): JSX.Element => {
  return (
    <div className="bradcam_area bradcam_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="bradcam_text">
              <h3>{useGetActivePathName()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeaderComponent }

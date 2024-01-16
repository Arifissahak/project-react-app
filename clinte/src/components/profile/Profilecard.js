import React from 'react'
import { Card } from 'antd';
import profile from "../../Assets/media.png";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png"
const { Meta } = Card;


const Profilecard = () => {
  return (
    <Card
    hoverable
    style={{
      width: 250,
      height:"60vh"
    }}
    cover={<img alt="example" src={profile} />}
  >
    <Meta title="Jhon deo" description={
          <div >
            <p>C E O</p>
            <p>
              <img src={facebook} style={{marginRight:"20px"}}/>
              <img src={instagram} style={{marginRight:"20px"}}/>
              <img src={facebook} style={{marginRight:"20px"}}/>
            </p>
            {/* Add more description content if needed */}
          </div>
        } />

  </Card>
  )
}

export default Profilecard

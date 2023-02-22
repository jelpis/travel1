import React from 'react';
import './main.css';
import img from '../../Assets/img1.jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  }

  // {
  //   id: 2,
  //   imgSrc: img2,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // },

  // {
  //   id: 3,
  //   imgSrc: img3,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // },
  // {
  //   id: 4,
  //   imgSrc: img4,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // },
  // {
  //   id: 5,
  //   imgSrc: img5,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // },
  // {
  //   id: 6,
  //   imgSrc: img6,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // },

  // {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // },
  // {
  //   id: 8,
  //   imgSrc: img8,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // },
  // {
  //   id: 9,
  //   imgSrc: img9,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius omnis reiciendis neque id, dolorem praesentium, quas ab, nemo amet explicabo voluptates ullam necessitatibus repudiandae distinctio quaerat quia dolorum asperiores.'
  // }
];

const Main = () => {
  return;
  <section className="main container section">
    <div className="secTitle">
      <h3 className="title">Most visited destinatins</h3>
    </div>

    <div className="secContent grid">
      {Data.map(
        ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle"></h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  </section>;
};

export default Main;

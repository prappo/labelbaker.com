import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';
import LayoutImage from '../images/select_template.gif';
import EditorImage from '../images/generate_template.gif';
import LabelsImage from '../images/export.gif';


function Iframe(props) {
  return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}


function Features() {

  const [tab, setTab] = useState(1);
  const [preview, setPreview] = useState(false);
  const tabs = useRef(null);

  const demoPreview = `<div style="position: relative; width: 100%; height: 515px;
  padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
  border-radius: 8px; will-change: transform;">
   <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
     src="https://share.labelbaker.com/template/53616c7465645f5fccb184d5b87f884d0d073cf9e0c87d7d945b8c37777f3d97ae685f580d6f0fb0aa8033c954091f549227d9def25e8caa3e1ff263d3ca767b" allowfullscreen="allowfullscreen" allow="fullscreen">
   </iframe>
 </div>`

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 pb-20 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Generate Image/PDF using Template</h1>

            <p className="text-xl text-gray-600">You can create a image content using predesigned template in secenods. <br></br> Or you can create your own template.</p>
          </div>

          <div className='flex justify-center w-full gap-10'>
            <button onClick={()=> setPreview(false)}>How to</button><button onClick={()=> setPreview(true)}>Live Preview</button>
          </div>


          {/* Section content */}
          {!preview &&
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 " data-aos="fade-right">

                {/* Tabs buttons */}
                <div className="my-8 md:mb-0">
                  <a
                    className={`flex gap-5 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                  >
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                      1
                    </div>

                    <div>
                      <div className="font-bold leading-snug  tracking-tight">Choose a Template</div>
                      <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                    </div>

                  </a>
                  <a
                    className={`flex gap-5 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(2); }}
                  >
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                      2
                    </div>
                    <div>
                      <div>
                        <div className="font-bold leading-snug tracking-tight">Modify the content</div>
                        <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                      </div>

                    </div>

                  </a>
                  <a
                    className={`flex items-center  gap-5 text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(3); }}
                  >
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                      3
                    </div>
                    <div>
                      <div className="font-bold leading-snug tracking-tight">Download</div>
                      <div className="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>

                    </div>

                  </a>
                </div>
              </div>

              {/* Tabs items */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 flex items-center justify-center md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
                <div className="relative flex flex-col text-center lg:text-right">
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="relative inline-flex flex-col">
                      <img className="md:max-w-none ring-1 w-full shadow-xl mx-auto rounded" src={LayoutImage} alt="Features bg" />

                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="relative inline-flex flex-col">
                      <img className="md:max-w-none ring-1 w-full shadow-xl mx-auto rounded" src={EditorImage} alt="Features bg" />

                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="relative inline-flex flex-col">
                      <img className="md:max-w-none w-full shadow-xl mx-auto rounded" src={LabelsImage} alt="Features bg" />

                    </div>
                  </Transition>
                </div>
              </div >

            </div >
          }


          {preview &&
            <Iframe iframe={demoPreview} />
          }


        </div >
      </div >
    </section >
  );
}

export default Features;

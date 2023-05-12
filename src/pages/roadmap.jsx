import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}


function Roadmap() {
  let previewCode = `<iframe src="https://app.loopedin.io/labelbaker" height="900" width="100%" frameborder="0"></iframe>`

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow py-20">
        <Iframe iframe={previewCode} />


      </main>

      <Footer />

    </div>
  );
}

export default Roadmap;
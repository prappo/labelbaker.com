import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

function ShareEditableTemplates(){
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-grow py-20 px-20">
                Share editable template
            </main>

            <Footer />
        </div>
    )
}

export default ShareEditableTemplates
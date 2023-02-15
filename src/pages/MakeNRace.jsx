import React from "react";
import Header from "../partials/Header";
import RacewarsSlider from "../partials/RacewarsSlider";

function MakeNRace(){
    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/* Conteudo vv */}
             {/*  Page content */}
            <main className="grow">
                <RacewarsSlider/>
            </main>
            
        </div>
    )
}

export default MakeNRace
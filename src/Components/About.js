import React from 'react'

const About = (props) => {
    return (
        <>
            
            <div className="container">
            <h2 style={{color : props.mode==='dark'? 'white' : '#000'}}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="card" style={{borderRadius:"15px", border:"1px solid #000"}}>
                    <div className="card-header py-1" id="headingOne" style={{ backgroundColor: "#fff", borderBottom: "none" }}>
                        <div className="btn btn-block text-left pl-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ fontSize: "20px" }}>
                            <strong>Fajal</strong> life style
                        </div>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body pt-0">
                            Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics (like red hair). Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.
                        </div>
                    </div>
                </div>
                <div className="card mt-1" style={{borderRadius:"15px", border:"1px solid #000"}}>
                    <div className="card-header py-1" id="headingTwo" style={{ backgroundColor: "#fff", borderBottom: "none" }}>
                        <h2 className="mb-0">
                            <div className="btn btn-block text-left collapsed pl-0" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ fontSize: "20px" }}>
                                <strong>Amir</strong> life style
                            </div>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body pt-0">
                            Mohammad Amir (Urdu: محمد عامر; born 13 April 1992) is a Pakistani cricketer who played for the Pakistan national cricket team between 2009 and 2020.
                            Amir made his first-class debut in November 2008, and his first One-Day International and Test appearances in July 2009 in Sri Lanka at the age of 17. He played his first international match during the 2009 ICC World Twenty20, where he played in every game, helping the national side win the tournament.
                        </div>
                    </div>
                </div>
                <div className="card mt-1" style={{borderRadius:"15px", border:"1px solid #000"}}>
                    <div className="card-header py-1" id="headingThree" style={{ backgroundColor: "#fff", borderBottom: "none" }}>
                        <div className="btn btn-block text-left collapsed pl-0" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ fontSize: "20px" }}>
                            <strong>Habibullah</strong> life style
                        </div>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body pt-0">
                            Habibullah was a relatively reform-minded ruler who attempted to modernize his country. During his reign he worked to bring modern medicine and other technology to Afghanistan. Many people who were forced into exile by his father were returned to Afghanistan by a general amnesty decreed by Habibullah. In 1903, Habibullah founded the Habibia school as well as a military academy. He also worked to put in place progressive reforms in his country. He instituted various legal reforms and repealed many of the harshest criminal penalties. But one of his chief advisers Abdul Lateef was sentenced to death in 1903 for apostasy. He was stoned to death in Kabul. Other reforms included the dismantling of the repressive internal intelligence organization that had been put in place by his father. Qala-e-Seraj in Mihtarlam was built by the Amir c. 1912–13 to spend his winters there.
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default About
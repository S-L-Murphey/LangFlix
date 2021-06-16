import "./About.css"

export const About = () => {

    return (
       <>
            <div className="about-section">
                <h1>About the Input Hypothesis</h1>
                <div>Information on the Input Hypothesis and Immersion Method</div>
            </div>

            
                
                    <div className="infos">
                        <div className="info">
                        <img src="data:image/jpeg;base64,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" alt="Stephen Krashen" />
                            <h2> Stephen Krashen PhD.</h2>
                            <div className="title">Founder of the Input Hypothesis</div>
                            <div>Stephen D. Krashen is professor emeritus at the University of Southern California, who moved from the linguistics department to the faculty of the School of Education in 1994. He is the founder of the Input Hypothesis of second-language acquistion.</div>
                            <div><button className="button">Wikipedia</button></div>
                        </div>
                    

            
               
                    <div className="info">
                    <img src="data:image/jpeg;base64,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" alt="Beniko Mason" />
                        <h2>Beniko Mason</h2>
                        <div className="title">Founder of Extensive Reading and Story-Listening</div>
                        <div>Beniko Mason, EdD, is professor emerita at Shitennoji University Junior College in Osaka, Japan. She first began her Extensive Reading (ER) program in 1984 at a vocational school in Osaka, Japan based on the Input (Reading) Hypothesis (Krashen, 1981, 1982, 1985).</div>
                        <p><button className="button">Wikipedia</button></p>
                    </div>
                
            
            
                
                    <div className="info">
                    <img src="data:image/jpeg;base64,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" alt="Matt vs. Japan" />
                        <h2>Matt vs. Japan</h2>
                        <div className="title">Founder of Refold.ia</div>
                        <div>Matt became fluent in Japanese within 3 years using immersion methods.He is now well recognized in the language community as one of the best second-language Japanese speakers on YouTube. He started Refold to show the path to language fluency, regardless of target language.</div>
                        <p><button className="button">Wikipedia</button></p>
                    </div>
                </div>
  </>
      
    )
}
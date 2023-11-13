import "../style/componentExample.css";

export default function ComponentExample() {
    return (
        <div className="welcome-text">

            <h1>This is a DevOps implementation of the pomodoro project.</h1>
            <h3>This site is deployed in preparation for future versions of a project.</h3>
            <br />

            <img src={require('../assets/seeYouLater.gif')} alt="See you later alligator" className="gif" />

        </div>
    );
}



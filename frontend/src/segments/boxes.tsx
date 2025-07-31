const Boxes = () => {
        return(
            <div className="boxes">
                {/* viewPort="0 0 100 20" viewBox="0 0 100 100" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  >
                <defs>
                    <pattern id="boxes" width="7.7%" height="100%" patternContentUnits="userSpaceOnUse">
                    <rect x=".25%" y=".25%" width="1.875%" height="89.26%" fill="#666"></rect>
                    <rect x=".18755%" y=".1875%" width="1.875%" height="88.26%" fill="#4949aa"></rect>
                    <rect x="0.6875%" y="26.49%" width=".75%" height="35.29%" fill="#666"></rect>
                    <rect x=".75%" y="26.49%" width=".75%" height="35.29%" fill="#fff"></rect>

                    <rect x="2.75%" y=".25%" width="1.875%" height="89.26%" fill="#666"></rect>
                    <rect x="2.6875%" y=".1875%" width="1.875%" height="88.26%" fill="#d1cc00"></rect>
                    <rect x="3.1875%" y="26.49%" width=".75%" height="35.29%" fill="#666"></rect>
                    <rect x="3.25%" y="26.49%" width=".75%" height="35.29%" fill="#fff"></rect>

                    <rect x="5.25%" y=".25%" width="1.875%" height="89.26%" fill="#666"></rect>
                    <rect x="5.1875%" y=".1875%" width="1.875%" height="88.26%" fill="#97cc00"></rect>
                    <rect x="5.6875%" y="26.49%" width=".75%" height="35.29%" fill="#666"></rect>
                    <rect x="5.75%" y="26.49%" width=".75%" height="35.29%" fill="#fff"></rect>
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url('#boxes')"></rect>
                </svg>
            </div>
        )
    }


export default Boxes;

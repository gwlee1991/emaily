module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>I'd like your input!</h3>
                    <p>Please answer the following questions:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3001">Yes</a>
                    </div>
                    <div>
                        <a href="http://localhost:3001">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}
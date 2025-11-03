const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

exports.handler = async (event, context) => {
    const { address, privateKey } = JSON.parse(event.body);

    try {
        await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
            owner: 'your-username',
            repo: 'your-repo-name',
            event_type: 'store-key',
            client_payload: { address, privateKey }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Key storage initiated' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
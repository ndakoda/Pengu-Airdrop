const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

exports.handler = async (event, context) => {
    const { data } = JSON.parse(event.body);

    try {
        await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
            owner: 'your-username',
            repo: 'your-repo-name',
            event_type: 'store-data',
            client_payload: { data }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data storage initiated' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};

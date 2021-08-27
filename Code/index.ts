import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { generateRandomCode } from '@whitep4nth3r/random-code';

const httpTrigger: AzureFunction = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const language = req.query.lang || (req.body && req.body.lang);
    const lines = req.query.lines || (req.body && req.body.lines);
    const myRandomCode = generateRandomCode(language, lines ?? parseInt(lines));

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: myRandomCode,
    };
};

export default httpTrigger;

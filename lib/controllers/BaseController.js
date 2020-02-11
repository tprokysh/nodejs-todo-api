export default class BaseController {
    async run(req, res, service) {
        try {
            const result = await this[service](req);

            res.header("Content-type", "application/json")
                .status(result.status)
                .json(result);
        } catch (err) {
            global.console.log(err);
        }
    }

    async runService(req, service) {
        this.result = await service.execute(req);

        return this.result;
    }
}

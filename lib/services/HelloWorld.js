/* eslint-disable class-methods-use-this */
export default class HelloWorld {
    async execute() {
        return {
            data: {
                message: "Hello world"
            },
            status: 200
        };
    }
}

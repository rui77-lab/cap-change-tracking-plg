
const cds = require('@sap/cds');

module.exports = async (opt) => {

    const servicePaths = cds.env.profiles.includes('production') ? ['*'] : ['./srv/v1/domain*'];
    opt.from = servicePaths;
    return await cds.server(opt);
}

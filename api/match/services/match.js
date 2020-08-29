'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */
const { sanitizeEntity } = require('strapi-utils');


module.exports = {
    async getMatchesByTeam(team) {
        const entities = strapi.services.match.find({team: team});
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.match }));
    },
};

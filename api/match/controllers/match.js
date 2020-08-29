'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async getMatchesForTeam(ctx) {
        const { team } = ctx.query;

        return await strapi.services.match.getMatchesByTeam(team);
    },
};

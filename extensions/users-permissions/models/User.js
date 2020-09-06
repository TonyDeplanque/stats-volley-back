module.exports = {
    /**
     * Triggered before user creation.
     */
    lifecycles: {
        async beforeCreate(data) {
            const role = await strapi
                .query('role', 'users-permissions')
                .findOne({ name: data.accountRule }, []);

            data.role = role.id;
        },
    },
};

function activity(parent, args, context, info) {
    const where = args.filter
        ? {
            OR: [
                { intensity_contains: args.filter },
                { time_contains: args.filter },
            ],
        }
        : {}

    return context.db.query.exercises({ where }, info)
}


module.exports = {
    activity
}
function newExerciseSubscribe (parent, args, context, info) {
    return context.db.subscription.exercise(
        { where: { mutation_in: ['CREATED'] } },
        info,
    )
}

const newExercise = {
    subscribe: newExerciseSubscribe
}

module.exports = {
    newExercise,
}
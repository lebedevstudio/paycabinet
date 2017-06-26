import _ from 'lodash'

export const current = state => {
    return state.current
}

export const course = state => {
    return _.assign(state.course, _.find(state.courses, state.current))
}

export const courses = state => {
    return state.courses.sort((a, b) => {
        return a['id'] < b['id']
    })
}

export const discount = state => {
    return state.discount
}

export const discounts = state => {
    return state.discounts
}

export const extras = state => {
    const filtered = _.orderBy(
        state.course.extras,
        state.extras.id
    )
    const iterated = _.forEach(_.map(state.extras, 'id'), (value) => {
        return value.id
    })
    const intersected = _.intersection(iterated, filtered)

    return _.filter(state.extras, _.flow(
        _.identity, _.property('id'),
        _.partial(_.includes, intersected)
    ))
}

export const total = state => {
    state.total.cost = state.course.cost
    return state.total
}

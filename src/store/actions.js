import _ from 'lodash'
import * as mutations from './mutation-types'

export const selectCourseById = ({commit, dispatch, state}, id) => {
    commit(mutations.SET_CURRENT_COURSE_ID, id)
}

export const assignDiscount = ({commit, state}) => {
    const filtered = _.pickBy(
        _.find(state.discounts, state.discount),
        state.course.discounts.id
    )
    const total = _.ceil(state.course.cost * ((100 - filtered.discount) / 100))

    if (_.includes(state.course.discounts, filtered.id)) {
        commit(mutations.SET_TOTAL_COST, total)
    }
}

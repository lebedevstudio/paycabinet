import * as types from './mutation-types'

export default {
    [types.SET_CURRENT_COURSE](state, course) {
        state.total.id = state.current.id
        state.total.cost = state.course.cost
        state.course = course
    },
    
    [types.SET_CURRENT_COURSE_ID](state, id) {
        state.current = id
    },

    [types.SET_TOTAL_COST](state, total) {
        state.total.cost = total
    }
}

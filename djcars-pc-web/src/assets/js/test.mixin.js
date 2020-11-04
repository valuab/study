/*
 * @Author: YJ
 * @Date: 2020-11-03 15:55:08
 * @
# Description: 
 */
const myMixin = {
    created() {
        this.hello()
    },
    methods: {
        hello(){
            console.log('你好 from mixin!')
        }
    },
}

export default myMixin